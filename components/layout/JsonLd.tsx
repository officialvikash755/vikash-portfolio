import {
  getPersonJsonLd,
  getPortfolioJsonLd,
  getWebSiteJsonLd,
} from "@/utils/jsonLd";

export function JsonLd() {
  const schemas = [getPersonJsonLd(), getWebSiteJsonLd(), getPortfolioJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
