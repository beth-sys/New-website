import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { shoppingDestinations } from "@/data/shopping";
import ShoppingDestinationHero from "@/components/shopping/ShoppingDestinationHero";
import ShoppingDestinationDetails from "@/components/shopping/ShoppingDestinationDetails";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return shoppingDestinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const destination = shoppingDestinations.find((d) => d.slug === params.slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.description,
  };
}

export default function ShoppingDestinationPage({ params }: Props) {
  const destination = shoppingDestinations.find((d) => d.slug === params.slug);
  if (!destination) notFound();

  return (
    <>
      <ShoppingDestinationHero destination={destination} />
      <ShoppingDestinationDetails destination={destination} />
    </>
  );
}
