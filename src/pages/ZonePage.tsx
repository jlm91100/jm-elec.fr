import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { getZone, zones } from "@/content/zones";
import { services } from "@/content/services";
import { realisations } from "@/content/realisations";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import NotFound from "./NotFound";

export default function ZonePage() {
  const { slug } = useParams<{ slug: string }>();
  const zone = slug ? getZone(slug) : undefined;

  if (!zone) return <NotFound />;

  const relatedServices = services.filter((s) => zone.relatedServices.includes(s.slug));
  const localRealisations = realisations.filter((r) => r.zoneSlug === zone.slug).slice(0, 3);
  const nearbyZones = zones
    .filter((z) => z.department === zone.department && z.slug !== zone.slug)
    .slice(0, 6);

  return (
    <Layout>
      <SEOHead title={zone.seoTitle} description={zone.seoDescription} />
      <JsonLd
        localBusiness
        breadcrumbs={[
          { name: "Accueil", url: "https://jm-elec.fr/" },
          { name: "Zones", url: "https://jm-elec.fr/zones/" },
          { name: zone.city, url: `https://jm-elec.fr/zones/${zone.slug}/` },
        ]}
        faqItems={zone.faq}
      />

      <div className="content-container pt-28 md:pt-32">
        <Breadcrumbs items={[
          { label: "Zones", to: "/zones" },
          { label: zone.city },
        ]} />

        <p className="text-sm text-cta font-semibold mb-3 uppercase tracking-wider">{zone.heroSubtitle}</p>
        <h1>{zone.title}</h1>
        <p className="text-base text-muted-foreground mt-4 max-w-2xl leading-relaxed">{zone.description}</p>

        {/* Context — expanded */}
        <section className="py-16">
          <h2 className="mb-4">Le secteur de {zone.city}</h2>
          <div className="prose prose-sm max-w-3xl text-muted-foreground leading-relaxed space-y-4">
            {zone.context.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Editorial */}
        {zone.editorial && (
          <>
            <section className="py-16">
              <h2 className="mb-6">Votre électricien à {zone.city}</h2>
              <div className="prose prose-sm max-w-3xl text-muted-foreground leading-relaxed space-y-4">
                {zone.editorial.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
            <div className="section-divider" />
          </>
        )}

        {/* Services highlight */}
        <section className="py-16">
          <h2 className="mb-6">Nos interventions à {zone.city}</h2>
          <ul className="space-y-3">
            {zone.servicesHighlight.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle className="h-5 w-5 text-cta flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Linked services with cards */}
        <section className="py-8">
          <h3 className="mb-4">Tous nos services à {zone.city}</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
            Découvrez l'ensemble de nos prestations disponibles à {zone.city} et dans les communes voisines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s) => (
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

        {/* Local realisations */}
        {localRealisations.length > 0 && (
          <section className="py-16">
            <h2 className="mb-6">Réalisations à {zone.city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {localRealisations.map((r) => (
                <Link key={r.slug} to={`/realisations/${r.slug}`} className="group bg-card border border-border rounded-xl p-5 hover:border-cta/40 transition-all hover:shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">{r.date}</p>
                  <h4 className="text-sm group-hover:text-cta transition-colors">{r.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.description}</p>
                  <Link to={`/services/${r.serviceSlug}`} className="inline-block mt-2 text-xs text-cta hover:underline">{r.service}</Link>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Local info */}
        <section className="py-8">
          <h3 className="mb-4">Informations pratiques — {zone.city}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{zone.localInfo}</p>
        </section>

        <div className="section-divider" />

        {/* Nearby zones */}
        {nearbyZones.length > 0 && (
          <section className="py-12">
            <h3 className="mb-4">Nous intervenons aussi à proximité de {zone.city}</h3>
            <div className="flex flex-wrap gap-2">
              {nearbyZones.map((z) => (
                <Link
                  key={z.slug}
                  to={`/zones/${z.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors"
                >
                  <MapPin className="h-3 w-3" />
                  {z.city}
                </Link>
              ))}
            </div>
          </section>
        )}

        <FAQSection items={zone.faq} />
        <CTASection />
      </div>
    </Layout>
  );
}
