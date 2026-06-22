"use client";

import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  offset = 100,
): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const handleScroll = () => {
      if (window.scrollY < offset) {
        setActiveSection(sectionIds[0] ?? "home");
        return;
      }

      let current = sectionIds[0] ?? "home";

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        if (top <= offset) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
