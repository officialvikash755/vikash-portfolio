"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import { hoverLiftTransition } from "@/utils/motion";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  lift?: number;
  as?: "div" | "article" | "li";
}

export function HoverLift({
  children,
  className,
  lift = 4,
  as = "div",
}: HoverLiftProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      whileHover={reduceMotion ? undefined : { y: -lift }}
      transition={hoverLiftTransition}
      className={cn("group", className)}
    >
      {children}
    </Component>
  );
}
