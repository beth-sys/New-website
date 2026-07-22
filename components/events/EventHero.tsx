import type { EventItem } from "@/data/events";

function formatFullDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventHero({ event }: { event: EventItem }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10">
      <nav aria-label="Breadcrumb" className="text-xs text-stone mb-6">
        <a href="/" className="hover:text-ink">Home</a>
        <span className="mx-2">/</span>
        <a href="/events" className="hover:text-ink">Events</a>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{event.title}</span>
      </nav>

      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        {event.category}
      </p>
      <h1 className="font-display text-3xl md:text-5xl text-ink mb-5 max-w-2xl leading-[1.1]">
        {event.title}
      </h1>
      <p className="text-sm text-charcoal/80 mb-1">{formatFullDate(event.date)} &middot; {event.time}</p>
      <p className="text-sm text-stone">{event.venue}</p>

      <div
        className="h-64 md:h-96 rounded-2xl mt-10"
        style={{
          background: "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
        }}
        role="img"
        aria-label={event.heroPlaceholder}
      />
    </section>
  );
}
