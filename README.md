# UK Play Casino - Affiliate Website

A high-performance, SEO-optimized affiliate casino website built with Next.js, Tailwind CSS, and full Server-Side Rendering (SSR).

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Analytics:** Vercel Analytics & Umami
- **Deployment:** Netlify (with @netlify/plugin-nextjs)
- **Compliance:** Google Consent Mode V2, UKGC regulatory disclaimers

## Key Features

- **Full SSR:** All data is fetched server-side for optimal SEO and performance.
- **Device Detection:** Server-side mobile detection via User-Agent.
- **GCLID Tracking:** Automatic capture, persistence, and appending of GCLID to affiliate links.
- **Dynamic Data:** Powered by MTD API with local mock fallback.
- **Compliance:** 18+ disclaimers, responsible gambling support links, and cookie consent.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`:
   ```
   NEXT_PUBLIC_API_URL=https://api.mtd-api.com
   ACCOUNT_ID=your_account_id
   ```
4. Run development server: `npm run dev`

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file and `@netlify/plugin-nextjs` are included.
