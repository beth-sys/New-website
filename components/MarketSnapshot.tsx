const stats = [
  { label: "Median home price", value: "$482K" },
  { label: "Active listings", value: "6,140" },
  { label: "Avg. days on market", value: "34" },
  { label: "YoY price change", value: "+3.1%" },
];

export default function MarketSnapshot() {
  return (
    <section className="bg-ink py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-gold-light text-xs tracking-widest2 uppercase mb-3">
              Market Snapshot
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-cream">
              The Las Vegas Valley, this month
            </h2>
          </div>
          <a
            href="/market-reports"
            className="text-sm text-cream/70 hover:text-gold-light underline underline-offset-4"
          >
            Full market report
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl md:text-5xl text-gold-light">
                {s.value}
              </p>
              <p className="text-xs text-cream/60 mt-2 tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-cream/40 mt-10">
          Figures illustrative pending live MLS/market data integration.
        </p>
      </div>
    </section>
  );
}
