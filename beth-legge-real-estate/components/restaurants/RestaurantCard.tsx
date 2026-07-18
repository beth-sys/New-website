import type { Restaurant } from "@/data/restaurants";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <a
      href={`/restaurants/${restaurant.slug}`}
      className="group block rounded-2xl overflow-hidden border border-stone-light bg-white/60 hover:shadow-lg transition-shadow"
    >
      <div
        className="h-44 w-full"
        style={{
          background: "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
        }}
        role="img"
        aria-label={restaurant.heroPlaceholder}
      />
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-stone mb-3">
          <span className="text-gold-dark font-medium">{restaurant.category}</span>
          <span aria-hidden>&middot;</span>
          <span className="font-mono">{restaurant.priceRange}</span>
        </div>
        <h3 className="font-display text-xl text-ink mb-2 leading-snug">
          {restaurant.name}
        </h3>
        <p className="text-sm text-charcoal/80 leading-relaxed mb-3">
          {restaurant.description}
        </p>
        <p className="text-xs text-stone">{restaurant.location}</p>
      </div>
    </a>
  );
}
