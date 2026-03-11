import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { services } from "@/content/services";
import { zones } from "@/content/zones";

const globalFaq = [
  // Général
  { question: "Êtes-vous un électricien certifié ?", answer: "Oui, JM-ELEC 91 est une entreprise d'électricité déclarée, assurée (décennale) et certifiée IRVE pour l'installation de bornes de recharge. Nous respectons la norme NFC 15-100 sur chaque intervention.", category: "Général" },
  { question: "Dans quelles zones intervenez-vous ?", answer: "Nous intervenons principalement en Essonne (91), Hauts-de-Seine (92) et Yvelines (78). Notre zone prioritaire est l'Essonne sud (Brétigny-sur-Orge, Arpajon, Corbeil-Essonnes et environs). Pour les Hauts-de-Seine et les Yvelines, nous nous déplaçons pour des projets significatifs.", category: "Général" },
  { question: "Intervenez-vous pour les professionnels ?", answer: "Oui, nous intervenons pour les commerces, bureaux et locaux professionnels : dépannage, mise en conformité, vidéosurveillance, éclairage. Nous comprenons l'urgence d'un professionnel à l'arrêt.", category: "Général" },
  { question: "Quel est votre délai d'intervention ?", answer: "En zone prioritaire (Essonne sud), rendez-vous habituellement sous 24 à 48 h. En Hauts-de-Seine et Yvelines, sous 72 h à 1 semaine selon le type de projet. Pour les dépannages urgents, nous nous adaptons au mieux.", category: "Général" },

  // Devis et tarifs
  { question: "Vos devis sont-ils gratuits ?", answer: "Oui, tous nos devis sont gratuits, détaillés ligne par ligne, et sans engagement. Le déplacement pour le diagnostic est inclus.", category: "Devis et tarifs" },
  { question: "Combien coûte un remplacement de tableau électrique ?", answer: "Pour un pavillon standard (10 à 14 circuits), comptez entre 1 000 € et 2 000 € HT. Pour une installation plus complexe (20+ circuits, parafoudre, domotique), le budget peut monter à 3 000 € HT. Chaque devis est adapté à votre situation.", category: "Devis et tarifs" },
  { question: "Combien coûte un dépannage électrique ?", answer: "Un dépannage simple (remplacement de disjoncteur, recherche de panne) coûte en général entre 150 € et 400 € HT selon la complexité. Le diagnostic est inclus dans le prix.", category: "Devis et tarifs" },
  { question: "Combien coûte une installation de borne IRVE ?", answer: "L'installation d'une borne de recharge 7 kW coûte entre 800 € et 1 500 € HT, matériel et pose compris. Une borne 22 kW triphasée coûte entre 1 500 € et 2 500 € HT. L'installation est éligible au crédit d'impôt de 300 €.", category: "Devis et tarifs" },
  { question: "Proposez-vous le paiement en plusieurs fois ?", answer: "Pour les projets importants (rénovation complète, domotique), nous pouvons proposer un paiement en plusieurs fois. À discuter au cas par cas.", category: "Devis et tarifs" },

  // Normes et conformité
  { question: "Qu'est-ce que la norme NFC 15-100 ?", answer: "La norme NFC 15-100 est la réglementation française qui définit les règles de conception et de réalisation des installations électriques basse tension. Elle impose des exigences en matière de protection des personnes (différentiels 30 mA), de dimensionnement des circuits, et d'équipement minimal par pièce.", category: "Normes" },
  { question: "Qu'est-ce qu'un différentiel 30 mA ?", answer: "Un interrupteur différentiel 30 mA est un dispositif de protection qui coupe le courant en cas de fuite électrique supérieure à 30 milliampères. Il protège les personnes contre les risques d'électrocution. La norme impose au moins un différentiel 30 mA pour l'ensemble de l'installation.", category: "Normes" },
  { question: "Qu'est-ce qu'une mise en sécurité ?", answer: "Une mise en sécurité consiste à corriger les anomalies les plus dangereuses d'une installation électrique sans forcément la remettre entièrement aux normes actuelles. C'est souvent ce qui est demandé suite à un diagnostic immobilier défavorable.", category: "Normes" },
  { question: "Remettez-vous une attestation de conformité ?", answer: "Oui, nous remettons systématiquement une attestation de conformité à la fin de chaque intervention. Ce document certifie que les travaux réalisés respectent la norme en vigueur.", category: "Normes" },
  { question: "Mon diagnostic électrique est défavorable, que faire ?", answer: "Un diagnostic défavorable liste les anomalies de votre installation. Contactez-nous pour un devis de correction. Nous traitons les anomalies relevées et remettons une attestation qui permettra un nouveau diagnostic favorable.", category: "Normes" },

  // Borne IRVE
  { question: "Qu'est-ce que la certification IRVE ?", answer: "La certification IRVE (Infrastructure de Recharge pour Véhicules électriques) est une qualification obligatoire pour installer des bornes de recharge de plus de 3,7 kW. JM-ELEC 91 est certifié IRVE, ce qui vous permet de bénéficier du crédit d'impôt de 300 €.", category: "Borne IRVE" },
  { question: "Puis-je recharger mon véhicule sur une prise normale ?", answer: "C'est possible mais déconseillé : la recharge est très lente (24 h+) et la prise n'est pas conçue pour une sollicitation prolongée. Une borne dédiée est plus rapide, plus sûre et plus économique à l'usage.", category: "Borne IRVE" },
  { question: "Quelle puissance de borne choisir ?", answer: "Pour un usage domestique, une borne 7 kW (monophasé) suffit dans la plupart des cas : recharge complète en 6 à 8 h. Si vous avez un compteur triphasé et un véhicule compatible, une borne 22 kW permet la recharge en 2 h.", category: "Borne IRVE" },
  { question: "Le crédit d'impôt borne IRVE est-il automatique ?", answer: "Le crédit d'impôt de 300 € est accordé si la borne est installée par un électricien certifié IRVE. Nous vous remettons l'attestation nécessaire pour vos démarches fiscales.", category: "Borne IRVE" },

  // Travaux et intervention
  { question: "Protégez-vous le chantier pendant les travaux ?", answer: "Oui, nous posons des bâches de protection au sol et sur les meubles. En fin de journée, nous aspirons et nettoyons la zone de travail. Le chantier est laissé propre.", category: "Travaux" },
  { question: "Quel matériel utilisez-vous ?", answer: "Nous utilisons exclusivement du matériel de marque : Schneider, Legrand et Hager pour les tableaux et protections. Pour l'appareillage (prises, interrupteurs), nous proposons les gammes Legrand (Dooxie, Céliane, Mosaic) selon votre budget et vos préférences esthétiques.", category: "Travaux" },
  { question: "Sous-traitez-vous vos interventions ?", answer: "Non, toutes nos interventions sont réalisées par nos soins. Pas de sous-traitance. Vous savez qui intervient chez vous.", category: "Travaux" },
  { question: "Fournissez-vous des photos avant/après ?", answer: "Oui, sur demande nous documentons le chantier avec des photos avant et après intervention. Utile pour votre suivi, vos démarches d'assurance ou vos dossiers de vente.", category: "Travaux" },
];

