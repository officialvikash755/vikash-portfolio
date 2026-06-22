import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/site";

const ogTitle = `${siteConfig.name} — ${siteConfig.seo.jobTitle}`;
const ogDescription = siteConfig.description;

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  ...(googleVerification && {
    verification: { google: googleVerification },
  }),
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    title: ogTitle,
    description: ogDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.seo.jobTitle} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    creator: siteConfig.seo.twitterHandle,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};
