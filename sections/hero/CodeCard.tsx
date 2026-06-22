"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";

function highlightCode(line: string): ReactNode {
  const parts = line.split(
    /(\b(?:import|export|async|function|await|return|const|from)\b|'[^']*'|"[^"]*"|\b(?:Express|Router|connectMongo|bootstrap|api|saasRoutes|authRoutes|PORT)\b)/g,
  );

  return parts.map((part, index) => {
    if (/^(import|export|async|function|await|return|const|from)$/.test(part)) {
      return (
        <span key={index} className="text-violet-400">
          {part}
        </span>
      );
    }
    if (/^['"][^'"]*['"]$/.test(part)) {
      return (
        <span key={index} className="text-emerald-400">
          {part}
        </span>
      );
    }
    if (/^(Express|Router|connectMongo|bootstrap|api|saasRoutes|authRoutes|PORT)$/.test(part)) {
      return (
        <span key={index} className="text-sky-400">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function CodeCard() {
  const { codeSnippet } = heroContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-violet-500/20 opacity-60 blur-sm" />

        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background-elevated/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-border/60 bg-background-tertiary/80 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 font-mono text-xs text-foreground-muted">
              {codeSnippet.filename}
            </span>
          </div>

          <div className="relative p-4 sm:p-5">
            <pre className="overflow-x-auto font-mono text-[11px] leading-6 sm:text-xs sm:leading-7">
              <code>
                {codeSnippet.lines.map((line) => (
                  <div key={line.num} className="flex">
                    <span className="mr-4 w-6 shrink-0 select-none text-right text-foreground-subtle">
                      {line.num}
                    </span>
                    <span className="text-foreground-secondary">
                      {line.content ? highlightCode(line.content) : "\u00A0"}
                    </span>
                  </div>
                ))}
              </code>
            </pre>

            <motion.div
              className="pointer-events-none absolute bottom-5 left-[3.25rem] h-4 w-0.5 bg-accent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="flex items-center justify-between border-t border-border/60 bg-background-tertiary/50 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="font-mono text-[10px] text-foreground-muted">
                TypeScript · Node.js · MongoDB
              </span>
            </div>
            <span className="font-mono text-[10px] text-accent">MERN Stack</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute -bottom-4 -left-4 rounded-xl border border-border/60 bg-background-elevated/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6"
      >
        <p className="text-xs text-foreground-muted">Stack</p>
        <p className="text-sm font-semibold text-foreground">React · Node · MongoDB</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="absolute -right-2 -top-3 rounded-xl border border-border/60 bg-background-elevated/90 px-3 py-2 shadow-xl backdrop-blur-md sm:-right-4"
      >
        <p className="text-xs font-medium text-success">● Production Ready</p>
      </motion.div>
    </motion.div>
  );
}
