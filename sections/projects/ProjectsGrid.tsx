"use client";

import { projectsContent } from "@/data/projects";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { StaggerItem } from "@/components/ui/StaggerItem";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="space-y-12">
      <SectionReveal
        label={projectsContent.sectionLabel}
        heading={projectsContent.heading}
        headingId="projects-heading"
        description={projectsContent.description}
      />

      <StaggerContainer className="grid gap-8 lg:grid-cols-2">
        {projectsContent.projects.map((project) => (
          <StaggerItem key={project.id} as="article" className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
