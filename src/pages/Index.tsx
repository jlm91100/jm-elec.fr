import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { SplineHero } from "@/components/SplineHero";
import { CTASection } from "@/components/CTASection";
import { PartnersSection } from "@/components/PartnersSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services, getServiceImage } from "@/content/services";
import { realisations } from "@/content/realisations";
import { zones } from "@/content/zones";
import { ensureEmbedSocialWidgets } from "@/lib/embedSocial";
import { ArrowRight, Shield, Zap, Clock, Award, MapPin } from "lucide-react";

const pillars = [
  { icon: Shield, label: "Assurance dÃ©cennale", detail: "Tous vos travaux sont garantis." },
  { icon: Zap, label: "Certification IRVE", detail: "Bornes de recharge conformes." },
  { icon: Clock, label: "10 ans d'expÃ©rience", detail: "Diagnostic rigoureux, exÃ©cution propre." },
  { icon: Award, label: "NFC 15-100", detail: "ConformitÃ© garantie." },
];

const processSteps = [
  { num: "01", title: "Vous nous contactez", detail: "Par tÃ©lÃ©phone ou formulaire. RÃ©ponse sous 24 h." },
  { num: "02", title: "Diagnostic sur site", detail: "Nous Ã©valuons votre installation et vos besoins." },
  { num: "03", title: "Devis dÃ©taillÃ©", detail: "Chiffrage transparent, ligne par ligne. Sans surprise." },
  { num: "04", title: "Intervention", detail: "Travaux propres, matÃ©riel de qualitÃ©, conformitÃ©." },
  { num: "05", title: "VÃ©rification & remise", detail: "Tests, attestation, nettoyage du chantier." },
];


