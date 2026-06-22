import { cn } from "@/utils/cn";

interface SectionSkeletonProps {
  className?: string;
  minHeight?: string;
}

export function SectionSkeleton({
  className,
  minHeight = "20rem",
}: SectionSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading section"
      aria-busy="true"
      style={{ minHeight }}
      className={cn(
        "animate-pulse border-t border-border-subtle py-20 sm:py-24",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-4 w-24 rounded bg-background-elevated" />
        <div className="mt-4 h-8 w-64 max-w-full rounded bg-background-elevated" />
        <div className="mt-3 h-4 w-96 max-w-full rounded bg-background-tertiary" />
      </div>
      <span className="sr-only">Loading section content…</span>
    </div>
  );
}
