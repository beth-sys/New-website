import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import EventFilterList from "@/components/events/EventFilterList";

export const metadata: Metadata = {
  title: "Events",
  description:
    "A local events calendar for the Las Vegas Valley — festivals, farmers markets, pro sports, and community gatherings.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
        <EventFilterList />
      </section>
    </>
  );
}
