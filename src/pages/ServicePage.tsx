import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { getService, services } from "@/content/services";
import { zones } from "@/content/zones";
import { realisations } from "@/content/realisations";
import { CheckCircle, ArrowRight, MapPin, Lightbulb } from "lucide-react";
import NotFound from "./NotFound";

const complementaryMap: Record<string, string[]> = {
  "remplacement-tableau-electrique": ["mise-en-securite-conformite", "renovation-electrique", "depannage-electrique"],
  "depannage-electrique": ["remplacement-tableau-electrique", "mise-en-securite-conformite"],
  "mise-en-securite-conformite": ["remplacement-tableau-electrique", "renovation-electrique"],
  "renovation-electrique": ["remplacement-tableau-electrique", "eclairage-interieur-exterieur", "domotique-residentielle"],
  "borne-recharge-irve": ["remplacement-tableau-electrique", "pac-alimentation-electrique"],
  "eclairage-interieur-exterieur": ["renovation-electrique", "domotique-residentielle"],
  "interphonie-controle-acces": ["alarme", "video-surveillance"],
  "domotique-residentielle": ["eclairage-interieur-exterieur", "alarme"],
  "alarme": ["video-surveillance", "interphonie-controle-acces"],
  "video-surveillance": ["alarme", "interphonie-controle-acces"],
  "pac-alimentation-electrique": ["remplacement-tableau-electrique", "borne-recharge-irve"],
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <NotFound />;

  const relatedZones = zones.filter((z) => service.relatedZones.includes(z.slug));
  const zonesLinkingHere = zones.filter(
    (z) => z.relatedServices.includes(service.slug) && !service.relatedZones.includes(z.slug)
  );
  const allZones = [...relatedZones, ...zonesLinkingHere].slice(0, 10);
  const relatedRealisations = realisations.filter((r) => r.serviceSlug === service.slug).slice(0, 3);
  const complementarySlugs = complementaryMap[service.slug] || [];
  const complementaryServices = complementarySlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean) as typeof services;

  return (
    <Layout>
      <SEOHead title={service.seoTitle} description={service.seoDescription} />
      <JsonLd
        breadcrumbs={[
          { name: "Accueil", url: "https://jm-elec.fr/" },
          { name: "Services", url: "https://jm-elec.fr/services/" },
          { name: service.title, url: `https://jm-elec.fr/services/${service.slug}/` },
        ]}
        faqItems={service.faq}
      />

      <div className="content-container pt-28 md:pt-32">
        <Breadcrumbs items={[
          { label: "Services", to: "/services" },
          { label: service.title },
        ]} />

        {/* Hero with image */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-start">
          <div className="min-w-0 xl:pr-4">
            <p className="text-sm text-cta font-semibold mb-3 uppercase tracking-wider">
              {service.heroSubtitle}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight break-words">
              {service.title}
            </h1>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="w-full max-w-xl xl:max-w-none justify-self-center xl:justify-self-stretch rounded-2xl overflow-hidden border border-border shadow-md">
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-[4/3] object-cover object-center"
              loading="eager"
            />
          </div>
        </div>

        {/* Editorial long text */}
        {service.editorial && (
          <section className="py-16">
            <h2 className="mb-6">Comprendre le sujet</h2>
            <div className="prose prose-sm max-w-3xl text-muted-foreground leading-relaxed space-y-4">
              {service.editorial.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        <div className="section-divider" />

        {/* Problems */}
        <section className="py-16">
          <h2 className="mb-6">Les problèmes que nous résolvons</h2>
          <ul className="space-y-4">
            {service.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="text-cta font-heading font-bold text-lg mt-[-2px]">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        <div className="section-divider" />

        {/* Solution */}
        <section className="py-16">
          <h2 className="mb-4">Notre réponse</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{service.solution}</p>
        </section>

        {/* Why us */}
        {service.whyUs && (
          <section className="py-12 bg-cta/5 border border-cta/10 rounded-2xl px-8 mb-8">
            <h3 className="mb-4">Pourquoi choisir JM-ELEC 91 ?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{service.whyUs}</p>
          </section>
        )}

        {/* Process */}
        <section className="py-16">
          <h2 className="mb-8">Le processus, étape par étape</h2>
          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-heading font-bold text-xl text-cta w-10 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base mb-1">{step.step}</h3>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Tips */}
        {service.tips && service.tips.length > 0 && (
          <section className="py-16">
            <h2 className="mb-6 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-cta" />
              Conseils pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <span className="text-cta font-heading font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="section-divider" />

        {/* Proofs */}
        <section className="py-16">
          <h2 className="mb-6">Garanties et engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.proofs.map((proof, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-cta flex-shrink-0" />
                <span className="text-sm">{proof}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related realisations */}
        {relatedRealisations.length > 0 && (
          <section className="py-16">
            <h2 className="mb-6">Réalisations — {service.shortTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedRealisations.map((r) => (
                <Link key={r.slug} to={`/realisations/${r.slug}`} className="group bg-card border border-border rounded-xl p-5 hover:border-cta/40 transition-all hover:shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">{r.date} · {r.city}</p>
                  <h4 className="text-sm group-hover:text-cta transition-colors">{r.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/realisations" className="inline-flex items-center gap-1 text-sm text-cta hover:underline font-medium">
                Toutes nos réalisations <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </section>
        )}

        {/* Zones */}
        {allZones.length > 0 && (
          <section className="py-12">
            <h3 className="mb-4">{service.shortTitle} — Zones d'intervention</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
              Nous intervenons pour des prestations de {service.shortTitle.toLowerCase()} dans les communes suivantes. Chaque page présente nos interventions locales et notre connaissance du secteur.
            </p>
            <div className="flex flex-wrap gap-2">
              {allZones.map((z) => (
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cta/30 bg-cta/5 text-sm text-cta font-medium hover:bg-cta/10 transition-colors"
              >
                Toutes les zones <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </section>
        )}

        <div className="section-divider" />

        {/* Complementary services */}
        {complementaryServices.length > 0 && (
          <section className="py-12">
            <h3 className="mb-4">Services complémentaires</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
              Ces services sont souvent demandés en complément de la prestation {service.shortTitle.toLowerCase()}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {complementaryServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-cta/40 transition-all hover:shadow-md"
                >
                  <span className="text-lg">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium group-hover:text-cta transition-colors">{s.shortTitle}</span>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{s.description}</p>
                  </div>
                  <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-cta transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <FAQSection items={service.faq} />
        <CTASection />
      </div>
    </Layout>
  );
}
