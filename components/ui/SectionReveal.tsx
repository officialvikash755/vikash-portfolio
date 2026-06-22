"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION, VIEWPORT } from "@/utils/motion";
import { cn } from "@/utils/cn";

interface SectionRevealProps {
  label: string;
  heading: string;
  headingId: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionReveal({
  label,
  heading,
  headingId,
  description,
  align = "left",
  className,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.slow, ease: EASE }}
      className={cn(className)}
    >
      <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, delay: 0.05, ease: EASE }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {label}
        </motion.p>
        <h2
          id={headingId}
          className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
        >
          {heading}
        </h2>
        {description && (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.normal, delay: 0.12, ease: EASE }}
            className={cn(
              "mt-4 max-w-2xl text-base leading-relaxed text-foreground-secondary sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.header>
  );
}
