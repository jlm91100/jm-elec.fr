import { useMemo, useRef, useState } from "react";
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuizStepId =
  | "offerType"
  | "propertyType"
  | "installationSpot"
  | "powerType"
  | "distanceFromPanel"
  | "projectTimeline";

type QuizOption = {
  value: string;
  label: string;
  description: string;
};

type QuizStep = {
  id: QuizStepId;
  question: string;
  helper: string;
  options: QuizOption[];
};

interface IrveLandingFormData {
  offerType: string;
  propertyType: string;
  installationSpot: string;
  powerType: string;
  distanceFromPanel: string;
  projectTimeline: string;
  firstName: string;
  phone: string;
  city: string;
  message: string;
  honeypot: string;
}

interface IrveLandingFormProps {
  onLeadSuccess?: (payload: { firstName: string; phone: string; city: string }) => void;
}

type ErrorKey = keyof IrveLandingFormData;

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const FALLBACK_PHONE = "07 67 97 38 48";
const LANDING_URL = "https://jm-elec.fr/borne-recharge-essonne";

const QUIZ_STEPS: QuizStep[] = [
  {
    id: "offerType",
    question: "Choisissez votre offre",
    helper: "On adapte ensuite la configuration exacte a votre installation.",
    options: [
      {
        value: "essentielle_7_4kw",
        label: "Essentielle 7,4 kW",
        description: "Recharge quotidienne simple, budget maitrise.",
      },
      {
        value: "connectee_pilotable",
        label: "Connectee pilotable",
        description: "Suivi appli, programmation heures creuses.",
      },
      {
        value: "puissance_11_22kw",
        label: "Puissance 11-22 kW",
        description: "Recharge acceleree et usage intensif.",
      },
    ],
  },
  {
    id: "propertyType",
    question: "Votre logement",
    helper: "Cette info influence les protections et le cheminement.",
    options: [
      {
        value: "maison_individuelle",
        label: "Maison individuelle",
        description: "Projet standard, pose rapide.",
      },
      {
        value: "copropriete",
        label: "Maison en lotissement / copro",
        description: "Validation technique a prevoir.",
      },
      {
        value: "je_ne_sais_pas",
        label: "Je ne sais pas",
        description: "On vous accompagne pas a pas.",
      },
    ],
  },
  {
    id: "installationSpot",
    question: "Emplacement de la borne",
    helper: "On anticipe la pose et la longueur de cable.",
    options: [
      {
        value: "garage_mural",
        label: "Mur garage interieur",
        description: "Pose murale protegee.",
      },
      {
        value: "facade_exterieure",
        label: "Facade exterieure",
        description: "Materiel adapte exterieur.",
      },
      {
        value: "sur_pied",
        label: "Sur pied / allee",
        description: "Solution si mur eloigne du vehicule.",
      },
    ],
  },
  {
    id: "powerType",
    question: "Type d'alimentation",
    helper: "Permet de pre-dimensionner la puissance de charge.",
    options: [
      {
        value: "monophase",
        label: "Monophase",
        description: "Le cas le plus frequent en maison.",
      },
      {
        value: "triphase",
        label: "Triphase",
        description: "Utile pour certaines bornes 11-22 kW.",
      },
      {
        value: "inconnu",
        label: "Je ne sais pas",
        description: "On verifie pour vous.",
      },
    ],
  },
  {
    id: "distanceFromPanel",
    question: "Distance tableau -> borne",
    helper: "Cette donnee impacte le devis (cable + main d'oeuvre).",
    options: [
      {
        value: "moins_10m",
        label: "Moins de 10 m",
        description: "Configuration courte.",
      },
      {
        value: "entre_10_20m",
        label: "Entre 10 et 20 m",
        description: "Configuration moyenne.",
      },
      {
        value: "plus_20m",
        label: "Plus de 20 m",
        description: "Configuration longue.",
      },
    ],
  },
  {
    id: "projectTimeline",
    question: "Quand voulez-vous installer ?",
    helper: "Priorisation de planning selon urgence.",
    options: [
      {
        value: "urgent_15j",
        label: "Urgent (moins de 15 jours)",
        description: "Priorite rappel et planification.",
      },
      {
        value: "dans_le_mois",
        label: "Dans le mois",
        description: "Calendrier standard.",
      },
      {
        value: "dans_1_3_mois",
        label: "Sous 1 a 3 mois",
        description: "Etude et projection budget.",
      },
    ],
  },
];

