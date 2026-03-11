import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const [state, setState] = useState<"visible" | "hidden">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("jm-cookie-consent") ? "hidden" : "visible";
    }
    return "visible";
  });

  const accept = () => {
    localStorage.setItem("jm-cookie-consent", "accepted");
    setState("hidden");
  };

  const refuse = () => {
    localStorage.setItem("jm-cookie-consent", "refused");
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
        Ce site utilise uniquement des cookies essentiels. Aucun traceur publicitaire n'est déposé sans consentement.
      </p>
      <div className="flex gap-2">
        <Button variant="cta" size="sm" onClick={accept}>Accepter</Button>
        <Button variant="outline" size="sm" onClick={refuse}>Refuser</Button>
      </div>
      <a href="/cookies" className="block mt-2 text-xs text-muted-foreground hover:text-cta transition-colors">
        En savoir plus
      </a>
    </div>
  );
}