import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Paperclip } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
  honeypot: string;
}

type ErrorKey = keyof ContactFormData | "attachments";

const initialForm: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  city: "",
  message: "",
  honeypot: "",
};

const serviceOptions = [
  "Remplacement de tableau électrique",
  "Dépannage électrique",
  "Mise en sécurité et conformité",
  "Rénovation électrique",
  "Borne de recharge IRVE",
  "Éclairage intérieur / extérieur",
  "Interphonie / contrôle d'accès",
  "Domotique résidentielle",
  "Alarme",
  "Vidéosurveillance",
  "PAC (raccordement électrique)",
  "Autre",
];

const SUCCESS_QUERY_PARAM = "sent";
const DEFAULT_CONTACT_FORM_ENDPOINT = "https://formsubmit.co/contact@jm-elec.fr";
const MAX_ATTACHMENTS = 3;
const MAX_TOTAL_ATTACHMENTS_SIZE = 8 * 1024 * 1024;
const MAX_SINGLE_ATTACHMENT_SIZE = 4 * 1024 * 1024;
const ACCEPTED_ATTACHMENT_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
  ".pdf",
  ".doc",
  ".docx",
];

const isAcceptedAttachment = (file: File): boolean => {
  const lowerName = file.name.toLowerCase();
  const hasAcceptedExtension = ACCEPTED_ATTACHMENT_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
  return (
    file.type.startsWith("image/") ||
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    hasAcceptedExtension
  );
};

