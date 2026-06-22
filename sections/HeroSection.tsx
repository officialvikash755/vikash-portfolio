import { Container } from "@/components/layout";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroContent } from "./hero/HeroContent";
import { CodeCard } from "./hero/CodeCard";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <Container className="relative flex min-h-[calc(100dvh-4rem)] items-center py-16 lg:min-h-[calc(100dvh-4.5rem)] lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <HeroContent />
          <div className="relative hidden lg:block">
            <CodeCard />
          </div>
        </div>
      </Container>

      <div className="relative pb-8 lg:hidden">
        <Container>
          <CodeCard />
        </Container>
      </div>
    </section>
  );
}
