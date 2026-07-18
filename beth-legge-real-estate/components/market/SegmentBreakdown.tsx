import { segments } from "@/data/marketReports";

export default function SegmentBreakdown() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-t border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        By segment
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
        How different parts of the market compare
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {segments.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-stone-light bg-white/60 p-6"
          >
            <h3 className="text-sm font-medium text-ink mb-4">{s.label}</h3>
            <p className="font-display text-2xl text-ink mb-1">{s.medianPrice}</p>
            <p className="text-xs text-gold-dark mb-4">{s.yoyChange} YoY</p>
            <p className="text-xs text-stone mb-4">{s.inventory}</p>
            <p className="text-xs text-charcoal/70 leading-relaxed">{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
