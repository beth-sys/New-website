type Category = { label: string; items: string[] };

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-b border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        Around the neighborhood
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
        Restaurants, shopping &amp; recreation
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {categories.map((c) => (
          <div key={c.label}>
            <h3 className="text-sm font-medium text-ink mb-3">{c.label}</h3>
            <ul className="space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-sm text-charcoal/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
