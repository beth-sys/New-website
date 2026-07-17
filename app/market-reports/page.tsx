import type { Metadata } from "next";
import MarketHero from "@/components/market/MarketHero";
import HeadlineStats from "@/components/market/HeadlineStats";
import PriceTrendChart from "@/components/market/PriceTrendChart";
import InventoryChart from "@/components/market/InventoryChart";
import SegmentBreakdown from "@/components/market/SegmentBreakdown";
import RelatedArticles from "@/components/market/RelatedArticles";
import { reportMonth } from "@/data/marketReports";

export const metadata: Metadata = {
  title: `Market Report — ${reportMonth}`,
  description:
    "Monthly Las Vegas Valley housing market report: median prices, inventory, interest rates, and how the luxury, condo, and new-construction segments compare.",
};

export default function MarketReportsPage() {
  return (
    <>
      <MarketHero />
      <HeadlineStats />

      <section className="max-w-content mx-auto px-6 md:px-10 py-14 grid md:grid-cols-2 gap-6">
        <PriceTrendChart />
        <InventoryChart />
      </section>

      <SegmentBreakdown />
      <RelatedArticles />
    </>
  );
}
