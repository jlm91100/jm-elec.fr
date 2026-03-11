import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, Wrench, MapPin, Phone, ArrowRight } from "lucide-react";

const suggestions = [
  { icon: Home, label: "Accueil", to: "/", desc: "Retourner à la page principale" },
  { icon: Wrench, label: "Nos services", to: "/services", desc: "Découvrir nos interventions" },
  { icon: MapPin, label: "Zones d'intervention", to: "/zones", desc: "Trouver votre ville" },
  { icon: Phone, label: "Contact & Devis", to: "/contact", desc: "Demander un devis gratuit" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead title="Page introuvable — JM-ELEC 91" description="La page que vous recherchez n'existe pas. Retrouvez nos services d'électricien en Essonne." />
      <div className="flex min-h-[60vh] items-center justify-center pt-[72px] pb-20">
        <div className="wide-container">
          <div className="text-center mb-12">
            <span className="text-8xl md:text-9xl font-heading font-bold text-cta/20">404</span>
            <h1 className="text-2xl md:text-3xl font-heading font-bold mt-4 mb-3">Page introuvable</h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              La page <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{location.pathname}</code> n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {suggestions.map(({ icon: Icon, label, to, desc }) => (
              <Link
                key={to}
                to={to}
                className="group flex flex-col items-center text-center p-5 rounded-xl border border-border bg-card hover:border-cta/40 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center mb-3 group-hover:bg-cta/20 transition-colors">
                  <Icon className="h-5 w-5 text-cta" />
                </div>
                <span className="text-sm font-semibold group-hover:text-cta transition-colors">{label}</span>
                <span className="text-[11px] text-muted-foreground mt-1">{desc}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="cta" size="lg">
                Retour à l'accueil <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
