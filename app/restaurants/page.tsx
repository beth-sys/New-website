import type { Metadata } from "next";
import RestaurantsHero from "@/components/restaurants/RestaurantsHero";
import RestaurantFilterGrid from "@/components/restaurants/RestaurantFilterGrid";

export const metadata: Metadata = {
  title: "Restaurants",
  description:
    "A dining guide to the Las Vegas Valley — steakhouses, luxury dining, cocktail bars, brunch spots, and hidden gems.",
};

export default function RestaurantsPage() {
  return (
    <>
      <RestaurantsHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
        <RestaurantFilterGrid />
      </section>
    </>
  );
}
