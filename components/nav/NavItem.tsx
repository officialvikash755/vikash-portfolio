"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { scrollToSection } from "@/utils/scrollToSection";
import type { NavLink } from "@/data/site";

interface NavItemProps {
  link: NavLink;
  isActive: boolean;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}

export function NavItem({
  link,
  isActive,
  onNavigate,
  variant = "desktop",
}: NavItemProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(link.href);
    onNavigate?.();
  };

  if (variant === "mobile") {
    return (
      <a
        href={link.href}
        onClick={handleClick}
        className={cn(
          "relative block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
          isActive
            ? "bg-accent-subtle text-accent"
            : "text-foreground-secondary hover:bg-background-elevated hover:text-foreground",
        )}
      >
        {link.label}
      </a>
    );
  }

  return (
    <a
      href={link.href}
      onClick={handleClick}
      className={cn(
        "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
        isActive ? "text-foreground" : "text-foreground-secondary hover:text-foreground",
      )}
    >
      {link.label}
      {isActive && (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute inset-x-1 -bottom-px h-px bg-accent"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );
}
