export const skillsContent = {
  sectionLabel: "Skills",
  heading: "Technologies I work with daily",
  description:
    "A curated stack spanning modern frontend frameworks, robust backend systems, scalable architecture, and production-ready integrations.",
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      accent: "from-violet-500/20 to-indigo-500/10",
      iconAccent: "text-violet-400",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Redux", icon: "redux" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Bootstrap", icon: "bootstrap" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      accent: "from-emerald-500/20 to-teal-500/10",
      iconAccent: "text-emerald-400",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "Laravel", icon: "laravel" },
        { name: "PHP", icon: "php" },
        { name: "WordPress", icon: "wordpress" },
      ],
    },
    {
      id: "database",
      title: "Database",
      accent: "from-amber-500/20 to-orange-500/10",
      iconAccent: "text-amber-400",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
      ],
    },
    {
      id: "architecture",
      title: "Architecture",
      accent: "from-sky-500/20 to-cyan-500/10",
      iconAccent: "text-sky-400",
      skills: [
        { name: "Microservices", icon: "microservices" },
        { name: "REST APIs", icon: "rest" },
        { name: "WebSockets", icon: "websockets" },
        { name: "Near Blockchain", icon: "blockchain" },
        { name: "JWT Auth", icon: "jwt" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      accent: "from-rose-500/20 to-pink-500/10",
      iconAccent: "text-rose-400",
      skills: [
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "Payment APIs", icon: "rest" },
        { name: "Third-Party APIs", icon: "microservices" },
      ],
    },
  ],
} as const;

export type SkillsContent = typeof skillsContent;
export type SkillCategory = (typeof skillsContent.categories)[number];
export type Skill = SkillCategory["skills"][number];
