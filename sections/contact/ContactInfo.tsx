"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactContent } from "@/data/contact";
import { FadeInView } from "@/components/ui/FadeInView";
import { cn } from "@/utils/cn";

const infoItems = [
  {
    key: "email",
    icon: Mail,
    ...contactContent.info.email,
  },
  {
    key: "phone",
    icon: Phone,
    ...contactContent.info.phone,
  },
  {
    key: "linkedin",
    icon: FaLinkedin,
    ...contactContent.info.linkedin,
  },
  {
    key: "location",
    icon: MapPin,
    ...contactContent.info.location,
  },
] as const;

export function ContactInfo() {
  return (
    <FadeInView className="space-y-8">
      <header>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {contactContent.sectionLabel}
        </p>
        <h2
          id="contact-heading"
          className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
        >
          {contactContent.heading}
        </h2>
      </header>

      <div className="rounded-2xl border border-accent/20 bg-accent-subtle/30 p-5 backdrop-blur-sm sm:p-6">
        <h3 className="text-base font-semibold text-foreground">
          {contactContent.cta.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
          {contactContent.cta.description}
        </p>
      </div>

      <ul className="space-y-3">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <div
              className={cn(
                "flex items-center gap-4 rounded-xl border border-border/60 bg-background-elevated/40 p-4 backdrop-blur-md",
                "transition-all duration-300",
                item.href &&
                  "hover:border-accent/30 hover:bg-background-elevated/70 hover:shadow-[0_8px_32px_rgba(99,102,241,0.08)]",
              )}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                  {item.label}
                </p>
                <p className="truncate text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            </div>
          );

          return (
            <motion.li
              key={item.key}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={
                    item.href.startsWith("mailto:") || item.href.startsWith("tel:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto:") || item.href.startsWith("tel:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="block"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.li>
          );
        })}
      </ul>
    </FadeInView>
  );
}
