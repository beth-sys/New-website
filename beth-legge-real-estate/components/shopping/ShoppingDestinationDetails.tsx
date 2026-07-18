import type { ShoppingDestination } from "@/data/shopping";

export default function ShoppingDestinationDetails({
  destination,
}: {
  destination: ShoppingDestination;
}) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pb-16 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-8">
        <div>
          <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
            About
          </p>
          <p className="text-charcoal/85 leading-relaxed max-w-2xl mb-6">
            {destination.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((h) => (
              <span
                key={h}
                className="text-xs text-charcoal border border-stone-light rounded-full px-3 py-1.5 bg-white/60"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
            Map
          </p>
          <div
            className="h-64 rounded-2xl border border-stone-light flex items-center justify-center text-sm text-stone"
            style={{ background: "linear-gradient(135deg, #F1EFE8 0%, #D8D2C6 100%)" }}
          >
            Interactive map — wire up Google Maps API here
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-light bg-white/60 p-6">
          <p className="text-sm text-stone mb-1">Location</p>
          <p className="text-ink mb-4">{destination.location}</p>
          {destination.website ? (
            <a
              href={destination.website}
              className="block text-center bg-gold hover:bg-gold-dark transition-colors text-ink font-medium px-6 py-2.5 rounded-full text-sm"
            >
              Visit website
            </a>
          ) : (
            <p className="text-xs text-stone">
              No official website on file yet.
            </p>
          )}
        </div>

        {destination.nearbyNeighborhoods.length > 0 && (
          <div className="rounded-2xl border border-stone-light bg-white/60 p-6">
            <p className="text-sm text-stone mb-3">Nearby neighborhoods</p>
            <div className="flex flex-wrap gap-2">
              {destination.nearbyNeighborhoods.map((n) => (
                <a
                  key={n.slug}
                  href={`/communities/${n.slug}`}
                  className="text-xs text-charcoal border border-stone-light rounded-full px-3 py-1.5 hover:border-gold hover:text-gold-dark transition-colors"
                >
                  {n.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
