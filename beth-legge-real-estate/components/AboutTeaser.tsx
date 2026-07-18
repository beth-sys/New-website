export default function AboutTeaser() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-14 items-center">
      <div
        className="h-80 md:h-[26rem] rounded-2xl"
        style={{
          background: "linear-gradient(160deg, #2E2A24 0%, #948B7E 100%)",
        }}
        role="img"
        aria-label="Professional portrait of Beth Legge"
      />
      <div>
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
          Meet Beth
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 leading-snug">
          Local expertise, built on trust
        </h2>
        <p className="text-charcoal/80 leading-relaxed mb-4">
          Beth Legge has helped families and investors navigate every corner
          of the Las Vegas Valley — from the golf-course estates of
          Southern Highlands to the lakeside communities of Henderson.
        </p>
        <p className="text-charcoal/80 leading-relaxed mb-8">
          Her approach pairs deep neighborhood knowledge with a
          straightforward, no-pressure process, whether you&rsquo;re buying
          your first home or your next investment property.
        </p>
        <a
          href="/about"
          className="inline-block border border-ink px-7 py-3 rounded-full text-sm hover:bg-ink hover:text-cream transition-colors"
        >
          Read Beth&rsquo;s story
        </a>
      </div>
    </section>
  );
}
