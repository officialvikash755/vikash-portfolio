import { Container } from "@/components/layout";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { ExperienceTimeline } from "./experience/ExperienceTimeline";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden border-t border-border-subtle bg-background py-20 sm:py-24 lg:py-28"
      aria-labelledby="experience-heading"
    >
      <FloatingOrbs variant="subtle" />
      <Container className="relative">
        <ExperienceTimeline />
      </Container>
    </section>
  );
}
