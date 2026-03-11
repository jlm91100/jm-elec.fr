import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CookiesPage() {
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
            <p>Un cookie est un petit fichier texte stocke sur votre appareil lorsque vous visitez un site web.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Cookies utilises</h2>
            <p>Ce site utilise les cookies suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>jm-cookie-consent</strong> : memorise votre choix d'acceptation/refus. Duree : 1 an.
              </li>
              <li>
                <strong>_ga / _ga_*</strong> (Google Analytics) : mesure d'audience anonyme, uniquement si vous
                acceptez.
              </li>
            </ul>
            <p className="mt-2">Aucun cookie publicitaire n'est depose sans consentement.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Gerer vos preferences</h2>
            <p>
              Vous pouvez supprimer les cookies via les parametres de votre navigateur. Le bandeau de consentement
              reapparaitra lors de votre prochaine visite.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