const formatFileSize = (size: number): string => {
  if (size < 1024) return `${size} o`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} Ko`;
  return `${(size / (1024 * 1024)).toFixed(1)} Mo`;
};

const validateAttachments = (files: File[]): string | undefined => {
  if (files.length > MAX_ATTACHMENTS) {
    return `Maximum ${MAX_ATTACHMENTS} fichiers autorisés.`;
  }

  if (files.some((file) => !isAcceptedAttachment(file))) {
    return "Formats acceptés : photos (JPG, PNG, WEBP, HEIC) et documents (PDF, DOC, DOCX).";
  }

  if (files.some((file) => file.size > MAX_SINGLE_ATTACHMENT_SIZE)) {
    return "Chaque fichier doit faire 4 Mo maximum.";
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_TOTAL_ATTACHMENTS_SIZE) {
    return "La taille totale des fichiers ne doit pas dépasser 8 Mo.";
  }

  return undefined;
};

const normalizeSubmitEndpoint = (endpoint: string): string => endpoint.replace("/ajax/", "/");

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [attachments, setAttachments] = useState<Array<File | null>>(
    () => Array.from({ length: MAX_ATTACHMENTS }, () => null),
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState("");
  const startTime = useRef(Date.now());

  const configuredEndpoint =
    (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) ||
    DEFAULT_CONTACT_FORM_ENDPOINT;
  const submitEndpoint = normalizeSubmitEndpoint(configuredEndpoint);

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") return "https://jm-elec.fr/contact";
    return `${window.location.origin}/contact`;
  }, []);

  const successUrl = useMemo(() => {
    if (typeof window === "undefined") return "https://jm-elec.fr/contact?sent=1";
    return `${window.location.origin}/contact?${SUCCESS_QUERY_PARAM}=1`;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get(SUCCESS_QUERY_PARAM) === "1") {
      setStatus("success");
    }
  }, []);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<ErrorKey, string>> = {};
    const selectedAttachments = attachments.filter((file): file is File => Boolean(file));

    if (!form.firstName.trim() || form.firstName.length > 80) {
      nextErrors.firstName = "Prénom requis (max 80 caractères).";
    }

    if (!form.lastName.trim() || form.lastName.length > 100) {
      nextErrors.lastName = "Nom requis (max 100 caractères).";
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Email invalide.";
    }

    if (!form.phone.trim() || !/^[\d\s+()-]{8,20}$/.test(form.phone)) {
      nextErrors.phone = "Téléphone invalide.";
    }

    if (!form.message.trim() || form.message.length > 2000) {
      nextErrors.message = "Message requis (max 2000 caractères).";
    }

    const attachmentError = validateAttachments(selectedAttachments);
    if (attachmentError) {
      nextErrors.attachments = attachmentError;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitError("");

    if (form.honeypot) {
      e.preventDefault();
      return;
    }

    if (Date.now() - startTime.current < 3000) {
      e.preventDefault();
      setSubmitError("Merci de patienter quelques secondes avant l'envoi.");
      return;
    }

    if (!validate()) {
      e.preventDefault();
      return;
    }

    setStatus("submitting");
  };

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleAttachmentChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextFile = e.target.files?.[0] ?? null;
    const nextAttachments = [...attachments];
    nextAttachments[index] = nextFile;
    const selectedAttachments = nextAttachments.filter((file): file is File => Boolean(file));

    setAttachments(nextAttachments);
    setErrors((current) => ({
      ...current,
      attachments: validateAttachments(selectedAttachments),
    }));
  };

  const resetAfterSuccess = () => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete(SUCCESS_QUERY_PARAM);
      window.history.replaceState({}, "", url.toString());
    }

    setStatus("idle");
    setSubmitError("");
    setErrors({});
    setForm(initialForm);
    setAttachments(Array.from({ length: MAX_ATTACHMENTS }, () => null));
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-14 w-14 text-cta mx-auto mb-5" />
        <h3>Demande envoyée !</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Nous vous recontactons sous 24 h. Si vous avez joint des photos ou des documents, ils seront pris en compte dans l'analyse de votre demande.
        </p>
        <Button variant="outline" size="sm" className="mt-6" onClick={resetAfterSuccess}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={submitEndpoint}
      method="POST"
      encType="multipart/form-data"
      className="space-y-5"
      noValidate
    >
      <input type="hidden" name="_subject" value="Nouveau contact jm-elec.fr" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={successUrl} />
      <input type="hidden" name="source" value="jm-elec.fr" />
      <input type="hidden" name="page" value={pageUrl} />
      <input type="hidden" name="name" value={`${form.firstName.trim()} ${form.lastName.trim()}`.trim()} />

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={handleChange("honeypot")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Prénom *" error={errors.firstName}>
          <input
            type="text"
            name="prenom"
            value={form.firstName}
            onChange={handleChange("firstName")}
            maxLength={80}
            required
            className="form-input"
            placeholder="Votre prénom"
          />
        </Field>

        <Field label="Nom *" error={errors.lastName}>
          <input
            type="text"
            name="nom"
            value={form.lastName}
            onChange={handleChange("lastName")}
            maxLength={100}
            required
            className="form-input"
            placeholder="Votre nom"
          />
        </Field>

        <Field label="Email *" error={errors.email}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange("email")}
            maxLength={255}
            required
            className="form-input"
            placeholder="votre@email.fr"
          />
        </Field>

        <Field label="Téléphone *" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange("phone")}
            required
            className="form-input"
            placeholder="06 XX XX XX XX"
          />
        </Field>

        <Field label="Service concerné">
          <select
            name="service"
            value={form.service}
            onChange={handleChange("service")}
            className="form-input"
          >
            <option value="">- Choisir un service -</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Ville / Code postal">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange("city")}
            maxLength={100}
            className="form-input"
            placeholder="Ex : Brétigny-sur-Orge, 91220"
          />
        </Field>
      </div>

      <Field label="Décrivez votre besoin *" error={errors.message}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange("message")}
          maxLength={2000}
          rows={5}
          required
          className="form-input resize-y"
          placeholder="Décrivez votre projet ou votre problème..."
        />
      </Field>

      <Field label="Photos / fichiers (optionnel)" error={errors.attachments}>
        <div className="space-y-2">
          {attachments.map((_, index) => (
            <input
              key={index}
              type="file"
              name={index === 0 ? "attachment" : `attachment${index + 1}`}
              accept="image/*,.pdf,.doc,.docx,.heic,.heif"
              onChange={handleAttachmentChange(index)}
              className="form-input file:mr-4 file:rounded-md file:border-0 file:bg-cta/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground hover:file:bg-cta/20"
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">
          Ajoutez jusqu'à {MAX_ATTACHMENTS} fichiers (4 Mo max par fichier, 8 Mo au total). Pour éviter les envois partiels, privilégiez des photos compressées ou captures d'écran.
        </p>
        {attachments.some(Boolean) && (
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            {attachments
              .filter((file): file is File => Boolean(file))
              .map((file, index) => (
                <li key={`${file.name}-${file.size}-${index}`} className="flex items-center gap-1.5">
                  <Paperclip className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="truncate">
                    {file.name} ({formatFileSize(file.size)})
                  </span>
                </li>
              ))}
          </ul>
        )}
        {attachments.some(Boolean) && (
          <p className="text-xs text-muted-foreground mt-2">
            Total sélectionné :{" "}
            {formatFileSize(
              attachments
                .filter((file): file is File => Boolean(file))
                .reduce((sum, file) => sum + file.size, 0),
            )}
          </p>
        )}
      </Field>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full md:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>

      {submitError && (
        <p className="flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          {submitError}
        </p>
      )}

      <p className="text-xs text-muted-foreground">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/politique-de-confidentialite" className="underline hover:text-cta">
          politique de confidentialité
        </a>
        . Réponse garantie sous 24 h.
      </p>
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
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 mt-1.5 text-xs text-destructive">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
