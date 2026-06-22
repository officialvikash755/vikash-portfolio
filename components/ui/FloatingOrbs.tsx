"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

type OrbVariant = "subtle" | "accent" | "warm";

interface OrbConfig {
  className: string;
  duration: number;
  delay?: number;
  opacity: [number, number, number];
}

const orbPresets: Record<OrbVariant, OrbConfig[]> = {
  subtle: [
    {
      className: "left-[10%] top-[15%] h-64 w-64 bg-accent/6",
      duration: 10,
      opacity: [0.25, 0.4, 0.25],
    },
    {
      className: "bottom-[10%] right-[15%] h-56 w-56 bg-violet-500/5",
      duration: 12,
      delay: 1,
      opacity: [0.2, 0.35, 0.2],
    },
  ],
  accent: [
    {
      className: "-left-20 top-1/4 h-72 w-72 bg-accent/8",
      duration: 9,
      opacity: [0.3, 0.5, 0.3],
    },
    {
      className: "-right-16 bottom-1/4 h-64 w-64 bg-indigo-500/6",
      duration: 11,
      delay: 1.5,
      opacity: [0.25, 0.45, 0.25],
    },
  ],
  warm: [
    {
      className: "left-1/3 bottom-0 h-80 w-80 bg-violet-600/5",
      duration: 10,
      opacity: [0.2, 0.35, 0.2],
    },
    {
      className: "right-1/4 top-1/3 h-60 w-60 bg-accent/7",
      duration: 8,
      delay: 0.5,
      opacity: [0.25, 0.4, 0.25],
    },
  ],
};

interface FloatingOrbsProps {
  variant?: OrbVariant;
  className?: string;
}

export function FloatingOrbs({ variant = "subtle", className }: FloatingOrbsProps) {
  const reduceMotion = useReducedMotion();
  const orbs = orbPresets[variant];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute rounded-full blur-[100px]",
            orb.className,
          )}
          animate={
            reduceMotion
              ? { opacity: orb.opacity[1] }
              : { opacity: orb.opacity }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: orb.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: orb.delay ?? 0,
                }
          }
        />
      ))}
    </div>
  );
}
