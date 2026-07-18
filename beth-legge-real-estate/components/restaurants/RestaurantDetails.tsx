import type { Restaurant } from "@/data/restaurants";

export default function RestaurantDetails({ restaurant }: { restaurant: Restaurant }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pb-16 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-8">
        <div>
          <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
            About
          </p>
          <p className="text-charcoal/85 leading-relaxed max-w-2xl">
            {restaurant.description}
          </p>
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
          <p className="text-sm text-stone mb-1">Price range</p>
          <p className="font-mono text-lg text-ink mb-4">{restaurant.priceRange}</p>
          <p className="text-sm text-stone mb-1">Location</p>
          <p className="text-ink mb-4">{restaurant.location}</p>
          {restaurant.reservationsUrl ? (
            <a
              href={restaurant.reservationsUrl}
              className="block text-center bg-gold hover:bg-gold-dark transition-colors text-ink font-medium px-6 py-2.5 rounded-full text-sm"
            >
              Reserve a table
            </a>
          ) : (
            <p className="text-xs text-stone">
              Walk-in or call ahead — no online reservations.
            </p>
          )}
        </div>

        {restaurant.nearbyNeighborhoods.length > 0 && (
          <div className="rounded-2xl border border-stone-light bg-white/60 p-6">
            <p className="text-sm text-stone mb-3">Nearby neighborhoods</p>
            <div className="flex flex-wrap gap-2">
              {restaurant.nearbyNeighborhoods.map((n) => (
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
