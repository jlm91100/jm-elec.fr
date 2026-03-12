import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Shield, Zap, Clock, Award } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const trustItems = [
  { icon: Shield, label: "Assurance décennale" },
  { icon: Zap, label: "Certifié IRVE" },
  { icon: Clock, label: "10 ans d'expérience" },
  { icon: Award, label: "NFC 15-100" },
];

interface SplineHeroProps {
  sceneUrl?: string;
}

export function SplineHero({
  sceneUrl = "https://prod.spline.design/Vwkzn13tZWqxoZxw/scene.splinecode",
}: SplineHeroProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const showSpline = shouldLoad && !prefersReducedMotion && !hasError;

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-sidebar"
    >
      {/* Spline - full screen background */}
      <div className="absolute inset-0">
        {showSpline ? (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-sm text-sidebar-foreground/40 animate-pulse">
                  Chargement...
                </div>
              </div>
            }
          >
            <Spline
              scene={sceneUrl}
              onError={() => setHasError(true)}
              style={{ width: "100%", height: "100%" }}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-sidebar" />
        )}
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-sidebar/90 via-sidebar/50 to-transparent pointer-events-none" />

      {/* Text & CTA - vertically centered, left side */}
      <div className="relative z-10 flex items-center min-h-screen pt-[72px]">
        <div className="w-full px-4 sm:px-6 md:pl-16 lg:pl-24 pb-16">
          <div className="max-w-lg mx-auto md:mx-0">
            <p className="text-xs md:text-sm text-cta font-semibold mb-3 tracking-wider uppercase text-center md:text-left">
              Électricien professionnel en Essonne & Île-de-France
            </p>
            <h1 className="text-sidebar-foreground text-3xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left">
              L'électricité de votre bâtiment,
              <span className="text-cta"> traitée avec rigueur.</span>
            </h1>
            <p className="text-sm md:text-base text-sidebar-foreground/60 mt-4 leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
              Remplacement de tableau, dépannage, mise en conformité, borne IRVE. Réponse sous 24 h.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-2 sm:gap-3 mt-8 items-center justify-center md:justify-start w-full max-w-md mx-auto md:mx-0">
              <Link to="/contact" className="shrink-0">
                <Button
                  variant="cta"
                  size="lg"
                  className="h-10 px-4 text-sm sm:h-12 sm:px-8 sm:text-base"
                >
                  <FileText className="h-4 w-4" />
                  Devis gratuit
                </Button>
              </Link>
              <a href="tel:0767973848" className="shrink-0">
                <Button
                  variant="ctaOutline"
                  size="lg"
                  className="h-10 px-4 text-[13px] sm:h-12 sm:px-8 sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  07 67 97 38 48
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 justify-center md:justify-start">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sidebar-foreground/50">
                  <Icon className="h-4 w-4 text-cta" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
