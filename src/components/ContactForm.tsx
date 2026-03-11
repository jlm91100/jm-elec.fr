import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
  honeypot: string;
}

const initialForm: FormData = {
  name: "",
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

const DEFAULT_CONTACT_FORM_ENDPOINT = "https://formsubmit.co/ajax/contact@jm-elec.fr";

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const startTime = useRef(Date.now());
  const submitEndpoint =
    (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) ||
    DEFAULT_CONTACT_FORM_ENDPOINT;

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Nom requis (max 100 caractères)";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.phone.trim() || !/^[\d\s+()-]{8,20}$/.test(form.phone)) e.phone = "Téléphone invalide";
    if (!form.message.trim() || form.message.length > 2000) e.message = "Message requis (max 2000 caractères)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (Date.now() - startTime.current < 3000) return;
    if (!validate()) return;

    try {
      setStatus("submitting");
      setSubmitError("");

      const response = await fetch(submitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service.trim(),
          city: form.city.trim(),
          message: form.message.trim(),
          source: "jm-elec.fr",
          page: window.location.href,
          submittedAt: new Date().toISOString(),
          _subject: "Nouveau contact jm-elec.fr",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setSubmitError("L'envoi a échoué. Réessayez dans quelques minutes ou appelez-nous directement au 07 67 97 38 48.");
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-14 w-14 text-cta mx-auto mb-5" />
        <h3>Demande envoyée !</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Nous vous recontactons sous 24 h.
        </p>
        <Button variant="outline" size="sm" className="mt-6" onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={handleChange("honeypot")} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Nom *" error={errors.name}>
          <input type="text" value={form.name} onChange={handleChange("name")} maxLength={100} required className="form-input" placeholder="Votre nom" />
        </Field>
        <Field label="Email *" error={errors.email}>
          <input type="email" value={form.email} onChange={handleChange("email")} maxLength={255} required className="form-input" placeholder="votre@email.fr" />
        </Field>
        <Field label="Téléphone *" error={errors.phone}>
          <input type="tel" value={form.phone} onChange={handleChange("phone")} required className="form-input" placeholder="06 XX XX XX XX" />
        </Field>
        <Field label="Service concerné">
          <select value={form.service} onChange={handleChange("service")} className="form-input">
            <option value="">— Choisir un service —</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Ville / Code postal">
        <input type="text" value={form.city} onChange={handleChange("city")} maxLength={100} className="form-input" placeholder="Ex : Brétigny-sur-Orge, 91220" />
      </Field>

      <Field label="Décrivez votre besoin *" error={errors.message}>
        <textarea value={form.message} onChange={handleChange("message")} maxLength={2000} rows={5} required className="form-input resize-y" placeholder="Décrivez votre projet ou votre problème…" />
      </Field>

      <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>

      {status === "error" && submitError && (
        <p className="flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          {submitError}
        </p>
      )}

      <p className="text-xs text-muted-foreground">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/politique-de-confidentialite" className="underline hover:text-cta">politique de confidentialité</a>.
        Réponse garantie sous 24 h.
      </p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
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
