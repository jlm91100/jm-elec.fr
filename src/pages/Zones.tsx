import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { zones } from "@/content/zones";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

export default function ZonesPage() {
  const essonneZones = zones.filter((z) => z.department === "91");
  const hdseineZones = zones.filter((z) => z.department === "92");
  const yvelinesZones = zones.filter((z) => z.department === "78");

  const groups = [
    { label: "Essonne (91)", desc: "Notre zone d'intervention principale. Pavillons, appartements, commerces — nous connaissons le terrain et intervenons rapidement.", zones: essonneZones },
    { label: "Hauts-de-Seine (92)", desc: "Nous intervenons également dans le 92 pour tous types de projets : rénovation, mise en conformité, dépannage, installation neuve.", zones: hdseineZones },
    { label: "Yvelines (78)", desc: "Installations, rénovations et dépannages dans les Yvelines. Particuliers et professionnels, nous nous adaptons à chaque projet.", zones: yvelinesZones },
  ].filter((g) => g.zones.length > 0);

  return (
    <Layout>
      <SEOHead
        title="Zones d'intervention — JM-ELEC 91"
        description="Zones d'intervention de JM-ELEC 91 : Essonne (91), Hauts-de-Seine (92), Yvelines (78). Électricien professionnel certifié IRVE. Pages locales détaillées. Devis gratuit."
      />
      <div className="wide-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "Zones d'intervention" }]} />

        <div className="max-w-3xl">
          <h1>Zones d'intervention</h1>
          <p className="text-base text-muted-foreground mt-4 mb-6 leading-relaxed">
            JM-ELEC 91 intervient en Essonne, Hauts-de-Seine et Yvelines. Chaque page ville présente nos interventions locales, notre connaissance du secteur et les services disponibles.
          </p>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            Notre zone prioritaire est l'Essonne sud (Brétigny-sur-Orge, Corbeil-Essonnes, Arpajon et environs), où nous intervenons avec les délais les plus courts. Nous nous déplaçons également dans les Hauts-de-Seine et les Yvelines pour des projets résidentiels haut de gamme : rénovation complète, domotique, éclairage architectural.
          </p>
        </div>

        {/* Carte interactive */}
        <div className="mb-12 rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            title="Zone d'intervention JM-ELEC 91 — Essonne et Île-de-France"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.9,48.5,2.6,48.8&layer=mapnik&marker=48.6,2.3"
            className="w-full h-[300px] sm:h-[400px]"
            loading="lazy"
          />
          <div className="bg-card px-4 py-2 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-cta" />
            Essonne (91), Hauts-de-Seine (92), Yvelines (78) — Déplacement 50 €
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.label} className="mb-12">
            <h2 className="text-xl mb-2">{group.label}</h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl">{group.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.zones.map((zone) => (
                <Link
                  key={zone.slug}
                  to={`/zones/${zone.slug}`}
                  className="group flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:border-cta/40 transition-all hover:shadow-lg"
                >
                  <MapPin className="h-5 w-5 text-cta flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base group-hover:text-cta transition-colors">
                      {zone.city}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{zone.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cta transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* SEO editorial */}
        <section className="py-12 max-w-3xl">
          <h2 className="mb-6">Un électricien de proximité, disponible et réactif</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Basés en Essonne, nous connaissons parfaitement le tissu local : pavillons, résidences, commerces et copropriétés. Cette proximité nous permet d'intervenir rapidement, souvent sous 24 à 48 h, et de vous proposer un service personnalisé adapté à votre situation.
            </p>
            <p>
              Que ce soit pour un dépannage urgent, une mise en conformité ou un projet de rénovation complète, nous nous déplaçons chez vous avec tout le matériel nécessaire. Devis gratuit, tarifs transparents, travail soigné — notre réputation repose sur la satisfaction de nos clients.
            </p>
            <p>
              Votre commune n'apparaît pas dans la liste ? <Link to="/contact" className="text-cta hover:underline">Contactez-nous</Link> — nous intervenons probablement dans votre secteur.
            </p>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
