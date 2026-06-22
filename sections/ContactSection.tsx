import { Container } from "@/components/layout";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { ContactContent } from "./contact/ContactContent";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-border-subtle bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <FloatingOrbs variant="warm" />
      <Container className="relative">
        <ContactContent />
      </Container>
    </section>
  );
}
