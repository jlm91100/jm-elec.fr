import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logoSrc from "@/assets/logo-jm-elec.png";
import { services } from "@/content/services";
import { zones } from "@/content/zones";

const topZones = zones.filter((z) => z.isPremium || ["bretigny-sur-orge", "corbeil-essonnes", "versailles", "boulogne-billancourt", "saint-cloud", "sceaux"].includes(z.slug)).slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-16 pb-24 md:pb-16 mt-16">
      <div className="wide-container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6">
          {/* Company */}
          <div className="col-span-2 md:col-span-2">
            <img src={logoSrc} alt="JM-ELEC 91" className="h-10 w-auto mb-4" />
            <p className="text-sm text-sidebar-foreground/60 leading-relaxed">
              Électricien professionnel en Essonne et Île-de-France.
              <br />10 ans d'expérience · Assurance décennale · Certifié IRVE
            </p>
            <ul className="mt-4 space-y-2 text-sm text-sidebar-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cta flex-shrink-0" />
                <a href="tel:0767973848" className="hover:text-cta transition-colors">07 67 97 38 48</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cta flex-shrink-0" />
                <a href="mailto:contact@jm-elec.fr" className="hover:text-cta transition-colors">contact@jm-elec.fr</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-sidebar-foreground mb-3">Services</h4>
            <ul className="space-y-1.5 text-xs">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sidebar-foreground/60 hover:text-cta transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-sidebar-foreground mb-3">Zones</h4>
            <ul className="space-y-1.5 text-xs">
              {topZones.map((z) => (
                <li key={z.slug}>
                  <Link to={`/zones/${z.slug}`} className="text-sidebar-foreground/60 hover:text-cta transition-colors">
                    {z.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/zones" className="text-cta hover:underline font-medium">
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-sidebar-foreground mb-3">Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { to: "/", label: "Accueil" },
                { to: "/realisations", label: "Réalisations" },
                { to: "/avis", label: "Avis clients" },
                { to: "/blog", label: "Blog" },
                { to: "/tarifs", label: "Tarifs" },
                { to: "/faq", label: "FAQ" },
                { to: "/a-propos", label: "À propos" },
                { to: "/contact", label: "Contact & Devis" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sidebar-foreground/60 hover:text-cta transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-sidebar-foreground mb-3">Légal</h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { to: "/mentions-legales", label: "Mentions légales" },
                { to: "/politique-de-confidentialite", label: "Confidentialité" },
                { to: "/cookies", label: "Cookies" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sidebar-foreground/60 hover:text-sidebar-foreground/80 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-[10px] text-sidebar-foreground/30 space-y-0.5">
              <p>JM-ELEC 91 — EI</p>
              <p>SIRET : 91817287500018</p>
              <p>© {new Date().getFullYear()} JM-ELEC 91</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}