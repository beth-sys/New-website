import type { ShoppingDestination } from "@/data/shopping";

export default function ShoppingCard({ destination }: { destination: ShoppingDestination }) {
  return (
    <a
      href={`/shopping/${destination.slug}`}
      className="group block rounded-2xl overflow-hidden border border-stone-light bg-white/60 hover:shadow-lg transition-shadow"
    >
      <div
        className="h-44 w-full"
        style={{
          background: "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
        }}
        role="img"
        aria-label={destination.heroPlaceholder}
      />
      <div className="p-6">
        <p className="text-xs text-gold-dark font-medium mb-3">{destination.category}</p>
        <h3 className="font-display text-xl text-ink mb-2 leading-snug">
          {destination.name}
        </h3>
        <p className="text-sm text-charcoal/80 leading-relaxed mb-3">
          {destination.description}
        </p>
        <p className="text-xs text-stone">{destination.location}</p>
      </div>
    </a>
  );
}
