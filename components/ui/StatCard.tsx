"use client";

import type { LucideIcon } from "lucide-react";
import { HoverLift } from "@/components/ui/HoverLift";
import { cn } from "@/utils/cn";
import { cardBaseClass, glowHoverClass } from "@/utils/motion";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({ value, label, icon: Icon, className }: StatCardProps) {
  return (
    <HoverLift className={cn("h-full", className)}>
      <div
        className={cn(
          "relative h-full overflow-hidden p-5",
          cardBaseClass,
          glowHoverClass,
        )}
      >
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/10" />

        <div className="relative">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent transition-transform duration-300 group-hover:scale-105">
            <Icon size={20} />
          </div>
          <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {value}
          </p>
          <p className="mt-1 text-sm text-foreground-secondary">{label}</p>
        </div>
      </div>
    </HoverLift>
  );
}
