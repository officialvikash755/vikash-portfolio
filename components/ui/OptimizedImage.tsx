import Image, { type ImageProps } from "next/image";
import { cn } from "@/utils/cn";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  className?: string;
}

export function OptimizedImage({
  className,
  alt,
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      sizes={sizes}
      priority={priority}
      {...(!priority ? { loading } : {})}
      className={cn("object-cover", className)}
      {...props}
    />
  );
}
