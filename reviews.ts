// Summaries below are original paraphrases of real reviews left for
// Beth Legge on Zillow (https://www.zillow.com/profile/Beth%20Legge),
// not verbatim quotes. Reviewer names are used as given publicly on
// Zillow; where Zillow only exposed a username rather than a real
// name, that's labeled as "Verified Zillow Buyer/Seller" rather than
// guessing at an identity. Ratings, dates, and transaction details are
// factual and pulled directly from the public profile as of the date
// this was last synced — re-check the profile periodically for new
// reviews rather than treating this list as live.

export type Review = {
  reviewer: string;
  date: string; // as shown on Zillow, e.g. "5/18/2026"
  transaction: string; // e.g. "Bought a home in Paradise, Las Vegas, NV"
  summary: string; // original paraphrase, not a verbatim quote
  rating: number;
};

export const reviewSummary = {
  rating: 5.0,
  totalReviews: 16,
  source: "Zillow",
  sourceUrl: "https://www.zillow.com/profile/Beth%20Legge",
};

export const reviews: Review[] = [
  {
    reviewer: "David Mejia",
    date: "5/18/2026",
    transaction: "Bought a home in Paradise, Las Vegas, NV",
    summary:
      "Called the experience five-star-plus, crediting Beth's negotiation work for getting nearly everything they'd hoped for.",
    rating: 5,
  },
  {
    reviewer: "David Semasinghe",
    date: "4/18/2026",
    transaction: "Sold a home in Enterprise, Las Vegas, NV",
    summary:
      "Described Beth as straightforward and clearly knowledgeable, and valued her input throughout the sale.",
    rating: 5,
  },
  {
    reviewer: "Bonnie Pattee",
    date: "4/16/2026",
    transaction: "Bought a home in Lake Las Vegas, Henderson, NV",
    summary:
      "Praised Beth's deep familiarity with every neighborhood they considered and the time she took to understand what they wanted.",
    rating: 5,
  },
  {
    reviewer: "Verified Zillow Buyer",
    date: "6/5/2023",
    transaction: "Bought a home in Buffalo, Las Vegas, NV",
    summary:
      "Called the process smooth from start to finish and said they'd recommend Beth to anyone.",
    rating: 5,
  },
  {
    reviewer: "Verified Zillow Buyer",
    date: "6/4/2023",
    transaction: "Bought a home in Buffalo, Las Vegas, NV",
    summary:
      "Managing a cross-country move, this buyer appreciated how consistently Beth kept them updated and how well she knew the market.",
    rating: 5,
  },
  {
    reviewer: "Marvin Morris",
    date: "8/16/2022",
    transaction: "Bought a home in Tierra de las Palmas, North Las Vegas, NV",
    summary:
      "Noted Beth's patience through many showings until they found the right home.",
    rating: 5,
  },
  {
    reviewer: "Verified Zillow Seller",
    date: "4/5/2022",
    transaction: "Sold a home in Summerlin South, Las Vegas, NV",
    summary:
      "Found Beth sharp on current market trends and straightforward throughout the sale.",
    rating: 5,
  },
  {
    reviewer: "Marlicia Jacobs",
    date: "3/31/2022",
    transaction: "Bought a home in North Cheyenne, Las Vegas, NV",
    summary:
      "Worked with Beth in 2020 during a genuinely difficult time to be house-hunting, and came away glad they had her as their agent.",
    rating: 5,
  },
  {
    reviewer: "Verified Zillow Buyer",
    date: "3/30/2022",
    transaction: "Bought a home in Paradise Hills, Henderson, NV",
    summary:
      "Said Beth made a stressful market feel manageable through clear, responsive communication.",
    rating: 5,
  },
  {
    reviewer: "Verified Zillow Seller",
    date: "3/30/2022",
    transaction: "Sold a townhouse in River Mountain, Henderson, NV",
    summary:
      "A more complicated, tenant-occupied, out-of-state sale that Beth still helped bring to a smooth close.",
    rating: 5,
  },
];