export default function HomePage() {
  useEffect(() => {
    ensureEmbedSocialWidgets();
  }, []);
  const latestRealisations = realisations.slice(0, 3);
  const featuredZones = zones.slice(0, 8);

  return (
    <Layout>
      <SEOHead
        title="Électricien Essonne (91) | Dépannage, IRVE | JM-ELEC 91"
        description="Électricien IRVE en Essonne : dépannage, tableau électrique, mise en conformité et borne de recharge. Devis gratuit sous 24 h."
      />
      <JsonLd localBusiness />

      {/* Hero with Spline */}
      <SplineHero />

      {/* Trust pillars */}
      <section className="wide-container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cta/10 mb-4">
                <Icon className="h-6 w-6 text-cta" />
              </div>
              <p className="font-heading font-semibold text-base">{label}</p>
              <p className="text-sm text-muted-foreground mt-1">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key figures */}
      <section className="wide-container py-12">
        <div className="bg-cta/5 border border-cta/10 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "annÃ©es d'expÃ©rience" },
              { value: "500+", label: "interventions rÃ©alisÃ©es" },
              { value: "5â˜…", label: "note Google" },
              { value: "24h", label: "dÃ©lai de rÃ©ponse" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-cta">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider wide-container" />

      {/* Editorial SEO â€” Expertise */}
      <section className="wide-container py-20">
        <div className="max-w-3xl">
          <h2 className="mb-6">Votre Ã©lectricien de confiance en Essonne et ÃŽle-de-France</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              JM-ELEC 91 est une entreprise d'Ã©lectricitÃ© fondÃ©e il y a plus de 10 ans en Essonne. Notre activitÃ© repose sur trois piliers : le <Link to="/services/remplacement-tableau-electrique" className="text-cta hover:underline">remplacement de tableau Ã©lectrique</Link>, le <Link to="/services/depannage-electrique" className="text-cta hover:underline">dÃ©pannage</Link> et la <Link to="/services/mise-en-securite-conformite" className="text-cta hover:underline">mise en conformitÃ©</Link>. Ce sont les interventions que les particuliers nous demandent le plus â€” et celles oÃ¹ notre expÃ©rience fait la diffÃ©rence.
            </p>
            <p>
              Un tableau Ã  fusibles qui n'a pas Ã©tÃ© touchÃ© depuis 30 ans, un disjoncteur qui saute Ã  chaque utilisation du four, un diagnostic immobilier qui relÃ¨ve 6 anomalies : ce sont des situations concrÃ¨tes que nous rencontrons chaque semaine. Nous y rÃ©pondons avec un diagnostic honnÃªte, un devis dÃ©taillÃ© ligne par ligne, et des travaux rÃ©alisÃ©s dans les rÃ¨gles de l'art.
            </p>
            <p>
              Nous ne sommes pas une plateforme, pas un rÃ©seau national. Nous sommes une entreprise locale, basÃ©e en Essonne, qui connaÃ®t le parc immobilier de la rÃ©gion. Les pavillons des annÃ©es 70-80 de <Link to="/zones/bretigny-sur-orge" className="text-cta hover:underline">BrÃ©tigny-sur-Orge</Link> et <Link to="/zones/saint-michel-sur-orge" className="text-cta hover:underline">Saint-Michel-sur-Orge</Link>, les immeubles du centre de <Link to="/zones/corbeil-essonnes" className="text-cta hover:underline">Corbeil-Essonnes</Link>, les maisons de <Link to="/zones/gif-sur-yvette" className="text-cta hover:underline">Gif-sur-Yvette</Link> â€” nous les connaissons et nous savons quoi y trouver.
            </p>
            <p>
              Notre engagement : un travail propre, du matÃ©riel de marque (Schneider, Legrand, Hager), une attestation de conformitÃ© systÃ©matique, et un chantier nettoyÃ© Ã  la fin de chaque intervention. Pas de sous-traitance, pas de surprise sur la facture.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider wide-container" />

      {/* Services */}
      <section className="wide-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-3">Nos interventions</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Chaque service repose sur un processus rigoureux, des matÃ©riaux de qualitÃ© et une traÃ§abilitÃ© complÃ¨te.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              to={`/services/${svc.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-cta/40 transition-all hover:shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={getServiceImage(svc.slug)}
                  alt={svc.shortTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-2xl mb-3 block">{svc.icon}</span>
                <h3 className="text-lg mb-2 group-hover:text-cta transition-colors">{svc.shortTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{svc.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-cta font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="section-divider wide-container" />

      {/* Process */}
      <section className="wide-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-3">Notre mÃ©thode</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Un processus clair et structurÃ©, de votre premier appel Ã  la remise de l'attestation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="text-center">
              <span className="inline-block font-heading text-3xl font-bold text-cta mb-3">{step.num}</span>
              <h4 className="text-sm font-semibold mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider wide-container" />

      {/* Realisations */}
      <section className="wide-container py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="mb-2">RÃ©alisations rÃ©centes</h2>
            <p className="text-sm text-muted-foreground">Exemples concrets de nos interventions.</p>
          </div>
          <Link to="/realisations" className="hidden md:inline-flex">
            <Button variant="outline" size="sm">
              Tout voir <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestRealisations.map((r) => {
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
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-2">{r.date} Â· {r.city}</p>
                  <h4 className="text-base mb-2 group-hover:text-cta transition-colors">{r.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 md:hidden">
          <Link to="/realisations">
            <Button variant="outline" size="sm" className="w-full">
              Toutes les rÃ©alisations <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </section>

      <div className="section-divider wide-container" />

      {/* Testimonials â€” EmbedSocial Widget */}
      <section className="wide-container py-20">
        <div className="text-center mb-8">
          <h2 className="mb-3">Ce que disent nos clients</h2>
          <p className="text-sm text-muted-foreground">
            Retours authentiques de nos clients.{" "}
            <a href="https://share.google/1Y4GECfYkv4uzzoBR" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline">
              Voir sur Google
            </a>
          </p>
        </div>
        <div
          className="embedsocial-hashtag min-h-[220px]"
          data-ref="1653ac9d2f797da158f82b9a3cb3a82a625a4d39"
        />
      </section>

      <div className="section-divider wide-container" />

      {/* Zones */}
      <section className="wide-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-3">Zones d'intervention</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Nous intervenons en Essonne, Hauts-de-Seine et Yvelines.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {featuredZones.map((z) => (
            <Link
              key={z.slug}
              to={`/zones/${z.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors"
            >
              <MapPin className="h-3 w-3" />
              {z.city}
            </Link>
          ))}
          <Link
            to="/zones"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cta bg-cta/5 text-sm text-cta font-medium hover:bg-cta/10 transition-colors"
          >
            Toutes les zones <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Partners & Brands */}
      <PartnersSection />

      <div className="section-divider wide-container" />

      {/* Editorial SEO â€” Engagement */}
      <section className="wide-container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Pourquoi faire appel Ã  un Ã©lectricien professionnel ?</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              L'Ã©lectricitÃ© n'est pas un domaine oÃ¹ l'improvisation a sa place. Une installation mal rÃ©alisÃ©e peut entraÃ®ner des risques graves : incendie, Ã©lectrocution, dommages aux Ã©quipements. En France, les installations Ã©lectriques dÃ©faillantes sont Ã  l'origine de plus de 50 000 incendies domestiques par an.
            </p>
            <p>
              Faire appel Ã  un Ã©lectricien professionnel, c'est s'assurer que les travaux respectent la norme NFC 15-100 en vigueur, que le matÃ©riel utilisÃ© est de qualitÃ©, et que l'installation est sÃ©curisÃ©e pour les annÃ©es Ã  venir. C'est aussi bÃ©nÃ©ficier d'une assurance dÃ©cennale qui couvre les travaux en cas de problÃ¨me.
            </p>
            <p>
              Chez JM-ELEC 91, nous ne faisons pas de travaux inutiles. Si votre installation est saine, nous vous le dirons. Si des travaux sont nÃ©cessaires, nous vous expliquerons pourquoi et nous vous proposerons un devis transparent. C'est cette honnÃªtetÃ© qui fait la confiance de nos clients â€” et qui explique que la majoritÃ© de nos nouveaux clients viennent par recommandation.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="wide-container">
        <CTASection />
      </div>
    </Layout>
  );
}




