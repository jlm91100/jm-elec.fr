import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Paperclip } from "lucide-react";

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
  "Remplacement de tableau electrique",
  "Depannage electrique",
  "Mise en securite et conformite",
  "Renovation electrique",
  "Borne de recharge IRVE",
  "Eclairage interieur / exterieur",
  "Interphonie / controle d'acces",
  "Domotique residentielle",
  "Alarme",
  "Videosurveillance",
  "PAC (raccordement electrique)",
  "Autre",
];

const SUCCESS_QUERY_PARAM = "sent";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const FALLBACK_CONTACT_EMAIL = "contact@jm-elec.fr";
const FALLBACK_CONTACT_PHONE = "07 67 97 38 48";
const MAX_ATTACHMENTS = 1;
const MAX_TOTAL_ATTACHMENTS_SIZE = 5 * 1024 * 1024;
const MAX_SINGLE_ATTACHMENT_SIZE = 5 * 1024 * 1024;
const RETRYABLE_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);
const SUBMIT_RETRY_DELAYS_MS = [0, 800];
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
    return `Maximum ${MAX_ATTACHMENTS} fichier(s) autorise(s).`;
  }

  if (files.some((file) => !isAcceptedAttachment(file))) {
    return "Formats acceptes: photos (JPG, PNG, WEBP, HEIC) et documents (PDF, DOC, DOCX).";
  }

  if (files.some((file) => file.size > MAX_SINGLE_ATTACHMENT_SIZE)) {
    return "Chaque fichier doit faire 5 Mo maximum.";
  }

  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  if (totalSize > MAX_TOTAL_ATTACHMENTS_SIZE) {
    return "La taille totale des fichiers ne doit pas depasser 5 Mo.";
  }

  return undefined;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
  };
  error?: string;
};

const getWeb3FormsMessage = (response: Web3FormsResponse | null): string | undefined =>
  response?.body?.message || response?.message || response?.error;

const markSubmitSuccess = () => {
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    url.searchParams.set(SUCCESS_QUERY_PARAM, "1");
    window.history.replaceState({}, "", url.toString());
  }
};

