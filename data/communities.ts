export type Community = {
  slug: string;
  name: string;
  blurb: string;
  medianPrice: string;
  walkScore: number;
  imagePlaceholder: string; // swap for licensed photography
  phase: 1 | 2;
};

// Phase 1 — fully built flagship pages
export const flagshipCommunities: Community[] = [
  {
    slug: "summerlin",
    name: "Summerlin",
    blurb:
      "Master-planned foothills community framed by Red Rock Canyon, known for its golf courses, trails, and Downtown Summerlin shopping district.",
    medianPrice: "$775K",
    walkScore: 62,
    imagePlaceholder: "desert foothills at dusk, warm gold tones",
    phase: 1,
  },
  {
    slug: "henderson",
    name: "Henderson",
    blurb:
      "Family-friendly city bordering Lake Mead, anchored by Green Valley Ranch and a fast-growing dining and lifestyle scene.",
    medianPrice: "$540K",
    walkScore: 55,
    imagePlaceholder: "suburban valley homes with mountain backdrop",
    phase: 1,
  },
  {
    slug: "southern-highlands",
    name: "Southern Highlands",
    blurb:
      "Guard-gated luxury community on the valley's south end, built around a private golf club and resort-style amenities.",
    medianPrice: "$890K",
    walkScore: 41,
    imagePlaceholder: "gated luxury estates, manicured golf greens",
    phase: 1,
  },
];

// Remaining communities — now fully built out in data/communityDetails.ts
// (Phase 2 content complete). Kept as a lighter list here for the
// homepage's secondary chip row; full content lives per-slug in
// communityDetails.ts and is rendered at /communities/[slug].
export const otherCommunities: Community[] = [
  { slug: "las-vegas", name: "Las Vegas" },
  { slug: "green-valley", name: "Green Valley" },
  { slug: "inspirada", name: "Inspirada" },
  { slug: "anthem", name: "Anthem" },
  { slug: "north-las-vegas", name: "North Las Vegas" },
  { slug: "skye-canyon", name: "Skye Canyon" },
  { slug: "centennial-hills", name: "Centennial Hills" },
  { slug: "aliante", name: "Aliante" },
  { slug: "mountains-edge", name: "Mountain's Edge" },
  { slug: "rhodes-ranch", name: "Rhodes Ranch" },
  { slug: "the-lakes", name: "The Lakes" },
  { slug: "spanish-trail", name: "Spanish Trail" },
  { slug: "macdonald-highlands", name: "MacDonald Highlands" },
  { slug: "lake-las-vegas", name: "Lake Las Vegas" },
  { slug: "red-rock-country-club", name: "Red Rock Country Club" },
  { slug: "queensridge", name: "Queensridge" },
].map((c) => ({
  ...c,
  blurb: "",
  medianPrice: "",
  walkScore: 0,
  imagePlaceholder: "",
  phase: 2 as const,
}));

// Backwards-compatible alias in case other files still import the old name.
export const upcomingCommunities = otherCommunities;
