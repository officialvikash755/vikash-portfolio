"use client";

import { getSkillIcon } from "@/utils/skillIcons";
import { HoverLift } from "@/components/ui/HoverLift";
import { cn } from "@/utils/cn";
import { cardBaseClass, glowHoverClass } from "@/utils/motion";
import type { Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
  iconAccent: string;
}

export function SkillCard({ skill, iconAccent }: SkillCardProps) {
  const Icon = getSkillIcon(skill.icon);

  return (
    <HoverLift className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col items-center justify-center gap-3 p-5",
          cardBaseClass,
          glowHoverClass,
        )}
      >
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg bg-background-tertiary",
            "transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-subtle",
            iconAccent,
          )}
        >
          <Icon size={24} className="transition-colors duration-300 group-hover:text-accent" />
        </div>

        <p className="text-center text-sm font-medium text-foreground-secondary transition-colors duration-300 group-hover:text-foreground">
          {skill.name}
        </p>

        <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      </div>
    </HoverLift>
  );
}
