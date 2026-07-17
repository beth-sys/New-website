export default function SummaryTagSection({
  eyebrow,
  title,
  summary,
  tags,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
}) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-b border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">{title}</h2>
      <p className="text-charcoal/85 leading-relaxed max-w-3xl mb-6">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs text-charcoal border border-stone-light rounded-full px-3 py-1.5 bg-white/60"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
