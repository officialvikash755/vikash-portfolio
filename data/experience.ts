export const experienceContent = {
  sectionLabel: "Experience",
  heading: "Professional journey & expertise",
  description:
    "Eight years of building production systems — from MERN applications and SaaS platforms to blockchain integrations, fintech APIs, and enterprise asset management.",
  timeline: [
    {
      id: "alchemy-techsol",
      period: "Jun 2025 — Present",
      title: "Full Stack Developer (MERN)",
      organization: "Alchemy Techsol (App-Inventive) · Noida, India",
      description:
        "Building Emaar's internal employee asset management system and comprehensive property records solutions with CPA, RCPA, and invoice processing modules.",
      achievements: [
        "Designed and implemented Emaar Omni asset management with multi-level approval workflows",
        "Developed property records management modules to streamline documentation and compliance",
        "Improved asset lifecycle visibility and administrative accuracy across departments",
      ],
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      icon: "fullstack" as const,
    },
    {
      id: "capslock-digital",
      period: "Aug 2021 — Jan 2025",
      title: "Full Stack Developer",
      organization: "Capslock Digital · Mohali, India",
      description:
        "Developed and deployed full-stack web applications using React.js, Node.js, Express.js, and Laravel on the XR-Sports platform.",
      achievements: [
        "Built chat, community interaction, and dynamic pages for the XR-Sports platform",
        "Implemented token-gating for events and tournaments using Near Blockchain NFTs",
        "Developed smart contracts to authenticate and manage user participation securely",
      ],
      tags: ["React.js", "Node.js", "Laravel", "Near Blockchain"],
      icon: "blockchain" as const,
    },
    {
      id: "freelance-php",
      period: "Nov 2019 — Aug 2021",
      title: "Freelance Programmer",
      organization: "Independent · Mohali, India",
      description:
        "Worked as a PHP developer on freelance projects, integrating third-party APIs and payment gateway solutions.",
      achievements: [
        "Integrated third-party payment gateway APIs for seamless transaction flows",
        "Delivered custom PHP web solutions for diverse client requirements",
        "Built secure backend integrations with robust error handling and validation",
      ],
      tags: ["PHP", "REST APIs", "Payment Gateways", "JavaScript"],
      icon: "api" as const,
    },
    {
      id: "aquilis-web",
      period: "Jun 2016 — Nov 2019",
      title: "PHP Web Developer",
      organization: "Aquilis Web Solutions · Mohali, India",
      description:
        "Developed EasyMobileRecharge recharge portal and financial management APIs for a Khatabook-like mobile application.",
      achievements: [
        "Built EasyMobileRecharge with Core PHP, JavaScript, and third-party recharge APIs",
        "Designed user-friendly interfaces and optimized backend processes for reliability",
        "Developed scalable financial management APIs with robust security for mobile app integration",
      ],
      tags: ["Core PHP", "JavaScript", "MySQL", "REST APIs"],
      icon: "api" as const,
    },
    {
      id: "nascenture-intern",
      period: "Jun 2015 — Jun 2016",
      title: "PHP Developer (Intern)",
      organization: "Nascenture Software Solutions · Mohali, India",
      description:
        "Gained hands-on experience building and managing websites using WordPress and Core PHP with responsive, user-friendly designs.",
      achievements: [
        "Crafted responsive WordPress sites with custom functionalities for client requirements",
        "Implemented secure user authentication with JWT and MySQL database management",
        "Built server-side logic and custom PHP features for diverse web projects",
      ],
      tags: ["WordPress", "Core PHP", "MySQL", "JWT"],
      icon: "mern" as const,
    },
  ],
} as const;

export type ExperienceContent = typeof experienceContent;
export type ExperienceItem = (typeof experienceContent.timeline)[number];
