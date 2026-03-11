const EMBED_SOCIAL_SCRIPT_ID = "EmbedSocialHashtagScript";
const EMBED_SOCIAL_SCRIPT_SRC = "https://embedsocial.com/cdn/ht.js";

type EmbedSocialApi = {
  getEmbedData?: (albumRef: string, albumDiv: HTMLElement) => void;
};

declare global {
  interface Window {
    EMBEDSOCIALHASHTAG?: EmbedSocialApi;
  }
}

function initEmbedSocialWidgets() {
  const api = window.EMBEDSOCIALHASHTAG;
  if (!api?.getEmbedData) return;

  const containers = Array.from(
    document.getElementsByClassName("embedsocial-hashtag")
  ) as HTMLElement[];

  containers.forEach((container) => {
    const albumRef = container.getAttribute("data-ref");
    if (!albumRef) return;
    api.getEmbedData?.(albumRef, container);
  });
}

export function ensureEmbedSocialWidgets() {
  if (typeof window === "undefined") return;

  const runInit = () => {
    window.requestAnimationFrame(() => {
      initEmbedSocialWidgets();
    });
  };

  if (window.EMBEDSOCIALHASHTAG?.getEmbedData) {
    runInit();
    return;
  }

  const existing = document.getElementById(
    EMBED_SOCIAL_SCRIPT_ID
  ) as HTMLScriptElement | null;

  if (existing) {
    existing.addEventListener("load", runInit, { once: true });
    window.setTimeout(runInit, 800);
    return;
  }

  const js = document.createElement("script");
  js.id = EMBED_SOCIAL_SCRIPT_ID;
  js.src = EMBED_SOCIAL_SCRIPT_SRC;
  js.async = true;
  js.onload = runInit;
  document.head.appendChild(js);
}
