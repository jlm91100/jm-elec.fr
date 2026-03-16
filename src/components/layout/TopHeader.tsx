import { useState, useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoSrc from "@/assets/logo-jm-elec.png";
import logoDarkSrc from "@/assets/logo-jm-elec-dark.png";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/zones", label: "Zones" },
  { to: "/blog", label: "Blog" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/avis", label: "Avis" },
  { to: "/a-propos", label: "À propos" },
];

export function TopHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const getScrollTop = () =>
      Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0
      );

    const handleScroll = () => {
      // iOS can report non-zero values around toolbar transitions;
      // keep a low threshold so the header returns to "top" state reliably.
      setScrolled(getScrollTop() > 8);
    };

    const vv = window.visualViewport;
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    vv?.addEventListener("scroll", handleScroll);
    vv?.addEventListener("resize", handleScroll);

    handleScroll();
    const rafId = window.requestAnimationFrame(handleScroll);
    const timeout0 = window.setTimeout(handleScroll, 0);
    const timeout120 = window.setTimeout(handleScroll, 120);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      vv?.removeEventListener("scroll", handleScroll);
      vv?.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeout0);
      window.clearTimeout(timeout120);
    };
  }, [location.pathname, mobileOpen]);

  // On home page: transparent header that becomes white on scroll
  // On other pages: always white
  const isTransparent = isHome && !scrolled && !mobileOpen;
  const chromeColor = isTransparent ? "#181D25" : "#FFFFFF";

  useLayoutEffect(() => {
    const applyChrome = () => {
      const head = document.head;
      // Keep only one theme-color meta (Safari can behave oddly with multiples).
      const mediaThemeMetas = head.querySelectorAll('meta[name="theme-color"][media]');
      mediaThemeMetas.forEach((meta) => meta.remove());

      let themeMeta = head.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
      if (!themeMeta) {
        themeMeta = document.createElement("meta");
        themeMeta.setAttribute("name", "theme-color");
        head.appendChild(themeMeta);
      }
      themeMeta.removeAttribute("media");

      // iOS Safari sometimes ignores same-step updates; force a tiny intermediate change first.
      const intermediateColor = chromeColor === "#FFFFFF" ? "#FEFEFE" : "#171C24";
      themeMeta.setAttribute("content", intermediateColor);
      themeMeta.getAttribute("content");
      themeMeta.setAttribute("content", chromeColor);

      // Safari may derive UI chrome from document background.
      document.documentElement.style.backgroundColor = chromeColor;
      document.body.style.backgroundColor = chromeColor;
    };

    applyChrome();
    const rafId = window.requestAnimationFrame(applyChrome);
    const timeoutId = window.setTimeout(applyChrome, 140);
    const timeoutId2 = window.setTimeout(applyChrome, 320);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.clearTimeout(timeoutId2);
    };
  }, [chromeColor, location.pathname, scrolled, mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]",
        isTransparent
          ? "bg-transparent"
          : "bg-card backdrop-blur-md shadow-sm border-b border-border"
      )}
    >
      {/* iOS safe-area top strip (heure/batterie) */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-0 h-[env(safe-area-inset-top)]",
          isTransparent ? "bg-sidebar" : "bg-card"
        )}
        aria-hidden="true"
      />
      <div className="wide-container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="JM-ELEC 91 — Accueil">
          <img
            src={isTransparent ? logoSrc : logoDarkSrc}
            alt="JM-ELEC 91"
            className="h-10 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {navItems.map(({ to, label }) => {
            const isActive = location.pathname === to || location.pathname.startsWith(to + "/");
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "text-cta"
                    : isTransparent
                    ? "text-primary-foreground/80 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0767973848"
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium transition-colors",
              isTransparent
                ? "text-primary-foreground/80 hover:text-cta"
                : "text-muted-foreground hover:text-cta"
            )}
          >
            <Phone className="h-4 w-4" />
            <span>07 67 97 38 48</span>
          </a>
          <Link to="/contact">
            <Button variant="cta" size="sm">
              Devis gratuit
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            isTransparent ? "text-primary-foreground" : "text-foreground"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-1" aria-label="Navigation principale">
            {navItems.map(({ to, label }) => {
              const isActive = location.pathname === to || location.pathname.startsWith(to + "/");
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-muted text-cta"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-cta" />
              <a href="tel:0767973848" className="font-medium">07 67 97 38 48</a>
            </div>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2">
              <Button variant="cta" size="default" className="w-full">
                Devis gratuit
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
