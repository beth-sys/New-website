import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function RelatedArticles() {
  const related = blogPosts.filter((p) =>
    ["Buying", "Relocation"].includes(p.category)
  );

  if (related.length === 0) return null;

  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 border-t border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        Related reading
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
        Make sense of the numbers
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
