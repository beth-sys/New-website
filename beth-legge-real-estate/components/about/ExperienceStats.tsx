import { beth } from "@/data/beth";

export default function ExperienceStats() {
  return (
    <section className="bg-ink py-16">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {beth.stats.map((s) => (
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
      </div>
    </section>
  );
}
