import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/data/blogPosts";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-16 border-t border-stone-light">
      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        Keep reading
      </p>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
        More from the blog
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
