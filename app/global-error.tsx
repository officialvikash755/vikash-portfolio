"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Global error:", error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
          padding: "1rem",
        }}
      >
        <main style={{ textAlign: "center", maxWidth: "28rem" }}>
          <div
            style={{
              margin: "0 auto 1.5rem",
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "9999px",
              background: "rgba(239, 68, 68, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ef4444",
            }}
          >
            <AlertTriangle size={28} />
          </div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.75rem" }}>
            Critical Error
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: "0.875rem", lineHeight: 1.6 }}>
            The application encountered a critical error. Please refresh the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.625rem 1.25rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#6366f1",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Refresh page
          </button>
        </main>
      </body>
    </html>
  );
}
