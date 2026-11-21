
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Code2,
  Palette,
  Megaphone,
  Sparkles,
  X,
} from "lucide-react";

const disciplines = [
  {
    number: "01",
    title: "Digital Marketing",
    subtitle: "Communication & strategy",
    description:
      "Building brand presence through digital strategy, storytelling, campaigns and meaningful audience engagement.",
    image: "/images/image1.jpg",
    href: "/digital-marketing",
    icon: Megaphone,
    color: "bg-[#E7EEE8]",
  },
  {
    number: "02",
    title: "Graphic Design",
    subtitle: "Visual identity & creativity",
    description:
      "Turning ideas into compelling visual identities, creative campaigns and memorable designs.",
    image: "/images/image2.jpg",
    href: "/graphic-design",
    icon: Palette,
    color: "bg-[#F0EDE6]",
  },
  {
    number: "03",
    title: "Software Development",
    subtitle: "Technology & innovation",
    description:
      "Developing functional digital experiences and exploring technology to solve real-world problems.",
    image: "/images/image3.jpg",
    href: "/software-development",
    icon: Code2,
    color: "bg-[#E7EDF2]",
  },
];

const projects = [
  {
    category: "MACHINE LEARNING",
    title: "Tilapia Egg Health Detection",
    description:
      "A CNN-based system exploring automated classification of healthy and unhealthy tilapia eggs.",
    image: "/images/image3.jpg",
    href: "/software-development",
    number: "01",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Jasuba Kende Fish",
    description:
      "A digital platform designed and developed for a fish business.",
    image: "/images/image1.jpg",
    href: "https://jasuba-kende-fish.vercel.app/",
    number: "02",
  },
];


