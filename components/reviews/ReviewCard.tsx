import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl border border-stone-light bg-white/60 p-6 flex flex-col">
      <div className="flex text-gold mb-4" aria-hidden>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="text-charcoal/85 leading-relaxed mb-5 flex-1">
        {review.summary}
      </p>
      <div className="text-xs text-stone border-t border-stone-light pt-4">
        <p className="text-ink font-medium mb-1">{review.reviewer}</p>
        <p>{review.transaction}</p>
        <p className="mt-1">{review.date}</p>
      </div>
    </div>
  );
}
