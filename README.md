# Beth Legge Real Estate — Phase 1 Scaffold

Next.js (App Router) + TypeScript + Tailwind scaffold for the homepage,
per `beth-legge-master-prompt-v2.md`.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's built (Phase 1)

- Root layout with Fraunces (display serif) + Geist (body sans / mono)
  via `next/font/google`
- Sticky nav with mobile menu
- Homepage: hero, featured communities (3 flagship + Phase 2 placeholder
  list), market snapshot strip, About Beth teaser
- Footer with required legal links and Equal Housing Opportunity /
  license-number placeholder (see TODO below)
- `<SearchHomes />` — embeds `beth.scofieldgroup.com` today; swap the
  internals in `components/SearchHomes.tsx` for a real IDX/MLS feed
  later without touching any page that renders it

## Design tokens

| Role | Value |
|---|---|
| Cream (bg) | `#FAF8F4` |
| Ink (primary text/dark bg) | `#17140F` |
| Charcoal | `#2E2A24` |
| Stone (muted text/borders) | `#948B7E` / `#D8D2C6` |
| Gold accent | `#B08D57` (`light` `#D4B483`, `dark` `#8A6C3F`) |
| Display face | Fraunces (via `next/font/google`) |
| Body / UI face | Geist Sans (via the `geist` npm package, not `next/font/google`) |
| Caption / data face | Geist Mono (via the `geist` npm package) |

**Note on fonts**: Geist is sourced from Vercel's own `geist` package
rather than `next/font/google`. Geist is a newer typeface, and
`next/font/google` validates font names against a data snapshot baked
into the Next.js version in use — if that snapshot predates Geist's
addition to Google's catalog, requesting it by name throws a
build-time `next/font` compile error. Importing directly from `geist`
avoids that entirely. See `lib/fonts.ts` for details.

Signature element: the **valley rule** (`.valley-rule` in
`globals.css`) — a thin gold line with a faint mesa/mountain silhouette,
used as a section divider. It's a nod to the Spring Mountains / Red Rock
skyline that rings the Las Vegas Valley, and it's meant to be the one
recurring visual signature across the site rather than a decorative
one-off.

## Before this goes live — TODOs

- [ ] **Have all four legal pages reviewed by a licensed attorney** —
      the drafts in `app/legal/*` are a reasonable starting structure,
      not final legal copy. Fill in the `[TODO]` placeholders (dates,
      email addresses, MLS attribution language) once confirmed.
- [ ] Replace all image placeholders (gradient divs) with licensed
      photography per the photography guidelines in the master prompt
- [ ] Fill in Beth's actual Nevada license number and brokerage
      name/logo in `components/Footer.tsx` and `data/beth.ts`
- [ ] Build out `/legal/privacy`, `/legal/terms`,
      `/legal/accessibility`, `/legal/fair-housing` pages — currently
      linked but not yet created
- [ ] Wire up `/communities`, `/search`, `/blog`, `/market-reports`,
      and `/resources` routes (Phase 1 stubs, not yet built)
- [ ] Replace the Calendly placeholder URL in
      `components/contact/CalendlySection.tsx` with Beth's real
      scheduling link
- [ ] Wire `app/api/contact/route.ts` to an actual email send and/or
      CRM lead-creation call once a CRM target is confirmed (currently
      just logs submissions server-side)
- [ ] Fill in real phone/email/office address in
      `components/contact/ContactInfo.tsx`
- [ ] Decide and wire the CMS/database path (Payload+Supabase or
      Sanity+Supabase — see master prompt) before content goes dynamic

## What's built so far (Phase 1 — complete)

- Homepage (hero, featured communities, market snapshot, about teaser)
- Community page template (`/communities/[slug]`), fully populated for
  the 3 flagship communities: Summerlin, Henderson, Southern Highlands
- About page (`/about`)
- Contact page (`/contact`) — working form wired to a stub API route,
  contact info panel, map placeholder, Calendly section
- Legal pages: `/legal/privacy`, `/legal/terms`, `/legal/accessibility`,
  `/legal/fair-housing` — all are attorney-review drafts, not final
  copy (see TODOs above)

Phase 1 is now fully scaffolded end to end.

## Phase 2 progress

- [x] **All 19 community pages** — the remaining 16 (Las Vegas, Green
      Valley, Inspirada, Anthem, North Las Vegas, Skye Canyon,
      Centennial Hills, Aliante, Mountain's Edge, Rhodes Ranch, The
      Lakes, Spanish Trail, MacDonald Highlands, Lake Las Vegas, Red
      Rock Country Club, Queensridge) now have full content in
      `data/communityDetails.ts` and render at `/communities/[slug]`
      through the same template used for the 3 flagship pages. The
      homepage's secondary chip row now links to all of them instead of
      showing "coming soon."
  - **Important**: this content is a first-pass draft based on general
    knowledge of each area, not verified against current MLS data,
    school ratings, or business listings. Fact-check every price,
    school name, and business name in `communityDetails.ts` before
    publishing — same caveat that applied to the 3 flagship entries.
- [x] **Blog** — `/blog` index plus `/blog/[slug]` article template, with
      5 sample posts in `data/blogPosts.ts` covering relocation,
      neighborhood, and buyer-guide topics from the master prompt's
      topic list. Same caveat as the community content: these are
      genuinely written draft articles, not verified against current
      data (rates, specific business names, etc.) — review before
      publishing.
- [x] **Market Reports** — `/market-reports` with headline stats, a
      12-month median-price line chart and inventory bar chart (via
      recharts), a 4-way segment breakdown (overall / luxury / condos /
      new construction), and related blog articles. All figures in
      `data/marketReports.ts` are illustrative placeholders — wire this
      up to a real data feed (MLS aggregate stats, a service like Altos
      Research, or a manual monthly update process) before publishing.

**Phase 2 is now complete**: all 19 community pages, the blog, and
market reports are built. Phase 3 (events, restaurants, shopping,
outdoor recreation, resources) is next whenever you want to continue —
see the master prompt for scope.
