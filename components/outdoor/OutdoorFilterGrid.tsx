"use client";

import { useState } from "react";
import { categories, outdoorDestinations } from "@/data/outdoor";
import OutdoorCard from "@/components/outdoor/OutdoorCard";

export default function OutdoorFilterGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? outdoorDestinations
      : outdoorDestinations.filter((d) => d.category === active);

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <OutdoorCard key={d.slug} destination={d} />
        ))}
      </div>
    </div>
  );
}
