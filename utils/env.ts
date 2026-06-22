const defaults = {
  siteUrl: "https://vikash.dev",
  siteName: "Vikash Kumar",
  siteTitle: "Vikash Kumar | Full Stack Developer (MERN)",
  siteDescription:
    "Full-stack developer with 8+ years of experience building scalable MERN applications, SaaS platforms, REST APIs, microservices, blockchain integrations, and high-performance web products.",
  contactEmail: "vikashgulaniya9675@gmail.com",
  contactPhone: "+91 7696993537",
  contactPhoneHref: "tel:+917696993537",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com/in/vikash-prajapati-948aa5140",
  twitterUrl: "https://twitter.com",
  twitterHandle: "@vikashkumar",
} as const;

function getEnv(key: string, fallback: string): string {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : fallback;
}

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

const siteUrl = normalizeUrl(getEnv("NEXT_PUBLIC_SITE_URL", defaults.siteUrl));

if (process.env.NODE_ENV === "production" && !isValidUrl(siteUrl)) {
  throw new Error(
    "Invalid NEXT_PUBLIC_SITE_URL. Set a valid URL in your environment variables.",
  );
}

export const env = {
  siteUrl,
  siteName: getEnv("NEXT_PUBLIC_SITE_NAME", defaults.siteName),
  siteTitle: getEnv("NEXT_PUBLIC_SITE_TITLE", defaults.siteTitle),
  siteDescription: getEnv("NEXT_PUBLIC_SITE_DESCRIPTION", defaults.siteDescription),
  contactEmail: getEnv("NEXT_PUBLIC_CONTACT_EMAIL", defaults.contactEmail),
  contactPhone: getEnv("NEXT_PUBLIC_CONTACT_PHONE", defaults.contactPhone),
  contactPhoneHref: getEnv("NEXT_PUBLIC_CONTACT_PHONE_HREF", defaults.contactPhoneHref),
  githubUrl: getEnv("NEXT_PUBLIC_GITHUB_URL", defaults.githubUrl),
  linkedinUrl: getEnv("NEXT_PUBLIC_LINKEDIN_URL", defaults.linkedinUrl),
  twitterUrl: getEnv("NEXT_PUBLIC_TWITTER_URL", defaults.twitterUrl),
  twitterHandle: getEnv("NEXT_PUBLIC_TWITTER_HANDLE", defaults.twitterHandle),
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
  // Server-only email config lives in utils/serverEnv.ts (RESEND_API_KEY, etc.)
} as const;

export type Env = typeof env;
