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
- [ ] ~~Wire `app/api/contact/route.ts` to an actual email send and/or
      CRM lead-creation call once a CRM target is confirmed~~ — **done**:
      wired to Follow Up Boss. See "Follow Up Boss setup" below. Email
      notification (e.g. via Resend) is still a good idea as a backup
      to the CRM and remains a TODO.
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

## Phase 3 progress

- [x] **Restaurants guide** — `/restaurants` index with a client-side
      category filter (Steakhouses, Italian, Asian, Mexican, Brunch,
      Coffee, Cocktails, Date Night, Luxury Dining, Hidden Gems — one
      per category to start) and `/restaurants/[slug]` detail pages
      with price range, map placeholder, reservations CTA, and linked
      nearby neighborhoods. Content in `data/restaurants.ts` is a
      first-pass draft based on general knowledge of long-standing Las
      Vegas restaurants — verify names, locations, and that each is
      still open before publishing.
- [x] **Shopping guide** — `/shopping` index with a client-side
      category filter (Malls & Centers, Outlets, Luxury Shopping,
      Local Boutiques) covering Fashion Show, Downtown Summerlin, Town
      Square, District at Green Valley Ranch, both premium outlet
      centers, Crystals, Tivoli Village, and downtown's Arts District
      and Container Park, plus `/shopping/[slug]` detail pages with
      highlights, a map placeholder, a website link, and linked nearby
      neighborhoods. Same content caveat applies — verify tenant lists
      and details before publishing.
- [x] **Events calendar** — `/events` index with a client-side category
      filter (Food Festivals, Concerts, Farmers Markets, First Friday,
      Sports, Holiday Events, Community Events), sorted chronologically
      with a date-badge card layout, plus `/events/[slug]` detail pages
      showing time, venue, recurrence, a map placeholder, and linked
      nearby neighborhoods. 9 sample events across all 7 categories,
      several modeled on genuinely recurring valley events (First
      Friday, farmers markets, pro sports seasons) — same caveat as
      everywhere else: confirm actual dates/times against official
      sources before publishing, and plan to move this to CMS-driven
      entries per the master prompt so events can be added without a
      code deploy.
- [x] **Outdoor recreation guide** — `/outdoor` index with a
      client-side category filter (Natural Areas & Preserves, Trails,
      Golf, Dog Parks, Family Parks) covering Red Rock Canyon, Mount
      Charleston, Lake Mead, Springs Preserve, Clark County Wetlands
      Park, the River Mountains Loop Trail, Bali Hai Golf Club, Desert
      Breeze Dog Park, and Sunset Park, plus `/outdoor/[slug]` detail
      pages with highlights, a map placeholder, and linked nearby
      neighborhoods. Same content caveat — verify hours/fees/access
      before publishing.
- [x] **Resources** — `/resources` with 6 real, generated downloadable
      PDF guides in `public/resources/`: Buyer's Guide, Seller's Guide,
      Loan Options (VA/FHA/Conventional combined into one comparison
      guide), 1031 Exchange Basics, Investment Guide, and Relocation
      Guide. Each is genuinely written content (not placeholder text),
      built with reportlab — see `generate_resources.py` if you want to
      regenerate or edit them (edit the script, not the PDFs directly).
      Downloads are ungated (no email capture) — a deliberate default
      for friendliness, but many agents prefer gating these behind a
      short form to capture leads. Easy to add later if wanted.
      Same standing caveat: this is genuinely useful general content,
      but not legal/tax/lending advice, and each PDF says so — still
      worth a professional review pass (especially the 1031 exchange
      and loan guides) before publishing.

**Phase 3 is now complete**: Restaurants, Shopping, Events, Outdoor
Recreation, and Resources are all built, on top of Phases 1 and 2.
Phase 4 (new construction section, saved searches/favorites, AI
assistant, mortgage calculator, home valuation tool, further CRM/data
integrations) is next whenever you want to continue — see the master
prompt for scope.

## Follow Up Boss setup

The contact form (`app/api/contact/route.ts`) creates a lead in Follow
Up Boss automatically once you add an API key — no code changes
needed.

1. In Follow Up Boss, go to **Admin -> API** and generate an API key.
2. **Locally**: copy `.env.example` to `.env.local` and paste the key
   in as `FOLLOWUPBOSS_API_KEY=your-key-here`.
3. **On Vercel**: go to your project -> **Settings -> Environment
   Variables**, add `FOLLOWUPBOSS_API_KEY` with the same value, and
   redeploy.
4. Submit a real test message through `/contact` and confirm it shows
   up as a new lead in Follow Up Boss before relying on this in
   production — I couldn't call the live FUB API from this environment
   to verify the request shape, so this needs one real end-to-end test.

Without the key set, the form still works exactly as before (validates
and logs server-side) — it just won't create a FUB lead.
