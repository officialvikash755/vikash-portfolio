import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  name,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground-secondary"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({ hasError, className, id, ...props }: InputProps) {
  const fieldId = id ?? props.name;

  return (
    <input
      id={fieldId}
      aria-invalid={hasError ? true : undefined}
      aria-describedby={hasError && fieldId ? `${fieldId}-error` : undefined}
      className={cn(
        "w-full rounded-lg border bg-background/60 px-4 py-2.5 text-sm text-foreground",
        "placeholder:text-foreground-muted backdrop-blur-sm",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-accent/40",
        hasError
          ? "border-error/60 focus:border-error"
          : "border-border/80 focus:border-accent/50",
        className,
      )}
      {...props}
    />
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export function Textarea({ hasError, className, id, ...props }: TextareaProps) {
  const fieldId = id ?? props.name;

  return (
    <textarea
      id={fieldId}
      aria-invalid={hasError ? true : undefined}
      aria-describedby={hasError && fieldId ? `${fieldId}-error` : undefined}
      className={cn(
        "w-full resize-none rounded-lg border bg-background/60 px-4 py-2.5 text-sm text-foreground",
        "placeholder:text-foreground-muted backdrop-blur-sm",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-accent/40",
        hasError
          ? "border-error/60 focus:border-error"
          : "border-border/80 focus:border-accent/50",
        className,
      )}
      {...props}
    />
  );
}
