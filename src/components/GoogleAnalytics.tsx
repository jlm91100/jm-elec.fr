import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GA_SCRIPT_ID = "GoogleAnalyticsScript";
const CONSENT_KEY = "jm-cookie-consent";
const CONSENT_EVENT = "jm-cookie-consent-updated";
const DEFAULT_MEASUREMENT_ID = "G-FR4KW56P1J";
const DEFAULT_GOOGLE_ADS_ID = "AW-16619605105";

const initializedTagIds = new Set<string>();
let consentDefaultInitialized = false;
let gtagBootstrapped = false;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function hasAnalyticsConsent() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

function ensureGtagQueue() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
  }
}

function ensureGtagInitialized(
  measurementId: string,
  googleAdsId: string,
  consentGranted: boolean,
) {
  ensureGtagQueue();
  const consentState = consentGranted ? "granted" : "denied";

  if (!consentDefaultInitialized) {
    window.gtag?.("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    consentDefaultInitialized = true;
  }

  window.gtag?.("consent", "update", {
    ad_storage: consentState,
    ad_user_data: consentState,
    ad_personalization: consentState,
    analytics_storage: consentState,
  });

  if (!gtagBootstrapped) {
    window.gtag?.("js", new Date());
    gtagBootstrapped = true;
  }

  if (measurementId && !initializedTagIds.has(measurementId)) {
    window.gtag?.("config", measurementId, {
      anonymize_ip: true,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    initializedTagIds.add(measurementId);
  }

  if (googleAdsId && !initializedTagIds.has(googleAdsId)) {
    window.gtag?.("config", googleAdsId);
    initializedTagIds.add(googleAdsId);
  }
}

export function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const measurementId =
    (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() ||
    DEFAULT_MEASUREMENT_ID;
  const googleAdsId =
    (import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined)?.trim() ||
    DEFAULT_GOOGLE_ADS_ID;
  const [consentGranted, setConsentGranted] = useState(() =>
    typeof window !== "undefined" ? hasAnalyticsConsent() : false
  );

  useEffect(() => {
    const syncConsent = () => {
      setConsentGranted(hasAnalyticsConsent());
    };

    window.addEventListener("storage", syncConsent);
    window.addEventListener(CONSENT_EVENT, syncConsent as EventListener);
    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(CONSENT_EVENT, syncConsent as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!measurementId && !googleAdsId) return;

    // Build the gtag queue before loading the script.
    ensureGtagInitialized(measurementId, googleAdsId, consentGranted);

    const existing = document.getElementById(GA_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) return;

    const scriptTagId = googleAdsId || measurementId;
    if (!scriptTagId) return;

    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${scriptTagId}`;
    document.head.appendChild(script);
  }, [measurementId, googleAdsId, consentGranted]);

  useEffect(() => {
    if (!measurementId || !consentGranted) return;

    ensureGtagQueue();

    window.gtag?.("event", "page_view", {
      send_to: measurementId,
      page_path: `${pathname}${search}`,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [measurementId, consentGranted, pathname, search]);

  return null;
}
