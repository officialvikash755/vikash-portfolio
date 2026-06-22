export const EASE = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
  fast: 0.25,
  normal: 0.45,
  slow: 0.55,
} as const;

export const VIEWPORT = {
  once: true,
  margin: "-80px",
} as const;

export const VIEWPORT_TIGHT = {
  once: true,
  margin: "-40px",
} as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const hoverLiftTransition = {
  duration: DURATION.fast,
  ease: EASE,
};

export const glowHoverClass =
  "transition-all duration-300 hover:border-accent/30 hover:shadow-[0_12px_40px_rgba(99,102,241,0.1)]";

export const cardBaseClass =
  "rounded-xl border border-border/80 bg-background-elevated/60 backdrop-blur-sm";
