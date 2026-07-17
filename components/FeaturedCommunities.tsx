import { flagshipCommunities, otherCommunities } from "@/data/communities";

export default function FeaturedCommunities() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
            Featured Communities
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Where to put down roots
          </h2>
        </div>
        <a
          href="/communities"
          className="hidden sm:inline text-sm text-charcoal hover:text-gold underline underline-offset-4"
        >
          View all communities
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {flagshipCommunities.map((c) => (
          <a
            key={c.slug}
            href={`/communities/${c.slug}`}
            className="group block rounded-2xl overflow-hidden border border-stone-light bg-white/60 hover:shadow-lg transition-shadow"
          >
            <div
              className="h-56 w-full"
              style={{
                background:
                  "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
              }}
              aria-label={c.imagePlaceholder}
              role="img"
            />
            <div className="p-6">
              <h3 className="font-display text-xl text-ink mb-2">{c.name}</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
                {c.blurb}
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-stone">
                <span>Median {c.medianPrice}</span>
                <span>Walk Score {c.walkScore}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* All 19 communities now have full pages — this row links out to
          the remaining 16 rather than just naming them as coming soon. */}
      <div className="mt-14">
        <p className="text-xs tracking-widest2 uppercase text-stone mb-4">
          More Las Vegas Valley communities
        </p>
        <div className="flex flex-wrap gap-2">
          {otherCommunities.map((c) => (
            <a
              key={c.slug}
              href={`/communities/${c.slug}`}
              className="text-xs text-charcoal border border-stone-light rounded-full px-3 py-1.5 hover:border-gold hover:text-gold-dark transition-colors"
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
