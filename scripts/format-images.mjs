import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const jobs = [
  {
    label: "services-16-9",
    dir: "public/images",
    width: 1600,
    height: 900,
    matches: (name) => /-16-9\.(webp|jpe?g|png)$/i.test(name),
  },
  {
    label: "services-4-3",
    dir: "public/images",
    width: 1600,
    height: 1200,
    matches: (name) => /-4-3\.(webp|jpe?g|png)$/i.test(name),
  },
  {
    label: "realisations-16-9",
    dir: "public/images/realisations",
    width: 1600,
    height: 900,
    matches: (name) => /\.(webp|jpe?g|png)$/i.test(name) && !/-21-9\.(webp|jpe?g|png)$/i.test(name),
  },
  {
    label: "realisations-21-9",
    dir: "public/images/realisations",
    width: 2100,
    height: 900,
    matches: (name) => /-21-9\.(webp|jpe?g|png)$/i.test(name),
  },
];

const bytesToKb = (value) => Math.round(value / 1024);

const encodeByExtension = (image, ext) => {
  if (ext === ".webp") {
    return image.webp({ quality: 80, effort: 5 });
  }
  if (ext === ".jpg" || ext === ".jpeg") {
    return image.jpeg({ quality: 78, mozjpeg: true, progressive: true });
  }
  if (ext === ".png") {
    return image.png({ compressionLevel: 9, palette: true, quality: 80 });
  }
  return image;
};

const listJobFiles = async (job) => {
  const fullDir = path.resolve(job.dir);
  try {
    const entries = await fs.readdir(fullDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && job.matches(entry.name))
      .map((entry) => path.join(fullDir, entry.name))
      .sort((a, b) => a.localeCompare(b));
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

const formatFile = async (filePath, job) => {
  const ext = path.extname(filePath).toLowerCase();
  const sourceStat = await fs.stat(filePath);
  const sourceBuffer = await fs.readFile(filePath);

  const base = sharp(sourceBuffer).rotate().resize({
    width: job.width,
    height: job.height,
    fit: "cover",
    position: "attention",
    withoutEnlargement: true,
  });

  const outputBuffer = await encodeByExtension(base, ext).toBuffer();
  await fs.writeFile(filePath, outputBuffer);

  return {
    file: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
    before: sourceStat.size,
    after: outputBuffer.byteLength,
  };
};

const run = async () => {
  const results = [];

  for (const job of jobs) {
    const files = await listJobFiles(job);
    for (const file of files) {
      const out = await formatFile(file, job);
      results.push({ job: job.label, ...out });
    }
  }

  if (results.length === 0) {
    console.log("Aucune image a traiter.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const item of results) {
    totalBefore += item.before;
    totalAfter += item.after;
    const diff = bytesToKb(item.after - item.before);
    const sign = diff > 0 ? "+" : "";
    console.log(`[${item.job}] ${item.file}: ${bytesToKb(item.before)}KB -> ${bytesToKb(item.after)}KB (${sign}${diff}KB)`);
  }

  const saved = bytesToKb(totalBefore - totalAfter);
  console.log(`Total: ${bytesToKb(totalBefore)}KB -> ${bytesToKb(totalAfter)}KB (gain ${saved}KB)`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
