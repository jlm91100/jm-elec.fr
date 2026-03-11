import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function MentionsLegalesPage() {
  return (
    <Layout>
      <SEOHead title="Mentions légales — JM-ELEC 91" description="Mentions légales du site jm-elec.fr." noindex />
      <div className="content-container pt-28 md:pt-32 pb-16">
        <Breadcrumbs items={[{ label: "Mentions légales" }]} />
        <h1>Mentions légales</h1>

        <div className="text-sm text-muted-foreground space-y-8 mt-8 max-w-2xl leading-relaxed">
          <section>
            <h2 className="text-foreground mb-2">Éditeur du site</h2>
            <p>Raison sociale : JM-ELEC 91</p>
            <p>Forme juridique : Entreprise Individuelle (EI)</p>
            <p>SIRET : 91817287500018</p>
            <p>Téléphone : 07 67 97 38 48</p>
            <p>Email : contact@jm-elec.fr</p>
            <p>Directeur de la publication : JM-ELEC 91</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Lovable (lovable.dev).</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de JM-ELEC 91. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Responsabilité</h2>
            <p>Les informations fournies sur ce site le sont à titre indicatif. JM-ELEC 91 ne saurait être tenu responsable des erreurs ou omissions.</p>
          </section>

          <section>
            <h2 className="text-foreground mb-2">Données personnelles</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Consultez notre <a href="/politique-de-confidentialite" className="text-cta hover:underline">politique de confidentialité</a>.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}