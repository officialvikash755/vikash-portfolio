import { Container } from "@/components/layout";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { AboutImage } from "./about/AboutImage";
import { AboutContent } from "./about/AboutContent";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-t border-border-subtle bg-background-secondary py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <FloatingOrbs variant="subtle" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </section>
  );
}
