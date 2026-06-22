export const projectsContent = {
  sectionLabel: "Projects",
  heading: "Featured work & case studies",
  description:
    "Production-grade platforms built with scalable architecture, performance-first engineering, and clean full-stack execution.",
  projects: [
    {
      id: "emaar-omni-asset",
      title: "Emaar Omni Asset Management",
      category: "Enterprise Internal System",
      description:
        "Emaar's internal employee asset management system with property records, CPA/RCPA modules, and invoice processing for improved lifecycle visibility.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      architectureHighlight:
        "Multi-level approval workflows with modular asset lifecycle tracking and compliance documentation pipelines.",
      performanceHighlight:
        "Streamlined administrative processes with structured records management and accurate asset visibility across departments.",
      accent: "from-indigo-500/30 via-blue-500/10 to-transparent",
      icon: "clipboard" as const,
    },
    {
      id: "in-depth-realty",
      title: "In-Depth Realty",
      category: "Real Estate Platform",
      description:
        "MLS-based property platform for US and Canada with up-to-date listings, advanced search, auto-customization for themes/colors, and expert buyer-seller workflows.",
      tech: ["React.js", "Node.js", "MongoDB"],
      architectureHighlight:
        "MLS-integrated data layer with modular search services, geo-filtered query pipelines, and SaaS-like theme customization.",
      performanceHighlight:
        "Optimized listing indexes and cached filter responses for high-volume property searches.",
      accent: "from-sky-500/30 via-blue-500/10 to-transparent",
      icon: "building" as const,
    },
    {
      id: "xr-sports",
      title: "XR Sports (Activelink)",
      category: "SaaS Sports Platform",
      description:
        "SaaS sports community platform with tournaments, events, chat, community forums, NFT badge validation, and a customizable admin panel.",
      tech: ["React.js", "Laravel", "MySQL", "Near Blockchain"],
      architectureHighlight:
        "Multi-tenant SaaS core with Near wallet auto-creation, Mintbase NFT validation, and real-time community modules.",
      performanceHighlight:
        "Token-gated event access and optimized tournament workflows with secure smart contract authentication.",
      accent: "from-violet-500/30 via-purple-500/10 to-transparent",
      icon: "trophy" as const,
    },
    {
      id: "easymobilerecharge",
      title: "EasyMobileRecharge",
      category: "Fintech Platform",
      description:
        "Recharge platform for mobile, DTH, and datacard services with vendor/retailer modules, third-party API integration, and admin management.",
      tech: ["Core PHP", "JavaScript", "MySQL"],
      architectureHighlight:
        "Vendor-retailer hierarchy with third-party API orchestration and admin control panel.",
      performanceHighlight:
        "Optimized backend transaction flows with secure payment gateway integration and reliable recharge processing.",
      accent: "from-amber-500/30 via-orange-500/10 to-transparent",
      icon: "smartphone" as const,
    },
    {
      id: "dangerous-guitar",
      title: "Dangerous Guitar",
      category: "E-Learning Platform",
      description:
        "Online guitar learning platform with video tutorials, step-by-step guidance, and resources for all skill levels from professional musicians.",
      tech: ["WordPress", "PHP", "JavaScript"],
      architectureHighlight:
        "Custom WordPress theme and plugin architecture with flexible content management for lessons and tutorials.",
      performanceHighlight:
        "Engaging user interaction features with scalable content updates and optimized media delivery.",
      accent: "from-rose-500/30 via-pink-500/10 to-transparent",
      icon: "music" as const,
    },
  ],
} as const;

export type ProjectsContent = typeof projectsContent;
export type Project = (typeof projectsContent.projects)[number];
