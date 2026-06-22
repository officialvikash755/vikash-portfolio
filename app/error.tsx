"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Application error:", error);
    }
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-error/10 text-error">
          <AlertTriangle size={28} aria-hidden="true" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          An unexpected error occurred while loading this page. Please try again
          or return to the homepage.
        </p>

        {error.digest && (
          <p className="mt-2 font-mono text-xs text-foreground-muted">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" onClick={reset}>
            <RefreshCw size={16} />
            Try again
          </Button>
          <Button href="/" variant="secondary">
            <Home size={16} />
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
