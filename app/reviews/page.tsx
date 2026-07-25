import type { Metadata } from "next";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewCard from "@/components/reviews/ReviewCard";
import { reviews, reviewSummary } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Client reviews for Beth Legge, a Las Vegas Valley REALTOR® with a 5.0 rating across verified Zillow reviews.",
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-10 pb-24 border-t border-stone-light pt-10">
        <p className="text-sm text-stone">
          These are summaries of a selection of Beth&rsquo;s reviews.{" "}
          <a
            href={reviewSummary.sourceUrl}
            className="underline underline-offset-4 hover:text-gold-dark"
          >
            Read all {reviewSummary.totalReviews} reviews on {reviewSummary.source}
          </a>
          .
        </p>
      </section>
    </>
  );
}
