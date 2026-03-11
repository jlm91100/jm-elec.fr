import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Un projet électrique ?",
  subtitle = "Décrivez votre besoin — réponse sous 24 h, devis gratuit et sans engagement.",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="bg-sidebar text-sidebar-foreground rounded-2xl p-8 md:p-14 text-center">
        <h2 className="text-sidebar-foreground mb-4">{title}</h2>
        <p className="text-sm text-sidebar-foreground/60 max-w-md mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/contact">
            <Button variant="cta" size="lg">
              <FileText className="h-4 w-4" />
              Demander un devis
            </Button>
          </Link>
          <a href="tel:0767973848">
            <Button variant="ctaOutline" size="lg" className="border-cta text-cta hover:bg-cta hover:text-cta-foreground">
              <Phone className="h-4 w-4" />
              07 67 97 38 48
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}