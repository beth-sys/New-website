import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Relocation advice, neighborhood guides, and buying tips for the Las Vegas Valley from Beth Legge.",
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      <BlogHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
