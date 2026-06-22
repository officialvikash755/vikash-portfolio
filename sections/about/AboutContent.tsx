"use client";

import { aboutContent } from "@/data/about";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { StaggerItem } from "@/components/ui/StaggerItem";
import { StatCard } from "@/components/ui/StatCard";
import { FadeInView } from "@/components/ui/FadeInView";
import { Calendar, FolderKanban, Code2, Layers } from "lucide-react";

const iconMap = {
  calendar: Calendar,
  folder: FolderKanban,
  code: Code2,
  layers: Layers,
} as const;

export function AboutContent() {
  return (
    <div className="flex flex-col justify-center">
      <SectionReveal
        label={aboutContent.sectionLabel}
        heading={aboutContent.heading}
        headingId="about-heading"
      />

      <div className="mt-8 space-y-5">
        {aboutContent.paragraphs.map((paragraph, index) => (
          <FadeInView key={paragraph.slice(0, 32)} delay={0.1 + index * 0.08}>
            <p className="text-base leading-relaxed text-foreground-secondary sm:text-lg">
              {paragraph}
            </p>
          </FadeInView>
        ))}
      </div>

      <StaggerContainer className="mt-10 grid grid-cols-2 gap-4">
        {aboutContent.stats.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <StaggerItem key={stat.label}>
              <StatCard value={stat.value} label={stat.label} icon={Icon} />
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
