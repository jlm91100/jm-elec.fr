import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout>
      <SEOHead title="Politique de confidentialité — JM-ELEC 91" description="Politique de confidentialité du site jm-elec.fr." noindex />
      <div className="content-container pt-28 md:pt-32 pb-16">
        <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />
        <h1>Politique de confidentialité</h1>

        <div className="text-sm text-muted-foreground space-y-8 mt-8 max-w-2xl leading-relaxed">
          <section>
            <h2 className="text-foreground mb-2">Responsable du traitement</h2>
            <p>JM-ELEC 91, SIRET 91817287500018.</p>
            <p>Contact : contact@jm-elec.fr</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Données collectées</h2>
            <p>Via le formulaire de contact / devis :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Ville / code postal</li>
              <li>Message décrivant votre besoin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Finalité du traitement</h2>
            <p>Les données sont collectées uniquement pour répondre à votre demande de devis ou de contact et vous recontacter.</p>
            <p className="mt-2">Aucune donnée n'est vendue, cédée ou utilisée à des fins commerciales tierces.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Base légale</h2>
            <p>Intérêt légitime (répondre à une demande de devis initiée par l'utilisateur).</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Durée de conservation</h2>
            <p>Les données sont conservées pendant une durée maximale de 3 ans après le dernier contact.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Vos droits</h2>
            <p>Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification, de suppression et de portabilité en écrivant à contact@jm-elec.fr.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Cookies</h2>
            <p>Ce site n'utilise aucun cookie de tracking ou publicitaire. Voir notre <a href="/cookies" className="text-cta hover:underline">page dédiée aux cookies</a>.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}