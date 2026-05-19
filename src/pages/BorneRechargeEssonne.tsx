import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { ensureEmbedSocialWidgets } from "@/lib/embedSocial";
import logoLight from "@/assets/logo-jm-elec.png";

const CONSENT_KEY = "jm-cookie-consent";
const LANDING_ID = "lp_irve_essonne";
const FALLBACK_PHONE = "07 67 97 38 48";
const CALL_PHONE = "+33767973848";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const GOOGLE_REVIEWS_URL = "https://share.google/LXQprFtKu8Yuk2ZEp";
const WHATSAPP_MESSAGE =
  "Bonjour, je souhaite vous envoyer une photo de mon tableau électrique pour vérifier la faisabilité de mon projet.";

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
  error?: string;
};

type QuizStep = 1 | 2 | 3;

type LeadFormState = {
  housingType: string;
  installationPlace: string;
  postalCode: string;
  fullName: string;
  phone: string;
  email: string;
  honeypot: string;
};

const TOTAL_STEPS = 3;

const faqItems = [
  {
    question: "Faut-il obligatoirement un installateur IRVE ?",
    answer:
      "Oui, pour une borne supérieure à 3,7 kW. C'est indispensable pour une installation conforme et sécurisée.",
  },
  {
    question: "Quel délai pour une installation en maison ?",
    answer:
      "Après validation du devis, la pose est généralement programmée sous une semaine selon nos disponibilités.",
  },
  {
    question: "Quelles aides sont disponibles en Île-de-France ?",
    answer:
      "Pour la maison individuelle, nous appliquons principalement la TVA réduite à 5,5 % lorsque les conditions sont réunies.",
  },
];

const housingOptions = ["Maison individuelle", "Copropriété", "Entreprise"];

const installationOptions = ["Intérieur", "Extérieur"];

const recentProjects = [
  {
    src: "/images/realisations/borne-jmelec-schneider.png",
    alt: "Borne Schneider installée par JM-ELEC",
    caption: "Brétigny-sur-Orge (91) - Borne Schneider 7.4 kW - Mars 2026",
  },
  {
    src: "/images/realisations/borne-jmelec-hager.png",
    alt: "Borne Hager installée par JM-ELEC",
    caption: "Sainte-Geneviève-des-Bois (91) - Borne Hager 7.4 kW - Avril 2026",
  },
  {
    src: "/images/realisations/borne-jmelec-autel.png",
    alt: "Borne Autel installée par JM-ELEC",
    caption: "Arpajon (91) - Borne Autel 11 kW - Mai 2026",
  },
];

const brands = [
  "Legrand",
  "Hager",
  "Daze",
  "Schneider",
  "Autel",
  "La Borne Tricolore",
];

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
    channel: "call",
  });
}

function trackWhatsappClick() {
  if (typeof window === "undefined" || !hasTrackingConsent()) return;
  const trackingWindow = window as TrackingWindow;

  trackingWindow.gtag?.("event", "click_whatsapp", {
    lead_source: "facebook_ads",
    landing_id: LANDING_ID,
    channel: "whatsapp",
  });

  trackingWindow.fbq?.("trackCustom", "WhatsAppClick", {
    content_name: LANDING_ID,
  });
}

const getWeb3FormsMessage = (
  response: Web3FormsResponse | null,
): string | undefined => response?.body?.message || response?.message || response?.error;

function normalizeCity(raw: string | null): string {
  if (!raw) return "";

  const cleaned = raw
    .trim()
    .replace(/\+/g, " ")
    .replace(/[<>{}[\]]/g, "")
    .replace(/[^a-zA-Z0-9\s'-]/g, "");

  if (!cleaned) return "";

  return cleaned
    .split(/\s+/)
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1).toLowerCase())
    .join(" ");
}

