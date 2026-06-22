import { Container } from "@/components/layout";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { CaseStudiesList } from "./case-studies/CaseStudiesList";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative scroll-mt-20 overflow-hidden border-t border-border-subtle bg-background-secondary py-20 sm:py-24 lg:py-28"
      aria-labelledby="case-studies-heading"
    >
      <FloatingOrbs variant="accent" />
      <Container className="relative">
        <CaseStudiesList />
      </Container>
    </section>
  );
}
