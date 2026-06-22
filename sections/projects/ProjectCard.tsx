"use client";

import {
  Building2,
  Trophy,
  ClipboardList,
  Smartphone,
  Music,
  Layers,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { HoverLift } from "@/components/ui/HoverLift";
import { cn } from "@/utils/cn";
import { glowHoverClass } from "@/utils/motion";
import type { Project } from "@/data/projects";

const iconMap = {
  building: Building2,
  trophy: Trophy,
  clipboard: ClipboardList,
  smartphone: Smartphone,
  music: Music,
} as const;

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <HoverLift lift={6} className="relative flex h-full flex-col">
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl",
          "border border-border/80 bg-background-elevated/60 backdrop-blur-sm",
          glowHoverClass,
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-background-tertiary">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-90",
              project.accent,
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,11,0.9),transparent_50%)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/40 bg-background/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/30">
              <Icon size={36} className="text-foreground/70" strokeWidth={1.5} />
            </div>
          </div>

          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-foreground-secondary backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-secondary">
            {project.description}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-background-tertiary/50 p-3 transition-colors duration-300 group-hover:border-border">
              <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <Layers size={12} />
                Architecture
              </div>
              <p className="text-xs leading-relaxed text-foreground-muted">
                {project.architectureHighlight}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background-tertiary/50 p-3 transition-colors duration-300 group-hover:border-border">
              <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Zap size={12} />
                Performance
              </div>
              <p className="text-xs leading-relaxed text-foreground-muted">
                {project.performanceHighlight}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </HoverLift>
  );
}
