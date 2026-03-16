import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileStickyCTA() {
  return (
    <div className="sticky-cta-bar" role="complementary" aria-label="Actions rapides">
      <div className="mx-3 grid grid-cols-2 gap-2 pointer-events-auto">
        <a
          href="tel:0767973848"
          className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm bg-sidebar/90 text-sidebar-foreground ring-1 ring-inset ring-cta/60 backdrop-blur-md shadow-md transition-colors hover:bg-sidebar-accent"
        >
          <Phone className="h-4 w-4 text-cta" />
          Appeler
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm bg-cta/95 text-cta-foreground backdrop-blur-md shadow-md transition-colors hover:bg-cta"
        >
          <FileText className="h-4 w-4" />
          Devis gratuit
        </Link>
      </div>
    </div>
  );
}
