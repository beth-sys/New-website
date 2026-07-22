import type { Metadata } from "next";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourceCard from "@/components/resources/ResourceCard";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free downloadable guides on buying, selling, financing, and investing in Las Vegas Valley real estate.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      </section>
    </>
  );
}
