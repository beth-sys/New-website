import { beth } from "@/data/beth";

export default function AwardsAndInvolvement() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-t border-stone-light grid md:grid-cols-2 gap-14">
      <div>
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">Recognition</p>
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">Awards</h2>
        <ul className="space-y-3">
          {beth.awards.map((a) => (
            <li key={a} className="text-charcoal/85 flex gap-3">
              <span className="text-gold-dark">—</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">Giving back</p>
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
          Community involvement
        </h2>
        <ul className="space-y-3">
          {beth.communityInvolvement.map((c) => (
            <li key={c} className="text-charcoal/85 flex gap-3">
              <span className="text-gold-dark">—</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
