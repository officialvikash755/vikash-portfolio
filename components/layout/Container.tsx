import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ContainerSize = "default" | "narrow" | "wide" | "full";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer" | "nav";
  size?: ContainerSize;
}

const sizeStyles: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
