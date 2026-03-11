import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Zap, Award, Users, Wrench, Heart } from "lucide-react";

export default function AProposPage() {
  return (
    <Layout>
      <SEOHead
        title="À propos - JM-ELEC 91 | Électricien en Essonne depuis plus de 10 ans"
        description="Découvrez JM-ELEC 91 : plus de 10 ans d'expérience en électricité en Essonne. Notre histoire, nos valeurs, nos engagements. Certifié IRVE, assurance décennale."
      />
      <div className="content-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "À propos" }]} />

        <div className="mb-12 max-w-3xl">
          <div>
            <h1>À propos de JM-ELEC 91</h1>
            <p className="text-base text-muted-foreground leading-relaxed mt-6">
              JM-ELEC 91 est une entreprise d'électricité fondée il y a plus de 10 ans en Essonne. Nous intervenons pour les particuliers
              et les professionnels en Essonne, Hauts-de-Seine et Yvelines, avec une spécialisation dans le remplacement de tableaux
              électriques, le dépannage, la mise en conformité et les installations de qualité.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Notre approche repose sur trois principes : un diagnostic honnête, des travaux propres, et une traçabilité
              complète. Devis détaillé, photos, attestation - pas de promesses creuses, des preuves.
            </p>
          </div>
        </div>

        <div className="section-divider" />

        {/* Notre histoire */}
        <section className="py-12">
          <h2 className="mb-6">Notre histoire</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              JM-ELEC 91 est née d'une conviction simple : les particuliers méritent un électricien qui travaille proprement, qui explique ce qu'il fait, et qui facture honnêtement. Trop souvent, les propriétaires se retrouvent face à des devis incompréhensibles, des travaux bâclés ou des interventions inutiles.
            </p>
            <p>
              Après une formation solide et plusieurs années d'expérience en entreprise, le fondateur a créé JM-ELEC 91 pour proposer une approche différente. Une approche où le diagnostic précède toujours le devis, où chaque ligne du chiffrage est expliquée, et où le chantier est laissé propre à la fin de chaque intervention.
            </p>
            <p>
              Au fil des années, l'activité s'est développée par le bouche-à-oreille. Les clients recommandent JM-ELEC 91 à leurs voisins, leurs amis, leur famille. C'est la meilleure preuve de la qualité de notre travail. Aujourd'hui, la majorité de nos nouveaux clients viennent par recommandation directe.
            </p>
            <p>
              Notre zone d'activité s'est progressivement étendue : d'abord centrée sur <Link to="/zones/bretigny-sur-orge" className="text-cta hover:underline">Brétigny-sur-Orge</Link> et l'Essonne sud, elle couvre désormais les <Link to="/zones" className="text-cta hover:underline">Hauts-de-Seine et les Yvelines</Link> pour des projets de rénovation et d'installation. La certification IRVE est venue compléter notre offre pour répondre à la demande croissante en bornes de recharge pour véhicules électriques.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Nos valeurs */}
        <section className="py-12">
          <h2 className="mb-8">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Honnéteté",
                detail: "Nous ne proposons pas de travaux inutiles. Si votre installation est saine, nous vous le dirons. Un diagnostic honnête, c'est la base de la confiance.",
              },
              {
                icon: Wrench,
                title: "Qualité d'exécution",
                detail: "Matériel de marque, encastrements propres, câblage ordonné, chantier nettoyé. Nous ne laissons pas un chantier tant que le résultat n'est pas à la hauteur de nos standards.",
              },
              {
                icon: Users,
                title: "Proximité",
                detail: "Nous sommes une entreprise locale. Nous connaissons nos clients, leurs maisons, leur quartier. Cette proximité permet une réactivité et un suivi que les grandes structures ne peuvent pas offrir.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6">
                <v.icon className="h-8 w-8 text-cta mb-4" />
                <h3 className="text-base mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Engagements */}
        <section className="py-12">
          <h2 className="mb-8">Nos engagements concrets</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Les engagements ne valent que s'ils sont concrets et vérifiables. Voici ce que nous garantissons à chaque intervention :
          </p>
          <ul className="space-y-4">
            {[
              "Diagnostic avant devis - nous évaluons d'abord, nous chiffrons ensuite. Pas de travaux inutiles.",
              "Devis détaillé, ligne par ligne - vous savez exactement ce que vous payez et pourquoi.",
              "Réponse à toute demande sous 24 h - par téléphone ou par email.",
              "Chantier protégé et nettoyé - bâches au sol, aspiration en fin de journée.",
              "Matériel de marque exclusivement - Schneider, Legrand, Hager. Pas de sous-marques.",
              "Attestation de conformité remise systématiquement - preuve écrite de la conformité des travaux.",
              "Assurance décennale couvrant tous nos travaux - vous êtes protégé pendant 10 ans.",
              "Photos avant/après fournies sur demande - pour votre suivi et vos démarches.",
            ].map((e, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                {e}
              </li>
            ))}
          </ul>
        </section>

        <div className="section-divider" />

        {/* Certifications */}
        <section className="py-12">
          <h2 className="mb-8">Certifications et garanties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Zap, label: "Certification IRVE", detail: "Qualification pour l'installation de bornes de recharge pour véhicules électriques. Vos travaux sont éligibles au crédit d'impôt de 300 €." },
              { icon: Shield, label: "Assurance décennale", detail: "Tous nos travaux sont couverts par une assurance décennale. En cas de problème lié à notre intervention, vous êtes protégé pendant 10 ans." },
              { icon: Award, label: "Norme NFC 15-100", detail: "Connaissance approfondie de la réglementation électrique en vigueur. Chaque installation est conçue et réalisée en conformité avec la norme." },
            ].map((c) => (
              <div key={c.label} className="bg-card border border-border rounded-xl p-6">
                <c.icon className="h-8 w-8 text-cta mb-4" />
                <h3 className="text-base mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Notre façon de travailler */}
        <section className="py-12">
          <h2 className="mb-6">Notre façon de travailler</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Chaque intervention suit le même processus, qu'il s'agisse d'un simple dépannage ou d'une rénovation complète. Ce processus garantit un résultat conforme et documenté.
            </p>
            <p>
              Tout commence par un échange téléphonique ou un message via notre <Link to="/contact" className="text-cta hover:underline">formulaire de contact</Link>. Nous évaluons votre besoin et nous convenons d'un rendez-vous pour un diagnostic sur site. Ce diagnostic est gratuit et sans engagement.
            </p>
            <p>
              Sur place, nous examinons votre installation, nous identifions les points à traiter, et nous vous expliquons la situation en termes clairs. Pas de jargon inutile, pas d'alarmisme - juste les faits.
            </p>
            <p>
              Le devis est ensuite établi, détaillé ligne par ligne : matériel, main-d'œuvre, durée estimée. Vous savez exactement ce que vous payez. Une fois le devis accepté, nous planifions l'intervention dans les meilleurs délais.
            </p>
            <p>
              À la fin des travaux, nous testons l'ensemble de l'installation, nous remettons une attestation de conformité, et nous nettoyons le chantier. Vous pouvez vérifier notre travail - et nous vous y encourageons.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Services */}
        <section className="py-12">
          <h2 className="mb-6">Nos domaines d'expertise</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Nous intervenons dans tous les domaines de l'électricité résidentielle et professionnelle. Découvrez nos services détaillés :
          </p>
          <div className="flex flex-wrap gap-2">
            <Link to="/services/remplacement-tableau-electrique" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Tableau électrique</Link>
            <Link to="/services/depannage-electrique" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Dépannage</Link>
            <Link to="/services/mise-en-securite-conformite" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Conformité</Link>
            <Link to="/services/renovation-electrique" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Rénovation</Link>
            <Link to="/services/borne-recharge-irve" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Borne IRVE</Link>
            <Link to="/services/domotique-residentielle" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Domotique</Link>
            <Link to="/services/eclairage-interieur-exterieur" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">éclairage</Link>
            <Link to="/services/alarme" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors">Alarme</Link>
            <Link to="/services" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cta bg-cta/5 text-sm text-cta font-medium hover:bg-cta/10 transition-colors">Tous nos services →</Link>
          </div>
        </section>

        <div className="section-divider" />

        <section className="py-12">
          <h2 className="mb-4">Informations légales</h2>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Raison sociale : JM-ELEC 91</p>
            <p>Statut : Entreprise Individuelle (EI)</p>
            <p>SIRET : 91817287500018</p>
            <p>Téléphone : 07 67 97 38 48</p>
            <p>Email : contact@jm-elec.fr</p>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
