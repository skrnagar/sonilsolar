# SONIL Solar

Production website and lead platform for **SONIL Solar**, the rooftop and distributed-solar brand of **Sonil Buildcon Pvt. Ltd.** (Indore, Madhya Pradesh 452016).

It is built to compete for rooftop-solar search and AI-assistant citations across Indore, Bhopal, Pune and Madhya Pradesh — without thin doorway pages, fake reviews, or invented project counts.

## What ships in this repo

- Next.js App Router (TypeScript, Tailwind v4, shadcn/ui)
- Phase 1 pages: home, Indore / Bhopal / Pune mega-city + intent URLs, selected MP district pages, MP state hubs, residential / commercial / industrial / EPC services, calculator, PM Surya Ghar, MP subsidy, projects placeholder, guides, contact, quote flow
- Interactive solar calculator with disclosed methodology
- 7-step consultation form → lead inbox
- Admin lead CRM at `/admin` (file-backed locally). A starter Postgres schema lives in `supabase/migrations/` for when a project is connected.
- FAQPage / LocalBusiness / Service / Breadcrumb / Organization JSON-LD
- `sitemap.xml`, `robots.txt`, `llms.txt`
- Sticky mobile Call / WhatsApp / Get quote bar

## NAP (from the company file)

- Brand: SONIL Solar  
- Legal: Sonil Buildcon Private Limited  
- Office: Indore, Madhya Pradesh 452016, India  
- Phone / WhatsApp: +91 93405 83565  
- Email: info@sonilbuildcon.com  
- Hours: Monday–Saturday, 9:00 AM – 7:00 PM IST  

Street-level shopfronts for Bhopal/Pune are **not** invented. Add them in content when they exist on the company file and keep GBP / Justdial / IndiaMART identical.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Dev server: [http://127.0.0.1:43123](http://127.0.0.1:43123)

```bash
npm run build
npm start
```

Admin: `/admin/login` — default password `sonil-admin-change-me` (set `ADMIN_PASSWORD` in production).

## Content rules

- Subsidy numbers follow the current PM Surya Ghar CFA structure (₹30,000/kW first 2 kW, ₹18,000 next 1 kW, max ₹78,000) and are labelled **Last verified: September 2026**. Re-check [pmsuryaghar.gov.in](https://pmsuryaghar.gov.in/) and MNRE before changing them.
- Price tables are **indicative bands**, not quotations.
- Commercial / industrial connections are never sold household CFA.
- Projects/testimonials stay empty until verified client files exist.
- New city URLs require unique DISCOM, climate, roof and customer copy — not a find-replace of Indore.

## Architecture notes

- City and service copy lives in `src/content/` (CMS-shaped TypeScript). That is the editorial source of truth for Phase 1.
- Leads persist to `data/leads.json` on a writable disk. On Vercel’s serverless filesystem this will not survive deploys — connect Postgres/Supabase (env-gated) before production traffic.
- Hindi (`/hi/...`) is not auto-translated. Keep the tree ready; publish Hindi only after human review.

## Analytics

Set `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GTM_ID` when the SONIL property exists. Do not paste competitor pixels.

## License

Private — Sonil Buildcon Pvt. Ltd.
