"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { heroContent } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { scrollToSection } from "@/utils/scrollToSection";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroContent() {
  const handleViewProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(heroContent.cta.primary.href);
  };

  return (
    <div className="flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background-elevated/50 px-4 py-1.5 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
        </span>
        <span className="text-xs font-medium text-foreground-secondary">
          {heroContent.availability}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent"
      >
        {heroContent.title}
      </motion.p>

      <motion.h1
        id="hero-heading"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease }}
        className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        Hi, I&apos;m{" "}
        <span className="text-gradient-accent">{heroContent.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease }}
        className="mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg"
      >
        {heroContent.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease }}
        className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <Button
          href={heroContent.cta.primary.href}
          variant="primary"
          className="group"
          onClick={handleViewProjects}
        >
          {heroContent.cta.primary.label}
          <ArrowDown
            size={16}
            className="transition-transform duration-200 group-hover:translate-y-0.5"
          />
        </Button>

        <Button
          href={heroContent.cta.secondary.href}
          variant="secondary"
          download
        >
          <Download size={16} />
          {heroContent.cta.secondary.label}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease }}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
      >
        <SocialLinks links={heroContent.socialLinks} />
        <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
        <div className="flex flex-wrap gap-6">
          {heroContent.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
