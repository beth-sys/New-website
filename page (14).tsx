import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { outdoorDestinations } from "@/data/outdoor";
import OutdoorDestinationHero from "@/components/outdoor/OutdoorDestinationHero";
import OutdoorDestinationDetails from "@/components/outdoor/OutdoorDestinationDetails";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return outdoorDestinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const destination = outdoorDestinations.find((d) => d.slug === params.slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.description,
  };
}

export default function OutdoorDestinationPage({ params }: Props) {
  const destination = outdoorDestinations.find((d) => d.slug === params.slug);
  if (!destination) notFound();

  return (
    <>
      <OutdoorDestinationHero destination={destination} />
      <OutdoorDestinationDetails destination={destination} />
    </>
  );
}
