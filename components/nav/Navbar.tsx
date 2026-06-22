"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";
import { scrollToSection } from "@/utils/scrollToSection";
import { Container } from "@/components/layout/Container";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

const sectionIds = siteConfig.navLinks.map((link) => link.sectionId);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled(24);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection("#contact");
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "border-b border-border-subtle/80 bg-background/70 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container
          as="nav"
          className="flex h-16 items-center justify-between lg:h-[4.5rem]"
          aria-label="Main navigation"
        >
          <Logo />

          <DesktopNav activeSection={activeSection} />

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              onClick={handleContactClick}
              className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover lg:inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 lg:hidden",
                isOpen
                  ? "bg-accent-subtle text-accent"
                  : "text-foreground-secondary hover:bg-background-elevated hover:text-foreground",
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu
        isOpen={isOpen}
        activeSection={activeSection}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
