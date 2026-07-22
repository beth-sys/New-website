import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { restaurants } from "@/data/restaurants";
import RestaurantHero from "@/components/restaurants/RestaurantHero";
import RestaurantDetails from "@/components/restaurants/RestaurantDetails";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const restaurant = restaurants.find((r) => r.slug === params.slug);
  if (!restaurant) return {};
  return {
    title: restaurant.name,
    description: restaurant.description,
  };
}

export default function RestaurantPage({ params }: Props) {
  const restaurant = restaurants.find((r) => r.slug === params.slug);
  if (!restaurant) notFound();

  return (
    <>
      <RestaurantHero restaurant={restaurant} />
      <RestaurantDetails restaurant={restaurant} />
    </>
  );
}
