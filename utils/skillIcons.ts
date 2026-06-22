import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiWordpress,
} from "react-icons/si";
import {
  Boxes,
  Braces,
  Radio,
  Link2,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

type SkillIcon = IconType | LucideIcon;

export const skillIconMap: Record<string, SkillIcon> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  php: SiPhp,
  wordpress: SiWordpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  microservices: Boxes,
  rest: Braces,
  websockets: Radio,
  blockchain: Link2,
  jwt: KeyRound,
  docker: SiDocker,
  git: SiGit,
};

export function getSkillIcon(iconKey: string): SkillIcon {
  return skillIconMap[iconKey] ?? Braces;
}
