import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  label: string;
  heading: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  heading,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {heading}
      </h2>
    </div>
  );
}
