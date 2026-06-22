"use client";

import { siteConfig } from "@/data/site";
import { NavItem } from "./NavItem";

interface DesktopNavProps {
  activeSection: string;
}

export function DesktopNav({ activeSection }: DesktopNavProps) {
  return (
    <ul className="hidden items-center gap-0.5 lg:flex">
      {siteConfig.navLinks.map((link) => (
        <li key={link.href}>
          <NavItem
            link={link}
            isActive={activeSection === link.sectionId}
            variant="desktop"
          />
        </li>
      ))}
    </ul>
  );
}
