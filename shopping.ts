// Names, locations, and descriptions below are a first-pass draft based
// on general knowledge of the valley's shopping destinations — not
// verified against current tenant lists or hours. Fact-check before
// publishing, same caveat as the rest of this project's content.

export type ShoppingDestination = {
  slug: string;
  name: string;
  category: string;
  heroPlaceholder: string;
  description: string;
  location: string;
  highlights: string[];
  nearbyNeighborhoods: { slug: string; name: string }[];
  website: string;
};

export const categories = [
  "Malls & Centers",
  "Outlets",
  "Luxury Shopping",
  "Local Boutiques",
] as const;

export const shoppingDestinations: ShoppingDestination[] = [
  {
    slug: "fashion-show-mall",
    name: "Fashion Show",
    category: "Malls & Centers",
    heroPlaceholder: "Large Strip-facing mall entrance with distinctive canopy",
    description:
      "One of the Strip's largest malls, anchored by several major department stores and known for its runway fashion shows staged right in the center court on weekends.",
    location: "The Strip",
    highlights: ["Multiple anchor department stores", "Runway fashion shows", "Direct Strip access"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "https://www.thefashionshow.com",
  },
  {
    slug: "downtown-summerlin",
    name: "Downtown Summerlin",
    category: "Malls & Centers",
    heroPlaceholder: "Open-air shopping district with palm trees and outdoor dining",
    description:
      "An open-air shopping, dining, and entertainment district built as Summerlin's town center, walkable in a way most Vegas retail isn't, and anchored by the Las Vegas Ballpark next door.",
    location: "Summerlin",
    highlights: ["Open-air, walkable layout", "Adjacent to Las Vegas Ballpark", "Regular weekend events and farmers markets"],
    nearbyNeighborhoods: [{ slug: "summerlin", name: "Summerlin" }, { slug: "red-rock-country-club", name: "Red Rock Country Club" }],
    website: "https://www.downtownsummerlin.com",
  },
  {
    slug: "town-square-las-vegas",
    name: "Town Square Las Vegas",
    category: "Malls & Centers",
    heroPlaceholder: "Outdoor lifestyle center with village-style architecture",
    description:
      "An outdoor lifestyle center styled like a small village, with a family-friendly play area and a mix of national retailers and casual dining.",
    location: "South Las Vegas Boulevard",
    highlights: ["Family-oriented play area", "Village-style outdoor layout", "Mix of retail and casual dining"],
    nearbyNeighborhoods: [{ slug: "southern-highlands", name: "Southern Highlands" }],
    website: "https://www.townsquarelasvegas.com",
  },
  {
    slug: "district-at-green-valley-ranch",
    name: "The District at Green Valley Ranch",
    category: "Malls & Centers",
    heroPlaceholder: "Henderson outdoor shopping district at dusk with string lights",
    description:
      "Henderson's main open-air retail and dining district, adjacent to the Green Valley Ranch Resort, with a walkable layout and a strong restaurant lineup alongside its shops.",
    location: "Henderson",
    highlights: ["Walkable outdoor layout", "Strong restaurant lineup", "Adjacent to Green Valley Ranch Resort"],
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }, { slug: "green-valley", name: "Green Valley" }],
    website: "",
  },
  {
    slug: "las-vegas-north-premium-outlets",
    name: "Las Vegas North Premium Outlets",
    category: "Outlets",
    heroPlaceholder: "Open-air outlet mall walkway with brand storefronts",
    description:
      "An open-air outlet center near downtown with a large selection of designer and name-brand outlet stores, generally less crowded than the Strip-area outlets.",
    location: "Downtown Las Vegas area",
    highlights: ["Open-air layout", "Large designer-outlet selection", "Closer to downtown than the Strip outlets"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "https://www.premiumoutlets.com",
  },
  {
    slug: "las-vegas-south-premium-outlets",
    name: "Las Vegas South Premium Outlets",
    category: "Outlets",
    heroPlaceholder: "Outlet mall near the south Strip with palm-lined walkways",
    description:
      "The valley's other major outlet center, located near the south end of the Strip and generally easier for Strip-based visitors to reach than the north location.",
    location: "South Las Vegas Boulevard",
    highlights: ["Near the south Strip", "Large outlet tenant mix", "Convenient for Strip visitors"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "https://www.premiumoutlets.com",
  },
  {
    slug: "shops-at-crystals",
    name: "The Shops at Crystals",
    category: "Luxury Shopping",
    heroPlaceholder: "Ultra-modern architecture housing flagship luxury boutiques",
    description:
      "A striking piece of architecture in its own right, housing a concentrated run of top-tier luxury flagship stores in the heart of CityCenter.",
    location: "CityCenter, The Strip",
    highlights: ["Flagship luxury boutiques", "Notable architecture and public art", "Central Strip location"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "",
  },
  {
    slug: "tivoli-village",
    name: "Tivoli Village",
    category: "Luxury Shopping",
    heroPlaceholder: "European-inspired outdoor luxury retail plaza",
    description:
      "A European-inspired outdoor retail and dining plaza in the west valley, mixing upscale boutiques with well-regarded restaurants — a quieter, more residential-feeling alternative to the Strip's luxury retail.",
    location: "West Las Vegas, adjacent to Queensridge",
    highlights: ["European-inspired architecture", "Upscale boutiques and dining", "Quieter, residential-adjacent setting"],
    nearbyNeighborhoods: [{ slug: "queensridge", name: "Queensridge" }],
    website: "",
  },
  {
    slug: "arts-district-boutiques",
    name: "Arts District Boutiques",
    category: "Local Boutiques",
    heroPlaceholder: "Independent boutique storefronts in a historic downtown building",
    description:
      "A cluster of independent galleries, vintage shops, and locally owned boutiques in downtown's 18b Arts District — the valley's best bet for something you won't find at a mall.",
    location: "Downtown Arts District",
    highlights: ["Independent, locally owned shops", "Regular First Friday art walk", "Vintage and gallery finds"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "",
  },
  {
    slug: "downtown-container-park",
    name: "Downtown Container Park",
    category: "Local Boutiques",
    heroPlaceholder: "Shipping-container storefronts with a large tree sculpture centerpiece",
    description:
      "A quirky open-air retail spot built from shipping containers, mixing small local shops and food vendors around a distinctive tree sculpture centerpiece and a kids' play area.",
    location: "Downtown Fremont East",
    highlights: ["Built from repurposed shipping containers", "Small local shops and food vendors", "Family-friendly play area"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "",
  },
];
