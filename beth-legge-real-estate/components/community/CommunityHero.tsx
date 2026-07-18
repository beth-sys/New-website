import type { CommunityDetail } from "@/data/communityDetails";

export default function CommunityHero({ community }: { community: CommunityDetail }) {
  return (
    <section className="relative h-[56vh] min-h-[420px] w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1B1712 0%, #33291C 40%, #6B4A2C 66%, #B08D57 80%, #17140F 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/30" aria-hidden />
      <div className="absolute left-0 right-0" style={{ top: "68%" }}>
        <div className="valley-rule" />
      </div>

      <div className="relative z-10 h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-center">
        <nav aria-label="Breadcrumb" className="text-xs text-cream/60 mb-5">
          <a href="/" className="hover:text-cream">Home</a>
          <span className="mx-2">/</span>
          <a href="/communities" className="hover:text-cream">Communities</a>
          <span className="mx-2">/</span>
          <span className="text-cream/90">{community.name}</span>
        </nav>
        <h1 className="font-display text-4xl md:text-6xl text-cream max-w-2xl leading-[1.05]">
          {community.name}
        </h1>
        <p className="mt-4 text-cream/80 text-base md:text-lg max-w-xl">
          {community.tagline}
        </p>
      </div>
    </section>
  );
}
