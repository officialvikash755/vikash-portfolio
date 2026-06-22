import { Container } from "@/components/layout";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { ProjectsGrid } from "./projects/ProjectsGrid";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden border-t border-border-subtle bg-background-secondary py-20 sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <FloatingOrbs variant="warm" />
      <Container className="relative">
        <ProjectsGrid />
      </Container>
    </section>
  );
}
