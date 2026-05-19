import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Check, CheckCircle, Phone } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import logoLight from "@/assets/logo-jm-elec.png";

const CONSENT_KEY = "jm-cookie-consent";
const LANDING_ID = "lp_irve_essonne";
const FALLBACK_PHONE = "07 67 97 38 48";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type TrackingWindow = Window & {
 gtag?: (...args: unknown[]) => void;
 fbq?: (...args: unknown[]) => void;
};

type LeadFormState = {
 projectType: string;
 fullName: string;
 phone: string;
 postalCode: string;
 email: string;
 message: string;
 honeypot: string;
};

type HeroLeadFormState = {
 fullName: string;
 phone: string;
 postalCode: string;
 honeypot: string;
};

type Web3FormsResponse = {
 success?: boolean;
 message?: string;
 body?: { message?: string };
 error?: string;
};

const faqItems = [
 {
 question: "Faut-il obligatoirement un installateur IRVE ?",
 answer:
 "Oui, pour une borne superieure a 3,7 kW. C'est indispensable pour une installation conforme et securisee.",
 },
 {
 question: "Quel delai pour une installation en maison ?",
 answer:
 "Apres validation du devis, la pose est generalement programmee sous une semaine selon nos disponibilites.",
 },
 {
 question: "Quelles aides sont disponibles en Ile-de-France ?",
 answer:
 "Pour la maison individuelle, nous appliquons principalement la TVA reduite a 5,5 % lorsque les conditions sont reunies.",
 },
];

const solutionCards = [
 {
 id: "I.",
 title: "Maison individuelle",
 text: "Wallbox 7,4 a 22 kW posee par un electricien certifie IRVE. Tableau, cablage et mise en service inclus.",
 bullets: ["Etude technique gratuite", "Pose en 1 journee", "TVA 5,5 % selon eligibilite", "Borne pilotable 7,4 a 22 kW AC"],
 priceTitle: "A partir de",
 price: "999 EUR HT",
 priceInfo: "pose comprise",
 },
 {
 id: "II.",
 title: "Copropriete",
 text: "Solution droit a la prise ou infrastructure collective. Nous accompagnons la partie technique et le cadre projet.",
 bullets: ["Audit parking", "Pre-cablage evolutif", "Dossier technique accompagne", "Supervision sur etude"],
 priceTitle: "Devis",
 price: "sur etude",
 priceInfo: "reponse sous 5 jours",
 highlight: true,
 },
 {
 id: "III.",
 title: "Entreprise & flotte",
 text: "Parc de bornes pour collaborateurs, visiteurs ou vehicules de service avec pilotage de charge.",
 bullets: ["Schema directeur recharge", "Bornes AC 7,4 a 22 kW", "Pilotage et maintenance", "Deploiement multi-sites"],
 priceTitle: "Devis",
 price: "sur etude",
 priceInfo: "reponse sous 5 jours",
 },
];

const methodSteps = [
 {
 id: "01",
 title: "Devis rapide",
 text: "Vous decrivez le projet, nous revenons avec un chiffrage clair.",
 },
 {
 id: "02",
 title: "Validation technique",
 text: "Verification du tableau, du cheminement cable et de la puissance disponible.",
 },
 {
 id: "03",
 title: "Pose sous une semaine",
 text: "Intervention propre, securisee, avec raccordement et parametrage.",
 },
 {
 id: "04",
 title: "Suivi & SAV",
 text: "Support apres intervention et reponse rapide en cas de question.",
 },
];

const testimonials = [
 {
 text: "Devis rapide, pose propre et explications claires. Rien a redire.",
 name: "Karim B.",
 meta: "Pavillon - Massy",
 },
 {
 text: "Tres bon accompagnement du premier appel jusqu'a la mise en service.",
 name: "Sophie R.",
 meta: "Maison - Arpajon",
 },
 {
 text: "Planning respecte et travail soigne. Je recommande sans hesitation.",
 name: "David T.",
 meta: "Maison - Essonne",
 },
];

const idfDepartments = ["75", "77", "78", "91", "92", "93", "94", "95"];

function hasTrackingConsent() {
 if (typeof window === "undefined") return false;
 return localStorage.getItem(CONSENT_KEY) === "accepted";
}

