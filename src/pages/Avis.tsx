import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { ensureEmbedSocialWidgets } from "@/lib/embedSocial";
import { Star, CheckCircle } from "lucide-react";

export default function AvisPage() {
  useEffect(() => {
    ensureEmbedSocialWidgets();
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Avis clients — JM-ELEC 91 | Retours authentiques Google"
        description="Avis clients JM-ELEC 91 : retours authentiques depuis Google. Découvrez ce que nos clients disent de nos interventions électriques en Essonne et Île-de-France."
      />
      <div className="wide-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "Avis clients" }]} />

        <div className="max-w-3xl">
          <h1>Avis clients</h1>
          <p className="text-base text-muted-foreground mt-4 mb-4 leading-relaxed">
            La confiance se construit sur des faits. Voici les retours de nos clients, directement depuis notre{" "}
            <a href="https://share.google/LXQprFtKu8Yuk2ZEp" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline font-medium">
              fiche Google Business
            </a>. Aucun filtre, aucune sélection — tous les avis sont affichés.
          </p>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            La majorité de nos nouveaux clients viennent par recommandation. C'est la meilleure preuve que notre travail parle pour nous. Si vous avez fait appel à nos services, n'hésitez pas à laisser votre avis sur Google — cela nous aide à nous faire connaître.
          </p>
        </div>

        {/* Points forts résumés */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Star, label: "Note Google", value: "5 / 5" },
            { icon: CheckCircle, label: "Clients satisfaits", value: "100 %" },
            { icon: Star, label: "Recommandation", value: "Bouche-à-oreille" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-xl p-5 text-center">
              <item.icon className="h-6 w-6 text-cta mx-auto mb-2" />
              <p className="text-lg font-heading font-bold">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* EmbedSocial Google Reviews Widget */}
        <div className="mb-12">
          <div
            className="embedsocial-hashtag min-h-[220px]"
            data-ref="1653ac9d2f797da158f82b9a3cb3a82a625a4d39"
          />
        </div>

        {/* Ce que nos clients apprécient */}
        <section className="py-12 max-w-3xl">
          <h2 className="mb-6">Ce que nos clients apprécient</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              En lisant nos avis, plusieurs thèmes reviennent régulièrement. La <strong className="text-foreground">réactivité</strong> d'abord : nos clients apprécient d'obtenir un rendez-vous rapidement et de ne pas attendre des semaines pour un devis. La <strong className="text-foreground">transparence</strong> ensuite : le devis détaillé, sans surprise, est systématiquement mentionné. La <strong className="text-foreground">propreté du chantier</strong> enfin : nous laissons les lieux dans l'état où nous les avons trouvés.
            </p>
            <p>
              Ces retours nous confortent dans notre approche. Nous ne cherchons pas à multiplier les interventions inutiles — nous cherchons à bien faire notre travail et à mériter la confiance de chaque client.
            </p>
          </div>
        </section>

        {/* Maillage */}
        <section className="py-8">
          <h3 className="mb-4">Découvrez nos interventions</h3>
          <div className="flex flex-wrap gap-2">
            <Link to="/realisations" className="inline-flex px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Nos réalisations</Link>
            <Link to="/services" className="inline-flex px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Nos services</Link>
            <Link to="/contact" className="inline-flex px-4 py-2 rounded-full border border-cta bg-cta/5 text-sm text-cta font-medium hover:bg-cta/10 transition-colors">Demander un devis →</Link>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
