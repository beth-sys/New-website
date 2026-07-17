import { reportMonth } from "@/data/marketReports";

export default function MarketHero() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        Market Report — {reportMonth}
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 max-w-xl leading-[1.1]">
        The Las Vegas Valley housing market
      </h1>
      <p className="text-charcoal/80 max-w-lg">
        Updated monthly. A look at where prices, inventory, and rates stand
        across the valley — and how the luxury, condo, and new-construction
        segments compare.
      </p>
    </section>
  );
}
