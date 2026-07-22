// Restaurant names, locations, and descriptions below are a first-pass
// draft based on general knowledge of long-standing Las Vegas
// restaurants — not verified against current hours, ownership, or even
// whether each is still open. Fact-check every entry before publishing,
// same caveat as the community, blog, and market-report content.

export type Restaurant = {
  slug: string;
  name: string;
  category: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  heroPlaceholder: string;
  description: string;
  location: string;
  nearbyNeighborhoods: { slug: string; name: string }[];
  reservationsUrl: string;
};

export const categories = [
  "Steakhouses",
  "Italian",
  "Asian",
  "Mexican",
  "Brunch",
  "Coffee",
  "Cocktails",
  "Date Night",
  "Luxury Dining",
  "Hidden Gems",
] as const;

export const restaurants: Restaurant[] = [
  {
    slug: "cut-by-wolfgang-puck",
    name: "CUT by Wolfgang Puck",
    category: "Steakhouses",
    priceRange: "$$$$",
    heroPlaceholder: "Dimly lit modern steakhouse interior with dry-aged beef display",
    description:
      "Wolfgang Puck's take on the modern steakhouse, known for dry-aged beef and a wine list built to match. A reliable choice for a client dinner or a genuine celebration.",
    location: "The Palazzo",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "carbone",
    name: "Carbone",
    category: "Italian",
    priceRange: "$$$$",
    heroPlaceholder: "Red-sauce Italian-American dining room with white tablecloths",
    description:
      "A red-sauce Italian-American institution transplanted from New York, leaning into old-school tableside service and a scene that fills up fast on weekends.",
    location: "ARIA Resort & Casino",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "mott-32",
    name: "Mott 32",
    category: "Asian",
    priceRange: "$$$",
    heroPlaceholder: "Modern Cantonese dining room with roast duck presentation",
    description:
      "Modern Cantonese cooking best known for its Peking duck, in a dramatic dining room that's become a Strip favorite for group dinners.",
    location: "The Palazzo",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "chica",
    name: "Chica",
    category: "Mexican",
    priceRange: "$$$",
    heroPlaceholder: "Colorful modern Latin restaurant with open kitchen",
    description:
      "A vibrant, modern take on Latin American cooking rather than a traditional cantina — good for a livelier group dinner than a quiet date.",
    location: "The Venetian",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "yardbird",
    name: "Yardbird Southern Table & Bar",
    category: "Brunch",
    priceRange: "$$",
    heroPlaceholder: "Southern comfort food brunch spread with fried chicken and biscuits",
    description:
      "Southern comfort food done well — fried chicken and biscuits are the draw, and weekend brunch regularly has a wait, so plan ahead or go early.",
    location: "The Venetian",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "publicus",
    name: "PublicUs",
    category: "Coffee",
    priceRange: "$",
    heroPlaceholder: "Downtown Arts District coffee shop with exposed brick",
    description:
      "A downtown Arts District coffee shop and daytime cafe that's become a genuine neighborhood anchor — good coffee, simple food, and a laid-back crowd.",
    location: "Downtown Arts District",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "",
  },
  {
    slug: "herbs-and-rye",
    name: "Herbs & Rye",
    category: "Cocktails",
    priceRange: "$$",
    heroPlaceholder: "Classic cocktail bar with bartender shaking a drink",
    description:
      "A locals'-favorite cocktail bar and steakhouse known for classic, well-made drinks and a genuinely knowledgeable bar staff — worth the drive off the Strip.",
    location: "West Sahara Avenue",
    nearbyNeighborhoods: [
      { slug: "the-lakes", name: "The Lakes" },
      { slug: "spanish-trail", name: "Spanish Trail" },
    ],
    reservationsUrl: "",
  },
  {
    slug: "top-of-the-world",
    name: "Top of the World",
    category: "Date Night",
    priceRange: "$$$",
    heroPlaceholder: "Revolving restaurant with panoramic Las Vegas Strip views at night",
    description:
      "A slowly revolving restaurant more than 800 feet up the Stratosphere Tower, with a 360-degree view of the valley that does a lot of the romantic heavy lifting on its own.",
    location: "The STRAT (Stratosphere)",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "picasso",
    name: "Picasso",
    category: "Luxury Dining",
    priceRange: "$$$$",
    heroPlaceholder: "Elegant fine-dining room surrounded by original artwork",
    description:
      "A long-running fine-dining destination overlooking the Bellagio fountains, built around a genuinely notable original art collection on its walls. A splurge, by design.",
    location: "Bellagio",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "https://www.opentable.com",
  },
  {
    slug: "lotus-of-siam",
    name: "Lotus of Siam",
    category: "Hidden Gems",
    priceRange: "$$",
    heroPlaceholder: "Unassuming strip-mall Thai restaurant exterior",
    description:
      "A strip-mall Thai restaurant with an outsized national reputation, built almost entirely on the strength of its northern Thai dishes and a genuinely serious wine list.",
    location: "East Sahara Avenue",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    reservationsUrl: "",
  },
];
