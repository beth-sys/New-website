import type { BlogPost } from "@/data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-10">
      <nav aria-label="Breadcrumb" className="text-xs text-stone mb-6">
        <a href="/" className="hover:text-ink">Home</a>
        <span className="mx-2">/</span>
        <a href="/blog" className="hover:text-ink">Blog</a>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{post.title}</span>
      </nav>

      <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
        {post.category}
      </p>
      <h1 className="font-display text-3xl md:text-5xl text-ink mb-5 max-w-2xl leading-[1.1]">
        {post.title}
      </h1>
      <p className="text-xs text-stone">
        {formatDate(post.publishDate)} &middot; {post.readMinutes} min read
      </p>

      <div
        className="h-64 md:h-96 rounded-2xl mt-10"
        style={{
          background: "linear-gradient(135deg, #D8D2C6 0%, #B08D57 55%, #8A6C3F 100%)",
        }}
        role="img"
        aria-label={post.heroPlaceholder}
      />
    </section>
  );
}
