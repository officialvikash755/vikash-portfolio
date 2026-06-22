import { siteConfig } from "./site";
import { env } from "@/utils/env";

function getDisplayUrl(url: string): string {
  try {
    return new URL(url).host + new URL(url).pathname.replace(/\/$/, "");
  } catch {
    return url;
  }
}

export const contactContent = {
  sectionLabel: "Contact",
  heading: "Let's build something exceptional together",
  cta: {
    title: "Open to full-stack roles, consulting & collaborations",
    description:
      "Whether you're scaling a SaaS product, building a MERN stack application, or need an experienced engineer for full-stack delivery — I'd love to hear about your project.",
  },
  form: {
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Project inquiry",
    messagePlaceholder: "Tell me about your project, timeline, and goals...",
    submitLabel: "Send Message",
    successTitle: "Message sent!",
    successDescription:
      "Thanks for reaching out. I typically respond within 24–48 hours.",
  },
  info: {
    email: {
      label: "Email",
      value: siteConfig.author.email,
      href: `mailto:${siteConfig.author.email}`,
    },
    phone: {
      label: "Phone",
      value: siteConfig.author.phone,
      href: siteConfig.author.phoneHref,
    },
    linkedin: {
      label: "LinkedIn",
      value: getDisplayUrl(env.linkedinUrl),
      href: env.linkedinUrl,
    },
    github: {
      label: "GitHub",
      value: getDisplayUrl(env.githubUrl),
      href: env.githubUrl,
    },
    location: {
      label: "Location",
      value: `${siteConfig.author.location} · Remote Worldwide`,
      href: undefined,
    },
  },
} as const;

export type ContactContent = typeof contactContent;
