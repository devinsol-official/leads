# Product — what we are building

## One-line pitch

**Devinsol Explore** is a lead-generation platform where startups can discover free promotional websites we’ve designed, preview them as full sites, and claim one — while every preview carries Devinsol branding and a claim CTA.

## Problem

New startups need a digital presence but often can’t afford a custom site yet. Devinsol designs promotional websites for free as a growth offer, then needs a public way for people to **find**, **trust**, and **claim** those sites — turning the campaign into qualified leads.

## Solution

1. **Landing page** sells the offer and drives action.
2. **Explore directory** lists all promotional sites with search and filters.
3. **Campaign microsites** are real full-site previews (unique HTML each), always with a floating claim/branding widget.

## Audiences

| Audience | Goal |
|----------|------|
| Startup founders / operators | Browse, preview, claim a free site |
| Devinsol | Capture leads via claim + clear ownership of unclaimed promo sites |

## Pages & experiences

### 1. Home `/` — lead generation landing

**Job:** explain the offer and convert interest into Explore / Claim.

**Must include**

- Clear hero promise (e.g. get your website done / claim a free promotional website for your startup)
- Neat, simple header (brand + link to Explore)
- Purpose section: why Devinsol does this (help startups grow digitally)
- Optional **video** in the purpose area
- **Product protection** visual: a circling / orbit animation (see design doc)
- Strong CTA(s) toward Explore and the free claim story

### 2. Explore `/explore` — promotional website directory

**Job:** let users find the right promo site quickly.

**Must include**

- Large search bar (search by website name)
- Filters (e.g. business category; extend as needed)
- Grid/list of **product cards**: website name + thumbnail (+ category as needed)
- Card → campaign URL for that site

### 3. Campaign site `/campaign/<code>/<slug>` — full website preview

**Job:** show a complete, distinct website (own header/footer/content), then convert via claim.

**Source**

```text
src/campaign/<campaignCode>/<website-slug>.html
```

**Always on top**

Floating widget:

- Devinsol logo
- **Claim it for free**
- Ownership: site owned by Devinsol
- Disclaimer: promo campaign; we don’t own the business information shown; free design for startups to grow digitally

## Claim flow (product intent)

Claiming is the primary lead action. Exact form/CRM steps can evolve; the always-true parts are:

- Visible claim CTA on every campaign page
- Clear ownership until claimed
- Honest promo disclaimer

## Content model (minimum)

Each listed website needs enough data for Explore + routing:

- `title` / display name
- `campaignCode`
- `slug`
- `thumbnail`
- `category` (business type)
- path to HTML file

## Success looks like

- Visitor understands the free-website offer on `/` within seconds
- Visitor can find a relevant site on `/explore` via search/filters
- Preview feels like a real site, not a template gallery iframe gimmick
- Claim widget is always present and trustworthy (logo + CTA + disclaimers)
- New campaign sites can be added by dropping HTML + directory metadata

## Out of scope (for now)

- Full CMS admin UI (unless later requested)
- Paid checkout for sites
- Editing campaign HTML inside the React marketing layout
