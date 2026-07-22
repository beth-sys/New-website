import type { Restaurant } from "@/data/restaurants";

export default function RestaurantHero({ restaurant }: { restaurant: Restaurant }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10">
      <nav aria-label="Breadcrumb" className="text-xs text-stone mb-6">
        <a href="/" className="hover:text-ink">Home</a>
        <span className="mx-2">/</span>
        <a href="/restaurants" className="hover:text-ink">Restaurants</a>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{restaurant.name}</span>
      </nav>

      <div className="flex items-center gap-3 text-xs text-stone mb-4">
        <span className="text-gold-dark font-medium">{restaurant.category}</span>
        <span aria-hidden>&middot;</span>
        <span className="font-mono">{restaurant.priceRange}</span>
        <span aria-hidden>&middot;</span>
        <span>{restaurant.location}</span>
      </div>

      <h1 className="font-display text-3xl md:text-5xl text-ink mb-6 max-w-2xl leading-[1.1]">
        {restaurant.name}
      </h1>

      <div
        className="h-64 md:h-96 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
        }}
        role="img"
        aria-label={restaurant.heroPlaceholder}
      />
    </section>
  );
}
