import "server-only";

import { env } from "@/utils/env";

function getServerEnv(key: string, fallback: string): string {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : fallback;
}

export const serverEnv = {
  resendApiKey: getServerEnv("RESEND_API_KEY", ""),
  contactToEmail: getServerEnv("CONTACT_TO_EMAIL", env.contactEmail),
  contactFromEmail: getServerEnv(
    "CONTACT_FROM_EMAIL",
    "Portfolio Contact <contact@vikash.dev>",
  ),
} as const;

export type ServerEnv = typeof serverEnv;
