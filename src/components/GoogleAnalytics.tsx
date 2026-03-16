import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GA_SCRIPT_ID = "GoogleAnalyticsScript";
const CONSENT_KEY = "jm-cookie-consent";
const CONSENT_EVENT = "jm-cookie-consent-updated";
const DEFAULT_MEASUREMENT_ID = "G-FR4KW56P1J";

const initializedMeasurementIds = new Set<string>();
let consentDefaultInitialized = false;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function hasAnalyticsConsent() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

function ensureGtagInitialized(measurementId: string, consentGranted: boolean) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  if (!consentDefaultInitialized) {
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    consentDefaultInitialized = true;
  }

  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: consentGranted ? "granted" : "denied",
  });

  if (initializedMeasurementIds.has(measurementId)) return;

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  initializedMeasurementIds.add(measurementId);
}

export function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const measurementId =
    (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() ||
    DEFAULT_MEASUREMENT_ID;
  const [isReady, setIsReady] = useState(false);
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
    if (!measurementId) return;

    if (!consentGranted) {
      if (window.gtag) {
        ensureGtagInitialized(measurementId, false);
      }
      setIsReady(false);
      return;
    }

    const onReady = () => {
      ensureGtagInitialized(measurementId, true);
      setIsReady(true);
    };

    const existing = document.getElementById(GA_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      onReady();
      return;
    }

    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onload = onReady;
    document.head.appendChild(script);
  }, [measurementId, consentGranted]);

  useEffect(() => {
    if (!measurementId || !consentGranted || !isReady || !window.gtag) return;

    window.gtag("event", "page_view", {
      send_to: measurementId,
      page_path: `${pathname}${search}`,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [measurementId, consentGranted, isReady, pathname, search]);

  return null;
}