export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleContactSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setFormStatus("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setFormStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (

    <main className="min-h-screen overflow-hidden bg-[#F5F4EF] text-[#142C38]">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#142C38]/10 bg-[#F5F4EF]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <Link href="/" className="text-2xl font-black tracking-tight">
            CA<span className="text-[#285B51]">.</span>
          </Link>

          
          

<nav className="hidden items-center gap-7 text-sm font-medium text-[#475569] lg:flex">
  <Link href="#home" className="transition hover:text-[#285B51]">
    Home
  </Link>
  <Link href="#expertise" className="transition hover:text-[#285B51]">
    Expertise
  </Link>
  <Link href="#work" className="transition hover:text-[#285B51]">
    Selected Work
  </Link>
  <Link href="/gallery" className="transition hover:text-[#285B51]">
    Gallery
  </Link>
  <Link href="/blog" className="transition hover:text-[#285B51]">
    Blog
  </Link>
  <Link href="/about" className="transition hover:text-[#285B51]">
    About
  </Link>
</nav>




          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              className="hidden rounded-full border border-[#142C38]/20 px-5 py-2.5 text-sm font-semibold transition hover:border-[#285B51] hover:bg-[#E7EEE8] sm:inline-flex"
            >
              Resume <ArrowUpRight size={15} className="ml-2" />
            </Link>

                      <button
            type="button"
            onClick={() => {
              setFormStatus("");
              setIsContactOpen(true);
            }}
            className="rounded-full bg-[#142C38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285B51]"
          >
            Let's talk <span className="ml-1">↗</span>
          </button>
          </div>
        </div>

      {/* MOBILE NAVIGATION  */}
<nav className="flex gap-6 overflow-x-auto border-t border-[#142C38]/5 px-6 py-3 text-xs font-medium text-[#64748B] lg:hidden md:px-12">
  <Link href="#home" className="whitespace-nowrap">Home</Link>
  <Link href="#expertise" className="whitespace-nowrap">Expertise</Link>
  <Link href="#work" className="whitespace-nowrap">Selected Work</Link>
  <Link href="/gallery" className="whitespace-nowrap">Gallery</Link>
  <Link href="/blog" className="whitespace-nowrap">Blog</Link>
  <Link href="/about" className="whitespace-nowrap">About</Link>
  <Link href="/resume" className="whitespace-nowrap text-[#285B51]">Resume ↗</Link>
</nav>

      </header>

      {/* HERO */}
      <section id="home" className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28">
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#DCE9DB] blur-[100px]" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#285B51]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
                Digital creative · Designer · Developer
              </p>
            </div>

            <h1 className="max-w-4xl text-6xl font-bold leading-[1.04] tracking-[-0.06em] sm:text-7xl md:text-8xl xl:text-[100px]">
              Creating with
              <span className="block font-serif font-normal italic text-[#285B51]">
                purpose.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#52616B] md:text-lg">
              Hello, I'm Cynthia Anyango. I bring together digital marketing,
              graphic design and software development to transform ideas
              into thoughtful, engaging digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[#285B51] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#142C38]"
              >
                Explore my work
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-[#142C38]/20 px-6 py-4 text-sm font-semibold transition hover:bg-white"
              >
                View my resume <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-3 gap-5 border-t border-[#142C38]/15 pt-7">
              <div>
                <p className="text-2xl font-bold">03</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                  Disciplines
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">Creative</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                  Thinking
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold">Digital</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                  Experiences
                </p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -right-5 -top-6 z-10 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-[#DCE9DB] text-center text-[#285B51] shadow-lg">
              <Sparkles size={22} />
              <span className="mt-1 text-[9px] font-bold uppercase tracking-wider">
                Design
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider">
                With purpose
              </span>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#DCE9DB] shadow-2xl shadow-[#142C38]/10">
              <Image
                src="/images/image2.jpg"
                alt="Creative portfolio showcase"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl bg-white p-5 shadow-xl shadow-[#142C38]/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#285B51]">
                My creative approach
              </p>
              <p className="mt-2 text-lg font-bold leading-snug">
                Strategy. Creativity. Technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-white px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
                My areas of expertise
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                What I do<span className="text-[#285B51]">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#64748B]">
              Three complementary disciplines, each bringing a different
              perspective to creative and digital problem-solving.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {disciplines.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.number}
                  className={`group overflow-hidden rounded-2xl border border-[#142C38]/10 ${item.color} transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#142C38]/10`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#142C38]">
                      {item.number}
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#285B51] text-white transition group-hover:rotate-45 group-hover:bg-[#142C38]">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-center gap-2 text-[#285B51]">
                      <Icon size={17} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#52616B]">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#285B51]">
                      Explore <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
              Selected projects
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              A closer look<span className="text-[#285B51]">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#64748B]">
            A selection of projects that reflect my interests in design,
            technology and creative problem-solving.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              key={project.title}
              className={`group ${index === 0 ? "md:mt-12" : ""}`}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#E7EEE8]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142C38]/35 to-transparent opacity-60 transition group-hover:opacity-100" />
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#285B51] shadow-lg transition group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#285B51]">
                  {project.category}
                </p>
                <span className="text-xs text-[#94A3B8]">{project.number}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight transition-colors group-hover:text-[#285B51]">
                {project.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-7 text-[#64748B]">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/software-development"
            className="inline-flex items-center gap-3 rounded-full border border-[#142C38]/20 px-7 py-4 text-sm font-bold transition hover:bg-[#142C38] hover:text-white"
          >
            Explore more projects <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#142C38] px-6 py-24 text-white md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#A9CBB6]">
              A little about me
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Curious by nature.
              <span className="block font-serif font-normal italic text-[#A9CBB6]">
                Creative by design.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/70">
              My work brings together digital communication, visual design
              and software development. I enjoy exploring how creative ideas
              can become compelling stories, engaging experiences and
              practical digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#142C38] transition hover:bg-[#A9CBB6]"
              >
                More about me <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View resume <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <div className="rounded-[2rem] bg-[#E7EEE8] px-7 py-14 md:px-14 md:py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            Have a project or opportunity?
          </p>

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Let's create
              <span className="block font-serif font-normal italic text-[#285B51]">
                something meaningful.
              </span>
            </h2>

            
          <button
            type="button"
            onClick={() => {
              setFormStatus("");
              setIsContactOpen(true);
            }}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#142C38] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#285B51]"
          >
            Connect with me <ArrowUpRight size={18} />
          </button>

          </div>
        </div>
      </section>



{/* CONTACT FORM MODAL */}
{isContactOpen && (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-[#142C38]/80 p-4 backdrop-blur-sm"
    onClick={() => setIsContactOpen(false)}
  >
    <div
      className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-[#F5F4EF] p-6 shadow-2xl sm:p-9"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setIsContactOpen(false)}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#142C38] hover:bg-[#E7EEE8]"
        aria-label="Close contact form"
      >
        <X size={20} />
      </button>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
        Let's work together
      </p>

      <h2 className="mt-3 pr-10 text-3xl font-bold text-[#142C38]">
        Send me a message.
      </h2>

      <p className="mt-3 text-sm leading-6 text-[#64748B]">
        Have a project, collaboration or opportunity in mind?
        I'd love to hear from you.
      </p>

      <form onSubmit={handleContactSubmit} className="mt-7 space-y-5">

        {/* Honeypot spam protection */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="home-website">Leave this field empty</label>
          <input
            id="home-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-[#142C38]">
            Your name
          </label>
          <input
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Enter your name"
            className="w-full rounded-xl border border-[#142C38]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#285B51]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-[#142C38]">
            Email address
          </label>
          <input
            type="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#142C38]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#285B51]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-[#142C38]">
            Subject
          </label>
          <input
            type="text"
            required
            maxLength={150}
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            placeholder="What would you like to discuss?"
            className="w-full rounded-xl border border-[#142C38]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#285B51]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-[#142C38]">
            Your message
          </label>
          <textarea
            required
            maxLength={5000}
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell me about your project or enquiry..."
            className="w-full resize-y rounded-xl border border-[#142C38]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#285B51]"
          />
        </div>

        {formStatus && (
          <p
            role="status"
            className={`rounded-xl p-3 text-sm ${
              formStatus.includes("successfully")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-700"
            }`}
          >
            {formStatus}
          </p>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#142C38] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#285B51] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Send message"}
          {!isSending && <ArrowUpRight size={17} />}
        </button>
      </form>
    </div>
  </div>
)}


      {/* FOOTER */}
      <footer className="border-t border-[#142C38]/10 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 md:flex-row md:items-center">
          <Link href="/" className="text-xl font-black">
            CA<span className="text-[#285B51]">.</span>
          </Link>

          <p className="text-xs text-[#64748B]">
            © 2026 Cynthia Anyango. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs font-semibold text-[#475569]">
            <Link href="/resume" className="hover:text-[#285B51]">Resume</Link>
            <Link href="https://www.linkedin.com/in/cynthia-anyango/" target="_blank" rel="noopener noreferrer" className="hover:text-[#285B51]">LinkedIn</Link>
            <Link href="https://github.com/Cynthia-Anyango" target="_blank" rel="noopener noreferrer" className="hover:text-[#285B51]">GitHub</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}