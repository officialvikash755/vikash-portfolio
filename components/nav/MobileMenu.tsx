"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/utils/cn";
import { Container } from "@/components/layout/Container";
import { NavItem } from "./NavItem";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

export function MobileMenu({ isOpen, activeSection, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              "fixed inset-x-0 top-16 z-50 border-b border-border-subtle lg:hidden",
              "bg-background/95 backdrop-blur-xl",
            )}
          >
            <Container className="py-4">
              <div className="mb-3 flex items-center justify-between lg:hidden">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-foreground-secondary transition-colors hover:bg-background-elevated hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {siteConfig.navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                  >
                    <NavItem
                      link={link}
                      isActive={activeSection === link.sectionId}
                      onNavigate={onClose}
                      variant="mobile"
                    />
                  </motion.li>
                ))}
              </ul>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
