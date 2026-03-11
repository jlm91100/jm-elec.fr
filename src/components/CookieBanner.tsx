import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "jm-cookie-consent";
const CONSENT_EVENT = "jm-cookie-consent-updated";

export function CookieBanner() {
  const [state, setState] = useState<"visible" | "hidden">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(CONSENT_KEY) ? "hidden" : "visible";
    }
    return "visible";
  });

  const notifyConsentChange = (value: "accepted" | "refused") => {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { value } }));
  };

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    notifyConsentChange("accepted");
    setState("hidden");
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, "refused");
    notifyConsentChange("refused");
    setState("hidden");
  };

  if (state === "hidden") return null;

  return (
    <div
      className={cn(
        "fixed bottom-16 md:bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50",
        "bg-card border border-border rounded-xl shadow-xl p-5 animate-slide-up"
      )}
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Ce site utilise des cookies essentiels et, avec votre accord, des cookies de mesure d'audience.
      </p>
      <div className="flex gap-2">
        <Button variant="cta" size="sm" onClick={accept}>
          Accepter
        </Button>
        <Button variant="outline" size="sm" onClick={refuse}>
          Refuser
        </Button>
      </div>
      <a href="/cookies" className="block mt-2 text-xs text-muted-foreground hover:text-cta transition-colors">
        En savoir plus
      </a>
    </div>
  );
}
