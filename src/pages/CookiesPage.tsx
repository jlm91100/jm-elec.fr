import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "jm-cookie-consent";
const CONSENT_EVENT = "jm-cookie-consent-updated";

type ConsentValue = "accepted" | "refused" | "unknown";

function getConsentValue(): ConsentValue {
  if (typeof window === "undefined") return "unknown";
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "refused") return value;
  return "unknown";
}

export default function CookiesPage() {
  const [consent, setConsent] = useState<ConsentValue>(() => getConsentValue());

  const setConsentValue = (value: "accepted" | "refused") => {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { value } }));
    setConsent(value);
  };

  return (
    <Layout>
      <SEOHead
        title="Gestion des cookies - JM-ELEC 91"
        description="Informations sur l'utilisation des cookies sur jm-elec.fr."
        noindex
      />
      <div className="content-container pt-28 md:pt-32 pb-16">
        <Breadcrumbs items={[{ label: "Gestion des cookies" }]} />
        <h1>Gestion des cookies</h1>

        <div className="text-sm text-muted-foreground space-y-8 mt-8 max-w-2xl leading-relaxed">
          <section>
            <h2 className="text-foreground mb-2">Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Cookies utilisés</h2>
            <p>Ce site utilise les cookies suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>jm-cookie-consent</strong> : mémorise votre choix d'acceptation/refus. Durée : 1 an.
              </li>
              <li>
                <strong>_ga / _ga_*</strong> (Google Analytics) : mesure d'audience anonyme, uniquement si vous
                acceptez.
              </li>
            </ul>
            <p className="mt-2">Aucun cookie publicitaire n'est déposé sans consentement.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Gérer vos préférences</h2>
            <p className="mb-3">
              Statut actuel :{" "}
              <strong className="text-foreground">
                {consent === "accepted" ? "Mesure d'audience acceptée" : consent === "refused" ? "Mesure d'audience refusée" : "Aucun choix enregistré"}
              </strong>
            </p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="cta" size="sm" onClick={() => setConsentValue("accepted")}>
                Accepter la mesure d'audience
              </Button>
              <Button type="button" variant="outline" size="sm" onClick={() => setConsentValue("refused")}>
                Refuser
              </Button>
            </div>
            <p>
              Vous pouvez aussi supprimer les cookies via les paramètres de votre navigateur. Le bandeau de consentement
              réapparaîtra lors de votre prochaine visite.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
