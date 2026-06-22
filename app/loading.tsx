import { Container } from "@/components/layout/Container";

export default function LoadingPage() {
  return (
    <Container
      className="flex min-h-[50vh] items-center justify-center py-20"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-accent"
          role="status"
        />
        <p className="text-sm text-foreground-muted">Loading portfolio…</p>
      </div>
    </Container>
  );
}
