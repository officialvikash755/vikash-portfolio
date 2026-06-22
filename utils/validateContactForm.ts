export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  const email = data.email.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!subject) {
    errors.subject = "Subject is required";
  } else if (subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  }

  if (!message) {
    errors.message = "Message is required";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildMailtoUrl(
  recipient: string,
  data: ContactFormData,
): string {
  const subject = encodeURIComponent(data.subject.trim());
  const body = encodeURIComponent(
    `Hi Vikash,\n\n${data.message.trim()}\n\n— ${data.name.trim()} (${data.email.trim()})`,
  );

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
