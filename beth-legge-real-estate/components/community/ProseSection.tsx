export default function ProseSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-b border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">{title}</h2>
      <p className="text-charcoal/85 leading-relaxed max-w-3xl">{children}</p>
    </section>
  );
}
