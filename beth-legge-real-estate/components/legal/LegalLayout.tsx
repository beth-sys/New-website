export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16">
      <div className="max-w-2xl">
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">Legal</p>
        <h1 className="font-display text-3xl md:text-4xl text-ink mb-2">{title}</h1>
        <p className="text-xs text-stone mb-10">Last updated: {lastUpdated}</p>

        <div className="prose-legal space-y-6 text-charcoal/85 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
