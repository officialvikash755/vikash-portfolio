/**
 * Centralized theme tokens for the portfolio.
 * Used in Tailwind @theme and as JS references where needed.
 */
export const theme = {
  colors: {
    background: {
      DEFAULT: "#0a0a0b",
      secondary: "#111113",
      tertiary: "#18181b",
      elevated: "#1c1c1f",
    },
    foreground: {
      DEFAULT: "#fafafa",
      secondary: "#a1a1aa",
      muted: "#71717a",
      subtle: "#52525b",
    },
    accent: {
      DEFAULT: "#6366f1",
      hover: "#818cf8",
      muted: "#4f46e5",
      subtle: "rgba(99, 102, 241, 0.12)",
    },
    border: {
      DEFAULT: "#27272a",
      subtle: "#1f1f23",
      focus: "#6366f1",
    },
    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  spacing: {
    section: {
      sm: "4rem",
      md: "6rem",
      lg: "8rem",
    },
  },
  animation: {
    duration: {
      fast: 0.15,
      normal: 0.3,
      slow: 0.5,
    },
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type Theme = typeof theme;
