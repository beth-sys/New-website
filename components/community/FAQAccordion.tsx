import type { FAQ } from "@/data/communityDetails";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-b border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">FAQs</p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
        Common questions
      </h2>
      <div className="max-w-3xl divide-y divide-stone-light border-t border-b border-stone-light">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex items-center justify-between cursor-pointer list-none text-ink font-medium">
              {f.q}
              <span className="text-gold-dark ml-4 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-charcoal/80 leading-relaxed mt-3 pr-8">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
