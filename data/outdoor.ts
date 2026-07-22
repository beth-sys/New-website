// Names, locations, and descriptions below are a first-pass draft —
// these are genuinely long-standing valley landmarks, but hours, fees,
// and access details should be confirmed against official sources
// before publishing, same caveat as the rest of this project's content.

export type OutdoorDestination = {
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
  "Natural Areas & Preserves",
  "Trails",
  "Golf",
  "Dog Parks",
  "Family Parks",
] as const;

export const outdoorDestinations: OutdoorDestination[] = [
  {
    slug: "red-rock-canyon-nca",
    name: "Red Rock Canyon National Conservation Area",
    category: "Natural Areas & Preserves",
    heroPlaceholder: "Red sandstone canyon walls with a scenic desert loop drive",
    description:
      "A 13-mile scenic drive loops through dramatic red sandstone formations just west of Summerlin, with trailheads for everything from short overlooks to serious multi-hour hikes.",
    location: "West of Summerlin",
    highlights: ["13-mile scenic loop drive", "Trailheads for all skill levels", "Rock climbing routes"],
    nearbyNeighborhoods: [{ slug: "summerlin", name: "Summerlin" }, { slug: "red-rock-country-club", name: "Red Rock Country Club" }],
    website: "https://www.blm.gov/visit/red-rock-canyon",
  },
  {
    slug: "mount-charleston",
    name: "Mount Charleston",
    category: "Natural Areas & Preserves",
    heroPlaceholder: "Pine forest and mountain peak, a striking contrast to the desert valley below",
    description:
      "A genuinely alpine escape less than an hour from the Strip — pine forests, snow in winter, and temperatures often 20-30 degrees cooler than the valley floor in summer.",
    location: "Spring Mountains, northwest of the valley",
    highlights: ["Alpine forest, unlike anywhere else nearby", "Winter skiing at Lee Canyon", "Multiple hiking trailheads"],
    nearbyNeighborhoods: [{ slug: "skye-canyon", name: "Skye Canyon" }, { slug: "centennial-hills", name: "Centennial Hills" }],
    website: "",
  },
  {
    slug: "lake-mead-nra",
    name: "Lake Mead National Recreation Area",
    category: "Natural Areas & Preserves",
    heroPlaceholder: "Turquoise reservoir waters against red desert cliffs",
    description:
      "The valley's main large-water recreation area, offering boating, fishing, and swimming inside a dramatic desert canyon setting, with several marinas and beaches to choose from.",
    location: "Southeast of Henderson",
    highlights: ["Boating and fishing", "Multiple marinas", "Swimming beaches"],
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }, { slug: "lake-las-vegas", name: "Lake Las Vegas" }],
    website: "https://www.nps.gov/lake",
  },
  {
    slug: "springs-preserve",
    name: "Springs Preserve",
    category: "Natural Areas & Preserves",
    heroPlaceholder: "Desert botanical garden with walking trails and native plants",
    description:
      "A cultural and botanical site built around the valley's original natural springs, with museums, walking trails, and desert-adapted gardens — a good introduction to the region's actual ecology.",
    location: "Central Las Vegas",
    highlights: ["Botanical gardens", "Museums and exhibits", "Family-friendly walking trails"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "https://www.springspreserve.org",
  },
  {
    slug: "clark-county-wetlands-park",
    name: "Clark County Wetlands Park",
    category: "Natural Areas & Preserves",
    heroPlaceholder: "Marshy wetlands trail with wildlife and reeds",
    description:
      "An unexpected wetlands ecosystem in the middle of the desert, formed by the valley's urban runoff — a genuinely good spot for birdwatching and a quiet walk away from the Strip's crowds.",
    location: "East Las Vegas / Henderson border",
    highlights: ["Birdwatching", "Boardwalk trails through wetlands", "Nature center with exhibits"],
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }],
    website: "",
  },
  {
    slug: "river-mountains-loop-trail",
    name: "River Mountains Loop Trail",
    category: "Trails",
    heroPlaceholder: "Paved multi-use trail winding through desert foothills",
    description:
      "A paved, 34-mile multi-use trail connecting Henderson, Boulder City, and Lake Mead — a serious option for road cyclists and a scenic one for casual walkers doing shorter sections.",
    location: "Henderson to Boulder City",
    highlights: ["34 miles, fully paved", "Connects Henderson, Boulder City, and Lake Mead", "Popular with road cyclists"],
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }, { slug: "lake-las-vegas", name: "Lake Las Vegas" }],
    website: "",
  },
  {
    slug: "bali-hai-golf-club",
    name: "Bali Hai Golf Club",
    category: "Golf",
    heroPlaceholder: "Tropical-themed golf course with the Strip skyline in the background",
    description:
      "A tropical-themed public course with the Strip's skyline as a backdrop — one of the more distinctive rounds of golf in the valley, and genuinely walkable from several Strip resorts.",
    location: "South Las Vegas Boulevard",
    highlights: ["Public access", "Strip-skyline views", "Tropical course design"],
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
    website: "",
  },
  {
    slug: "desert-breeze-dog-park",
    name: "Desert Breeze Dog Park",
    category: "Dog Parks",
    heroPlaceholder: "Fenced dog park with dogs playing and shaded seating areas",
    description:
      "A well-maintained, separately fenced large- and small-dog park inside the broader Desert Breeze Park complex, a longtime favorite for west-valley dog owners.",
    location: "West Las Vegas / near The Lakes",
    highlights: ["Separate large- and small-dog areas", "Shaded seating", "Part of a larger park complex with other amenities"],
    nearbyNeighborhoods: [{ slug: "the-lakes", name: "The Lakes" }],
    website: "",
  },
  {
    slug: "sunset-park",
    name: "Sunset Park",
    category: "Family Parks",
    heroPlaceholder: "Large community park with a lake, playground, and picnic areas",
    description:
      "One of the valley's largest and most-used community parks, with a lake, playgrounds, sports fields, and picnic ramadas — a genuine gathering spot rather than just a patch of grass.",
    location: "East Las Vegas / Henderson border",
    highlights: ["On-site lake", "Playgrounds and sports fields", "Picnic ramadas, popular for family gatherings"],
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }, { slug: "green-valley", name: "Green Valley" }],
    website: "",
  },
];
