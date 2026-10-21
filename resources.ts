export type Resource = {
  slug: string;
  title: string;
  category: string;
  description: string;
  fileName: string; // relative to /public/resources/
  pages: number;
};

export const resources: Resource[] = [
  {
    slug: "buyers-guide",
    title: "Buyer's Guide to the Las Vegas Valley",
    category: "Buying",
    description:
      "Pre-approval, understanding master-planned communities, HOA disclosures, new construction vs. resale, and making a competitive offer.",
    fileName: "buyers-guide.pdf",
    pages: 2,
  },
  {
    slug: "sellers-guide",
    title: "Seller's Guide: Selling Your Las Vegas Valley Home",
    category: "Selling",
    description:
      "Pricing strategy, preparing your home for market, Nevada disclosure requirements, and reviewing offers.",
    fileName: "sellers-guide.pdf",
    pages: 2,
  },
  {
    slug: "loan-options-guide",
    title: "Home Loan Options: VA, FHA & Conventional",
    category: "Financing",
    description:
      "A side-by-side look at conventional, FHA, and VA loan programs — covers the topics buyers ask about most before talking to a lender.",
    fileName: "loan-options-guide.pdf",
    pages: 1,
  },
  {
    slug: "1031-exchange-guide",
    title: "1031 Exchange Basics for Nevada Investors",
    category: "Investment",
    description:
      "What a 1031 exchange is, the 45- and 180-day timelines, like-kind property rules, and why a qualified intermediary matters.",
    fileName: "1031-exchange-guide.pdf",
    pages: 1,
  },
  {
    slug: "investment-guide",
    title: "Real Estate Investment Guide: Las Vegas Valley",
    category: "Investment",
    description:
      "Why investors look at the valley, rental market basics, short-term vs. long-term rental considerations, and cash flow fundamentals.",
    fileName: "investment-guide.pdf",
    pages: 2,
  },
  {
    slug: "relocation-guide",
    title: "Relocation Guide: Moving to the Las Vegas Valley",
    category: "Relocation",
    description:
      "Choosing a side of the valley, cost of living basics, school considerations, and a practical moving checklist.",
    fileName: "relocation-guide.pdf",
    pages: 2,
  },
];
