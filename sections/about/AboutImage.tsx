"use client";

import { User } from "lucide-react";
import { aboutContent } from "@/data/about";
import { FadeInView } from "@/components/ui/FadeInView";
import { HoverLift } from "@/components/ui/HoverLift";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function AboutImage() {
  const { image } = aboutContent;

  return (
    <FadeInView direction="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="absolute -inset-4 z-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-violet-500/10 opacity-60 blur-2xl"
        aria-hidden="true"
      />

      <HoverLift lift={3} className="relative z-10">
        <figure className="relative overflow-hidden rounded-2xl border border-border/80 bg-background-elevated shadow-2xl shadow-black/30 transition-all duration-300 group-hover:border-accent/25 group-hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]">
          <div className="relative aspect-[4/5] bg-gradient-to-br from-background-tertiary via-background-elevated to-background-secondary">
            {image.src ? (
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_50%)]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,11,0.8),transparent_40%)]"
                  aria-hidden="true"
                />
                <div
                  className="relative flex h-24 w-24 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <User size={40} className="text-foreground-muted" strokeWidth={1.5} />
                </div>
                <p className="relative text-center text-sm font-medium text-foreground-secondary">
                  {image.placeholder}
                </p>
                <p className="relative text-center text-xs text-foreground-muted">
                  Replace with your professional headshot
                </p>
              </div>
            )}
          </div>

          <figcaption className="border-t border-border/60 bg-background-tertiary/80 px-5 py-4">
            <p className="text-sm font-semibold text-foreground">Vikash Kumar</p>
            <p className="text-xs text-foreground-muted">Full Stack Developer (MERN)</p>
          </figcaption>
        </figure>
      </HoverLift>

      <div
        className="absolute -bottom-4 -right-4 rounded-xl border border-border/60 bg-background-elevated/95 px-4 py-3 shadow-xl backdrop-blur-md"
        aria-label="Location: India, Remote worldwide"
      >
        <p className="text-xs text-foreground-muted">Based in</p>
        <p className="text-sm font-semibold text-foreground">Noida, India · Remote</p>
      </div>
    </FadeInView>
  );
}
