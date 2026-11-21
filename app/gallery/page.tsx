
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Community" | "Creative Work" | "Technology";

type GalleryItem = {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
  year: string;
};

const categories: Category[] = [
  "All",
  "Community",
  "Creative Work",
  "Technology",
];

const galleryItems: GalleryItem[] = [
  {
    title: "Google I/O Extended",
    category: "Community",
    description: "Moderating a panel discussion at Google I/O Extended, Strathmore University.",
    image: "/images/about/google-io-extended.jpg",
    year: "Community",
  },
  {
    title: "GDSC Leadership",
    category: "Community",
    description: "Building a student technology community at St Paul's University.",
    image: "/images/about/gdsc-lead.jpg",
    year: "Leadership",
  },
  {
    title: "Google Crowdsource",
    category: "Community",
    description: "Supporting community engagement and digital participation as a Google Crowdsource Lead.",
    image: "/images/about/google-crowdsource.jpg",
    year: "Community",
  },
  {
    title: "Brand Identity",
    category: "Creative Work",
    description: "Visual identity development and branding explorations.",
    image: "/images/graphic-design/branding.jpg",
    year: "Design",
  },
  {
    title: "Branding Concepts",
    category: "Creative Work",
    description: "Exploring visual systems, layouts and brand applications.",
    image: "/images/graphic-design/branding-2.jpg",
    year: "Design",
  },
  {
    title: "Social Media Design",
    category: "Creative Work",
    description: "Digital creatives designed for social media communication.",
    image: "/images/graphic-design/social-media.jpg",
    year: "Design",
  },
  {
    title: "Social Media Campaigns",
    category: "Creative Work",
    description: "Visual storytelling through campaign-focused social media content.",
    image: "/images/graphic-design/social-media-2.jpg",
    year: "Design",
  },
  {
    title: "Marketing Posters",
    category: "Creative Work",
    description: "Promotional poster concepts and marketing communication.",
    image: "/images/graphic-design/posters.jpg",
    year: "Design",
  },
  {
    title: "Campaign Graphics",
    category: "Creative Work",
    description: "Creative materials developed for marketing campaigns.",
    image: "/images/graphic-design/campaigns.jpg",
    year: "Design",
  },
  {
    title: "Tilapia Egg Research",
    category: "Technology",
    description: "Research and data collection for a CNN-based tilapia egg health classification system.",
    image: "/images/software-development/tilapia-cnn/research.jpg",
    year: "Research",
  },
  {
    title: "Image Processing",
    category: "Technology",
    description: "Preparing and processing tilapia egg images for model development.",
    image: "/images/software-development/tilapia-cnn/image-processing.jpg",
    year: "Development",
  },
  {
    title: "CNN Model Development",
    category: "Technology",
    description: "Developing a convolutional neural network for healthy and unhealthy egg classification.",
    image: "/images/software-development/tilapia-cnn/model-development.jpg",
    year: "Development",
  },
  {
    title: "LPG Monitoring Prototype",
    category: "Technology",
    description: "An Arduino-based gas monitoring project using load cells to measure cylinder weight.",
    image: "/images/software-development/lpg-monitoring/prototype.jpg",
    year: "Engineering",
  },
  {
    title: "Hardware Assembly",
    category: "Technology",
    description: "Assembling and connecting the components of the LPG monitoring system.",
    image: "/images/software-development/lpg-monitoring/hardware.jpg",
    year: "Engineering",
  },
  {
    title: "Jasuba Kende Fish",
    category: "Technology",
    description: "A web development project built for a fish business.",
    image: "/images/software-development/web-projects/jasuba.jpg",
    year: "Web Development",
  },
  {
    title: "Nicy Bakers",
    category: "Technology",
    description: "A website project created for a bakery brand.",
    image: "/images/software-development/web-projects/nicy-bakers.jpg",
    year: "Web Development",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");
  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) =>
      activeCategory === "All" ||
      item.category === activeCategory
  );

  const selectedIndex = selectedItem
    ? filteredItems.findIndex(
        (item) => item.title === selectedItem.title
      )
    : -1;

  const showPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedItem(filteredItems[selectedIndex - 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const showNext = () => {
    if (selectedIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[selectedIndex + 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[0]);
    }
  };

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
            <Link href="/resume" className="transition hover:text-[#285B51]">
              Resume
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#285B51]">
            A visual journal
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
            Moments, ideas
            <br />
            <span className="font-serif italic text-[#285B51]">
              & everything
            </span>{" "}
            in between.
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-[#142C38]/15 pt-6 md:flex-row md:items-end">
            <p className="max-w-xl text-base leading-8 text-[#64748B] md:text-lg">
              A collection of experiences, creative explorations,
              technology projects and moments that continue to shape
              my journey.
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#285B51]">
              Explore the collection ↓
            </p>
          </div>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-wrap items-center gap-3 border-y border-[#142C38]/15 py-6">
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

          <span className="ml-auto text-xs text-[#64748B]">
            {filteredItems.length} entries
          </span>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button
                layout
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                onClick={() => setSelectedItem(item)}
                className="group text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#E8E6DE]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#142C38]/55 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#142C38] opacity-0 transition duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#285B51]">
                      {item.category}
                    </p>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-1 max-w-sm text-sm leading-6 text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  <span className="pt-1 text-xs text-[#94A3B8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-[#142C38] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#A7C6B5]">
            More about my journey
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Every project tells a story. Every experience adds a new chapter.
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#142C38] transition hover:bg-[#A7C6B5]"
            >
              Explore my story ↗
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#142C38] px-6 pb-8 text-white md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/50 md:flex-row">
          <p>© 2026 Cynthia Anyango. All rights reserved.</p>
          <p>Designed with intention. Built with curiosity.</p>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1820]/95 p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close image preview"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            >
              ×
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 md:left-8"
            >
              ‹
            </button>

            <motion.div
              key={selectedItem.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[65vh] w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-5 w-full max-w-3xl text-center text-white">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A7C6B5]">
                  {selectedItem.category}
                </p>
                <h3 className="text-xl font-semibold md:text-2xl">
                  {selectedItem.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/60">
                  {selectedItem.description}
                </p>
                <p className="mt-4 text-xs text-white/40">
                  {selectedIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 md:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
