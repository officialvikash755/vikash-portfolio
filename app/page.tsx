import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/HeroSection";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const AboutSection = dynamic(
  () => import("@/sections/AboutSection").then((mod) => mod.AboutSection),
  { loading: () => <SectionSkeleton minHeight="28rem" /> },
);

const SkillsSection = dynamic(
  () => import("@/sections/SkillsSection").then((mod) => mod.SkillsSection),
  { loading: () => <SectionSkeleton minHeight="32rem" /> },
);

const ProjectsSection = dynamic(
  () => import("@/sections/ProjectsSection").then((mod) => mod.ProjectsSection),
  { loading: () => <SectionSkeleton minHeight="36rem" /> },
);

const ExperienceSection = dynamic(
  () =>
    import("@/sections/ExperienceSection").then((mod) => mod.ExperienceSection),
  { loading: () => <SectionSkeleton minHeight="36rem" /> },
);

const CaseStudiesSection = dynamic(
  () =>
    import("@/sections/CaseStudiesSection").then((mod) => mod.CaseStudiesSection),
  { loading: () => <SectionSkeleton minHeight="32rem" /> },
);

const ContactSection = dynamic(
  () => import("@/sections/ContactSection").then((mod) => mod.ContactSection),
  { loading: () => <SectionSkeleton minHeight="28rem" /> },
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}
