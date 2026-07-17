import { beth } from "@/data/beth";

export default function Bio() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-t border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">Background</p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">Her story</h2>
      <div className="max-w-3xl space-y-5">
        {beth.bio.map((p) => (
          <p key={p} className="text-charcoal/85 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
