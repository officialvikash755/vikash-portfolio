import { siteConfig } from "@/data/site";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.seo.jobTitle,
    url: siteConfig.url,
    email: siteConfig.author.email,
    telephone: siteConfig.author.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "India",
    },
    sameAs: siteConfig.socialLinks
      .filter((link) => !link.href.startsWith("mailto:") && !link.href.startsWith("tel:"))
      .map((link) => link.href),
    knowsAbout: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Laravel",
      "PHP",
      "WordPress",
      "MySQL",
      "REST APIs",
      "Microservices",
      "Near Blockchain",
      "SaaS Development",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };
}

export function getPortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    mainEntity: getPersonJsonLd(),
  };
}
