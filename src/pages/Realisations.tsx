import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { realisations } from "@/content/realisations";
import { getServiceImage } from "@/content/services";
import { Link } from "react-router-dom";

export default function RealisationsPage() {
  return (
    <Layout>
      <SEOHead
        title="Réalisations — JM-ELEC 91 | Exemples d'interventions électriques"
        description="Découvrez nos réalisations : remplacement de tableau, dépannage, mise en conformité, borne IRVE, domotique, alarme. Exemples concrets avec contexte, défi et résultat."
      />
      <div className="wide-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "Réalisations" }]} />

        <div className="max-w-3xl">
          <h1>Nos réalisations</h1>
          <p className="text-base text-muted-foreground mt-4 mb-6 leading-relaxed">
            Chaque fiche présente le contexte, le défi, la solution et le résultat. Pas de mise en scène — les faits. Ces exemples illustrent notre savoir-faire sur des chantiers réels, réalisés pour des particuliers et des professionnels en Essonne et en Île-de-France.
          </p>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            Du remplacement d'un tableau à fusibles dans un pavillon des années 80 à l'installation d'un système domotique complet dans une maison de 180 m², nos réalisations couvrent l'ensemble de nos domaines d'intervention. Chaque projet est documenté pour que vous puissiez juger de la qualité de notre travail avant de nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {realisations.map((r) => {
            const img = r.image || getServiceImage(r.serviceSlug);
            return (
              <Link
                key={r.slug}
                to={`/realisations/${r.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-cta/40 transition-all hover:shadow-lg"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={img}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                    {r.city && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-xs text-cta font-medium">{r.city}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-base mb-2 group-hover:text-cta transition-colors">{r.title}</h2>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                  <p className="text-xs text-cta mt-3 font-medium">{r.service}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Editorial SEO */}
        <section className="py-16 max-w-3xl">
          <h2 className="mb-6">Des interventions documentées et vérifiables</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Nous publions nos réalisations pour une raison simple : la transparence. Chaque fiche décrit un chantier réel, avec son contexte, ses contraintes et la solution que nous avons apportée. Pas de photos retouchées, pas de descriptions embellies — les faits, tels qu'ils sont.
            </p>
            <p>
              Ces exemples vous donnent une idée concrète de notre savoir-faire. Un <Link to="/services/remplacement-tableau-electrique" className="text-cta hover:underline">remplacement de tableau</Link> dans un pavillon des années 80, un <Link to="/services/depannage-electrique" className="text-cta hover:underline">dépannage d'urgence</Link> pour un commerce, une <Link to="/services/mise-en-securite-conformite" className="text-cta hover:underline">mise en sécurité</Link> avant vente — ce sont des situations que nous rencontrons chaque semaine.
            </p>
            <p>
              Vous avez un projet similaire ? <Link to="/contact" className="text-cta hover:underline">Contactez-nous</Link> pour un devis gratuit. Nous vous expliquerons comment nous aborderions votre situation spécifique.
            </p>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