const categories = ["Général", "Devis et tarifs", "Normes", "Borne IRVE", "Travaux"];

export default function FAQGlobalPage() {
  return (
    <Layout>
      <SEOHead
        title="FAQ - Questions fréquentes - JM-ELEC 91"
        description="Réponses à vos questions sur l'électricité : normes, tarifs, délais, borne IRVE, mise en conformité, dépannage. Électricien professionnel en Essonne."
      />
      <JsonLd
        faqItems={globalFaq.map(f => ({ question: f.question, answer: f.answer }))}
        breadcrumbs={[
          { name: "Accueil", url: "https://jm-elec.fr/" },
          { name: "FAQ", url: "https://jm-elec.fr/faq/" },
        ]}
      />

      <div className="content-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <div className="max-w-3xl">
          <h1>Questions fréquentes</h1>
          <p className="text-base text-muted-foreground mt-4 mb-6 leading-relaxed">
            Retrouvez les réponses aux questions que nos clients nous posent le plus souvent. Tarifs, normes, délais, aides financières - tout est ici. Si votre question n'y figure pas, <Link to="/contact" className="text-cta hover:underline">contactez-nous</Link>.
          </p>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            Cette page regroupe les informations essentielles pour comprendre nos interventions et préparer votre projet. Chaque réponse est rédigée dans un langage clair, sans jargon inutile.
          </p>
        </div>

        {/* Navigation rapide */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")}`}
              className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* FAQ par catégorie */}
        {categories.map((cat) => {
          const items = globalFaq.filter((f) => f.category === cat);
          const anchorId = cat.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/\p{Diacritic}/gu, "");
          return (
            <section key={cat} id={anchorId} className="mb-12 scroll-mt-32">
              <h2 className="text-xl mb-6">{cat}</h2>
              <div className="space-y-6">
                {items.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-base mb-3">{item.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Maillage interne */}
        <div className="section-divider" />

        <section className="py-12">
          <h2 className="mb-6">Explorez nos services</h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl leading-relaxed">
            Chaque page service contient une FAQ spécifique avec des réponses détaillées sur le sujet.
          </p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-cta hover:text-cta transition-colors"
              >
                {s.icon} {s.shortTitle}
              </Link>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h3 className="mb-4">Nos zones d'intervention</h3>
          <div className="flex flex-wrap gap-2">
            {zones.slice(0, 10).map((z) => (
              <Link
                key={z.slug}
                to={`/zones/${z.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:border-cta hover:text-cta transition-colors"
              >
                {z.city}
              </Link>
            ))}
            <Link
              to="/zones"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cta bg-cta/5 text-xs text-cta font-medium hover:bg-cta/10 transition-colors"
            >
              Toutes les zones →
            </Link>
          </div>
        </section>

        {/* Editorial SEO */}
        <section className="py-12 max-w-3xl">
          <h2 className="mb-6">Bien préparer votre projet électrique</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Que vous envisagiez un simple dépannage ou une rénovation complète, quelques informations peuvent accélérer votre projet. Avant de nous contacter, notez les symptômes (disjonctions, odeur de brûlé, prises qui ne fonctionnent pas), le type de logement (pavillon, appartement, année de construction) et vos besoins spécifiques.
            </p>
            <p>
              Si vous avez un diagnostic immobilier, envoyez-le nous par email - nous pourrons établir un pré-chiffrage avant même la visite sur site. Pour les projets de rénovation, un plan du logement (même un schéma à main levée) est très utile.
            </p>
            <p>
              Enfin, sachez que certaines aides financières existent : crédit d'impôt de 300 € pour les bornes IRVE, TVA réduite à 10 % pour les travaux de rénovation dans les logements de plus de 2 ans, aides de l'ANAH pour les mises en sécurité sous conditions de ressources.
            </p>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
