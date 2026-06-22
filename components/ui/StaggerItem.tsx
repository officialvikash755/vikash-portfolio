"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { staggerItem } from "@/utils/motion";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const Component = motion[as];

  return (
    <Component variants={staggerItem} className={cn(className)}>
      {children}
    </Component>
  );
}
