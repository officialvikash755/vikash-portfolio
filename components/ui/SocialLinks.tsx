import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { cn } from "@/utils/cn";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
} as const;

type SocialIconName = keyof typeof iconMap;

interface SocialLink {
  href: string;
  label: string;
  icon: SocialIconName;
}

interface SocialLinksProps {
  links: readonly SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        const isEmail = link.href.startsWith("mailto:");

        return (
          <li key={link.href}>
            <a
              href={link.href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                "border border-border/80 bg-background-elevated/60 text-foreground-secondary",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
              )}
            >
              <Icon size={18} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
