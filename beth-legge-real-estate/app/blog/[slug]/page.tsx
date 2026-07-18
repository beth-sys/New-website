import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import ArticleHero from "@/components/blog/ArticleHero";
import ArticleBody from "@/components/blog/ArticleBody";
import RelatedPosts from "@/components/blog/RelatedPosts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleHero post={post} />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-16">
        <ArticleBody body={post.body} />

        <div className="max-w-2xl mt-14 pt-10 border-t border-stone-light">
          <p className="text-charcoal/80 mb-5">
            Thinking about your own move in the Las Vegas Valley? Beth is
            happy to talk through your options.
          </p>
          <a
            href="/contact"
            className="inline-block border border-ink px-7 py-3 rounded-full text-sm hover:bg-ink hover:text-cream transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
      <RelatedPosts posts={related} />
    </>
  );
}
