import { Link, useLocation } from "react-router-dom";
import { Home, Wrench, MapPin, Camera, MessageSquare, User, Phone, BookOpen, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Accueil" },
  { to: "/services", icon: Wrench, label: "Services" },
  { to: "/zones", icon: MapPin, label: "Zones" },
  { to: "/realisations", icon: Camera, label: "Réalisations" },
  { to: "/blog", icon: BookOpen, label: "Blog" },
  { to: "/tarifs", icon: Euro, label: "Tarifs" },
  { to: "/avis", icon: MessageSquare, label: "Avis" },
  { to: "/a-propos", icon: User, label: "À propos" },
];

export function DesktopNav() {
  const location = useLocation();

  return (
    <nav
      className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-20 flex-col items-center justify-between bg-sidebar py-6"
      aria-label="Navigation principale"
    >
      {/* Logo */}
      <Link to="/" className="flex flex-col items-center gap-1" aria-label="JM-ELEC 91 — Accueil">
        <span className="font-heading text-lg font-bold text-sidebar-foreground">JM</span>
        <span className="text-[10px] font-mono text-sidebar-foreground/60">ELEC</span>
      </Link>

      {/* Nav links */}
      <ul className="flex flex-col gap-1 w-full px-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
          return (
            <li key={to}>
              <Link
                to={to}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-md py-2 px-1 text-[10px] font-mono transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-cta"
                    : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <div className="flex flex-col gap-2 w-full px-2">
        <Link to="/contact">
          <Button variant="cta" size="sm" className="w-full text-[10px]">
            Devis
          </Button>
        </Link>
        <a href="tel:0767973848" className="flex items-center justify-center gap-1 text-[10px] text-sidebar-foreground/60 hover:text-cta transition-colors">
          <Phone className="h-3 w-3" />
        </a>
      </div>
    </nav>
  );
}
