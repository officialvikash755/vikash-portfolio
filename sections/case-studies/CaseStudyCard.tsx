"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Zap,
  LayoutDashboard,
  Database,
  ImageIcon,
  SplitSquareHorizontal,
  Network,
  AlertCircle,
  Target,
  Lightbulb,
  Gauge,
  Trophy,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { EASE } from "@/utils/motion";
import type { CaseStudy } from "@/data/caseStudies";

const iconMap = {
  api: Zap,
  dashboard: LayoutDashboard,
  database: Database,
  lazy: ImageIcon,
  split: SplitSquareHorizontal,
  scale: Network,
} as const;

const sectionConfig = [
  { key: "problem" as const, label: "Problem", icon: AlertCircle, color: "text-red-400" },
  { key: "challenges" as const, label: "Challenges", icon: Target, color: "text-amber-400" },
  { key: "solution" as const, label: "Solution", icon: Lightbulb, color: "text-sky-400" },
  { key: "optimization" as const, label: "Optimization", icon: Gauge, color: "text-violet-400" },
  { key: "result" as const, label: "Result", icon: Trophy, color: "text-emerald-400" },
];

interface CaseStudyCardProps {
  study: CaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
}

export function CaseStudyCard({
  study,
  isExpanded,
  onToggle,
}: CaseStudyCardProps) {
  const Icon = iconMap[study.icon];

  return (
    <div className="group">
      <div
        className={cn(
          "overflow-hidden rounded-2xl border bg-background-elevated/60 backdrop-blur-sm transition-all duration-300",
          isExpanded
            ? "border-accent/40 shadow-[0_16px_48px_rgba(99,102,241,0.12)]"
            : "border-border/80 hover:border-accent/25 hover:shadow-[0_8px_32px_rgba(99,102,241,0.08)]",
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
          aria-expanded={isExpanded}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent">
            <Icon size={20} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-border/60 bg-background-tertiary px-2 py-0.5 text-xs font-medium text-foreground-muted">
                {study.category}
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                {study.metrics.improvement} improvement
              </span>
            </div>

            <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">
              {study.title}
            </h3>
            <p className="mt-1.5 text-sm text-foreground-secondary">
              {study.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-4 text-xs text-foreground-muted">
              <span>
                Before: <strong className="text-foreground-secondary">{study.metrics.before}</strong>
              </span>
              <span>
                After: <strong className="text-emerald-400">{study.metrics.after}</strong>
              </span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1 shrink-0 text-foreground-muted"
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="space-y-4 border-t border-border-subtle px-5 pb-6 pt-5 sm:px-6">
                {sectionConfig.map(({ key, label, icon: SectionIcon, color }) => (
                  <div
                    key={key}
                    className="rounded-xl border border-border/60 bg-background-tertiary/40 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <SectionIcon size={14} className={color} />
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                        {label}
                      </h4>
                    </div>

                    {key === "challenges" ? (
                      <ul className="space-y-1.5">
                        {study.challenges.map((item) => (
                          <li
                            key={item.slice(0, 40)}
                            className="flex items-start gap-2 text-sm leading-relaxed text-foreground-secondary"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-muted" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-foreground-secondary">
                        {study[key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
