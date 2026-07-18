import { beth } from "@/data/beth";

export default function AboutHero() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-14 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
          Meet Beth
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-3 leading-[1.1]">
          {beth.name}
        </h1>
        <p className="text-stone text-sm mb-6">{beth.title}</p>
        <p className="text-charcoal/85 leading-relaxed max-w-lg">{beth.intro}</p>
      </div>
      <div
        className="h-80 md:h-[28rem] rounded-2xl"
        style={{ background: "linear-gradient(160deg, #2E2A24 0%, #948B7E 100%)" }}
        role="img"
        aria-label={beth.heroPlaceholder}
      />
    </section>
  );
}
