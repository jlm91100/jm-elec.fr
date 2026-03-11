import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileStickyCTA() {
  return (
    <div className="sticky-cta-bar" role="complementary" aria-label="Actions rapides">
      <a
        href="tel:0767973848"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 font-medium text-sm bg-sidebar text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
      >
        <Phone className="h-4 w-4" />
        Appeler
      </a>
      <Link
        to="/contact"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 font-medium text-sm bg-cta text-cta-foreground transition-colors hover:bg-cta/90"
      >
        <FileText className="h-4 w-4" />
        Devis gratuit
      </Link>
    </div>
  );
}