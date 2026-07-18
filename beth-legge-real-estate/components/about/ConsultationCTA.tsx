export default function ConsultationCTA() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-20 text-center border-t border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        Ready to talk?
      </p>
      <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 max-w-xl mx-auto">
        Schedule a no-pressure consultation
      </h2>
      <p className="text-charcoal/80 max-w-md mx-auto mb-8">
        Whether you&rsquo;re buying, selling, or just exploring the Las Vegas
        Valley, Beth is happy to walk through your options.
      </p>
      <a
        href="/contact"
        className="inline-block bg-gold hover:bg-gold-dark transition-colors text-ink font-medium px-8 py-3 rounded-full text-sm"
      >
        Schedule a consultation
      </a>
    </section>
  );
}
