import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import EventHero from "@/components/events/EventHero";
import EventDetails from "@/components/events/EventDetails";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

export default function EventPage({ params }: Props) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) notFound();

  return (
    <>
      <EventHero event={event} />
      <EventDetails event={event} />
    </>
  );
}
