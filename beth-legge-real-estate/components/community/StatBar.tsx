import type { CommunityDetail } from "@/data/communityDetails";

export default function StatBar({ community }: { community: CommunityDetail }) {
  const stats = [
    { label: "Median price", value: community.medianPrice },
    { label: "Price per sqft", value: community.avgSqftPrice },
    { label: "Walk score", value: String(community.walkScore) },
    { label: "Founded", value: community.founded },
  ];

  return (
    <div className="border-b border-stone-light bg-white/60">
      <div className="max-w-content mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-mono text-xl md:text-2xl text-ink">{s.value}</p>
            <p className="text-xs text-stone mt-1 tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
