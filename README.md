# Vikash Kumar — Senior Full Stack Developer Portfolio

A modern, performance-focused portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Designed to showcase senior-level full stack engineering work — SaaS platforms, MERN stack applications, microservices, and production case studies — with a premium dark UI and subtle Framer Motion animations.

**Live demo:** [https://vikash.dev](https://vikash.dev)

---

## Project Overview

This is a single-page portfolio application for **Vikash Kumar**, a Senior Full Stack Developer with 8+ years of experience. The site presents professional identity, technical skills, featured projects, work experience, engineering case studies, and a contact form — optimized for recruiters, hiring managers, and potential clients.

The architecture follows a component-based, content-driven approach: all copy and section data live in the `data/` directory, making updates straightforward without touching layout code.

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Fonts** | [Geist Sans & Geist Mono](https://vercel.com/font) (via `next/font`) |
| **Tooling** | ESLint, Turbopack (dev), PostCSS |

---

## Features

### UI & UX
- Premium dark theme with glassmorphism cards and subtle glow effects
- Fully responsive layout (mobile → desktop)
- Sticky navbar with scroll-aware blur and active section highlighting
- Smooth scroll navigation with navbar offset
- Scroll-to-top button with fade animation
- Subtle section reveal, stagger, and hover lift animations

### Sections
- **Hero** — Full-screen intro with animated code card and CTAs
- **About** — Bio, experience stats, and profile image placeholder
- **Skills** — Category-grouped tech stack with interactive cards
- **Projects** — Featured work with architecture & performance highlights
- **Experience** — Vertical animated timeline
- **Case Studies** — Expandable engineering problem-solving deep dives
- **Contact** — Validated form with mailto integration and social links

### SEO & Accessibility
- Comprehensive metadata, Open Graph, and Twitter cards
- Dynamic OG image generation (`app/opengraph-image.tsx`)
- JSON-LD structured data (Person, WebSite, ProfilePage)
- Automatic `sitemap.xml` and `robots.txt`
- Semantic HTML with proper heading hierarchy (`h1` → `h2` → `h3`)
- Skip-to-content link, ARIA labels, and form accessibility
- `prefers-reduced-motion` support

### Performance
- Lazy-loaded below-the-fold sections via `next/dynamic`
- Optimized font loading with `display: swap`
- Tree-shaken icon imports (`optimizePackageImports`)
- Next.js Image optimization (AVIF/WebP) via `OptimizedImage`
- Static page generation at build time

---

## Setup Instructions

### Prerequisites

- **Node.js** 18.18 or later (recommended: 20+)
- **npm** 9+ (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vikash-portfolio.git
cd vikash-portfolio

# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

### Customization

1. **Site config** — Edit environment variables (`.env.local`) or `data/site.ts` defaults
2. **Section content** — Edit files in `data/` (`hero.ts`, `about.ts`, `skills.ts`, etc.)
3. **Profile photo** — Set `image.src` in `data/about.ts` and add the file to `public/images/`
4. **Resume** — Place `VikashKumarMern.pdf` in the `public/` folder
5. **Production URL** — Set `NEXT_PUBLIC_SITE_URL` in Vercel or `.env.local`

---

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete Vercel deployment instructions.

### Quick Start (Vercel)

1. Push the repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Set environment variables (copy from `.env.example`)
4. Deploy — Vercel auto-detects Next.js

### Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Required for production:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://vikash.dev`) |

### Pre-deploy Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel dashboard
- [ ] Update social URLs in environment variables
- [ ] Add `public/VikashKumarMern.pdf` and profile image
- [ ] Run `npm run build` locally — must pass with zero errors
- [ ] Verify Lighthouse scores after deploy

---

## Folder Structure

```
vikashportfilio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home page (lazy-loaded sections)
│   ├── globals.css             # Tailwind theme & global styles
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # Robots.txt config
│   ├── opengraph-image.tsx     # OG image generation
│   ├── icon.tsx                # Favicon
│   └── ...
│
├── components/
│   ├── layout/                 # BaseLayout, Container, Footer, JsonLd
│   ├── nav/                    # Navbar, Logo, NavItem, MobileMenu
│   └── ui/                     # Reusable UI (Button, Badge, animations)
│
├── sections/                   # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── CaseStudiesSection.tsx
│   ├── ContactSection.tsx
│   └── [section]/              # Section-specific subcomponents
│
├── data/                       # Content & configuration (edit here)
│   ├── site.ts                 # Global site config
│   ├── hero.ts
│   ├── about.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── caseStudies.ts
│   └── contact.ts
│
├── hooks/                      # Custom React hooks
├── utils/                      # Helpers (motion, SEO, validation, cn)
└── public/                     # Static assets & manifest
```

---

## Performance Optimizations

| Optimization | Implementation |
|--------------|----------------|
| **Code splitting** | Below-fold sections loaded with `next/dynamic` |
| **Static generation** | Home page pre-rendered at build time |
| **Font optimization** | `next/font` with subsetting and `display: swap` |
| **Image optimization** | AVIF/WebP formats, lazy loading, responsive `sizes` |
| **Bundle size** | `optimizePackageImports` for lucide, react-icons, framer-motion |
| **Animation perf** | `viewport: { once: true }`, transform/opacity only, reduced-motion support |
| **Compression** | Gzip enabled via Next.js production server |
| **SEO assets** | Edge-generated OG images, no external image requests |

---

## Contact

**Vikash Kumar**  
Senior Full Stack Developer

- **Email:** [hello@vikash.dev](mailto:hello@vikash.dev)
- **Website:** [https://vikash.dev](https://vikash.dev)
- **GitHub:** [github.com](https://github.com)
- **LinkedIn:** [linkedin.com](https://linkedin.com)
- **Location:** India · Remote Worldwide

---

## License

This project is private and intended for personal portfolio use. All rights reserved.
#   v i k a s h - p o r t f o l i o  
 