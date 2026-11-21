
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { getPublishedPosts, type BlogCategory } from "@/lib/blog";

const categories: ("All" | BlogCategory)[] = [
  "All",
  "Technology",
  "Digital Marketing",
  "Learning & Growth",
  "Community",
];

export default function BlogPage() {
  const posts = getPublishedPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];

  const [activeCategory, setActiveCategory] =
    useState<"All" | BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const query = searchQuery.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesSearch &&
        post.slug !== featuredPost?.slug
      );
    });
  }, [posts, activeCategory, searchQuery, featuredPost?.slug]);

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
            <Link href="/about" className="transition hover:text-[#285B51]">
              About
            </Link>
            <Link href="/gallery" className="transition hover:text-[#285B51]">
              Gallery
            </Link>
            <Link href="/resume" className="transition hover:text-[#285B51]">
              Resume
            </Link>
          </nav>
        </div>
      </header>

      {/* INTRO */}
      <section className="mx-auto max-w-[1440px] px-6 pb-14 pt-20 md:px-12 md:pb-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#285B51]">
            Notes, ideas & perspectives
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
            Thinking out
            <br />
            <span className="font-serif italic text-[#285B51]">
              loud.
            </span>
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-[#142C38]/15 pt-6 md:flex-row md:items-end">
            <p className="max-w-xl text-base leading-8 text-[#64748B] md:text-lg">
              Thoughts, lessons and discoveries from my journey
              across technology, creativity, digital communication
              and continuous learning.
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#285B51]">
              Ideas worth sharing ↓
            </p>
          </div>
        </motion.div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredPost && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid overflow-hidden rounded-sm bg-[#E9E8E1] lg:grid-cols-2">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block min-h-[300px] overflow-hidden md:min-h-[480px]"
            >
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>

            <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#285B51]">
                Featured article · {featuredPost.category}
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                {featuredPost.title}
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-[#64748B]">
                {featuredPost.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                <span>
                  {new Date(featuredPost.date).toLocaleDateString(
                    "en-GB",
                    { day: "numeric", month: "long", year: "numeric" }
                  )}
                </span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#285B51] pb-2 text-sm font-semibold text-[#285B51] transition hover:gap-5"
              >
                Read featured article <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#285B51]">
              The journal
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Explore the articles.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#64748B]">
            Ideas and experiences across the things I build,
            the things I learn and the people I meet.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mt-10 flex max-w-md items-center gap-3 border-b border-[#142C38]/25 py-3">
          <Search size={18} className="text-[#64748B]" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#94A3B8]"
          />
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#142C38] text-white"
                  : "border border-[#142C38]/15 text-[#475569] hover:border-[#285B51] hover:text-[#285B51]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ARTICLE GRID */}
        <div className="mt-12 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E6DE]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="pt-5">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#285B51]">
                    <span>{post.category}</span>
                    <span className="text-[#94A3B8]">·</span>
                    <span className="font-medium tracking-normal text-[#94A3B8]">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight transition group-hover:text-[#285B51]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#142C38]/10 pt-4">
                    <span className="text-xs text-[#94A3B8]">
                      {new Date(post.date).toLocaleDateString(
                        "en-GB",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-semibold text-[#285B51]">
                      Read article <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-semibold">No articles found.</h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Try another search term or category.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-5 text-sm font-semibold text-[#285B51] underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#142C38] px-6 pb-8 pt-16 text-white md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Curious minds never stop exploring.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link href="/about" className="text-sm text-white/70 transition hover:text-white">
              About me ↗
            </Link>
            <Link href="/gallery" className="text-sm text-white/70 transition hover:text-white">
              Gallery ↗
            </Link>
            <Link href="/" className="text-sm text-white/70 transition hover:text-white">
              Homepage ↗
            </Link>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/50 md:flex-row">
            <p>© 2026 Cynthia Anyango. All rights reserved.</p>
            <p>Designed with intention. Built with curiosity.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
