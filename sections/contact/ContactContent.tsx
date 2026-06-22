"use client";

import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactContent() {
  return (
    <div className="relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
