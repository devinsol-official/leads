# Design directions

## Product feel

Confident, clean, and **offer-first**. This is a lead-gen + directory product, not a flashy agency portfolio dump. The home page should feel like one clear composition that sells “free website for your startup / claim a promo site.” Explore should feel like a useful tool. Campaign pages keep their own visual identity; Devinsol appears via the floating widget.

## Brand signals

- Agency name **Devinsol** should be unmistakable on marketing pages (header) and on every campaign page (widget logo).
- Typography: **Roobert** everywhere on the marketing app. Self-hosted only.
- Avoid generic “AI SaaS purple gradient” looks. Prefer a clear, intentional palette defined with CSS variables once chosen.

## Marketing site (`/`, `/explore`, shared chrome)

### Header

- Simple and neat: logo/wordmark + primary nav
- Always include **Explore**
- Minimal links; no crowded mega-nav

### Home — first viewport (hero)

- One composition (not a dashboard)
- Brand + one strong headline + one short supporting line + CTA group
- Promise must read clearly without scrolling (get/claim a website / free for startups)
- Do not pack the hero with stats strips, category chips, or secondary promo cards

### Home — Purpose section

- One job: explain why the campaign exists (help startups grow digitally; promotional sites designed free)
- May include a **video**
- Include a **product-protection** motif: a calm **circling / orbiting** animation (e.g. protective ring / orbit around a core mark). Motion should feel precise and intentional — presence, not noise. Aim for 2–3 deliberate motions on the landing overall.

### Explore

- **Large search bar** as the primary control (name search)
- Filters nearby (category and future params) — clear, not pill soup
- Cards: thumbnail + website name (title). Optional subtle category label
- Cards are interaction containers (click → campaign). Keep chrome light; avoid heavy card styling if it doesn’t help scanability
- Directory layout should prioritize findability over storytelling

### Footer (marketing pages)

- Shared, simple: Devinsol mark, short line about the promo offer, Explore link, legal/disclaimer pointer
- Same footer pattern when new marketing pages are added

## Campaign pages + floating widget

### Campaign HTML

- Each campaign site may have **entirely different** header, footer, colors, and layout
- Treat uploaded HTML as a full document experience

### Floating claim widget (always)

Design as a dedicated, reusable overlay component — consistent across all campaigns:

- Devinsol logo
- Button: **Claim it for free**
- Short ownership line: website owned by Devinsol
- Short promo disclaimer: information shown is promotional; not ownership of the business’s real data; free sites for startups’ digital growth
- Non-blocking but always visible (e.g. corner dock / slide-in panel). Must not rely on campaign HTML authors to restyle it
- Readable on both light and dark campaign backgrounds (widget brings its own surface)

## Motion

- Landing: purposeful (orbit/circle protection, light hero/header presence)
- Explore: mostly quiet; subtle hover on cards is enough
- Widget: small entrance; avoid perpetual distracting animation on the CTA

## Responsive

- Home, Explore, and widget must work on mobile and desktop
- Explore search bar stays prominent on small screens
- Widget must remain usable on mobile without covering critical campaign content entirely (collapsible/minimizable is acceptable if claim stays one tap away)

## Accessibility & trust

- Disclaimers must be readable (not tiny gray noise)
- Claim button contrast must pass clearly
- Thumbnails need meaningful alt text from site titles

## Anti-patterns

- External font CDNs for brand type
- Campaign pages without the widget
- Hero clutter (stats, schedules, promo stickers, floating badges)
- Making Explore feel like another long landing page
- Purple-on-white / default Inter-Roboto-Arial stacks for brand UI