const buildFallbackMailtoLink = (form: ContactFormData): string => {
  const subject = "Demande de devis - jm-elec.fr";
  const body = [
    "Bonjour,",
    "",
    "Le formulaire en ligne est indisponible, je vous contacte par e-mail.",
    "",
    `Prenom: ${form.firstName.trim() || "-"}`,
    `Nom: ${form.lastName.trim() || "-"}`,
    `Email: ${form.email.trim() || "-"}`,
    `Telephone: ${form.phone.trim() || "-"}`,
    `Service: ${form.service.trim() || "-"}`,
    `Ville: ${form.city.trim() || "-"}`,
    "",
    "Message:",
    form.message.trim() || "-",
    "",
    "Note: les pieces jointes doivent etre ajoutees manuellement a cet e-mail.",
  ].join("\n");

  return `mailto:${FALLBACK_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, string>>>({});
  const [attachments, setAttachments] = useState<Array<File | null>>(
    () => Array.from({ length: MAX_ATTACHMENTS }, () => null),
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState("");
  const startTime = useRef(Date.now());
  const web3formsAccessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim();
  const mailtoFallbackLink = useMemo(() => buildFallbackMailtoLink(form), [form]);

  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") return "https://jm-elec.fr/contact";
    return `${window.location.origin}/contact`;
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
      nextErrors.firstName = "Prenom requis (max 80 caracteres).";
    }

    if (!form.lastName.trim() || form.lastName.length > 100) {
      nextErrors.lastName = "Nom requis (max 100 caracteres).";
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Email invalide.";
    }

    if (!form.phone.trim() || !/^[\d\s+()-]{8,20}$/.test(form.phone)) {
      nextErrors.phone = "Telephone invalide.";
    }

    if (!form.message.trim() || form.message.length > 2000) {
      nextErrors.message = "Message requis (max 2000 caracteres).";
    }

    const attachmentError = validateAttachments(selectedAttachments);
    if (attachmentError) {
      nextErrors.attachments = attachmentError;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (form.honeypot) {
      return;
    }

    if (!web3formsAccessKey) {
      setSubmitError(
        "Configuration manquante du formulaire. Merci de nous appeler au 07 67 97 38 48.",
      );
      return;
    }

    if (Date.now() - startTime.current < 3000) {
      setSubmitError("Merci de patienter quelques secondes avant l'envoi.");
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    const formElement = e.currentTarget;
    const selectedAttachments = attachments.filter((file): file is File => Boolean(file));
    const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();

    const submitToWeb3Forms = async (includeAttachment: boolean) => {
      const payload = new FormData(formElement);
      payload.set("access_key", web3formsAccessKey);
      payload.set("subject", "Nouveau contact jm-elec.fr");
      payload.set("from_name", fullName || "JM-ELEC 91");
      payload.set("botcheck", form.honeypot);

      if (!includeAttachment) {
        payload.delete("attachment");
        if (selectedAttachments.length > 0) {
          const attachmentList = selectedAttachments
            .map((file) => `${file.name} (${formatFileSize(file.size)})`)
            .join(", ");
          payload.append(
            "attachment_note",
            `Fichiers non transmis par Web3Forms: ${attachmentList}. Merci de nous les renvoyer par e-mail.`,
          );
        }
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      const responseBody = (await response.json().catch(() => null)) as Web3FormsResponse | null;
      const message = getWeb3FormsMessage(responseBody);
      const ok = response.ok && responseBody?.success !== false;

      return {
        ok,
        status: response.status,
        message,
      };
    };

    for (let attempt = 0; attempt < SUBMIT_RETRY_DELAYS_MS.length; attempt += 1) {
      const retryDelay = SUBMIT_RETRY_DELAYS_MS[attempt];

      if (retryDelay > 0) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }

      try {
        const withAttachment = await submitToWeb3Forms(true);

        if (withAttachment.ok) {
          markSubmitSuccess();
          setStatus("success");
          return;
        }

        let failure = withAttachment;

        if (selectedAttachments.length > 0) {
          const withoutAttachment = await submitToWeb3Forms(false);
          if (withoutAttachment.ok) {
            markSubmitSuccess();
            setStatus("success");
            return;
          }
          failure = withoutAttachment;
        }

        const canRetry = RETRYABLE_STATUSES.has(failure.status);
        const lastAttempt = attempt === SUBMIT_RETRY_DELAYS_MS.length - 1;

        if (!canRetry || lastAttempt) {
          setStatus("idle");
          setSubmitError(
            failure.message ||
              "Le service d'envoi est temporairement indisponible. Vous pouvez envoyer votre demande par e-mail ou nous appeler directement.",
          );
          return;
        }
      } catch {
        const lastAttempt = attempt === SUBMIT_RETRY_DELAYS_MS.length - 1;
        if (lastAttempt) {
          setStatus("idle");
          setSubmitError(
            "Le service d'envoi est temporairement indisponible. Vous pouvez envoyer votre demande par e-mail ou nous appeler directement.",
          );
          return;
        }
      }
    }
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
      <div className="py-12 text-center">
        <CheckCircle className="mx-auto mb-5 h-14 w-14 text-cta" />
        <h3>Demande envoyee !</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Nous vous recontactons sous 24 h. Si la piece jointe n'a pas pu etre transmise, nous
          vous demanderons de la renvoyer.
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
      action={WEB3FORMS_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      className="space-y-5"
      noValidate
    >
      <input type="hidden" name="access_key" value={web3formsAccessKey ?? ""} />
      <input type="hidden" name="subject" value="Nouveau contact jm-elec.fr" />
      <input type="hidden" name="from_name" value="JM-ELEC 91" />
      <input type="hidden" name="source" value="jm-elec.fr" />
      <input type="hidden" name="page" value={pageUrl} />
      <input
        type="hidden"
        name="name"
        value={`${form.firstName.trim()} ${form.lastName.trim()}`.trim()}
      />

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={handleChange("honeypot")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Prenom *" error={errors.firstName}>
          <input
            type="text"
            name="prenom"
            value={form.firstName}
            onChange={handleChange("firstName")}
            maxLength={80}
            required
            className="form-input"
            placeholder="Votre prenom"
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

        <Field label="Telephone *" error={errors.phone}>
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

        <Field label="Service concerne">
          <select name="service" value={form.service} onChange={handleChange("service")} className="form-input">
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
            placeholder="Ex : Bretigny-sur-Orge, 91220"
          />
        </Field>
      </div>

      <Field label="Decrivez votre besoin *" error={errors.message}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange("message")}
          maxLength={2000}
          rows={5}
          required
          className="form-input resize-y"
          placeholder="Decrivez votre projet ou votre probleme..."
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
        <p className="mt-1.5 text-xs text-muted-foreground">
          Ajoutez jusqu'a {MAX_ATTACHMENTS} fichier (5 Mo max). En cas d'echec d'envoi du fichier,
          la demande est envoyee sans piece jointe.
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
          <p className="mt-2 text-xs text-muted-foreground">
            Total selectionne:{" "}
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
        <div className="space-y-2">
          <p className="flex items-start gap-2 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
            {submitError}
          </p>
          <p className="text-sm text-muted-foreground">
            Alternative immediate:{" "}
            <a href={mailtoFallbackLink} className="underline hover:text-cta">
              envoyer un e-mail pre-rempli
            </a>{" "}
            ou appeler le{" "}
            <a href="tel:+33767973848" className="underline hover:text-cta">
              {FALLBACK_CONTACT_PHONE}
            </a>
            .
          </p>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/politique-de-confidentialite" className="underline hover:text-cta">
          politique de confidentialite
        </a>
        . Reponse garantie sous 24 h.
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
