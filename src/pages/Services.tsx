import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { services, getServiceImage } from "@/content/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <Layout>
      <SEOHead
        title="Services — Électricien professionnel"
        description="Nos services d'électricité : tableau électrique, dépannage, conformité NFC 15-100, rénovation, borne IRVE, éclairage, domotique, alarme, vidéosurveillance, PAC. Devis gratuit en Essonne et Île-de-France."
      />
      <div className="wide-container pt-28 md:pt-32">
        <Breadcrumbs items={[{ label: "Services" }]} />

        <div className="max-w-3xl">
          <h1>Nos services d'électricité</h1>
          <p className="text-base text-muted-foreground mt-4 mb-6 leading-relaxed">
            JM-ELEC 91 intervient pour les particuliers et les professionnels en Essonne, Hauts-de-Seine et Yvelines. Chaque intervention suit un processus documenté : diagnostic, devis détaillé ligne par ligne, exécution propre, vérification, attestation de conformité.
          </p>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            De la mise en sécurité d'un tableau vétuste à l'installation d'un système domotique complet, nous adaptons notre prestation à votre besoin. Pas de travaux inutiles, pas de sur-facturation — un diagnostic honnête et des travaux ciblés. Nos interventions sont couvertes par une assurance décennale et nous utilisons exclusivement du matériel de marque (Schneider, Legrand, Hager).
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
                <h2 className="text-lg mb-2 group-hover:text-cta transition-colors">{svc.shortTitle}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-cta font-medium">
                  En savoir plus <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Editorial SEO block */}
        <section className="py-16 max-w-3xl">
          <h2 className="mb-6">Un électricien pour chaque besoin</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              L'électricité est un domaine technique qui touche à la sécurité des personnes et des biens. Chaque intervention, qu'il s'agisse d'un simple dépannage ou d'une rénovation complète, doit respecter la norme NFC 15-100 en vigueur et être réalisée par un professionnel qualifié et assuré.
            </p>
            <p>
              Chez JM-ELEC 91, nous couvrons l'ensemble des besoins électriques résidentiels et professionnels : <Link to="/services/remplacement-tableau-electrique" className="text-cta hover:underline">remplacement de tableau électrique</Link>, <Link to="/services/depannage-electrique" className="text-cta hover:underline">dépannage et recherche de panne</Link>, <Link to="/services/mise-en-securite-conformite" className="text-cta hover:underline">mise en sécurité et conformité</Link>, <Link to="/services/renovation-electrique" className="text-cta hover:underline">rénovation électrique complète</Link>, <Link to="/services/borne-recharge-irve" className="text-cta hover:underline">installation de borne IRVE</Link>, et bien plus.
            </p>
            <p>
              Nous intervenons également dans le domaine de la sécurité électronique : <Link to="/services/alarme" className="text-cta hover:underline">alarme intrusion</Link>, <Link to="/services/video-surveillance" className="text-cta hover:underline">vidéosurveillance</Link>, <Link to="/services/interphonie-controle-acces" className="text-cta hover:underline">interphonie et contrôle d'accès</Link>. Et pour les projets les plus ambitieux : <Link to="/services/domotique-residentielle" className="text-cta hover:underline">domotique résidentielle</Link> et <Link to="/services/eclairage-interieur-exterieur" className="text-cta hover:underline">éclairage sur mesure</Link>.
            </p>
            <p>
              Chaque page service détaille le problème, notre approche, le processus d'intervention, nos garanties et une FAQ complète pour répondre à vos questions. Parcourez nos services et <Link to="/contact" className="text-cta hover:underline">demandez votre devis gratuit</Link>.
            </p>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
}
