# Vercel Deployment Guide

Step-by-step instructions to deploy the Vikash Kumar portfolio on [Vercel](https://vercel.com).

---

## Prerequisites

- GitHub, GitLab, or Bitbucket account with this repository pushed
- [Vercel account](https://vercel.com/signup) (free tier works)
- Node.js 18+ installed locally for testing builds

---

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vikash-portfolio)

---

## Step 1 — Push to Git

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/vikash-portfolio.git
git push -u origin main
```

---

## Step 2 — Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select your portfolio repository
4. Vercel auto-detects **Next.js** — leave defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (automatic)
   - **Install Command:** `npm install`

---

## Step 3 — Configure Environment Variables

In **Project Settings → Environment Variables**, add:

| Variable | Required | Example |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | `https://vikash.dev` |
| `NEXT_PUBLIC_SITE_NAME` | No | `Vikash Kumar` |
| `NEXT_PUBLIC_SITE_TITLE` | No | `Vikash Kumar \| Senior Full-Stack Developer` |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | No | Your portfolio description |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | `hello@vikash.dev` |
| `NEXT_PUBLIC_GITHUB_URL` | No | `https://github.com/yourusername` |
| `NEXT_PUBLIC_LINKEDIN_URL` | No | `https://linkedin.com/in/yourprofile` |
| `NEXT_PUBLIC_TWITTER_URL` | No | `https://twitter.com/yourhandle` |
| `NEXT_PUBLIC_TWITTER_HANDLE` | No | `@yourhandle` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console code |

Copy from `.env.example` as a starting point.

> **Important:** Set `NEXT_PUBLIC_SITE_URL` to your production domain **before** the first deploy for correct OG tags, sitemap, and canonical URLs.

Apply variables to **Production**, **Preview**, and **Development** environments.

---

## Step 4 — Deploy

Click **Deploy**. Vercel will:

1. Install dependencies
2. Run `npm run build`
3. Deploy to a `*.vercel.app` URL

First deploy typically takes 1–3 minutes.

---

## Step 5 — Custom Domain

1. Go to **Project Settings → Domains**
2. Add your domain (e.g. `vikash.dev`)
3. Update DNS records as instructed by Vercel:
   - **A record** → `76.76.21.21`
   - **CNAME** for `www` → `cname.vercel-dns.com`
4. Update `NEXT_PUBLIC_SITE_URL` to match your custom domain
5. Redeploy (or trigger redeploy from Deployments tab)

---

## Step 6 — Verify Production Build

After deploy, verify:

```bash
# Test locally before pushing
npm run build
npm run start
```

**Production checks:**
- [ ] Homepage loads all sections
- [ ] Navigation smooth scroll works
- [ ] Contact form validation works
- [ ] `/sitemap.xml` is accessible
- [ ] `/robots.txt` is accessible
- [ ] Open Graph preview: [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Lighthouse audit (Performance, SEO, Accessibility ≥ 90)

---

## Vercel Configuration

The project includes `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "regions": ["bom1"]
}
```

- **bom1** — Mumbai region (low latency for India). Change or remove in `vercel.json` for global default.

Security headers are configured in `next.config.ts` (not duplicated in Vercel dashboard).

---

## Automatic Deployments

| Branch | Environment | Trigger |
|--------|-------------|---------|
| `main` | Production | Every push |
| Other branches | Preview | Every push |
| Pull requests | Preview | PR opened/updated |

---

## Adding Static Assets

Place files in `public/`:

```
public/
├── VikashKumarMern.pdf          # Resume download
├── images/
│   └── profile.jpg     # Profile photo (set in data/about.ts)
└── manifest.webmanifest
```

Then set in `data/about.ts`:

```ts
image: {
  src: "/images/profile.jpg",
  alt: "Vikash Kumar - Senior Full Stack Developer",
}
```

---

## Troubleshooting

### Build fails on Vercel

```bash
# Reproduce locally
npm run build
```

Check the Vercel build logs for TypeScript or ESLint errors.

### Wrong URL in OG tags / sitemap

Ensure `NEXT_PUBLIC_SITE_URL` is set in Vercel environment variables and redeploy.

### Environment variables not updating

Environment variables require a **redeploy** after changes. Go to Deployments → ⋯ → Redeploy.

### 404 on routes

This is a single-page portfolio — only `/` exists. Custom 404 is handled by `app/not-found.tsx`.

---

## Error Handling

The app includes production error boundaries:

| File | Purpose |
|------|---------|
| `app/error.tsx` | Recoverable route errors with retry |
| `app/global-error.tsx` | Root layout crash fallback |
| `app/not-found.tsx` | Custom 404 page |
| `app/loading.tsx` | Route loading state |

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Contact:** [hello@vikash.dev](mailto:hello@vikash.dev)
