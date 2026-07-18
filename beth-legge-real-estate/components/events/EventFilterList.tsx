"use client";

import { useState } from "react";
import { categories, events } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export default function EventFilterList() {
  const [active, setActive] = useState<string>("All");

  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const filtered = active === "All" ? sorted : sorted.filter((e) => e.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive("All")}
          className={`text-xs rounded-full px-4 py-2 border transition-colors ${
            active === "All"
              ? "bg-ink text-cream border-ink"
              : "border-stone-light text-charcoal hover:border-gold"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs rounded-full px-4 py-2 border transition-colors ${
              active === c
                ? "bg-ink text-cream border-ink"
                : "border-stone-light text-charcoal hover:border-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-stone">No events in this category yet.</p>
      )}
    </div>
  );
}