function toWhatsappUrl() {
  return `https://wa.me/33767973848?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export default function BorneRechargeEssonne() {
  const { search } = useLocation();
  const [step, setStep] = useState<QuizStep>(1);
  const [stepError, setStepError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<LeadFormState>({
    housingType: "",
    installationPlace: "",
    postalCode: "",
    fullName: "",
    phone: "",
    email: "",
    honeypot: "",
  });

  const web3formsAccessKey = (
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined
  )?.trim();

  useEffect(() => {
    ensureEmbedSocialWidgets();
  }, []);

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "https://jm-elec.fr/borne-recharge-essonne";
    }
    return window.location.href;
  }, []);

  const cityInQuery = useMemo(() => {
    const params = new URLSearchParams(search);
    return (
      normalizeCity(params.get("ville")) ||
      normalizeCity(params.get("city")) ||
      normalizeCity(params.get("localite")) ||
      normalizeCity(params.get("zone"))
    );
  }, [search]);

  const heroTitle = cityInQuery
    ? `Votre borne de recharge installée sous une semaine à ${cityInQuery}`
    : "Votre borne de recharge installée sous une semaine en Île-de-France";

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  const onFieldChange =
    (field: keyof LeadFormState) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      if (stepError) setStepError("");
      if (submitError) setSubmitError("");
    };

  const pickOption = (field: "housingType" | "installationPlace", value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (stepError) setStepError("");
  };

  const validateStep = (targetStep: QuizStep): boolean => {
    if (targetStep === 1) {
      if (!form.housingType) {
        setStepError("Sélectionnez votre type de logement pour continuer.");
        return false;
      }
      return true;
    }

    if (targetStep === 2) {
      if (!form.installationPlace) {
        setStepError("Sélectionnez si l'installation est en intérieur ou extérieur.");
        return false;
      }
      if (!/^\d{5}$/.test(form.postalCode.trim())) {
        setStepError("Le code postal doit contenir exactement 5 chiffres.");
        return false;
      }
      return true;
    }

    return true;
  };

  const goToNextStep = () => {
    const canGo = validateStep(step);
    if (!canGo) return;

    setStepError("");
    setStep((current) => {
      if (current === 1) return 2;
      if (current === 2) return 3;
      return current;
    });
  };

  const goToPreviousStep = () => {
    setStepError("");
    setStep((current) => {
      if (current === 3) return 2;
      if (current === 2) return 1;
      return current;
    });
  };

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setStepError("");

    if (form.honeypot) return;

    if (!validateStep(2)) {
      setStep(2);
      return;
    }

    if (!form.fullName.trim() || !form.phone.trim() || !form.email.trim()) {
      setSubmitError("Renseignez nom, téléphone et email pour recevoir le devis.");
      return;
    }

    if (!/^[\d\s+()-]{8,20}$/.test(form.phone.trim())) {
      setSubmitError("Entrez un numéro de téléphone valide.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setSubmitError("Entrez une adresse email valide.");
      return;
    }

    if (!web3formsAccessKey) {
      setSubmitError(
        "Configuration formulaire manquante. Appelez-nous au 07 67 97 38 48.",
      );
      return;
    }

    setSubmitting(true);

    const payload = new FormData();
    payload.set("access_key", web3formsAccessKey);
    payload.set("subject", "Lead LP IRVE IDF - Quiz CRO");
    payload.set("from_name", form.fullName.trim());
    payload.set("service", "borne-recharge-irve");
    payload.set("zone", cityInQuery ? `Île-de-France - ${cityInQuery}` : "Île-de-France");
    payload.set("source", "landing-irve-idf-quiz");
    payload.set("page", pageUrl);
    payload.set("botcheck", form.honeypot);
    payload.set("project_type", form.housingType);
    payload.set("installation_place", form.installationPlace);
    payload.set("postal_code", form.postalCode.trim());
    payload.set("phone", form.phone.trim());
    payload.set("email", form.email.trim());
    payload.set(
      "message",
      [
        `Type de logement: ${form.housingType}`,
        `Lieu d'installation: ${form.installationPlace}`,
        `Code postal: ${form.postalCode.trim()}`,
        `Nom: ${form.fullName.trim()}`,
        `Téléphone: ${form.phone.trim()}`,
        `Email: ${form.email.trim()}`,
        `Ville DKI: ${cityInQuery || "non renseignée"}`,
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
      setSubmitError(
        "Le service d'envoi est temporairement indisponible. Appelez-nous au 07 67 97 38 48.",
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="lp-irve-dark min-h-screen bg-zinc-950 text-white">
      <SEOHead
        title="Borne de recharge IRVE IDF - JM-ELEC"
        description="Installation borne de recharge IRVE en Île-de-France. Devis gratuit, installation sous une semaine, accompagnement par installateur certifié."
        canonical="https://jm-elec.fr/borne-recharge-essonne"
        ogImage="https://jm-elec.fr/images/realisations/borne-jmelec-autel.png"
      />
      <JsonLd localBusiness faqItems={faqItems} />

      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="wide-container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={logoLight} alt="JM-ELEC 91" className="h-8 w-auto sm:h-10" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">JM-ELEC 91</p>
              <p className="text-xs text-zinc-400">
                Installateur IRVE certifié - Intervention IDF
              </p>
            </div>
          </div>
          <a
            href={`tel:${CALL_PHONE}`}
            onClick={trackCallClick}
            className="inline-flex min-h-12 items-center rounded-lg border border-zinc-700 px-4 text-sm font-semibold text-white hover:border-zinc-500"
          >
            <Phone className="mr-2 h-4 w-4" />
            {FALLBACK_PHONE}
          </a>
        </div>
      </header>

      <main>
        <section
          className="border-b border-zinc-800"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(250,204,21,0.18), transparent 35%), radial-gradient(circle at 100% 100%, rgba(250,204,21,0.12), transparent 30%)",
          }}
        >
          <div className="wide-container py-12 md:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-zinc-300">
                  INSTALLATION IRVE EN ÎLE-DE-FRANCE
                </p>
                <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight md:text-6xl">
                  {heroTitle}
                </h1>
                <p className="mt-4 max-w-xl text-lg text-zinc-300">
                  Devis gratuit et transparent sous 24h. Places limitées pour une
                  installation cette semaine.
                </p>
                <ul className="mt-7 space-y-3 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                    Plus de 200 bornes installées en maison individuelle.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                    Délai moyen de pose: moins de 7 jours.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                    Marques installées: {brands.join(", ")}.
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm text-zinc-300">
                    Certifications: RGE, Qualifelec IRVE.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <img
                      src="/images/landing/logo-qualifelec.png"
                      alt="Logo Qualifelec"
                      className="h-12 w-auto rounded bg-white p-1"
                    />
                    <img
                      src="/images/landing/logo-rge.png"
                      alt="Logo RGE"
                      className="h-12 w-auto rounded bg-white p-1"
                    />
                    <img
                      src="/images/landing/logo-advenir.webp"
                      alt="Logo Advenir"
                      className="h-12 w-auto rounded bg-white p-1"
                    />
                  </div>
                </div>
              </div>

              <div id="configurateur" className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 md:p-7">
                {submitted ? (
                  <div className="rounded-2xl border border-yellow-400/35 bg-zinc-950 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-yellow-400" />
                    <h2 className="mt-3 text-2xl font-semibold">Demande envoyée</h2>
                    <p className="mt-3 text-zinc-300">
                      Merci. Un expert vous recontacte sous 24h avec un chiffrage clair.
                    </p>
                    <a
                      href={`tel:${CALL_PHONE}`}
                      onClick={trackCallClick}
                      className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-4 text-sm font-semibold text-zinc-950 hover:bg-yellow-300"
                    >
                      Appeler maintenant: {FALLBACK_PHONE}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={submitLead} noValidate>
                    <div className="mb-5">
                      <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
                        <span>Étape {step} sur 3</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800">
                        <div
                          className="h-2 rounded-full bg-yellow-400 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.22 }}
                      >
                        {step === 1 && (
                          <div>
                            <h2 className="text-2xl font-bold leading-tight">
                              Quel est votre type de logement ?
                            </h2>
                            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                              {housingOptions.map((option) => (
                                <ChoiceButton
                                  key={option}
                                  label={option}
                                  selected={form.housingType === option}
                                  onClick={() => pickOption("housingType", option)}
                                />
                              ))}
                            </div>
                            <div className="mt-6">
                              <Button
                                type="button"
                                onClick={goToNextStep}
                                className="min-h-12 w-full bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
                              >
                                Continuer
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {step === 2 && (
                          <div>
                            <h2 className="text-2xl font-bold leading-tight">
                              Où se situe l&apos;installation ?
                            </h2>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                              {installationOptions.map((option) => (
                                <ChoiceButton
                                  key={option}
                                  label={option}
                                  selected={form.installationPlace === option}
                                  onClick={() => pickOption("installationPlace", option)}
                                />
                              ))}
                            </div>

                            <label className="mt-4 block text-sm font-medium text-zinc-300">
                              Code postal
                              <input
                                inputMode="numeric"
                                autoComplete="postal-code"
                                pattern="\d{5}"
                                maxLength={5}
                                value={form.postalCode}
                                onChange={onFieldChange("postalCode")}
                                className="mt-2 min-h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-yellow-400"
                                placeholder="91220"
                                required
                              />
                            </label>

                            <div className="mt-6 flex gap-3">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={goToPreviousStep}
                                className="min-h-12 flex-1 border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                              >
                                Retour
                              </Button>
                              <Button
                                type="button"
                                onClick={goToNextStep}
                                className="min-h-12 flex-1 bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
                              >
                                Continuer
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {step === 3 && (
                          <div>
                            <h2 className="text-2xl font-bold leading-tight">
                              Dernière étape ! Nous préparons votre chiffrage.
                            </h2>
                            <div className="mt-4 grid grid-cols-1 gap-3">
                              <div className="hidden" aria-hidden="true">
                                <input
                                  type="text"
                                  tabIndex={-1}
                                  autoComplete="off"
                                  value={form.honeypot}
                                  onChange={onFieldChange("honeypot")}
                                />
                              </div>
                              <label className="text-sm font-medium text-zinc-300">
                                Prénom / Nom
                                <input
                                  autoComplete="name"
                                  value={form.fullName}
                                  onChange={onFieldChange("fullName")}
                                  className="mt-2 min-h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-yellow-400"
                                  placeholder="Ex: Julien Martin"
                                  required
                                />
                              </label>
                              <label className="text-sm font-medium text-zinc-300">
                                Téléphone
                                <input
                                  autoComplete="tel"
                                  value={form.phone}
                                  onChange={onFieldChange("phone")}
                                  className="mt-2 min-h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-yellow-400"
                                  placeholder="06 12 34 56 78"
                                  required
                                />
                              </label>
                              <label className="text-sm font-medium text-zinc-300">
                                Email
                                <input
                                  autoComplete="email"
                                  value={form.email}
                                  onChange={onFieldChange("email")}
                                  className="mt-2 min-h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white outline-none transition focus:border-yellow-400"
                                  placeholder="vous@email.fr"
                                  required
                                />
                              </label>
                            </div>

                            <div className="mt-6 flex gap-3">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={goToPreviousStep}
                                className="min-h-12 flex-1 border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                              >
                                Retour
                              </Button>
                              <Button
                                type="submit"
                                disabled={submitting}
                                className="min-h-12 flex-1 bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
                              >
                                {submitting
                                  ? "Envoi..."
                                  : "Obtenir mon devis gratuit sous 24h"}
                              </Button>
                            </div>

                            <p className="mt-4 text-xs text-zinc-400">
                              En validant, vous acceptez notre{" "}
                              <Link
                                to="/politique-de-confidentialite"
                                className="underline hover:text-zinc-200"
                              >
                                politique de confidentialité
                              </Link>
                              . Données sécurisées.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {stepError && <p className="mt-4 text-sm text-red-300">{stepError}</p>}
                    {submitError && <p className="mt-4 text-sm text-red-300">{submitError}</p>}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-12">
          <div className="wide-container grid grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard title="Sous 1 semaine" subtitle="délai moyen de pose" />
            <MetricCard title="24h" subtitle="devis clair et détaillé" />
            <MetricCard title="200+" subtitle="bornes installées en IDF" />
            <MetricCard title="5/5" subtitle="avis Google vérifiables" />
          </div>
        </section>

        <section className="wide-container py-16 md:py-20">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold md:text-5xl">
              Chantiers récents en <span className="text-yellow-400">Île-de-France</span>
            </h2>
            <a
              href={`tel:${CALL_PHONE}`}
              onClick={trackCallClick}
              className="hidden min-h-12 items-center rounded-lg bg-yellow-400 px-4 text-sm font-semibold text-zinc-950 hover:bg-yellow-300 md:inline-flex"
            >
              Appeler un expert
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Photos réelles et récentes de nos installations. Chaque chantier est réalisé
            par un électricien certifié IRVE.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {recentProjects.map((project) => (
              <figure
                key={project.caption}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-zinc-300">
                  {project.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900 py-16 md:py-20">
          <div className="wide-container">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold md:text-5xl">Les avis de nos clients</h2>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center rounded-lg border border-zinc-700 px-4 text-sm font-semibold text-zinc-200 hover:border-zinc-500"
              >
                Note vérifiée: <span className="ml-2 text-yellow-400">5/5 sur Google</span>
              </a>
            </div>
            <p className="mt-4 text-zinc-400">
              Cliquez sur la note pour vérifier les avis directement sur Google.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 md:p-5">
              <div
                className="embedsocial-hashtag min-h-[220px]"
                data-ref="1653ac9d2f797da158f82b9a3cb3a82a625a4d39"
              />
            </div>
          </div>
        </section>

        <section className="wide-container py-16 md:py-20">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Zone d&apos;intervention: toute l&apos;Île-de-France
                </h2>
                <p className="mt-3 text-zinc-400">
                  Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91),
                  Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94),
                  Val-d&apos;Oise (95).
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm">
                  {["75", "77", "78", "91", "92", "93", "94", "95"].map((dep) => (
                    <span
                      key={dep}
                      className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-zinc-300"
                    >
                      {dep}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-yellow-400" />
                  <p className="font-semibold text-white">Réassurance immédiate</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                  <li>- Intervention sous une semaine selon planning.</li>
                  <li>- Devis détaillé sous 24h.</li>
                  <li>- TVA 5,5% pour la maison individuelle (éligibilité légale).</li>
                  <li>- Accompagnement du premier appel à la mise en service.</li>
                </ul>
                <a
                  href="#configurateur"
                  className="mt-5 inline-flex min-h-12 items-center rounded-lg bg-yellow-400 px-4 text-sm font-semibold text-zinc-950 hover:bg-yellow-300"
                >
                  Lancer mon devis
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="wide-container py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <img src={logoLight} alt="JM-ELEC" className="h-8 w-auto" />
              <p className="mt-3 text-sm text-zinc-400">
                Installateur IRVE certifié en Île-de-France.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Contact</p>
              <p className="mt-2 text-sm text-white">{FALLBACK_PHONE}</p>
              <p className="text-sm text-zinc-300">contact@jm-elec.fr</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Accès direct</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                <li>
                  <a href="#configurateur" className="hover:text-white">
                    Formulaire devis
                  </a>
                </li>
                <li>
                  <a href={`tel:${CALL_PHONE}`} onClick={trackCallClick} className="hover:text-white">
                    Appeler un expert
                  </a>
                </li>
                <li>
                  <a
                    href={toWhatsappUrl()}
                    onClick={trackWhatsappClick}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white"
                  >
                    Envoyer une photo WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Légal</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                <li>
                  <Link to="/mentions-legales" className="hover:text-white">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link to="/politique-de-confidentialite" className="hover:text-white">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-900/95 p-2 backdrop-blur md:hidden">
        <div className="mx-auto flex w-full max-w-xl gap-2">
          <a
            href={`tel:${CALL_PHONE}`}
            onClick={trackCallClick}
            className="inline-flex w-1/2 min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-2 text-center text-xs font-bold text-zinc-950"
          >
            <Phone className="mr-1.5 h-4 w-4" />
            Appeler un expert
          </a>
          <a
            href={toWhatsappUrl()}
            onClick={trackWhatsappClick}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-1/2 min-h-12 items-center justify-center rounded-lg bg-green-600 px-2 text-center text-xs font-bold text-white"
          >
            <MessageCircle className="mr-1.5 h-4 w-4" />
            Envoyer une photo
          </a>
        </div>
      </div>
    </div>
  );
}

function ChoiceButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
        selected
          ? "border-yellow-400 bg-yellow-400 text-zinc-950"
          : "border-zinc-700 bg-zinc-950 text-zinc-200 hover:border-zinc-500"
      }`}
    >
      {label}
    </button>
  );
}

function MetricCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-3xl font-bold text-white">{title}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}
