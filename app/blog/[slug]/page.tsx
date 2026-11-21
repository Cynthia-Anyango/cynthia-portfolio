
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Cynthia Anyango" };
  }

  return {
    title: `${post.title} | Cynthia Anyango`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPublishedPosts()
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.category === post.category
    )
    .slice(0, 2);

  const formattedDate = new Date(post.date).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#142C38]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-[#142C38]/10 bg-[#F5F4EF]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <Link href="/" className="text-2xl font-black tracking-tight">
            CA<span className="text-[#285B51]">.</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium text-[#475569] md:gap-8">
            <Link href="/" className="transition hover:text-[#285B51]">
              Home
            </Link>
            <Link href="/blog" className="text-[#285B51]">
              Blog
            </Link>
            <Link href="/about" className="transition hover:text-[#285B51]">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* ARTICLE HEADER */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-16 md:pt-24">
        <Link
          href="/blog"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition hover:text-[#285B51]"
        >
          <ArrowLeft size={16} />
          Back to all articles
        </Link>

        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#285B51]">
          {post.category}
        </p>

        <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
          {post.title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#64748B]">
          {post.excerpt}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4 border-y border-[#142C38]/15 py-5 text-xs text-[#64748B]">
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>By Cynthia Anyango</span>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E6DE]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="space-y-6 text-[16px] leading-8 text-[#475569] md:text-[17px]">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="!mb-3 !mt-12 text-2xl font-semibold tracking-tight text-[#142C38] md:text-3xl">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="!mb-2 !mt-8 text-xl font-semibold text-[#142C38]">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-6 leading-8">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-7 list-disc space-y-2 pl-6">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-7 list-decimal space-y-2 pl-6">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="pl-1 leading-8">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-[#142C38]">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#285B51] underline underline-offset-4"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-8 border-l-2 border-[#285B51] pl-6 italic text-[#64748B]">
                  {children}
                </blockquote>
              ),
              hr: () => (
                <hr className="my-10 border-[#142C38]/15" />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* AUTHOR NOTE */}
        <div className="mt-16 border-y border-[#142C38]/15 py-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
            A note from the author
          </p>
          <p className="mt-3 leading-7 text-[#64748B]">
            I share these articles as part of my ongoing journey
            in technology, creativity and digital communication.
            The goal is to document what I learn and share ideas
            that may be useful to others.
          </p>
          <p className="mt-4 font-semibold text-[#142C38]">
            Cynthia Anyango
          </p>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12">
          <div className="border-t border-[#142C38]/15 pt-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#285B51]">
              Keep exploring
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Related articles
            </h2>

            <div className="mt-9 grid gap-8 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E6DE]">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-snug transition group-hover:text-[#285B51]">
                    {item.title}
                  </h3>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#285B51]">
                    Read article <ArrowUpRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-[#142C38] px-6 pb-8 pt-12 text-white md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/50 md:flex-row">
          <p>© 2026 Cynthia Anyango. All rights reserved.</p>
          <Link href="/blog" className="transition hover:text-white">
            Back to the journal ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
