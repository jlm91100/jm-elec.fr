import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout>
      <SEOHead
        title="Politique de confidentialite - JM-ELEC 91"
        description="Politique de confidentialite du site jm-elec.fr."
        noindex
      />
      <div className="content-container pt-28 md:pt-32 pb-16">
        <Breadcrumbs items={[{ label: "Politique de confidentialite" }]} />
        <h1>Politique de confidentialite</h1>

        <div className="text-sm text-muted-foreground space-y-8 mt-8 max-w-2xl leading-relaxed">
          <section>
            <h2 className="text-foreground mb-2">Responsable du traitement</h2>
            <p>JM-ELEC 91, SIRET 91817287500018.</p>
            <p>Contact : contact@jm-elec.fr</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Donnees collectees</h2>
            <p>Via le formulaire de contact / devis :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Numero de telephone</li>
              <li>Ville / code postal</li>
              <li>Message decrivant votre besoin</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Finalite du traitement</h2>
            <p>
              Les donnees sont collectees uniquement pour repondre a votre demande de devis ou de contact et vous
              recontacter.
            </p>
            <p className="mt-2">Aucune donnee n'est vendue, cedee ou utilisee a des fins commerciales tierces.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Base legale</h2>
            <p>Interet legitime (repondre a une demande de devis initiee par l'utilisateur).</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Duree de conservation</h2>
            <p>Les donnees sont conservees pendant une duree maximale de 3 ans apres le dernier contact.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Vos droits</h2>
            <p>
              Conformement au RGPD, vous pouvez exercer vos droits d'acces, de rectification, de suppression et de
              portabilite en ecrivant a contact@jm-elec.fr.
            </p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Cookies</h2>
            <p>
              Ce site utilise des cookies techniques essentiels et, avec votre consentement, un outil de mesure
              d'audience (Google Analytics). Voir notre{" "}
              <a href="/cookies" className="text-cta hover:underline">
                page dediee aux cookies
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
