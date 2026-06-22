"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/utils/cn";
import { EASE, DURATION } from "@/utils/motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: DURATION.fast, ease: EASE }}
          whileHover={reduceMotion ? undefined : { y: -2 }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          aria-label="Scroll to top"
          className={cn(
            "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full",
            "border border-border/80 bg-background-elevated/90 text-foreground-secondary backdrop-blur-md",
            "shadow-lg shadow-black/30 transition-colors duration-200",
            "hover:border-accent/40 hover:text-accent hover:shadow-[0_8px_24px_rgba(99,102,241,0.2)]",
          )}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
