"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Link2,
  Puzzle,
  Server,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { HoverLift } from "@/components/ui/HoverLift";
import { cn } from "@/utils/cn";
import { EASE, glowHoverClass, cardBaseClass } from "@/utils/motion";
import type { ExperienceItem } from "@/data/experience";

const iconMap = {
  fullstack: Code2,
  mern: Database,
  saas: Cloud,
  blockchain: Link2,
  microfrontend: Puzzle,
  api: Server,
} as const;

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const Icon = iconMap[item.icon];
  const isEven = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: EASE,
      }}
      className="relative grid grid-cols-[2rem_1fr] gap-x-4 sm:grid-cols-[3rem_1fr] sm:gap-x-8 lg:grid-cols-[1fr_3rem_1fr]"
    >
      {/* Left column spacer on desktop for alternating layout */}
      <div className="hidden lg:block">
        {!isEven && (
          <TimelineCard item={item} Icon={Icon} align="right" />
        )}
      </div>

      {/* Timeline node & line */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.4,
            delay: index * 0.08 + 0.15,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className={cn(
            "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
            "border-2 border-accent bg-background-elevated shadow-[0_0_20px_rgba(99,102,241,0.3)]",
          )}
        >
          <Icon size={14} className="text-accent" />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.08 + 0.2,
              ease: EASE,
            }}
            className="w-px flex-1 origin-top bg-gradient-to-b from-accent/60 via-border to-border/40"
            style={{ minHeight: "2rem" }}
          />
        )}
      </div>

      {/* Mobile / right column card */}
      <div className={cn("pb-10 lg:pb-12", !isEven && "lg:hidden")}>
        <div className="lg:hidden">
          <TimelineCard item={item} Icon={Icon} align="left" />
        </div>
        <div className="hidden lg:block">
          {isEven && (
            <TimelineCard item={item} Icon={Icon} align="left" />
          )}
        </div>
      </div>
    </motion.li>
  );
}

interface TimelineCardProps {
  item: ExperienceItem;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  align: "left" | "right";
}

function TimelineCard({ item, Icon, align }: TimelineCardProps) {
  return (
    <HoverLift
      className={cn(
        "relative p-5 sm:p-6",
        cardBaseClass,
        glowHoverClass,
        align === "right" && "lg:text-right",
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-start justify-between gap-3",
          align === "right" && "lg:flex-row-reverse",
        )}
      >
        <div className={cn(align === "right" && "lg:text-right")}>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {item.period}
          </p>
          <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-0.5 text-sm text-foreground-muted">{item.organization}</p>
        </div>
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent sm:flex">
          <Icon size={20} />
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground-secondary">
        {item.description}
      </p>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
          Key Achievements
        </p>
        <ul className={cn("space-y-2", align === "right" && "lg:items-end")}>
          {item.achievements.map((achievement) => (
            <li
              key={achievement.slice(0, 40)}
              className={cn(
                "flex items-start gap-2 text-sm text-foreground-secondary",
                align === "right" && "lg:flex-row-reverse lg:text-right",
              )}
            >
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-success"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "mt-5 flex flex-wrap gap-2",
          align === "right" && "lg:justify-end",
        )}
      >
        {item.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </HoverLift>
  );
}
