import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFoundPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle text-accent">
        <FileQuestion size={28} aria-hidden="true" />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-foreground">404</h1>
      <h2 className="mt-2 text-xl font-semibold text-foreground-secondary">
        Page not found
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8">
        <Button href="/" variant="primary">
          <Home size={16} />
          Back to homepage
        </Button>
      </div>
    </Container>
  );
}
