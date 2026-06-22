"use client";

import { skillsContent } from "@/data/skills";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FadeInView } from "@/components/ui/FadeInView";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { StaggerItem } from "@/components/ui/StaggerItem";
import { SkillCard } from "@/components/ui/SkillCard";
import { cn } from "@/utils/cn";
import type { SkillCategory } from "@/data/skills";

interface SkillCategoryGroupProps {
  category: SkillCategory;
  index: number;
}

export function SkillCategoryGroup({ category, index }: SkillCategoryGroupProps) {
  return (
    <FadeInView delay={index * 0.08} className="space-y-5">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "h-8 w-1 rounded-full bg-gradient-to-b",
            category.accent,
          )}
        />
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {category.title}
        </h3>
        <span className="text-xs font-medium text-foreground-muted">
          {category.skills.length} skills
        </span>
      </div>

      <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {category.skills.map((skill) => (
          <StaggerItem key={skill.name}>
            <SkillCard skill={skill} iconAccent={category.iconAccent} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </FadeInView>
  );
}

export function SkillsGrid() {
  return (
    <div className="space-y-12 lg:space-y-14">
      <SectionReveal
        label={skillsContent.sectionLabel}
        heading={skillsContent.heading}
        headingId="skills-heading"
        description={skillsContent.description}
      />

      <div className="space-y-10">
        {skillsContent.categories.map((category, index) => (
          <SkillCategoryGroup
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
