import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.seo.jobTitle} Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0b 0%, #111113 50%, #1c1c1f 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(99, 102, 241, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#818cf8",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            VK
          </div>
          <span style={{ fontSize: "28px", fontWeight: 600 }}>
            {siteConfig.name}
          </span>
        </div>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 24px",
            maxWidth: "900px",
          }}
        >
          {siteConfig.seo.jobTitle}
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          MERN · SaaS · Laravel · Blockchain · REST APIs
        </p>
      </div>
    ),
    { ...size },
  );
}
