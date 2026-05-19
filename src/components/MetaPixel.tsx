import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const META_PIXEL_SCRIPT_ID = "MetaPixelScript";
const META_PIXEL_SCRIPT_SRC = "https://connect.facebook.net/en_US/fbevents.js";
const CONSENT_KEY = "jm-cookie-consent";
const CONSENT_EVENT = "jm-cookie-consent-updated";

type FbqLike = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  push?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
  queue?: unknown[][];
};

declare global {
  interface Window {
    fbq?: FbqLike;
    _fbq?: FbqLike;
  }
}

let initializedPixelId: string | null = null;

function hasTrackingConsent() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

function ensureFbqQueue() {
  if (window.fbq) return;

  const fbq = ((...args: unknown[]) => {
    const instance = fbq as FbqLike;
    if (instance.callMethod) {
      instance.callMethod(...args);
      return;
    }
    instance.queue = instance.queue || [];
    instance.queue.push(args);
  }) as FbqLike;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  window.fbq = fbq;
  window._fbq = fbq;
}

function ensurePixelScript() {
  if (document.getElementById(META_PIXEL_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = META_PIXEL_SCRIPT_ID;
  script.async = true;
  script.src = META_PIXEL_SCRIPT_SRC;
  document.head.appendChild(script);
}

export function MetaPixel() {
  const { pathname, search } = useLocation();
  const pixelId = (import.meta.env.VITE_META_PIXEL_ID as string | undefined)?.trim();
  const [consentGranted, setConsentGranted] = useState(() =>
    typeof window !== "undefined" ? hasTrackingConsent() : false,
  );

  useEffect(() => {
    const syncConsent = () => {
      setConsentGranted(hasTrackingConsent());
    };

    window.addEventListener("storage", syncConsent);
    window.addEventListener(CONSENT_EVENT, syncConsent as EventListener);
    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener(CONSENT_EVENT, syncConsent as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!pixelId || !consentGranted) return;

    ensureFbqQueue();
    ensurePixelScript();

    if (initializedPixelId !== pixelId) {
      window.fbq?.("init", pixelId);
      initializedPixelId = pixelId;
    }
  }, [consentGranted, pixelId]);

  useEffect(() => {
    if (!pixelId || !consentGranted) return;
    window.fbq?.("track", "PageView");
  }, [consentGranted, pathname, pixelId, search]);

  return null;
}

