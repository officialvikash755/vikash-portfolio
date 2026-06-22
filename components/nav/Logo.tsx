"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { scrollToSection } from "@/utils/scrollToSection";

export function Logo() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection("#home");
  };

  return (
    <motion.a
      href="#home"
      onClick={handleClick}
      className="group flex items-center gap-2.5"
      aria-label={`${siteConfig.name} - Home`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-sm font-bold text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent/40">
        {initials}
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
        {siteConfig.name}
      </span>
    </motion.a>
  );
}
