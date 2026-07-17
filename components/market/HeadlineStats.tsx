import { monthlyStats } from "@/data/marketReports";

export default function HeadlineStats() {
  const latest = monthlyStats[monthlyStats.length - 1];
  const yearAgo = monthlyStats[0];
  const yoyPriceChange =
    ((latest.medianPrice - yearAgo.medianPrice) / yearAgo.medianPrice) * 100;

  const stats = [
    { label: "Median price", value: `$${(latest.medianPrice / 1000).toFixed(0)}K` },
    { label: "Active inventory", value: latest.inventory.toLocaleString() },
    { label: "Avg. days on market", value: String(latest.daysOnMarket) },
    { label: "30-yr rate", value: `${latest.interestRate}%` },
    { label: "YoY price change", value: `${yoyPriceChange >= 0 ? "+" : ""}${yoyPriceChange.toFixed(1)}%` },
  ];

  return (
    <div className="border-y border-stone-light bg-white/60">
      <div className="max-w-content mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl md:text-3xl text-ink">{s.value}</p>
            <p className="text-xs text-stone mt-1.5 tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
