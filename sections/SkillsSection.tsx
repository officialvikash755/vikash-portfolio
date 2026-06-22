import { Container } from "@/components/layout";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { SkillsGrid } from "./skills/SkillsGrid";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden border-t border-border-subtle bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="skills-heading"
    >
      <FloatingOrbs variant="accent" />
      <Container className="relative">
        <SkillsGrid />
      </Container>
    </section>
  );
}
