import type { EventItem } from "@/data/events";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-US", { day: "numeric" }),
  };
}

export default function EventCard({ event }: { event: EventItem }) {
  const { month, day } = formatDate(event.date);

  return (
    <a
      href={`/events/${event.slug}`}
      className="group flex gap-5 rounded-2xl overflow-hidden border border-stone-light bg-white/60 hover:shadow-lg transition-shadow p-5"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-ink text-cream flex flex-col items-center justify-center">
        <span className="text-[10px] tracking-widest2 uppercase text-gold-light">{month}</span>
        <span className="font-display text-xl leading-none mt-0.5">{day}</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gold-dark font-medium mb-1.5">{event.category}</p>
        <h3 className="font-display text-lg text-ink mb-1.5 leading-snug truncate">
          {event.title}
        </h3>
        <p className="text-xs text-stone mb-1">{event.venue}</p>
        <p className="text-xs text-stone">{event.time}</p>
      </div>
    </a>
  );
}
