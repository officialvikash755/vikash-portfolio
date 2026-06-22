import { env } from "@/utils/env";

export const siteConfig = {
  name: env.siteName,
  title: env.siteTitle,
  description: env.siteDescription,
  url: env.siteUrl,
  author: {
    name: env.siteName,
    role: "Full Stack Developer (MERN)",
    email: env.contactEmail,
    phone: env.contactPhone,
    phoneHref: env.contactPhoneHref,
    location: "Noida, India",
  },
  seo: {
    keywords: [
      "Vikash Kumar",
      "full stack developer",
      "MERN stack developer",
      "React developer",
      "Node.js developer",
      "Laravel developer",
      "SaaS developer",
      "blockchain developer",
      "portfolio",
      "Next.js",
      "TypeScript",
    ],
    jobTitle: "Full Stack Developer (MERN)",
    twitterHandle: env.twitterHandle,
    locale: "en_US",
  },
  navLinks: [
    { href: "#home", label: "Home", sectionId: "home" },
    { href: "#about", label: "About", sectionId: "about" },
    { href: "#skills", label: "Skills", sectionId: "skills" },
    { href: "#projects", label: "Projects", sectionId: "projects" },
    { href: "#experience", label: "Experience", sectionId: "experience" },
    { href: "#contact", label: "Contact", sectionId: "contact" },
  ],
  socialLinks: [
    {
      href: env.linkedinUrl,
      label: "LinkedIn",
      icon: "linkedin" as const,
    },
    {
      href: `mailto:${env.contactEmail}`,
      label: "Email",
      icon: "mail" as const,
    },
  ],
};

export type NavLink = (typeof siteConfig.navLinks)[number];
export type SocialLink = (typeof siteConfig.socialLinks)[number];
