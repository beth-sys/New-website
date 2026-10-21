import type { OutdoorDestination } from "@/data/outdoor";

export default function OutdoorCard({ destination }: { destination: OutdoorDestination }) {
  return (
    <a
      href={`/outdoor/${destination.slug}`}
      className="group block rounded-2xl overflow-hidden border border-stone-light bg-white/60 hover:shadow-lg transition-shadow"
    >
      <div
        className="h-44 w-full"
        style={{
          background: "linear-gradient(135deg, #D7DBE2 0%, #8FA3BD 55%, #4870A0 100%)",
        }}
        role="img"
        aria-label={destination.heroPlaceholder}
      />
      <div className="p-6">
        <p className="text-xs text-accent-dark font-medium mb-3">{destination.category}</p>
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
