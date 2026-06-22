"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { scrollToSection } from "@/utils/scrollToSection";
import { cn } from "@/utils/cn";
import { Container } from "./Container";
import { ScrollToTop } from "./ScrollToTop";

const footerLinks = siteConfig.navLinks.filter((link) =>
  ["home", "about", "projects", "contact"].includes(link.sectionId),
);

const socialLinks = siteConfig.socialLinks.filter(
  (link) => link.icon !== "twitter",
);

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("");

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <footer className="border-t border-border-subtle bg-background-secondary">
        <Container className="py-10 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between"
          >
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="group inline-flex items-center gap-2.5"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-xs font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {initials}
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </a>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-foreground-secondary transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons */}
            <ul className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                const isEmail = link.href.startsWith("mailto:");

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={link.label}
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-lg",
                        "text-foreground-muted transition-all duration-200",
                        "hover:bg-background-elevated hover:text-foreground",
                      )}
                    >
                      <Icon size={17} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 border-t border-border-subtle pt-6 text-center"
          >
            <p className="text-xs text-foreground-muted sm:text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </motion.div>
        </Container>
      </footer>

      <ScrollToTop />
    </>
  );
}
