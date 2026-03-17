import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <SEOHead
        title="Contact & Devis gratuit — JM-ELEC 91 | Électricien Essonne"
        description="Demandez un devis gratuit ou contactez JM-ELEC 91. Réponse sous 24 h. Électricien professionnel certifié IRVE en Essonne, Hauts-de-Seine et Yvelines."
      />
      <JsonLd localBusiness />

      <div className="wide-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "Contact & Devis" }]} />

        <div className="max-w-2xl">
          <h1>Demandez votre devis gratuit</h1>
          <p className="text-base text-muted-foreground mt-4 mb-4 leading-relaxed">
            Décrivez votre besoin et nous vous recontactons sous 24 h avec un devis détaillé et sans engagement. Que ce soit pour un dépannage, un remplacement de tableau, une borne de recharge ou une rénovation complète, nous sommes à votre écoute.
          </p>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            Pour un pré-chiffrage plus rapide sur tous nos services, joignez des photos et vos documents utiles : DPE, diagnostic électrique, plans, anciens devis, notices ou références d'équipement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar info */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6 space-y-5">
              <h3 className="text-base">Coordonnées</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">07 67 97 38 48</p>
                    <p>Appel direct — du lundi au samedi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">contact@jm-elec.fr</p>
                    <p>Réponse sous 24 h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Essonne (91) — zone prioritaire</p>
                    <p>Hauts-de-Seine (92), Yvelines (78)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Lun — Ven : 7h30 — 18h30</p>
                    <p>Sam : sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-base mb-3">Comment ça se passe ?</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Vous décrivez votre besoin (formulaire ou téléphone)</li>
                <li>Nous vous recontactons sous 24 h</li>
                <li>Visite de diagnostic gratuite sur site</li>
                <li>Devis détaillé, sans engagement</li>
                <li>Intervention planifiée à votre convenance</li>
              </ol>
            </div>

            <div className="bg-cta/5 border border-cta/20 rounded-xl p-6">
              <h3 className="text-base mb-3">Nos garanties</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" /> Devis gratuit et sans engagement</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" /> 10+ ans d'expérience terrain</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" /> Assurance décennale</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" /> Certifié IRVE</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" /> Matériel Schneider, Legrand, Hager</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" /> Attestation de conformité systématique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Editorial SEO */}
        <section className="py-16 max-w-3xl">
          <h2 className="mb-6">Un devis clair, sans mauvaise surprise</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Chez JM-ELEC 91, le devis est un engagement. Chaque ligne est détaillée : matériel utilisé (marque, référence), main-d'œuvre, durée estimée. Pas de "forfait électricité" vague — vous savez exactement ce que vous payez et pourquoi.
            </p>
            <p>
              Si en cours de chantier nous découvrons un problème imprévu (cela arrive parfois dans les installations anciennes), nous vous en informons immédiatement et nous ne réalisons aucun travail supplémentaire sans votre accord écrit. Pas de surprise sur la facture.
            </p>
            <p>
              Nos tarifs sont compétitifs car nous travaillons en direct, sans intermédiaire ni plateforme. Vous traitez avec l'électricien qui réalisera les travaux. Cette relation directe est gage de qualité et de réactivité.
            </p>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="py-8">
          <h3 className="mb-4">Vous avez un projet précis ?</h3>
          <p className="text-sm text-muted-foreground mb-4">Consultez la page service correspondante pour plus de détails :</p>
          <div className="flex flex-wrap gap-2">
            <Link to="/services/remplacement-tableau-electrique" className="inline-flex px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:border-cta hover:text-cta transition-colors">Tableau électrique</Link>
            <Link to="/services/depannage-electrique" className="inline-flex px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:border-cta hover:text-cta transition-colors">Dépannage</Link>
            <Link to="/services/mise-en-securite-conformite" className="inline-flex px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:border-cta hover:text-cta transition-colors">Conformité</Link>
            <Link to="/services/borne-recharge-irve" className="inline-flex px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:border-cta hover:text-cta transition-colors">Borne IRVE</Link>
            <Link to="/services/renovation-electrique" className="inline-flex px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:border-cta hover:text-cta transition-colors">Rénovation</Link>
            <Link to="/services" className="inline-flex px-3 py-1.5 rounded-full border border-cta bg-cta/5 text-xs text-cta font-medium hover:bg-cta/10 transition-colors">Tous les services →</Link>
          </div>
        </section>

        {/* FAQ locale */}
        <section className="py-8 max-w-3xl">
          <h3 className="mb-4">Questions fréquentes sur le devis</h3>
          <div className="space-y-4">
            {[
              { q: "Le déplacement pour le diagnostic est-il payant ?", a: "Non, le déplacement et le diagnostic sont gratuits et sans engagement." },
              { q: "En combien de temps recevrai-je mon devis ?", a: "Nous vous recontactons sous 24 h. Le devis écrit est généralement remis sous 48 h après la visite." },
              { q: "Puis-je comparer votre devis avec un autre ?", a: "Bien sûr. Nous vous encourageons à comparer. Vérifiez que les devis détaillent les mêmes prestations (marque du matériel, nombre de circuits, etc.)." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <h4 className="text-sm font-medium mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Plus de questions ? Consultez notre <Link to="/faq" className="text-cta hover:underline">FAQ complète</Link>.
          </p>
        </section>
      </div>
    </Layout>
  );
}
