import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Wrench, MapPin, Camera, MessageSquare, User, Phone, FileText, BookOpen, Euro } from "lucide-react";
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
  { to: "/contact", icon: FileText, label: "Contact / Devis" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="md:hidden">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-sidebar px-4 h-14">
        <Link to="/" className="flex items-center gap-2" aria-label="JM-ELEC 91 — Accueil">
          <span className="font-heading text-lg font-bold text-sidebar-foreground">JM</span>
          <span className="text-xs font-mono text-sidebar-foreground/60">ELEC</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="text-sidebar-foreground p-2"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Spacer */}
      <div className="h-14" />

      {/* Menu overlay */}
      {open && (
        <div className="fixed inset-0 top-14 z-40 bg-sidebar/98 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <nav className="flex flex-col p-6 gap-1" aria-label="Navigation principale">
            {navItems.map(({ to, icon: Icon, label }) => {
              const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-4 py-3 font-mono text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-cta"
                      : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              );
            })}

            <div className="mt-6 flex items-center gap-3 px-4 text-sidebar-foreground/50 font-mono text-xs">
              <Phone className="h-4 w-4" />
              <a href="tel:0767973848" className="hover:text-cta transition-colors">07 67 97 38 48</a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
