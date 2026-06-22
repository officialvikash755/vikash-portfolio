import { Geist, Geist_Mono } from "next/font/google";
import { BaseLayout } from "@/components/layout";
import { JsonLd } from "@/components/layout/JsonLd";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { metadata, viewport } from "@/utils/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <SkipToContent />
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
