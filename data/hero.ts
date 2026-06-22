export const heroContent = {
  name: "Vikash Kumar",
  title: "Full Stack Developer (MERN)",
  subtitle:
    "Passionate full-stack developer with 8 years of experience building dynamic, user-focused web applications — including 4 years specializing in the MERN stack, REST APIs, microservices, and scalable SaaS platforms.",
  availability: "Available for full-stack roles & consulting",
  cta: {
    primary: {
      label: "View Projects",
      href: "#projects",
    },
    secondary: {
      label: "Download Resume",
      href: "/VikashKumarMern.pdf",
    },
  },
  socialLinks: [
    {
      href: "https://linkedin.com/in/vikash-prajapati-948aa5140",
      label: "LinkedIn",
      icon: "linkedin" as const,
    },
    {
      href: "mailto:vikashgulaniya9675@gmail.com",
      label: "Email",
      icon: "mail" as const,
    },
  ],
  codeSnippet: {
    filename: "mern-stack.service.ts",
    lines: [
      { num: 1, content: "import { Express, Router } from 'express';" },
      { num: 2, content: "import { connectMongo } from '@/lib/db';" },
      { num: 3, content: "" },
      { num: 4, content: "export async function bootstrap(app: Express) {" },
      { num: 5, content: "  await connectMongo();" },
      { num: 6, content: "  const api = Router();" },
      { num: 7, content: "" },
      { num: 8, content: "  api.use('/saas', saasRoutes);" },
      { num: 9, content: "  api.use('/auth', authRoutes);" },
      { num: 10, content: "" },
      { num: 11, content: "  app.use('/api/v1', api);" },
      { num: 12, content: "  return app.listen(PORT);" },
      { num: 13, content: "}" },
    ],
  },
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "MERN Experience", value: "4+" },
    { label: "Tech Stack", value: "MERN" },
  ],
} as const;

export type HeroContent = typeof heroContent;
