export default function MapPlaceholder({ name }: { name: string }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-b border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">Map</p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
        {name} at a glance
      </h2>
      <div
        className="h-80 rounded-2xl border border-stone-light flex items-center justify-center text-sm text-stone"
        style={{ background: "linear-gradient(135deg, #F1EFE8 0%, #D8D2C6 100%)" }}
      >
        Interactive map — wire up Google Maps API here (see README)
      </div>
    </section>
  );
}