function trackLeadSuccess() {
 if (typeof window === "undefined" || !hasTrackingConsent()) return;
 const trackingWindow = window as TrackingWindow;

 trackingWindow.gtag?.("event", "generate_lead", {
 lead_source: "facebook_ads",
 landing_id: LANDING_ID,
 zone: "idf",
 service: "borne_recharge_irve",
 });

 trackingWindow.fbq?.("track", "Lead", {
 content_name: LANDING_ID,
 content_category: "borne_recharge_irve",
 });
}

function trackCallClick() {
 if (typeof window === "undefined" || !hasTrackingConsent()) return;
 const trackingWindow = window as TrackingWindow;

 trackingWindow.gtag?.("event", "click_call", {
 lead_source: "facebook_ads",
 landing_id: LANDING_ID,
 phone_target: "0767973848",
 });

 trackingWindow.fbq?.("track", "Contact", {
 content_name: LANDING_ID,
 });
}

const getWeb3FormsMessage = (response: Web3FormsResponse | null): string | undefined =>
 response?.body?.message || response?.message || response?.error;

export default function BorneRechargeEssonne() {
 const [form, setForm] = useState<LeadFormState>({
 projectType: "",
 fullName: "",
 phone: "",
 postalCode: "",
 email: "",
 message: "",
 honeypot: "",
 });
 const [submitError, setSubmitError] = useState("");
 const [submitted, setSubmitted] = useState(false);
 const [submitting, setSubmitting] = useState(false);
 const [heroForm, setHeroForm] = useState<HeroLeadFormState>({
 fullName: "",
 phone: "",
 postalCode: "",
 honeypot: "",
 });
 const [heroSubmitError, setHeroSubmitError] = useState("");
 const [heroSubmitted, setHeroSubmitted] = useState(false);
 const [heroSubmitting, setHeroSubmitting] = useState(false);

 const web3formsAccessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim();

 const pageUrl = useMemo(() => {
 if (typeof window === "undefined") return "https://jm-elec.fr/borne-recharge-essonne";
 return window.location.href;
 }, []);

 const onFieldChange =
 (field: keyof LeadFormState) =>
 (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 setForm((current) => ({ ...current, [field]: event.target.value }));
 };

 const onHeroFieldChange =
 (field: keyof HeroLeadFormState) =>
 (event: ChangeEvent<HTMLInputElement>) => {
 setHeroForm((current) => ({ ...current, [field]: event.target.value }));
 };

 const submitHeroLead = async (event: FormEvent<HTMLFormElement>) => {
 event.preventDefault();
 setHeroSubmitError("");

 if (heroForm.honeypot) return;

 if (!web3formsAccessKey) {
 setHeroSubmitError("Configuration formulaire manquante. Appelez-nous au 07 67 97 38 48.");
 return;
 }

 if (!heroForm.fullName.trim() || !heroForm.phone.trim() || !heroForm.postalCode.trim()) {
 setHeroSubmitError("Renseignez nom, telephone et code postal.");
 return;
 }

 if (!/^[\d\s+()-]{8,20}$/.test(heroForm.phone.trim())) {
 setHeroSubmitError("Entrez un numero de telephone valide.");
 return;
 }

 setHeroSubmitting(true);

 const payload = new FormData();
 payload.set("access_key", web3formsAccessKey);
 payload.set("subject", "Lead HERO LP IRVE IDF - JM-ELEC");
 payload.set("from_name", heroForm.fullName.trim());
 payload.set("service", "borne-recharge-irve");
 payload.set("zone", "Ile-de-France");
 payload.set("source", "landing-irve-idf-hero-form");
 payload.set("page", pageUrl);
 payload.set("botcheck", heroForm.honeypot);
 payload.set("project_type", "Maison individuelle");
 payload.set("phone", heroForm.phone.trim());
 payload.set("postal_code", heroForm.postalCode.trim());
 payload.set(
 "message",
 [
 "Type de projet: Maison individuelle",
 `Nom: ${heroForm.fullName.trim()}`,
 `Telephone: ${heroForm.phone.trim()}`,
 `Code postal: ${heroForm.postalCode.trim()}`,
 "Source: Hero form",
 ].join("\n"),
 );

 try {
 const response = await fetch(WEB3FORMS_ENDPOINT, {
 method: "POST",
 body: payload,
 });

 const responseBody = (await response.json().catch(() => null)) as Web3FormsResponse | null;
 const ok = response.ok && responseBody?.success !== false;

 if (!ok) {
 setHeroSubmitError(
 getWeb3FormsMessage(responseBody) ||
 "Le service d'envoi est temporairement indisponible. Merci de nous appeler.",
 );
 setHeroSubmitting(false);
 return;
 }

 trackLeadSuccess();
 setHeroSubmitted(true);
 setHeroSubmitting(false);
 } catch {
 setHeroSubmitError("Le service d'envoi est temporairement indisponible. Appelez-nous au 07 67 97 38 48.");
 setHeroSubmitting(false);
 }
 };

 const submitLead = async (event: FormEvent<HTMLFormElement>) => {
 event.preventDefault();
 setSubmitError("");

 if (form.honeypot) return;

 if (!web3formsAccessKey) {
 setSubmitError("Configuration formulaire manquante. Appelez-nous au 07 67 97 38 48.");
 return;
 }

 if (!form.projectType || !form.fullName.trim() || !form.phone.trim() || !form.postalCode.trim()) {
 setSubmitError("Renseignez les champs obligatoires pour envoyer votre demande.");
 return;
 }

 if (!/^[\d\s+()-]{8,20}$/.test(form.phone.trim())) {
 setSubmitError("Entrez un numero de telephone valide.");
 return;
 }

 setSubmitting(true);

 const payload = new FormData();
 payload.set("access_key", web3formsAccessKey);
 payload.set("subject", "Lead LP IRVE IDF - JM-ELEC");
 payload.set("from_name", form.fullName.trim());
 payload.set("service", "borne-recharge-irve");
 payload.set("zone", "Ile-de-France");
 payload.set("source", "landing-irve-idf-oz-style");
 payload.set("page", pageUrl);
 payload.set("botcheck", form.honeypot);
 payload.set("project_type", form.projectType);
 payload.set("phone", form.phone.trim());
 payload.set("postal_code", form.postalCode.trim());
 payload.set("email", form.email.trim());
 payload.set(
 "message",
 [
 `Type de projet: ${form.projectType}`,
 `Nom: ${form.fullName.trim()}`,
 `Telephone: ${form.phone.trim()}`,
 `Code postal: ${form.postalCode.trim()}`,
 form.email.trim() ? `Email: ${form.email.trim()}` : "Email: non renseigne",
 form.message.trim() ? `Details: ${form.message.trim()}` : "Details: non renseignes",
 ].join("\n"),
 );

 try {
 const response = await fetch(WEB3FORMS_ENDPOINT, {
 method: "POST",
 body: payload,
 });

 const responseBody = (await response.json().catch(() => null)) as Web3FormsResponse | null;
 const ok = response.ok && responseBody?.success !== false;

 if (!ok) {
 setSubmitError(
 getWeb3FormsMessage(responseBody) ||
 "Le service d'envoi est temporairement indisponible. Merci de nous appeler.",
 );
 setSubmitting(false);
 return;
 }

 trackLeadSuccess();
 setSubmitted(true);
 setSubmitting(false);
 } catch {
 setSubmitError("Le service d'envoi est temporairement indisponible. Appelez-nous au 07 67 97 38 48.");
 setSubmitting(false);
 }
 };

 return (
 <div className="lp-irve-dark min-h-screen">
 <SEOHead
 title="Borne de recharge IRVE IDF - JM-ELEC"
 description="Installation borne de recharge IRVE en Ile-de-France. Devis gratuit, pose rapide, visuels reels de chantiers, accompagnement JM-ELEC."
 canonical="https://jm-elec.fr/borne-recharge-essonne"
 ogImage="https://jm-elec.fr/images/realisations/borne-jmelec-autel.png"
 />
 <JsonLd localBusiness faqItems={faqItems} />

 <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur">
 <div className="wide-container flex items-center justify-between py-2.5">
 <div className="flex items-center gap-3">
 <img src={logoLight} alt="JM-ELEC 91" className="h-8 w-auto sm:h-10" />
 <div className="hidden leading-tight sm:block">
 <p className="text-sm font-semibold">JM-ELEC 91</p>
 <p className="text-xs text-white/70">Installateur IRVE certifie - Ile-de-France</p>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <a href="tel:+33767973848" onClick={trackCallClick}>
 <Button variant="outline" size="sm" className="border-white/20 bg-transparent text-white hover:bg-white/10">
 <Phone className="mr-1.5 h-4 w-4" />
 07 67 97 38 48
 </Button>
 </a>
 <a href="#demande">
 <Button size="sm" className="bg-[#f5be32] text-[#02101f] hover:bg-[#ffd25a]">
 Devis gratuit
 </Button>
 </a>
 </div>
 </div>
 </header>

 <main>
 <section
 className="border-b border-white/10"
 style={{
 backgroundImage:
 "radial-gradient(circle at 90% 10%, rgba(245,190,50,0.32), transparent 35%), radial-gradient(circle at 10% 90%, rgba(245,190,50,0.18), transparent 35%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
 backgroundSize: "auto, auto, 44px 44px, 44px 44px",
 }}
 >
 <div className="wide-container py-16 md:py-20">
 <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
 <div>
 <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white/80">
 CERTIFIE IRVE - ILE-DE-FRANCE
 </p>
 <h1 className="max-w-xl text-5xl font-bold leading-[1.02] md:text-7xl">
 Votre borne de recharge
 <br />
 <span className="text-[#f5be32]">installee sous une semaine.</span>
 </h1>
 <p className="mt-6 max-w-xl text-lg text-white/75">
 Maison, Copropriete, entreprise. Etude, pose et mise en service par JM-ELEC.
 Devis gratuit avec un tarif clair.
 </p>
 <div className="mt-7 flex flex-wrap gap-3">
 <a href="#demande">
 <Button className="bg-[#f5be32] text-[#031323] hover:bg-[#ffd25a]">Obtenir mon devis</Button>
 </a>
 <a href="tel:+33767973848" onClick={trackCallClick}>
 <Button variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10">
 07 67 97 38 48
 </Button>
 </a>
 </div>
 <div className="mt-6 max-w-xl rounded-2xl border border-white/10 bg-[#171717]/90 p-4">
 <p className="text-xs uppercase tracking-[0.14em] text-white/55">Formulaire express - rappel sous 1h</p>
 {heroSubmitted ? (
 <p className="mt-2 text-sm text-white/80">Demande envoyee. Nous vous rappelons sous 1h.</p>
 ) : (
 <form onSubmit={submitHeroLead} className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
 <div className="hidden" aria-hidden="true">
 <input
 type="text"
 tabIndex={-1}
 autoComplete="off"
 value={heroForm.honeypot}
 onChange={onHeroFieldChange("honeypot")}
 />
 </div>
 <input
 value={heroForm.fullName}
 onChange={onHeroFieldChange("fullName")}
 className="rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none"
 placeholder="Nom"
 required
 />
 <input
 value={heroForm.phone}
 onChange={onHeroFieldChange("phone")}
 className="rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none"
 placeholder="Telephone"
 required
 />
 <input
 value={heroForm.postalCode}
 onChange={onHeroFieldChange("postalCode")}
 className="rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none"
 placeholder="Code postal"
 required
 />
 <Button
 type="submit"
 disabled={heroSubmitting}
 className="sm:col-span-3 bg-[#f5be32] text-[#031323] hover:bg-[#ffd25a]"
 >
 {heroSubmitting ? "Envoi..." : "Etre rappele sous 1h"}
 </Button>
 {heroSubmitError && <p className="sm:col-span-3 text-sm text-red-300">{heroSubmitError}</p>}
 </form>
 )}
 </div>
 <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
 <span className="inline-flex items-center gap-1">
 <Check className="h-4 w-4 text-[#f5be32]" /> Bornes 7,4 a 22 kW
 </span>
 <span className="inline-flex items-center gap-1">
 <Check className="h-4 w-4 text-[#f5be32]" /> Prix a partir de 999 EUR HT
 </span>
 <span className="inline-flex items-center gap-1">
 <Check className="h-4 w-4 text-[#f5be32]" /> Garantie 2 ans pose & materiel
 </span>
 </div>
 <div className="mt-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/45">
 Ils nous font confiance - Legrand - Hager - Daze - Schneider - Autel - La Borne Tricolore
 </div>
 </div>

 <div className="relative">
 <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1d] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)]">
 <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/70">
 <span>Installation recente - JM-ELEC</span>
 <span>IRVE</span>
 </div>
 <img
 src="/images/realisations/borne-jmelec-autel.png"
 alt="Installation borne par JM-ELEC"
 className="h-[350px] w-full object-cover"
 />
 </div>
 <div className="absolute -bottom-5 right-4 rounded-2xl border border-white/10 bg-[#1b1b1b]/95 p-4 shadow-2xl">
 <p className="text-4xl font-bold text-[#f5be32]">+200</p>
 <p className="text-xs text-white/70">points de charge installes en IDF</p>
 <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
 <span className="text-white/50">Note Google</span>
 <span className="text-right font-semibold">5/5</span>
 <span className="text-white/50">Delai moyen</span>
 <span className="text-right font-semibold">moins de 7 jours</span>
 </div>
 </div>
 </div>
 </div>
 </div>
