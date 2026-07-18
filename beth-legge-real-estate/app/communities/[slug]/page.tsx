import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { communityDetails } from "@/data/communityDetails";
import CommunityHero from "@/components/community/CommunityHero";
import StatBar from "@/components/community/StatBar";
import ProseSection from "@/components/community/ProseSection";
import SummaryTagSection from "@/components/community/SummaryTagSection";
import CategoryGrid from "@/components/community/CategoryGrid";
import MapPlaceholder from "@/components/community/MapPlaceholder";
import FAQAccordion from "@/components/community/FAQAccordion";
import NearbyListings from "@/components/community/NearbyListings";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(communityDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const community = communityDetails[params.slug];
  if (!community) return {};
  return {
    title: `${community.name} | Las Vegas Valley Community Guide`,
    description: community.tagline,
  };
}

export default function CommunityPage({ params }: Props) {
  const community = communityDetails[params.slug];

  // Phase 2 slugs (in data/communities.ts but not yet in communityDetails)
  // don't have a full template built — surface a clear not-found rather
  // than a broken or half-empty page.
  if (!community) notFound();

  return (
    <>
      <CommunityHero community={community} />
      <StatBar community={community} />

      <ProseSection eyebrow="History" title={`How ${community.name} came to be`}>
        {community.history}
      </ProseSection>

      <ProseSection eyebrow="Overview" title="What it's like here">
        {community.overview}
      </ProseSection>

      <ProseSection eyebrow="Lifestyle" title="Everyday life">
        {community.lifestyle}
      </ProseSection>

      <SummaryTagSection
        eyebrow="Housing"
        title="What's available"
        summary={community.housing.summary}
        tags={community.housing.types}
      />

      <SummaryTagSection
        eyebrow="Schools"
        title="Where kids go to school"
        summary={community.schools.summary}
        tags={community.schools.names}
      />

      <ProseSection eyebrow="New Construction" title="What's being built now">
        {community.newConstruction}
      </ProseSection>

      <CategoryGrid
        categories={[
          { label: "Restaurants", items: community.restaurants },
          { label: "Shopping", items: community.shopping },
          { label: "Entertainment", items: community.entertainment },
          { label: "Outdoor recreation", items: community.outdoorRecreation },
          { label: "Healthcare", items: community.healthcare },
        ]}
      />

      <ProseSection eyebrow="Transportation" title="Getting around">
        {community.transportation}
      </ProseSection>

      <MapPlaceholder name={community.name} />

      <FAQAccordion faqs={community.faqs} />

      <NearbyListings community={community} />
    </>
  );
}
