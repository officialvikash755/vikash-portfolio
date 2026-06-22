import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border/80 bg-background-tertiary/80",
        "px-2.5 py-1 text-xs font-medium text-foreground-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