</section>

<section className="border-b border-white/10 bg-[#111111]">
<div className="wide-container grid grid-cols-2 gap-0 md:grid-cols-5">
<TopMetric title="IRVE" subtitle="Qualifelec niveau expert" />
 <TopMetric title="Sous 1 semaine" subtitle="delai d'installation" />
 <TopMetric title="100%" subtitle="multi-marques" />
 <TopMetric title="IDF" subtitle="toute la region couverte" />
 <TopMetric title="2 ans" subtitle="garantie pose & materiel" />
</div>
</section>

 <section className="border-b border-white/10 bg-[#101010]">
 <div className="wide-container py-8">
 <p className="text-xs uppercase tracking-[0.16em] text-white/45">Certifications & partenaires</p>
 <div className="mt-4 flex flex-wrap items-center gap-4 md:gap-8">
 <img src="/images/landing/logo-qualifelec.png" alt="Logo Qualifelec" className="h-12 w-auto rounded-md bg-white p-1" />
 <img src="/images/landing/logo-rge.png" alt="Logo RGE" className="h-12 w-auto rounded-md bg-white p-1" />
 <img src="/images/landing/logo-advenir.webp" alt="Logo Advenir" className="h-12 w-auto rounded-md bg-white p-1" />
 </div>
 </div>
 </section>

 <section className="wide-container py-20">
 <SectionTag value="01 - Solutions" />
 <h2 className="mt-5 max-w-2xl text-5xl font-bold leading-tight">
 Une solution adaptee
 <br />
 <span className="text-[#f5be32]">a chaque projet.</span>
 </h2>
 <p className="mt-5 max-w-2xl text-lg text-white/70">
 Du pavillon individuel au parking d'entreprise, on dimensionne, installe et met en service.
 </p>

 <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
 {solutionCards.map((card) => (
 <article
 key={card.title}
 className={`rounded-2xl border p-6 ${card.highlight ? "border-[#f5be32]/45 bg-[#202020]" : "border-white/10 bg-[#171717]"}`}
 >
 <p className="text-sm font-semibold tracking-[0.18em] text-[#f5be32]">{card.id}</p>
 {card.highlight && (
 <span className="mt-2 inline-flex rounded-full bg-[#f5be32] px-2 py-0.5 text-[10px] font-bold text-[#02101f]">
 LE PLUS DEMANDE
 </span>
 )}
 <h3 className="mt-3 text-3xl font-semibold">{card.title}</h3>
 <p className="mt-3 text-sm text-white/70">{card.text}</p>
 <ul className="mt-6 space-y-2">
 {card.bullets.map((item) => (
 <li key={item} className="flex items-start gap-2 text-sm">
 <CheckCircle className="mt-0.5 h-4 w-4 text-[#f5be32]" />
 {item}
 </li>
 ))}
 </ul>
 <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-3">
 <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{card.priceTitle}</p>
 <div className="mt-1 flex items-center justify-between">
 <p className="text-3xl font-bold">{card.price}</p>
 <p className="text-xs text-white/55">{card.priceInfo}</p>
 </div>
 </div>
 </article>
 ))}
 </div>
 </section>

 <section className="border-y border-white/10 bg-[#141414]">
 <div className="wide-container py-20">
 <SectionTag value="02 - Methode" />
 <h2 className="mt-6 text-center text-6xl font-bold leading-[1.05]">
 Quatre etapes,
 <br />
 <span className="text-[#f5be32]">aucune surprise.</span>
 </h2>
 <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
 {methodSteps.map((step) => (
 <div key={step.id} className="border-l border-white/15 pl-4">
 <p className="text-sm font-semibold tracking-[0.2em] text-[#f5be32]">{step.id}</p>
 <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
 <p className="mt-3 text-sm text-white/65">{step.text}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="wide-container py-20">
 <SectionTag value="03 - Financement" />
 <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
 <div>
 <h2 className="text-5xl font-bold leading-tight">
 Les conditions,
 <br />
 <span className="text-[#f5be32]">on les annonce avant.</span>
 </h2>
 <p className="mt-4 max-w-lg text-lg text-white/70">
 Notre cible principale est la maison individuelle. Chez ce profil, la TVA a 5,5 % est la base la plus utile.
 </p>
 </div>
 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 <FinanceCard title="Particuliers maison" value="TVA 5,5%" text="Sous conditions d'eligibilite et de facturation conforme." />
 <FinanceCard title="Maison individuelle" value="ADVENIR" text="Pas de prime ADVENIR appliquee sur cette cible maison." />
 <FinanceCard title="Copropriete" value="Sur etude" text="Certaines aides peuvent exister selon la configuration collective." />
 <FinanceCard title="Entreprise" value="Sur etude" text="Aides et dispositifs variables selon usage et contexte." />
 </div>
 </div>
 </section>

 <section className="wide-container py-20">
 <SectionTag value="04 - Realisations" />
 <h2 className="mt-5 text-6xl font-bold leading-tight">
 Quelques chantiers
 <br />
 <span className="text-[#f5be32]">recents.</span>
 </h2>
 <p className="mt-4 max-w-3xl text-lg text-white/70">Photos reelles de poses JM-ELEC en Ile-de-France.</p>

 <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
 <MosaicImage
 className="md:col-span-2 md:row-span-2"
 src="/images/realisations/borne-jmelec-autel.png"
 alt="Borne Autel"
 caption="Maison - borne Autel"
 />
 <MosaicImage src="/images/realisations/borne-jmelec-schneider.png" alt="Borne Schneider" caption="Facade - borne Schneider" />
 <MosaicImage src="/images/realisations/borne-jmelec-hager.png" alt="Borne Hager" caption="Murale - borne Hager" />
 <MosaicImage src="/images/realisations/borne-massy-16-9.webp" alt="Borne en maison" caption="Pose en maison individuelle" />
 <MosaicImage src="/images/services/borne-recharge-irve-16-9.webp" alt="Borne exterieure" caption="Installation exterieure" />
 </div>
 </section>

 <section className="border-y border-white/10 bg-[#141414]">
 <div className="wide-container py-20">
 <SectionTag value="05 - Avis" />
 <h2 className="mt-5 text-6xl font-bold leading-tight">
 5 / 5 sur Google.
 <br />
 <span className="text-[#f5be32]">Voici pourquoi.</span>
 </h2>
 <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
 {testimonials.map((item) => (
 <article key={item.name} className="rounded-2xl border border-white/10 bg-[#1c1c1c] p-6">
 <p className="text-[#f5be32]">*****</p>
 <p className="mt-4 text-white/90">"{item.text}"</p>
 <p className="mt-4 text-sm font-semibold">{item.name}</p>
 <p className="text-xs text-white/55">{item.meta}</p>
 </article>
 ))}
 </div>
 </div>
 </section>

 <section className="wide-container py-20">
 <SectionTag value="06 - Zone d'intervention" />
 <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
 <div>
 <h2 className="text-5xl font-bold leading-tight">
 Toute l'
 <span className="text-[#f5be32]">Ile-de-France</span>, 75 a 95.
 </h2>
 <p className="mt-4 max-w-xl text-lg text-white/70">
 Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Seine-et-Marne, Yvelines, Essonne, Val-d'Oise.
 </p>
 <div className="mt-6 flex flex-wrap gap-2">
 {idfDepartments.map((dep) => (
 <span key={dep} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
 {dep}
 </span>
 ))}
 </div>
 </div>
 <div className="rounded-3xl border border-white/10 bg-[#151515] p-8">
 <RadarVisual />
 </div>
 </div>
 </section>

 <section id="demande" className="border-y border-white/10 bg-[#141414]">
 <div className="wide-container grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
 <div>
 <SectionTag value="Demande de devis" />
 <h2 className="mt-5 text-6xl font-bold leading-tight">
 Un projet de borne ?
 <br />
 <span className="text-[#f5be32]">Rappel sous 1 h.</span>
 </h2>
 <p className="mt-4 max-w-xl text-lg text-white/70">
 Decrivez votre besoin. Nous revenons avec un chiffrage clair et une proposition adaptee.
 </p>
<ul className="mt-6 space-y-2 text-sm text-white/70">
<li>- Ile-de-France: 75 / 77 / 78 / 91 / 92 / 93 / 94 / 95</li>
<li>- Multi-marques: Legrand, Hager, Daze, Schneider, Autel, La Borne Tricolore.</li>
 <li>- Interventions recentes: Massy, Arpajon, Bretigny, Evry.</li>
<li>- 07 67 97 38 48 - contact@jm-elec.fr</li>
</ul>
 </div>

 <div className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-6 md:p-7">
 {submitted ? (
 <div className="rounded-2xl border border-[#f5be32]/35 bg-[#232323] p-6 text-center">
 <CheckCircle className="mx-auto h-10 w-10 text-[#f5be32]" />
 <h3 className="mt-3 text-2xl font-semibold">Demande envoyee</h3>
 <p className="mt-2 text-white/75">Merci. Rappel sous 1 h sur le numero renseigne.</p>
 <a href="tel:+33767973848" onClick={trackCallClick} className="mt-4 inline-block text-[#f5be32] underline">
 Appeler maintenant: {FALLBACK_PHONE}
 </a>
 </div>
 ) : (
 <form onSubmit={submitLead} className="space-y-4">
 <div className="hidden" aria-hidden="true">
 <input
 type="text"
 tabIndex={-1}
 autoComplete="off"
 value={form.honeypot}
 onChange={onFieldChange("honeypot")}
 />
 </div>
 <label className="block text-xs uppercase tracking-[0.14em] text-white/50">
 Vous etes
 <select
 value={form.projectType}
 onChange={onFieldChange("projectType")}
 className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none"
 required
 >
 <option value="">Choisissez...</option>
 <option value="Maison individuelle">Maison individuelle</option>
 <option value="Copropriete">Copropriete</option>
 <option value="Entreprise">Entreprise</option>
 </select>
 </label>

 <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
 <label className="block text-xs uppercase tracking-[0.14em] text-white/50">
 Prenom & nom
 <input
 value={form.fullName}
 onChange={onFieldChange("fullName")}
 className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none"
 placeholder="Ex: Julien Martin"
 required
 />
 </label>
 <label className="block text-xs uppercase tracking-[0.14em] text-white/50">
 Telephone
 <input
 value={form.phone}
 onChange={onFieldChange("phone")}
 className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none"
 placeholder="06 12 34 56 78"
 required
 />
 </label>
 </div>

 <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
 <label className="block text-xs uppercase tracking-[0.14em] text-white/50">
 Code postal
 <input
 value={form.postalCode}
 onChange={onFieldChange("postalCode")}
 className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none"
 placeholder="91XXX"
 required
 />
 </label>
 <label className="block text-xs uppercase tracking-[0.14em] text-white/50">
 Email (optionnel)
 <input
 value={form.email}
 onChange={onFieldChange("email")}
 className="mt-2 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none"
 placeholder="vous@email.fr"
 />
 </label>
 </div>

 <label className="block text-xs uppercase tracking-[0.14em] text-white/50">
 Details (optionnel)
 <textarea
 value={form.message}
 onChange={onFieldChange("message")}
 className="mt-2 min-h-24 w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white outline-none"
 placeholder="Ex: garage, environ 12m entre tableau et emplacement..."
 />
 </label>

 <Button type="submit" disabled={submitting} className="w-full bg-[#f5be32] text-[#011220] hover:bg-[#ffd25a]">
 {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
 </Button>

 <p className="text-xs text-white/50">Rappel sous 1 h ouvrable. Vos donnees ne sont pas revendues.</p>
 {submitError && <p className="text-sm text-red-300">{submitError}</p>}
 </form>
 )}
 </div>
 </div>
 </section>

 <section className="wide-container py-20">
 <SectionTag value="07 - FAQ" />
 <h2 className="mt-5 text-6xl font-bold leading-tight">
 On vous dit
 <span className="text-[#f5be32]"> tout.</span>
 </h2>
 <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
 {faqItems.map((item) => (
 <details key={item.question} className="group rounded-xl border border-white/12 bg-[#1a1a1a] p-4">
 <summary className="list-none cursor-pointer text-lg font-semibold">
 <span className="inline-flex w-full items-center justify-between">
 {item.question}
 <span className="ml-4 text-[#f5be32] transition-transform group-open:rotate-45">+</span>
 </span>
 </summary>
 <p className="mt-3 text-sm text-white/70">{item.answer}</p>
 </details>
 ))}
 </div>
 </section>
 </main>

 <footer className="border-t border-white/10 bg-[#0f0f0f]">
 <div className="wide-container py-10">
 <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
 <div>
 <img src={logoLight} alt="JM-ELEC" className="h-8 w-auto" />
 <p className="mt-3 text-sm text-white/65">
 Installateur IRVE certifie. Bornes de recharge pour particuliers, coproprietes et entreprises.
 </p>
 </div>
 <div>
 <p className="text-xs uppercase tracking-[0.14em] text-white/45">Contact</p>
 <p className="mt-2 text-sm">07 67 97 38 48</p>
 <p className="text-sm text-white/70">contact@jm-elec.fr</p>
 <p className="mt-1 text-sm text-white/70">Ile-de-France - 75 / 77 / 78 / 91 / 92 / 93 / 94 / 95</p>
 </div>
 <div>
 <p className="text-xs uppercase tracking-[0.14em] text-white/45">Solutions</p>
 <ul className="mt-2 space-y-1 text-sm text-white/70">
 <li>Maison individuelle</li>
 <li>Copropriete</li>
 <li>Entreprise & flotte</li>
 </ul>
 </div>
 <div>
 <p className="text-xs uppercase tracking-[0.14em] text-white/45">Ressources</p>
 <ul className="mt-2 space-y-1 text-sm text-white/70">
 <li>
 <Link to="/mentions-legales" className="hover:text-[#f5be32]">
 Mentions legales
 </Link>
 </li>
 <li>
 <Link to="/politique-de-confidentialite" className="hover:text-[#f5be32]">
 Politique de confidentialite
 </Link>
 </li>
 <li>
 <Link to="/cookies" className="hover:text-[#f5be32]">
 Cookies
 </Link>
 </li>
 </ul>
 </div>
 </div>

<div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6 text-sm">
 <span className="rounded-full border border-white/15 px-3 py-1">RGE</span>
<span className="rounded-full border border-white/15 px-3 py-1">Installateur certifie IRVE</span>
</div>
 </div>
 </footer>

 <a
 href="tel:+33767973848"
 onClick={trackCallClick}
 className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#f5be32] px-4 py-3 text-sm font-semibold text-[#01121f] shadow-lg md:hidden"
 >
 <Phone className="h-4 w-4" />
 Appeler
 </a>
 </div>
 );
}

function SectionTag({ value }: { value: string }) {
 return (
 <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white/70">
 {value}
 </span>
 );
}

function TopMetric({ title, subtitle }: { title: string; subtitle: string }) {
 return (
 <div className="border-r border-white/10 px-4 py-5 last:border-r-0">
 <p className="text-4xl font-bold">{title}</p>
 <p className="text-xs uppercase tracking-[0.16em] text-white/50">{subtitle}</p>
 </div>
 );
}

function FinanceCard({ title, value, text }: { title: string; value: string; text: string }) {
 return (
 <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-5">
 <p className="text-xs uppercase tracking-[0.16em] text-white/45">{title}</p>
 <p className="mt-1 text-4xl font-bold text-[#f5be32]">{value}</p>
 <p className="mt-2 text-sm text-white/70">{text}</p>
 </div>
 );
}

function MosaicImage({
 src,
 alt,
 caption,
 className = "",
}: {
 src: string;
 alt: string;
 caption: string;
 className?: string;
}) {
 return (
 <figure className={`overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] ${className}`}>
 <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
 <figcaption className="px-3 py-2 text-xs uppercase tracking-[0.12em] text-white/70">{caption}</figcaption>
 </figure>
 );
}

function RadarVisual() {
 return (
 <div className="relative mx-auto h-[280px] w-[280px]">
 <div className="absolute inset-0 rounded-full border border-[#f5be32]/20" />
 <div className="absolute inset-6 rounded-full border border-[#f5be32]/20" />
 <div className="absolute inset-12 rounded-full border border-[#f5be32]/20" />
 <div className="absolute inset-20 rounded-full border border-[#f5be32]/20" />
 <div className="absolute inset-[45%] rounded-full bg-[#f5be32]" />
 {[
 { top: "26%", left: "54%", label: "77" },
 { top: "34%", left: "32%", label: "78" },
 { top: "50%", left: "72%", label: "94" },
 { top: "61%", left: "25%", label: "91" },
 ].map((dot) => (
 <div key={dot.label} className="absolute" style={{ top: dot.top, left: dot.left }}>
 <div className="h-2 w-2 rounded-full bg-[#f5be32]" />
 <p className="mt-1 text-[10px] text-white/70">{dot.label}</p>
 </div>
 ))}
 <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white/60">PARIS</p>
 </div>
 );
}
