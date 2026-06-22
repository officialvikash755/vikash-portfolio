"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION, VIEWPORT } from "@/utils/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

export function FadeInView({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInViewProps) {
  const reduceMotion = useReducedMotion();
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: DURATION.slow,
        delay: reduceMotion ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