const INITIAL_FORM: IrveLandingFormData = {
  offerType: "",
  propertyType: "",
  installationSpot: "",
  powerType: "",
  distanceFromPanel: "",
  projectTimeline: "",
  firstName: "",
  phone: "",
  city: "",
  message: "",
  honeypot: "",
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
  error?: string;
};

const getWeb3FormsMessage = (response: Web3FormsResponse | null): string | undefined =>
  response?.body?.message || response?.message || response?.error;

function buildQuizSummary(form: IrveLandingFormData) {
  const lines = QUIZ_STEPS.map((step) => {
    const selected = step.options.find((option) => option.value === form[step.id]);
    const readable = selected?.label || "Non precise";
    return `${step.question}: ${readable}`;
  });
  return lines.join("\n");
}

export function IrveLandingForm({ onLeadSuccess }: IrveLandingFormProps) {
  const [form, setForm] = useState<IrveLandingFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const startTime = useRef(Date.now());

  const isContactStep = stepIndex === QUIZ_STEPS.length;
  const totalSteps = QUIZ_STEPS.length + 1;
  const currentStep = QUIZ_STEPS[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const web3formsAccessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim();

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") return LANDING_URL;
    return window.location.href;
  }, []);

  const updateField = (field: keyof IrveLandingFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const selectStepOption = (stepId: QuizStepId, value: string) => {
    setForm((current) => ({ ...current, [stepId]: value }));
    if (errors[stepId]) {
      setErrors((current) => ({ ...current, [stepId]: undefined }));
    }
  };

  const goToNextStep = () => {
    if (isContactStep) return;

    if (!form[currentStep.id]) {
      setErrors((current) => ({
        ...current,
        [currentStep.id]: "Choisissez une option pour continuer.",
      }));
      return;
    }

    setStepIndex((current) => Math.min(current + 1, QUIZ_STEPS.length));
  };

  const goToPreviousStep = () => {
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const validateContact = () => {
    const nextErrors: Partial<Record<ErrorKey, string>> = {};

    if (!form.firstName.trim() || form.firstName.trim().length > 80) {
      nextErrors.firstName = "Entrez votre prenom (80 caracteres max).";
    }

    if (!form.phone.trim() || !/^[\d\s+()-]{8,20}$/.test(form.phone.trim())) {
      nextErrors.phone = "Entrez un numero de telephone valide.";
    }

    if (!form.city.trim() || form.city.trim().length > 100) {
      nextErrors.city = "Entrez votre ville ou code postal (100 caracteres max).";
    }

    if (form.message.length > 1000) {
      nextErrors.message = "Le message doit faire 1000 caracteres maximum.";
    }

    setErrors((current) => ({ ...current, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!isContactStep) {
      goToNextStep();
      return;
    }

    if (form.honeypot) return;

    if (!web3formsAccessKey) {
      setSubmitError("Configuration formulaire manquante. Appelez-nous au 07 67 97 38 48.");
      return;
    }

    if (Date.now() - startTime.current < 2000) {
      setSubmitError("Patientez 2 secondes avant l'envoi.");
      return;
    }

    if (!validateContact()) return;

    setStatus("submitting");

    const payload = new FormData(e.currentTarget);
    const quizSummary = buildQuizSummary(form);
    const clientDetails = form.message.trim()
      ? `Details client:\n${form.message.trim()}`
      : "Details client: non renseignes";

    payload.set("access_key", web3formsAccessKey);
    payload.set("subject", "Lead LP IRVE Essonne - quiz offre - jm-elec.fr");
    payload.set("from_name", form.firstName.trim());
    payload.set("service", "borne-recharge-irve");
    payload.set("zone", "Essonne");
    payload.set("source", "landing-irve-essonne-quiz");
    payload.set("page", pageUrl);
    payload.set("botcheck", form.honeypot);
    payload.set("message", `${quizSummary}\n\n${clientDetails}`);
    payload.set("offer_type", form.offerType);
    payload.set("property_type", form.propertyType);
    payload.set("installation_spot", form.installationSpot);
    payload.set("power_type", form.powerType);
    payload.set("distance_from_panel", form.distanceFromPanel);
    payload.set("project_timeline", form.projectTimeline);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      const responseBody = (await response.json().catch(() => null)) as Web3FormsResponse | null;
      const ok = response.ok && responseBody?.success !== false;

      if (!ok) {
        setStatus("idle");
        setSubmitError(
          getWeb3FormsMessage(responseBody) ||
            "Le service d'envoi est temporairement indisponible. Merci de nous appeler.",
        );
        return;
      }

      setStatus("success");
      onLeadSuccess?.({
        firstName: form.firstName.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
      });
    } catch {
      setStatus("idle");
      setSubmitError(
        "Le service d'envoi est temporairement indisponible. Merci de nous appeler au 07 67 97 38 48.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cta/30 bg-card p-6 text-center shadow-sm">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-cta" />
        <h3 className="text-xl">Demande envoyee</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Merci. Nous vous rappelons sous 1h sur le numero indique.
        </p>
        <a href="tel:+33767973848" className="mt-4 inline-block text-sm font-medium text-cta underline">
          Appeler maintenant: {FALLBACK_PHONE}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={updateField("honeypot")}
        />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-medium text-muted-foreground">
            Etape {stepIndex + 1}/{totalSteps}
          </p>
          <p className="text-xs font-medium text-muted-foreground">{progressPercent}%</p>
        </div>
        <div className="h-2 w-full rounded-full bg-border">
          <div className="h-2 rounded-full bg-cta transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {!isContactStep && currentStep && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl">{currentStep.question}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{currentStep.helper}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {currentStep.options.map((option) => {
              const selected = form[currentStep.id] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectStepOption(currentStep.id, option.value)}
                  className={cn(
                    "w-full rounded-xl border p-4 text-left transition",
                    selected
                      ? "border-cta bg-cta/10 shadow-sm"
                      : "border-border bg-background hover:border-cta/40 hover:bg-accent/20",
                  )}
                >
                  <p className="text-sm font-semibold">{option.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{option.description}</p>
                </button>
              );
            })}
          </div>

          {errors[currentStep.id] && (
            <p className="flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" />
              {errors[currentStep.id]}
            </p>
          )}
        </div>
      )}

      {isContactStep && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl">Vos coordonnees</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Derniere etape: on vous rappelle avec une proposition adaptee.
            </p>
          </div>

          <Field label="Prenom (obligatoire)" error={errors.firstName}>
            <input
              type="text"
              name="first_name"
              value={form.firstName}
              onChange={updateField("firstName")}
              className="form-input"
              autoComplete="given-name"
              required
              maxLength={80}
              placeholder="Ex: Julien"
            />
          </Field>

          <Field label="Telephone (obligatoire)" error={errors.phone}>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={updateField("phone")}
              className="form-input"
              autoComplete="tel"
              required
              placeholder="Ex: 06 12 34 56 78"
            />
          </Field>

          <Field label="Ville / code postal (obligatoire)" error={errors.city}>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={updateField("city")}
              className="form-input"
              autoComplete="address-level2"
              required
              maxLength={100}
              placeholder="Ex: Bretigny-sur-Orge, 91220"
            />
          </Field>

          <Field label="Details utiles (optionnel)" error={errors.message}>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField("message")}
              className="form-input min-h-28 resize-y"
              maxLength={1000}
              placeholder="Ex: garage, distance environ 12m, vehicule Tesla Model Y..."
            />
          </Field>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" className="flex-1 gap-1" onClick={goToPreviousStep} disabled={stepIndex === 0}>
          <ChevronLeft className="h-4 w-4" />
          Retour
        </Button>
        <Button type="submit" variant="cta" className="flex-1 gap-1" disabled={status === "submitting"}>
          {isContactStep ? (status === "submitting" ? "Envoi en cours..." : "Recevoir mon devis gratuit") : "Continuer"}
          {!isContactStep && <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        En envoyant ce formulaire, vous acceptez notre{" "}
        <a href="/politique-de-confidentialite" className="underline hover:text-cta">
          politique de confidentialite
        </a>
        .
      </p>

      {submitError && (
        <p className="flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{submitError}</span>
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
