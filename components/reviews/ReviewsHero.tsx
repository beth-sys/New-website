import { Star } from "lucide-react";
import { reviewSummary } from "@/data/reviews";

export default function ReviewsHero() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        Reviews
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-6 max-w-xl leading-[1.1]">
        What clients say about working with Beth
      </h1>

      <div className="flex items-center gap-3">
        <div className="flex text-gold" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="text-sm text-charcoal">
          {reviewSummary.rating.toFixed(1)} out of 5 &middot; {reviewSummary.totalReviews} reviews on{" "}
          <a
            href={reviewSummary.sourceUrl}
            className="underline underline-offset-4 hover:text-gold-dark"
          >
            {reviewSummary.source}
          </a>
        </p>
      </div>
    </section>
  );
}
