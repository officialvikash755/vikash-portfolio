export const aboutContent = {
  sectionLabel: "About Me",
  heading: "Building scalable products with precision & performance",
  paragraphs: [
    "Passionate and results-driven full-stack developer with 8 years of experience building dynamic, user-focused web applications, including 4 years specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Skilled across front-end and back-end technologies — from SaaS platforms, real-time chat, and MLS property systems to blockchain NFT integrations, payment gateways, and WordPress solutions. BCA graduate from Kurukshetra University.",
  ],
  stats: [
    {
      value: "8+",
      label: "Years Experience",
      icon: "calendar" as const,
    },
    {
      value: "20+",
      label: "Projects",
      icon: "folder" as const,
    },
    {
      value: "MERN",
      label: "Specialist",
      icon: "code" as const,
    },
    {
      value: "Web3",
      label: "Integrations",
      icon: "layers" as const,
    },
  ],
  image: {
    alt: "Vikash Kumar - Full Stack Developer (MERN)",
    placeholder: "Developer Photo",
    src: "/images/profile.png",
  },
} as const;

export type AboutContent = typeof aboutContent;
