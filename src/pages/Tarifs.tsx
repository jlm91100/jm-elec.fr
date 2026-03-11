import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, Info, ShieldCheck, CreditCard, Banknote, Building2 } from "lucide-react";

const tarifs = [
  {
    category: "Informations générales",
    items: [
      { label: "Taux horaire", price: "100 €/h", detail: "Main-d'œuvre, facturation à l'heure (pas de demi-heure)" },
      { label: "Frais de déplacement", price: "50 €", detail: "Forfait fixe par intervention, Essonne et alentours" },
    ],
    link: "/contact",
  },
  {
    category: "Tableau électrique",
    items: [
      { label: "Remplacement tableau (studio/T2)", price: "à partir de 800 €", detail: "Disjoncteurs, différentiels 30 mA, parafoudre" },
      { label: "Remplacement tableau (maison 4-5 pièces)", price: "à partir de 1 500 €", detail: "Jusqu'à 20 circuits, matériel Schneider ou Hager" },
      { label: "Ajout d'un circuit dédié", price: "à partir de 200 €", detail: "Plaque, four, lave-linge, sèche-linge" },
    ],
    link: "/services/remplacement-tableau-electrique",
  },
  {
    category: "Dépannage électrique",
    items: [
      { label: "Diagnostic de panne", price: "à partir de 150 €", detail: "Déplacement + 1 h de recherche de panne" },
      { label: "Remplacement disjoncteur / prise", price: "à partir de 150 €", detail: "Déplacement + 1 h de main-d'œuvre + fourniture" },
      { label: "Intervention urgente (week-end/soirée)", price: "Sur devis", detail: "Majorations selon horaire" },
    ],
    link: "/services/depannage-electrique",
  },
  {
    category: "Mise en conformité",
    items: [
      { label: "Mise en sécurité (6 points)", price: "à partir de 500 €", detail: "Minimum requis pour une vente" },
      { label: "Mise en conformité NFC 15-100", price: "à partir de 1 500 €", detail: "Remise aux normes complète" },
      { label: "Diagnostic électrique complet", price: "à partir de 150 €", detail: "Déplacement + état de l'installation, rapport détaillé" },
    ],
    link: "/services/mise-en-securite-conformite",
  },
  {
    category: "Borne de recharge IRVE",
    items: [
      { label: "Borne 7,4 kW (monophasé)", price: "à partir de 1 200 €", detail: "Fourniture + pose + mise en service" },
      { label: "Borne 11 kW (triphasé)", price: "à partir de 1 600 €", detail: "Fourniture + pose + mise en service" },
      { label: "Borne 22 kW (triphasé)", price: "à partir de 2 000 €", detail: "Pour recharge rapide à domicile" },
    ],
    link: "/services/borne-de-recharge-irve",
  },
  {
    category: "Rénovation électrique",
    items: [
      { label: "Rénovation partielle (au m²)", price: "50 - 80 €/m²", detail: "Tableau + circuits critiques" },
      { label: "Rénovation complète (au m²)", price: "80 - 120 €/m²", detail: "Recâblage complet, mise aux normes" },
      { label: "Rénovation totale avec encastrement", price: "120 - 150 €/m²", detail: "Saignées, encastrement, finitions" },
    ],
    link: "/services/renovation-electrique",
  },
  {
    category: "Autres prestations",
    items: [
      { label: "Installation interphone / visiophone", price: "à partir de 350 €", detail: "Fourniture + pose" },
      { label: "Installation alarme", price: "à partir de 500 €", detail: "Système filaire ou sans fil" },
      { label: "Installation vidéosurveillance", price: "à partir de 600 €", detail: "2 caméras + enregistreur" },
      { label: "Domotique (éclairage connecté)", price: "à partir de 200 €", detail: "Par point lumineux, module Yokis ou Legrand" },
    ],
    link: "/services",
  },
];

export default function Tarifs() {
  return (
    <Layout>
      <SEOHead
        title="Tarifs indicatifs - Électricien en Essonne | JM-ELEC 91"
        description="Tarifs indicatifs de nos prestations : remplacement tableau dès 800 €, dépannage dès 90 €, borne IRVE dès 1 200 €. Devis gratuit et détaillé sous 24 h."
      />
      <div className="wide-container pt-[100px] pb-20">
        <Breadcrumbs items={[{ label: "Tarifs" }]} />

        <div className="text-center mb-12">
          <h1 className="mb-3">Nos tarifs indicatifs</h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Prix de départ pour nos prestations courantes. Chaque devis est personnalisé après diagnostic sur site.
          </p>
        </div>

        <div className="bg-cta/5 border border-cta/10 rounded-xl p-4 mb-10 flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Ces tarifs sont donnés à titre indicatif. Le prix final dépend de la complexité de l'intervention, de l'état de l'installation existante et du matériel choisi. <strong className="text-foreground">Le diagnostic et le devis sont gratuits.</strong>
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {tarifs.map((section) => (
            <div key={section.category} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 flex items-center justify-between">
                <h2 className="text-base font-heading font-semibold">{section.category}</h2>
                <Link to={section.link} className="text-xs text-cta font-medium flex items-center gap-1 hover:underline">
                  Détails <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="divide-y divide-border">
                {section.items.map((item) => (
                  <div key={item.label} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                    </div>
                    <span className="text-sm font-heading font-bold text-cta whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Garanties & Assurances */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: ShieldCheck, title: "Assurance décennale", desc: "Tous vos travaux sont couverts pendant 10 ans." },
            { icon: ShieldCheck, title: "RC Professionnelle", desc: "Responsabilité civile professionnelle garantie." },
            { icon: ShieldCheck, title: "Conformité NFC 15-100", desc: "Attestation de conformité à chaque intervention." },
            { icon: ShieldCheck, title: "Garantie fabricant", desc: "Matériel Schneider, Legrand, Hager garanti." },
          ].map((g) => (
            <div key={g.title} className="bg-card border border-border rounded-xl p-5 text-center">
              <g.icon className="h-6 w-6 text-cta mx-auto mb-2" />
              <p className="text-sm font-heading font-semibold mb-1">{g.title}</p>
              <p className="text-xs text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Moyens de paiement */}
        <div className="mt-10 max-w-3xl mx-auto bg-card border border-border rounded-xl p-6">
          <h2 className="text-base font-heading font-semibold mb-4 text-center">Moyens de paiement acceptés</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Banknote, label: "Chèque" },
              { icon: Building2, label: "Virement bancaire" },
              { icon: Banknote, label: "Espèces" },
            ].map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2 py-3">
                <p.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Tous nos prix incluent la main-d'œuvre et le matériel de marque (Schneider, Legrand, Hager). TVA 10 % pour les logements de plus de 2 ans.
          </p>
        </div>

        <div className="mt-8">
          <CTASection />
        </div>
      </div>
    </Layout>
  );
}
