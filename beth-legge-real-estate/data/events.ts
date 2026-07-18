// Dates, venues, and descriptions below are a first-pass draft —
// several of these are genuinely recurring valley events (First Friday,
// farmers markets, pro sports seasons), but specific dates/times should
// be confirmed against official sources before publishing. This is
// meant to demonstrate the calendar structure, not serve as a live feed.

export type EventItem = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO date
  time: string;
  venue: string;
  heroPlaceholder: string;
  description: string;
  recurring: string; // e.g. "First Friday of every month", "" if one-off
  nearbyNeighborhoods: { slug: string; name: string }[];
};

export const categories = [
  "Food Festivals",
  "Concerts",
  "Farmers Markets",
  "First Friday",
  "Sports",
  "Holiday Events",
  "Community Events",
] as const;

export const events: EventItem[] = [
  {
    slug: "first-friday-arts-district",
    title: "First Friday Arts District",
    category: "First Friday",
    date: "2026-08-07",
    time: "5:00 PM – 11:00 PM",
    venue: "18b Arts District, Downtown Las Vegas",
    heroPlaceholder: "Crowded street art walk with local vendor booths at night",
    description:
      "A monthly street festival through downtown's Arts District, mixing local art, live music, and food vendors. One of the valley's most consistent recurring events and a good litmus test for whether downtown living is a fit.",
    recurring: "First Friday of every month",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
  },
  {
    slug: "downtown-summerlin-farmers-market",
    title: "Downtown Summerlin Farmers Market",
    category: "Farmers Markets",
    date: "2026-08-01",
    time: "9:00 AM – 2:00 PM",
    venue: "Downtown Summerlin",
    heroPlaceholder: "Outdoor farmers market stalls with fresh produce",
    description:
      "A weekly farmers market with local produce, prepared food vendors, and a genuinely community feel — a good way to get a sense of a Summerlin morning before deciding to move there.",
    recurring: "Weekly, Saturdays",
    nearbyNeighborhoods: [{ slug: "summerlin", name: "Summerlin" }],
  },
  {
    slug: "las-vegas-restaurant-week",
    title: "Las Vegas Restaurant Week",
    category: "Food Festivals",
    date: "2026-09-11",
    time: "All week, hours vary by restaurant",
    venue: "Valley-wide",
    heroPlaceholder: "Prix fixe multi-course tasting menu spread",
    description:
      "An annual week where participating restaurants across the valley — from Strip fine dining to local favorites — offer prix fixe menus, with proceeds often supporting local hospitality charities.",
    recurring: "Annually, early September",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
  },
  {
    slug: "life-is-beautiful-festival",
    title: "Life Is Beautiful Music & Art Festival",
    category: "Concerts",
    date: "2026-09-18",
    time: "Multi-day, evening headliners",
    venue: "Downtown Las Vegas",
    heroPlaceholder: "Outdoor music festival stage with downtown skyline backdrop",
    description:
      "A multi-day music, art, and food festival held across several downtown blocks, drawing major national touring acts alongside local artists and muralists.",
    recurring: "Annually, September",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
  },
  {
    slug: "vegas-golden-knights-home-opener",
    title: "Vegas Golden Knights Home Opener",
    category: "Sports",
    date: "2026-10-10",
    time: "7:00 PM",
    venue: "T-Mobile Arena",
    heroPlaceholder: "Hockey arena packed with fans in team colors",
    description:
      "The Golden Knights' NHL season kickoff at T-Mobile Arena — one of the loudest, most consistent sellout crowds of any franchise in the league.",
    recurring: "Annually, October",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
  },
  {
    slug: "las-vegas-aces-home-game",
    title: "Las Vegas Aces Home Game",
    category: "Sports",
    date: "2026-08-15",
    time: "7:00 PM",
    venue: "Michelob ULTRA Arena",
    heroPlaceholder: "WNBA basketball arena mid-game with crowd cheering",
    description:
      "A WNBA regular-season home game for the Aces, one of the league's marquee franchises, at the Michelob ULTRA Arena inside Mandalay Bay.",
    recurring: "Regular season, May–September",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
  },
  {
    slug: "unlv-football-home-game",
    title: "UNLV Football Home Game",
    category: "Sports",
    date: "2026-10-24",
    time: "TBD",
    venue: "Allegiant Stadium",
    heroPlaceholder: "College football stadium filled with fans on game day",
    description:
      "A UNLV Rebels home football game at Allegiant Stadium — a genuinely big local draw as the program has grown in profile in recent seasons.",
    recurring: "Regular season, August–November",
    nearbyNeighborhoods: [{ slug: "las-vegas", name: "Las Vegas" }],
  },
  {
    slug: "ethel-m-cactus-garden-lights",
    title: "Ethel M Cactus Garden Holiday Lights",
    category: "Holiday Events",
    date: "2026-11-27",
    time: "5:00 PM – 10:00 PM",
    venue: "Ethel M Chocolates Factory, Henderson",
    heroPlaceholder: "Illuminated cactus garden with holiday lights at night",
    description:
      "A free, long-running Henderson tradition — the botanical cactus garden at the Ethel M factory strung with holiday lights, paired with factory tours and chocolate tastings.",
    recurring: "Annually, late November through early January",
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }, { slug: "green-valley", name: "Green Valley" }],
  },
  {
    slug: "henderson-multicultural-festival",
    title: "Henderson Multicultural Festival",
    category: "Community Events",
    date: "2026-10-03",
    time: "10:00 AM – 6:00 PM",
    venue: "Henderson Events Plaza",
    heroPlaceholder: "Community festival with cultural performances and food booths",
    description:
      "A free community festival celebrating Henderson's cultural diversity with live performances, food vendors, and activities for families.",
    recurring: "Annually, October",
    nearbyNeighborhoods: [{ slug: "henderson", name: "Henderson" }],
  },
];
