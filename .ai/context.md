# Project context — Devinsol Leads / Explore

## What this repo is

A **Next.js** lead-generation and promotional website platform for agency **Devinsol**.

We design websites **for free** for new startups as part of a promotional campaign. Prospects can **browse**, **preview**, and **claim** a site. Claimed sites help startups grow digitally while generating leads for Devinsol.

## Brand

- Agency: **Devinsol**
- Product surface: Explore directory + campaign microsites
- Primary typeface: **Roobert** (local files in `src/roobert-font-family`, wired via `next/font/local`)

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS
- Fonts: self-hosted Roobert (no Google Fonts / CDN for brand type)

## Core routes

| Route | Role |
|-------|------|
| `/` | Lead-gen landing (hero, purpose, CTAs) |
| `/explore` | Directory of promotional websites (search + filters + cards) |
| `/campaign/<campaignCode>/<websiteSlug>` | Full standalone campaign site (HTML body + floating claim widget) |

## Campaign HTML source of truth

Campaign pages are authored as static HTML files:

```text
src/campaign/<campaignCode>/<website-slug>.html
```

The app serves that HTML at:

```text
https://<domain>/campaign/<campaignCode>/<website-slug>
```

Each campaign page must always inject the **floating claim / branding widget**.

## Ownership & legal framing (product copy)

- Sites in the directory are **promotional** work by Devinsol.
- Content shown on a campaign site may reference a business for demo/promo purposes; **Devinsol does not claim ownership of that business’s real-world information**.
- Until claimed, the website is owned by **Devinsol**.
- Claim flow is the lead action: “Claim it for free”.

## Related docs

- [`product.md`](./product.md) — what we are building
- [`rules.md`](./rules.md) — recurring agent / build rules
- [`design.md`](./design.md) — visual & UX directions
