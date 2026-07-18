import type { BlogPost } from "@/data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden border border-stone-light bg-white/60 hover:shadow-lg transition-shadow"
    >
      <div
        className="h-48 w-full"
        style={{
          background: "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
        }}
        role="img"
        aria-label={post.heroPlaceholder}
      />
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-stone mb-3">
          <span className="text-gold-dark font-medium">{post.category}</span>
          <span aria-hidden>&middot;</span>
          <span>{post.readMinutes} min read</span>
        </div>
        <h3 className="font-display text-xl text-ink mb-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <p className="text-xs text-stone">{formatDate(post.publishDate)}</p>
      </div>
    </a>
  );
}
