import fs from "node:fs/promises";
import { spawn } from "node:child_process";
import process from "node:process";
import { chromium } from "playwright";

const PREVIEW_PORT = Number(process.env.PREVIEW_PORT || 4173);
const PREVIEW_URL = `http://127.0.0.1:${PREVIEW_PORT}`;
const SITEMAP_PATH = "public/sitemap.xml";
const REPORT_PATH = "prelaunch-report.json";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 90_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status >= 200 && res.status < 500) return;
    } catch {
      // server not ready yet
    }
    await sleep(1_000);
  }
  throw new Error("Preview server did not start in time");
}

function parseSitemapPaths(xmlText) {
  const re = /<loc>https:\/\/jm-elec\.fr([^<]*)<\/loc>/g;
  const paths = [];
  let m;
  while ((m = re.exec(xmlText)) !== null) {
    const path = m[1] || "/";
    paths.push(path.startsWith("/") ? path : `/${path}`);
  }
  return Array.from(new Set(paths));
}

function startPreview() {
  return spawn(
    "cmd",
    ["/c", `npm run preview -- --host 127.0.0.1 --port ${PREVIEW_PORT}`],
    {
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
    }
  );
}

async function run() {
  const xml = await fs.readFile(SITEMAP_PATH, "utf8");
  const paths = parseSitemapPaths(xml);
  const preview = startPreview();

  const previewLogs = [];
  preview.stdout.on("data", (d) => previewLogs.push(`[preview] ${d.toString().trimEnd()}`));
  preview.stderr.on("data", (d) => previewLogs.push(`[preview-err] ${d.toString().trimEnd()}`));

  const report = {
    checkedAt: new Date().toISOString(),
    totalPaths: paths.length,
    pageResults: [],
    pageErrors: [],
    requestFailures: [],
    sameOrigin4xx5xx: [],
    notFoundOnSitemapPath: [],
    externalWarnings: [],
    formTest: { ok: false, details: "" },
    previewLogs,
  };

  let browser;
  try {
    await waitForServer(PREVIEW_URL);
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on("pageerror", (err) => {
      report.pageErrors.push(err.message);
    });
    page.on("requestfailed", (req) => {
      const failure = req.failure()?.errorText || "Unknown error";
      const url = req.url();
      if (failure.includes("ERR_ABORTED")) return;
      report.requestFailures.push({ url, failure });
      if (!url.startsWith(PREVIEW_URL)) {
        report.externalWarnings.push({ url, failure });
      }
    });
    page.on("response", (res) => {
      const url = res.url();
      const status = res.status();
      if (url.startsWith(PREVIEW_URL) && status >= 400) {
        report.sameOrigin4xx5xx.push({ url, status });
      }
    });

    for (const path of paths) {
      const url = `${PREVIEW_URL}${path}`;
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
      await page.waitForTimeout(400);

      const isNotFound = await page
        .locator("text=Page introuvable")
        .first()
        .isVisible()
        .catch(() => false);
      if (isNotFound) {
        report.notFoundOnSitemapPath.push(path);
      }

      report.pageResults.push({
        path,
        status: response?.status() ?? null,
        notFound: isNotFound,
        title: await page.title(),
      });
    }

    // Contact form behavior test (mocked network call to avoid real email send)
    let mockSubmitCalls = 0;
    await page.route("**/formsubmit.co/ajax/**", async (route) => {
      mockSubmitCalls += 1;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "POST, OPTIONS",
          "access-control-allow-headers": "content-type, accept",
        },
        body: JSON.stringify({ success: "true" }),
      });
    });

    try {
      await page.goto(`${PREVIEW_URL}/contact`, { waitUntil: "domcontentloaded", timeout: 60_000 });
      await page.waitForTimeout(3_200);

      await page.locator("input[type='text']:visible").first().fill("Test Prelaunch");
      await page.locator("input[type='email']:visible").first().fill("test@example.com");
      await page.locator("input[type='tel']:visible").first().fill("0767973848");
      await page.locator("textarea:visible").first().fill("Test automatise avant mise en ligne.");

      await Promise.all([
        page
          .waitForRequest((req) => req.url().includes("formsubmit.co/ajax/"), { timeout: 10_000 })
          .catch(() => null),
        page.click("button[type='submit']"),
      ]);

      const successVisible = await page
        .getByText(/Demande envoy/i)
        .first()
        .isVisible({ timeout: 8_000 })
        .catch(() => false);

      report.formTest =
        successVisible && mockSubmitCalls > 0
          ? { ok: true, details: "Soumission validée (mock réseau)" }
          : {
              ok: false,
              details: `Soumission non confirmée (successVisible=${successVisible}, mockSubmitCalls=${mockSubmitCalls})`,
            };
    } catch (err) {
      report.formTest = {
        ok: false,
        details: `Erreur pendant le test formulaire: ${err instanceof Error ? err.message : String(err)}`,
      };
    }

    await context.close();
  } finally {
    if (browser) await browser.close();
    preview.kill("SIGTERM");
    await sleep(1_000);
    if (!preview.killed) preview.kill("SIGKILL");
  }

  await fs.writeFile(REPORT_PATH, JSON.stringify(report, null, 2), "utf8");

  const blockingCount =
    report.notFoundOnSitemapPath.length +
    report.sameOrigin4xx5xx.length +
    report.pageErrors.length +
    (report.formTest.ok ? 0 : 1);

  console.log(
    JSON.stringify(
      {
        reportPath: REPORT_PATH,
        totalPaths: report.totalPaths,
        blockingCount,
        notFoundOnSitemapPath: report.notFoundOnSitemapPath.length,
        sameOrigin4xx5xx: report.sameOrigin4xx5xx.length,
        pageErrors: report.pageErrors.length,
        formOk: report.formTest.ok,
      },
      null,
      2
    )
  );

  process.exit(blockingCount > 0 ? 1 : 0);
}

run().catch(async (err) => {
  console.error(err);
  process.exit(1);
});
