export const caseStudiesContent = {
  sectionLabel: "Case Studies",
  heading: "Engineering problem-solving in production",
  description:
    "Deep dives into architecture decisions, performance trade-offs, and measurable outcomes from real-world systems.",
  studies: [
    {
      id: "api-optimization",
      title: "API Response Time Optimization",
      category: "Backend Engineering",
      summary:
        "Reduced average API latency on the In-Depth Realty MLS property search platform.",
      problem:
        "Property search endpoints were returning slow responses under peak load, causing poor UX and elevated server costs on the MLS-integrated platform.",
      challenges: [
        "N+1 query patterns across nested property relations",
        "Unoptimized serialization payloads for listing responses",
        "No caching layer for frequently requested filter combinations",
        "Synchronous third-party MLS data enrichment blocking request threads",
      ],
      solution:
        "Refactored the Node.js service layer with batched data loaders, response DTO mapping, and cache keys scoped to geo-filter hash combinations.",
      optimization:
        "Implemented query projection pipelines, gzip compression, and parallel async enrichment with circuit-breaker fallbacks for external MLS APIs.",
      result:
        "Search performance improved significantly with faster filter responses and reduced database read operations on production workloads.",
      metrics: { before: "Slow", after: "Optimized", improvement: "Faster" },
      icon: "api" as const,
    },
    {
      id: "dashboard-performance",
      title: "XR Sports Admin Dashboard",
      category: "Frontend Engineering",
      summary:
        "Improved the Activelink admin dashboard for managing tournaments, events, and community data.",
      problem:
        "The XR Sports admin dashboard needed smoother performance when managing tournaments, events, chat, and user data at scale.",
      challenges: [
        "Monolithic component trees re-rendering on every state change",
        "Unmemoized expensive list computations across large record sets",
        "Blocking API waterfalls on dashboard mount",
        "Heavy modules loaded synchronously on initial bundle",
      ],
      solution:
        "Decomposed the dashboard into isolated feature modules with React.memo boundaries, virtualized data tables, and parallel data fetching.",
      optimization:
        "Introduced skeleton loading states, debounced search filters, and deferred rendering for secondary admin modules.",
      result:
        "Admin workflows became faster and more responsive when managing tournaments, events, and community interactions.",
      metrics: { before: "Heavy", after: "Responsive", improvement: "Improved" },
      icon: "dashboard" as const,
    },
    {
      id: "mongodb-indexing",
      title: "MongoDB Indexing Strategy",
      category: "Database Engineering",
      summary:
        "Designed compound indexes for In-Depth Realty property filter queries.",
      problem:
        "Complex property filter queries with geo-radius, price range, and status filters were performing full collection scans on large listing datasets.",
      challenges: [
        "Conflicting single-field indexes causing inefficient index intersection",
        "Heavy $lookup stages in aggregation pipelines",
        "Write-heavy ingestion conflicting with read-optimized index design",
        "Unpredictable query patterns from dynamic user-built filters",
      ],
      solution:
        "Analyzed query patterns with explain plans and designed compound indexes aligned to the most frequent filter order: status → geo → price → updatedAt.",
      optimization:
        "Added partial indexes for active listings and covered queries for list views to improve search reliability.",
      result:
        "Aggregation performance improved with higher index hit ratios on production search workloads.",
      metrics: { before: "Full scans", after: "Indexed", improvement: "Optimized" },
      icon: "database" as const,
    },
    {
      id: "nft-token-gating",
      title: "Near Blockchain NFT Token Gating",
      category: "Web3 Integration",
      summary:
        "Implemented secure NFT-based access control for XR Sports events and tournaments.",
      problem:
        "XR Sports needed exclusive access to events and tournaments for NFT holders while keeping onboarding simple for new users.",
      challenges: [
        "Secure wallet connection and NFT ownership verification",
        "Auto-creating Near wallets during user signup",
        "Mintbase badge validation for platform functionality",
        "Hybrid Laravel backend with blockchain authentication flows",
      ],
      solution:
        "Integrated Near wallet auto-creation, Mintbase NFT badge validation, and smart contract authentication for event participation.",
      optimization:
        "Built token-gating workflows with secure contract checks and profile avatar customization for personalized access.",
      result:
        "NFT holders gained seamless exclusive access while onboarding remained simple for new platform users.",
      metrics: { before: "Open access", after: "Token-gated", improvement: "Secure" },
      icon: "lazy" as const,
    },
    {
      id: "asset-management-workflows",
      title: "Emaar Asset Management Workflows",
      category: "Enterprise Systems",
      summary:
        "Built multi-level approval workflows for Emaar Omni employee asset management.",
      problem:
        "Emaar needed better asset lifecycle visibility, administrative accuracy, and structured compliance documentation across departments.",
      challenges: [
        "Fragmented asset records across teams and approval stages",
        "CPA, RCPA, and invoice processing modules requiring consistent workflows",
        "Manual documentation slowing administrative operations",
        "Need for accurate lifecycle tracking across asset states",
      ],
      solution:
        "Designed Emaar Omni with modular asset lifecycle tracking, property records management, and multi-level approval workflows.",
      optimization:
        "Structured CPA/RCPA and invoice processing modules to streamline documentation and improve operational efficiency.",
      result:
        "Asset lifecycle visibility and administrative accuracy improved across departments with clearer approval pipelines.",
      metrics: { before: "Manual", after: "Automated", improvement: "Streamlined" },
      icon: "split" as const,
    },
    {
      id: "recharge-platform-scaling",
      title: "EasyMobileRecharge Platform Architecture",
      category: "Fintech Engineering",
      summary:
        "Built a recharge platform supporting vendors, retailers, and third-party API integrations.",
      problem:
        "The recharge platform needed to support mobile, DTH, and datacard services with vendor/retailer modules and reliable third-party API orchestration.",
      challenges: [
        "Multiple recharge types with different provider APIs",
        "Vendor-retailer hierarchy requiring flexible access control",
        "Secure payment gateway integration and transaction reliability",
        "Admin and user panels for streamlined platform management",
      ],
      solution:
        "Built EasyMobileRecharge with Core PHP, JavaScript, and third-party API orchestration for recharge transactions.",
      optimization:
        "Designed optimized backend transaction flows with admin control panels and external API services for platform partners.",
      result:
        "Delivered a comprehensive recharge platform with secure transactions and scalable vendor-retailer management.",
      metrics: { before: "Basic", after: "Multi-module", improvement: "Scalable" },
      icon: "scale" as const,
    },
  ],
} as const;

export type CaseStudiesContent = typeof caseStudiesContent;
export type CaseStudy = (typeof caseStudiesContent.studies)[number];

export type CaseStudySection = keyof Pick<
  CaseStudy,
  "problem" | "challenges" | "solution" | "optimization" | "result"
>;
