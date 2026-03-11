import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { getRealisation, realisations } from "@/content/realisations";
import { getService, getServiceImage } from "@/content/services";
import { getZone } from "@/content/zones";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import NotFound from "./NotFound";

export default function RealisationPage() {
  const { slug } = useParams<{ slug: string }>();
  const r = slug ? getRealisation(slug) : undefined;

  if (!r) return <NotFound />;

  const service = getService(r.serviceSlug);
  const zone = r.zoneSlug ? getZone(r.zoneSlug) : undefined;

  // Related realisations: same service first, then same zone, excluding current
  const relatedRealisations = realisations
    .filter((other) => other.slug !== r.slug)
    .sort((a, b) => {
      const aScore = (a.serviceSlug === r.serviceSlug ? 2 : 0) + (a.zoneSlug === r.zoneSlug ? 1 : 0);
      const bScore = (b.serviceSlug === r.serviceSlug ? 2 : 0) + (b.zoneSlug === r.zoneSlug ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, 3);

  return (
    <Layout>
      <SEOHead title={r.seoTitle} description={r.seoDescription} />
      <JsonLd
        breadcrumbs={[
          { name: "Accueil", url: "https://jm-elec.fr/" },
          { name: "Réalisations", url: "https://jm-elec.fr/realisations/" },
          { name: r.title, url: `https://jm-elec.fr/realisations/${r.slug}/` },
        ]}
      />

      <div className="content-container pt-28 md:pt-32">
        <Breadcrumbs items={[
          { label: "Réalisations", to: "/realisations" },
          { label: r.title },
        ]} />

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-md mb-8">
          <img
            src={r.heroImage || r.image || getServiceImage(r.serviceSlug)}
            alt={r.title}
            className="w-full aspect-[21/9] object-cover"
            loading="eager"
          />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-muted-foreground">{r.date}</span>
          {r.city && zone && (
            <>
              <span className="text-muted-foreground">·</span>
              <Link to={`/zones/${zone.slug}`} className="text-sm text-cta font-medium hover:underline inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {r.city}
              </Link>
            </>
          )}
          {r.city && !zone && (
            <>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-cta font-medium">{r.city}</span>
            </>
          )}
        </div>
        <h1>{r.title}</h1>
        <p className="text-base text-muted-foreground mt-4 max-w-2xl">{r.description}</p>

        {service && (
          <Link to={`/services/${r.serviceSlug}`} className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-cta/30 bg-cta/5 text-sm text-cta hover:bg-cta/10 transition-colors font-medium">
            <span>{service.icon}</span>
            {r.service} <ArrowRight className="h-3 w-3" />
          </Link>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <section>
            <h2 className="text-xl mb-3">Contexte</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.context}</p>
          </section>
          <section>
            <h2 className="text-xl mb-3">Le défi</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.challenge}</p>
          </section>
        </div>

        <div className="section-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <section>
            <h2 className="text-xl mb-3">La solution</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.solution}</p>
          </section>
          <section>
            <h2 className="text-xl mb-3">Résultat</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.result}</p>
          </section>
        </div>

        <div className="section-divider" />

        <section className="py-12">
          <h3 className="mb-4">Détails techniques</h3>
          <ul className="space-y-2">
            {r.details.map((d, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle className="h-4 w-4 text-cta flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </section>

        {/* Contextual links */}
        <div className="flex flex-wrap gap-2 py-8">
          {zone && (
            <Link to={`/zones/${zone.slug}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm hover:border-cta hover:text-cta transition-colors">
              <MapPin className="h-3 w-3" />
              Électricien à {zone.city} <ArrowRight className="h-3 w-3" />
            </Link>
          )}
          {service && (
            <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-border text-sm hover:border-cta hover:text-cta transition-colors">
              {service.icon} {service.shortTitle} <ArrowRight className="h-3 w-3" />
            </Link>
          )}
        </div>

        <div className="section-divider" />

        {/* Related realisations */}
        {relatedRealisations.length > 0 && (
          <section className="py-12">
            <h3 className="mb-6">Autres réalisations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedRealisations.map((rel) => (
                <Link key={rel.slug} to={`/realisations/${rel.slug}`} className="group bg-card border border-border rounded-xl p-5 hover:border-cta/40 transition-all hover:shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">{rel.date} · {rel.city}</p>
                  <h4 className="text-sm group-hover:text-cta transition-colors">{rel.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{rel.description}</p>
                  <span className="inline-block mt-2 text-xs text-cta">{rel.service}</span>
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

        <CTASection />
      </div>
    </Layout>
  );
}
