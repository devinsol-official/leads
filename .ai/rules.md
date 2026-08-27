# Agent & build rules

Follow these every time the matching task happens. Do not skip the mandatory pieces.

---

## When creating or updating the marketing site (App Router pages)

### Always

- Use **Roobert** (local) for UI typography — never introduce Google Fonts / external font CDNs for brand type.
- Keep a **simple header** with at least: brand/logo mark and a link to **`/explore`**.
- Keep lead-gen CTAs aligned with the product promise: free promotional websites for startups / claim a site.
- Prefer App Router under `src/app/`.

### Home (`/`)

- Treat as a **lead-generation landing**, not a generic agency brochure.
- Hero must clearly communicate: get a website / claim a free promotional site (exact copy can evolve; intent must stay clear).
- Include a **Purpose** section that can feature video and a **circling / orbiting product-protection** visual (see `design.md`).
- Primary CTA should push toward **Explore** and/or claim intent.

### Explore (`/explore`)

- Show **website cards**: name/title + thumbnail.
- Card click → navigate to that campaign URL (`/campaign/<code>/<slug>`), typically opening the full campaign experience.
- Include a **large search bar** (search by website name).
- Include **filters** (at minimum: business category; more params as data grows).
- Keep layout scannable: directory first, not a second marketing essay.

### Shared chrome on marketing pages

- When adding a new marketing page under the main site, include the **same simple header** pattern (brand + Explore) unless the page is a raw campaign HTML site.
- Footer: when a marketing page needs a footer, use the shared marketing footer (agency mark, short promo line, Explore link, legal/disclaimer pointer). Do not invent a one-off footer per page without reason.

---

## When adding a new campaign website

### Files

1. Create HTML at:
   ```text
   src/campaign/<campaignCode>/<website-slug>.html
   ```
2. Ensure a route exists that serves:
   ```text
   /campaign/<campaignCode>/<website-slug>
   ```
3. Register the site in the explore directory data source (title, slug, campaign code, thumbnail, category, etc.).

### Always inject the floating claim widget

On **every** campaign page, always apply the shared **floating branding / lead widget**:

- Devinsol logo
- Primary button: **Claim it for free**
- Disclaimer: this website is owned by **Devinsol**
- Promo note: information shown is part of a promotional campaign; we do not own the client’s real business information; sites are designed free for new startups to help them grow digitally

Do not ship a campaign page without this widget.

### Campaign HTML rules

- Campaign HTML is a **complete site surface** (its own header/footer/styles/content) — not a fragment meant to inherit the marketing layout.
- Widget is **overlay / floating**, not part of the HTML author’s layout chrome.
- Do not strip or bypass the widget for “special” campaigns unless product explicitly changes this rule.

### Campaign Image Assets & URL Standard (Mandatory)

Whenever a new campaign website HTML folder/file is introduced or updated:

1. **Asset Organization**:
   - **Root logos & icons**: Keep brand logos (`logo.png`, `logo-gold.png`, etc.) and favicons (`favicon.ico`, `favicon.png`, `apple-touch-icon`) directly in the root of the campaign slug folder:
     `src/campaign/<campaignCode>/<website-slug>/`
   - **Page & section images**: Place all gallery, showcase, hero, and content images inside an `images/` subfolder:
     `src/campaign/<campaignCode>/<website-slug>/images/`
2. **Absolute URL Template**:
   - **Every** image, logo, and icon link in the HTML file **must** use the absolute campaign production URL pattern:
     ```text
     https://leads.devinsol.com/campaign/2026/<website-slug>/<image-name>
     ```
     - For root logos/favicons:
       `https://leads.devinsol.com/campaign/2026/<website-slug>/logo-gold.png`
     - For images in subfolders:
       `https://leads.devinsol.com/campaign/2026/<website-slug>/images/<image-name>.jpg`
3. **Autonomous Execution**:
   - Never leave relative image paths (`images/foo.jpg`, `logo.png`, `./...`) in campaign HTML files. Automatically gather, place, and rewrite all image links to the full URL template without requiring explicit user reminders.

---

## When updating the floating claim widget

- Update the **single shared component** used by all campaign routes.
- After changes, assume **all** campaign pages inherit the update — no per-site widget forks unless there is a documented exception.
- Keep claim CTA + ownership disclaimer + promo disclaimer together.

---

## When adding explore filters or card fields

- Keep card fields consistent: title, thumbnail, category (minimum).
- Search must match website name (and can expand later to category/tags).
- New filter dimensions need corresponding data on each campaign entry.

---

## When changing routes or URL shape

Preserve this contract unless product asks to change it:

```text
/campaign/<campaignCode>/<website-slug>
```

maps from

```text
src/campaign/<campaignCode>/<website-slug>.html
```

---

## SEO, Robots.txt & Sitemap Rules

1. **Robots.txt (`src/app/robots.ts`)**:
   - Keep public crawlable surfaces indexed: `/`, `/explore`, `/campaign/`, `/terms`, `/privacy`.
   - Protect private submission states & APIs: `/api/`, `/claim`, `/request`.
   - Always reference `https://leads.devinsol.com/sitemap.xml`.

2. **Sitemap.xml (`src/app/sitemap.ts`)**:
   - Always dynamically map static marketing pages (`/`, `/explore`, `/terms`, `/privacy`) and all registered campaign website pages from `src/data/campaigns.ts`.
   - Keep `priority` and `changeFrequency` aligned with page activity.

3. **Metadata & OpenGraph (OG) Standards**:
   - **Root Layout (`src/app/layout.tsx`)**: Define `metadataBase: new URL("https://leads.devinsol.com")`, title template, description, keywords, canonical URLs, and full OpenGraph + Twitter card configurations pointing to `/og-image.svg`.
   - **Campaign Pages (`src/app/campaign/[campaignCode]/[slug]/page.tsx`)**: Use dynamic `generateMetadata` to populate custom title, description, keywords, canonical URL, and business thumbnail as `og:image`.

---

## Do not

- Host brand fonts from third-party CDNs.
- Publish campaign pages without the claim widget.
- Put campaign microsites inside the main marketing layout (they are standalone HTML experiences + widget).
- Treat promotional site content as verified client-owned production data without the disclaimer.
- Omit `robots.txt`, `sitemap.xml`, or canonical URLs on public routes.
