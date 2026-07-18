import SearchHomes from "@/components/SearchHomes";
import type { CommunityDetail } from "@/data/communityDetails";

export default function NearbyListings({ community }: { community: CommunityDetail }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-b border-stone-light">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-3">
        <div>
          <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
            Homes for sale
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ink">
            Current listings in {community.name}
          </h2>
        </div>
      </div>
      <SearchHomes height={640} />
    </section>
  );
}
