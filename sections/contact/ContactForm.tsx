"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { contactContent } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import { FormField, Input, Textarea } from "@/components/ui/FormField";
import { FadeInView } from "@/components/ui/FadeInView";
import {
  validateContactForm,
  hasErrors,
  type ContactFormData,
  type ContactFormErrors,
} from "@/utils/validateContactForm";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});

  const handleChange = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const fieldErrors = validateContactForm({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateContactForm(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (hasErrors(validationErrors)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          data.error ?? "Failed to send message. Please try again later.",
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setHoneypot("");
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <FadeInView delay={0.15} direction="right">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background-elevated/40 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col items-center py-8 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {contactContent.form.successTitle}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-foreground-secondary">
                {contactContent.form.successDescription}
              </p>
              <Button
                variant="secondary"
                className="mt-6"
                onClick={handleReset}
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              noValidate
              className="relative space-y-5"
            >
              <div
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Name" name="name" error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder={contactContent.form.namePlaceholder}
                    hasError={!!errors.name}
                    autoComplete="name"
                    disabled={isSubmitting}
                  />
                </FormField>

                <FormField label="Email" name="email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder={contactContent.form.emailPlaceholder}
                    hasError={!!errors.email}
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                </FormField>
              </div>

              <FormField label="Subject" name="subject" error={errors.subject}>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  onBlur={() => handleBlur("subject")}
                  placeholder={contactContent.form.subjectPlaceholder}
                  hasError={!!errors.subject}
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label="Message" name="message" error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder={contactContent.form.messagePlaceholder}
                  hasError={!!errors.message}
                  disabled={isSubmitting}
                />
              </FormField>

              {submitError ? (
                <p className="text-sm text-error" role="alert">
                  {submitError}
                </p>
              ) : null}

              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isSubmitting ? "Sending..." : contactContent.form.submitLabel}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </FadeInView>
  );
}
