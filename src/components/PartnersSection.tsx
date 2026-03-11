import { Handshake } from "lucide-react";

import legrandLogo from "@/assets/partners/legrand.png";
import schneiderLogo from "@/assets/partners/schneider-electric.svg";
import hagerLogo from "@/assets/partners/hager-final.png";
import somfyLogo from "@/assets/partners/somfy.svg";
import netatmoLogo from "@/assets/partners/netatmo.svg";
import atlanticLogo from "@/assets/partners/atlantic.svg";
import deltaDoreLogo from "@/assets/partners/delta-dore.svg";
import yokisLogo from "@/assets/partners/yokis.svg";
import nexansLogo from "@/assets/partners/nexans.svg";
import qualifelecLogo from "@/assets/partners/qualifelec.png";
import rgeLogo from "@/assets/partners/rge.jpg";
import irveLogo from "@/assets/partners/irve.png";

interface Brand {
  name: string;
  logo: string;
  bg?: string;
}

const brands = [
  { name: "Legrand", logo: legrandLogo },
  { name: "Schneider Electric", logo: schneiderLogo },
  { name: "Hager", logo: hagerLogo },
  { name: "Somfy", logo: somfyLogo },
  { name: "Netatmo", logo: netatmoLogo },
  { name: "Atlantic", logo: atlanticLogo },
  { name: "Delta Dore", logo: deltaDoreLogo },
  { name: "Yokis", logo: yokisLogo },
  { name: "Nexans", logo: nexansLogo },
] satisfies Brand[];

const certifications = [
  { name: "Qualifelec", logo: qualifelecLogo },
  { name: "RGE", logo: rgeLogo },
  { name: "IRVE", logo: irveLogo },
];

const professionalPartners = [
  { label: "Architectes", desc: "Coordination technique pour vos projets de construction et rénovation." },
  { label: "Cuisinistes", desc: "Raccordements et circuits dédiés pour cuisines équipées." },
  { label: "Chauffagistes", desc: "Alimentation PAC, chaudières, planchers chauffants." },
  { label: "Maîtres d'œuvre", desc: "Suivi de chantier et conformité électrique." },
];

export function PartnersSection() {
  return (
    <section className="wide-container py-20">
      {/* Certifications */}
      <div className="text-center mb-16">
        <h2 className="mb-3">Nos certifications</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Des qualifications reconnues qui garantissent la qualité et la conformité de nos interventions.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center gap-2">
              <div className={`${cert.name === "IRVE" ? "w-28 h-28" : "w-20 h-20"} rounded-xl bg-card border border-border p-2 flex items-center justify-center`}>
                <img src={cert.logo} alt={`Certification ${cert.name}`} className="w-full h-full object-contain" />
              </div>
              {!["Qualifelec", "RGE", "IRVE"].includes(cert.name) && (
                <span className="text-xs font-semibold text-foreground">{cert.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* Marques partenaires */}
      <div className="text-center mb-10 mt-16">
        <h2 className="mb-3">Nos marques partenaires</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Nous travaillons exclusivement avec du matériel de marques reconnues pour garantir fiabilité et durabilité.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-cta/30 hover:shadow-md transition-all"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-lg ${brand.bg ?? ""}`}>
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <span className="text-[11px] text-muted-foreground font-medium text-center">{brand.name}</span>
          </div>
        ))}
      </div>

      <div className="section-divider mt-16" />

      {/* Partenaires professionnels */}
      <div className="text-center mb-10 mt-16">
        <h2 className="mb-3">Ils travaillent avec nous</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Nous collaborons régulièrement avec des professionnels du bâtiment pour des projets complets et coordonnés.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {professionalPartners.map((partner) => (
          <div
            key={partner.label}
            className="p-6 rounded-xl border border-border bg-card hover:border-cta/30 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cta/10 mb-3">
              <Handshake className="h-5 w-5 text-cta" />
            </div>
            <h4 className="text-sm font-semibold mb-1">{partner.label}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{partner.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
