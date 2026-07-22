"use client";

import { useState } from "react";
import { categories, restaurants } from "@/data/restaurants";
import RestaurantCard from "@/components/restaurants/RestaurantCard";

export default function RestaurantFilterGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? restaurants : restaurants.filter((r) => r.category === active);

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
        {filtered.map((r) => (
          <RestaurantCard key={r.slug} restaurant={r} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-stone">No restaurants in this category yet.</p>
      )}
    </div>
  );
}
