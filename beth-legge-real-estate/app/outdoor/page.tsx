import type { Metadata } from "next";
import OutdoorHero from "@/components/outdoor/OutdoorHero";
import OutdoorFilterGrid from "@/components/outdoor/OutdoorFilterGrid";

export const metadata: Metadata = {
  title: "Outdoor Recreation",
  description:
    "An outdoor recreation guide to the Las Vegas Valley — Red Rock Canyon, Mount Charleston, Lake Mead, trails, golf, and parks.",
};

export default function OutdoorPage() {
  return (
    <>
      <OutdoorHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
        <OutdoorFilterGrid />
      </section>
    </>
  );
}
