// All figures below are illustrative placeholders — not live MLS data.
// Wire this up to a real market-data feed (MLS aggregate stats, a
// service like Altos Research, or a manual monthly CMS entry) before
// publishing. Structure is the point here, not the numbers.

export type MonthlyStat = {
  month: string; // short label, e.g. "Aug '25"
  medianPrice: number; // dollars
  inventory: number; // active listings
  daysOnMarket: number;
  interestRate: number; // 30-year fixed, percent
};

export const monthlyStats: MonthlyStat[] = [
  { month: "Aug '25", medianPrice: 462000, inventory: 5820, daysOnMarket: 38, interestRate: 6.7 },
  { month: "Sep '25", medianPrice: 465000, inventory: 5910, daysOnMarket: 37, interestRate: 6.6 },
  { month: "Oct '25", medianPrice: 468000, inventory: 5990, daysOnMarket: 36, interestRate: 6.5 },
  { month: "Nov '25", medianPrice: 471000, inventory: 5940, daysOnMarket: 35, interestRate: 6.5 },
  { month: "Dec '25", medianPrice: 473000, inventory: 5860, daysOnMarket: 36, interestRate: 6.4 },
  { month: "Jan '26", medianPrice: 475000, inventory: 5900, daysOnMarket: 35, interestRate: 6.3 },
  { month: "Feb '26", medianPrice: 477000, inventory: 6010, daysOnMarket: 34, interestRate: 6.3 },
  { month: "Mar '26", medianPrice: 478000, inventory: 6080, daysOnMarket: 33, interestRate: 6.2 },
  { month: "Apr '26", medianPrice: 480000, inventory: 6120, daysOnMarket: 33, interestRate: 6.2 },
  { month: "May '26", medianPrice: 481000, inventory: 6150, daysOnMarket: 34, interestRate: 6.1 },
  { month: "Jun '26", medianPrice: 482000, inventory: 6140, daysOnMarket: 34, interestRate: 6.1 },
  { month: "Jul '26", medianPrice: 482000, inventory: 6140, daysOnMarket: 34, interestRate: 6.0 },
];

export type Segment = {
  label: string;
  medianPrice: string;
  yoyChange: string;
  inventory: string;
  note: string;
};

export const segments: Segment[] = [
  {
    label: "Overall market",
    medianPrice: "$482K",
    yoyChange: "+3.1%",
    inventory: "6,140 active",
    note: "The valley-wide median across all property types, the headline number most reports lead with.",
  },
  {
    label: "Luxury ($1M+)",
    medianPrice: "$1.65M",
    yoyChange: "+5.4%",
    inventory: "410 active",
    note: "Concentrated in Southern Highlands, MacDonald Highlands, Red Rock Country Club, and top Summerlin estates.",
  },
  {
    label: "Condos & high-rises",
    medianPrice: "$335K",
    yoyChange: "+1.8%",
    inventory: "890 active",
    note: "Strip-adjacent and downtown condo towers, generally the most rate-sensitive segment of the market.",
  },
  {
    label: "New construction",
    medianPrice: "$505K",
    yoyChange: "+2.6%",
    inventory: "1,240 active",
    note: "Active building in Inspirada, Skye Canyon, Mountain's Edge, and Summerlin's Redpoint villages.",
  },
];

export const reportMonth = "July 2026";
