"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import { staggerContainer, VIEWPORT } from "@/utils/motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}

export function StaggerContainer({
  children,
  className,
  as = "div",
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
