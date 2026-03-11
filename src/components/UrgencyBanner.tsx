import { Phone, Zap } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="bg-cta text-cta-foreground">
      <div className="wide-container flex items-center justify-center gap-3 py-2 text-xs sm:text-sm font-medium">
        <Zap className="h-4 w-4 flex-shrink-0" />
        <span>Urgence électrique ? Intervention rapide 7j/7</span>
        <a
          href="tel:0767973848"
          className="flex items-center gap-1.5 font-bold hover:underline ml-2"
        >
          <Phone className="h-3.5 w-3.5" />
          07 67 97 38 48
        </a>
      </div>
    </div>
  );
}
