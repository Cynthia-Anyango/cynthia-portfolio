
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Sparkles,
  Users,
  BookOpen,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    period: "2019",
    title: "Where it started",
    subtitle: "Technology, learning & creativity",
    description:
      "My interest in technology took shape through studying Information Technology at AkiraChix and working as a STEM Trainer with iEARN Kenya. Introducing learners to HTML, CSS, Scratch, Minecraft Education and SketchUp gave me an early appreciation for the power of technology and creative learning.",
  },
  {
    number: "02",
    period: "2020 – 2024",
    title: "Finding my creative direction",
    subtitle: "Digital marketing & communication",
    description:
      "I explored the world of digital marketing through roles at Superserve, Patazone, ACT Digital, HDL Digital and Koch Properties. I gained experience in SEO, content creation, social media, digital strategy, event communication and helping brands build their online presence.",
  },
  {
    number: "03",
    period: "2021 – Present",
    title: "Going deeper into technology",
    subtitle: "Computer Science & software development",
    description:
      "My Computer Science studies at St Paul's University have strengthened my interest in programming and problem-solving. I continue to explore how software, data and emerging technologies can be used to develop practical solutions.",
  },
  {
    number: "04",
    period: "December 2024 – Present",
    title: "Bringing ideas together",
    subtitle: "Visual storytelling & brand communication",
    description:
      "At Victory Farms, I work across social media, graphic design and marketing communication. It is an opportunity to bring strategy and creativity together while developing a deeper understanding of brand storytelling and visual communication.",
  },
];

const community = [
  {
    title: "Google Developer Student Clubs",
    role: "Lead · St Paul's University",
    image: "/images/about/gdsc-lead.jpg",
    alt: "Cynthia during a Google Developer Student Clubs activity",
    description:
      "Helping build a student technology community and encouraging learning, collaboration and participation in developer activities.",
  },
  {
    title: "Google Crowdsource",
    role: "Lead & Influencer · St Paul's University",
    image: "/images/about/google-crowdsource.jpg",
    alt: "Cynthia participating in a Google Crowdsource activity",
    description:
      "Building awareness and encouraging community participation in Google's crowdsourcing initiatives.",
  },
  {
    title: "Google I/O Extended",
    role: "Panel Discussion Moderator",
    image: "/images/about/google-io-extended.jpg",
    alt: "Cynthia moderating a technology panel at Google I/O Extended",
    description:
      "Moderated a technology panel discussion at a Google I/O Extended event hosted at Strathmore University.",
  },
];

const principles = [
  {
    icon: Lightbulb,
    title: "Stay curious",
    description:
      "Ask questions, explore unfamiliar ideas and remain open to learning something new.",
  },
  {
    icon: Users,
    title: "Learn with others",
    description:
      "Share knowledge, exchange perspectives and recognise the value of collaboration.",
  },
  {
    icon: Code2,
    title: "Make ideas useful",
    description:
      "Look beyond the idea itself and focus on creating something practical and meaningful.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#142C38]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="text-sm font-bold tracking-tight">
          CYNTHIA ANYANGO<span className="text-[#285B51]">.</span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium">
          <Link
            href="/"
            className="hidden text-[#64748B] transition hover:text-[#285B51] sm:block"
          >
            Home
          </Link>
          <Link
            href="/resume"
            className="rounded-full border border-[#D5DDD8] px-4 py-2 transition hover:bg-white"
          >
            Resume <ArrowUpRight className="ml-1 inline" size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1fr_0.85fr] lg:px-10 lg:pb-32 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            <span className="h-2 w-2 rounded-full bg-[#285B51]" />
            Beyond the portfolio
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            A journey shaped by{" "}
            <span className="text-[#285B51]">curiosity.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            I'm Cynthia Anyango. My journey has taken me through technology,
            creative communication, digital communities and software
            development. Each experience has given me a different way to
            understand problems and bring ideas to life.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-[#64748B]">
            This is a little more about the experiences, interests and
            perspectives that have shaped the way I learn, work and create.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#142C38] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#285B51]"
            >
              Let's connect <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-[#CBD5D1] px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
            >
              View my resume <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-[#DCE8DF]" />
          <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#E4EAF0]" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E7EDF2]">
            <Image
              src="/images/about/profile.jpg"
              alt="Portrait of Cynthia Anyango"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-[#142C38]/10 sm:-right-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7EEE8] text-[#285B51]">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Always evolving</p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Learning through experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Personal story */}
      <section className="border-y border-[#E2E8F0] bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
              The bigger picture
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              I've never been interested in just one way of creating.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#64748B]">
            <p>
              I've always been drawn to understanding how things work and
              finding different ways to communicate ideas. That curiosity
              has influenced the opportunities I've pursued and the skills
              I've developed over time.
            </p>

            <p>
              Technology introduced me to structured thinking and
              problem-solving. Creative work helped me appreciate the
              importance of visual expression and storytelling. Digital
              communication showed me how ideas connect with people.
            </p>

            <p>
              These experiences have shaped a perspective that is both
              creative and technical. I enjoy exploring a challenge from
              different angles, understanding the people it affects and
              finding ways to turn ideas into something useful.
            </p>

            <p>
              I'm still learning, experimenting and discovering where these
              interests can take me next. For me, growth is as much about
              the process as it is about the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
              The journey so far
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Every chapter has added something.
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-[#64748B]">
            From early experiences in technology and education to creative
            communication and software development, each stage has helped
            shape my professional perspective.
          </p>
        </div>

        <div className="relative ml-2 border-l border-[#C9D7CF] sm:ml-4">
          {journey.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative grid gap-5 pb-14 pl-8 last:pb-0 sm:pl-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12"
            >
              <span className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-[#285B51] ring-4 ring-[#F5F4EF]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285B51]">
                  {item.period}
                </p>
                <p className="mt-3 text-sm text-[#94A3B8]">
                  Chapter {item.number}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#285B51]">
                  {item.subtitle}
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="bg-[#E7EDF2] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
                Outside the usual workday
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                Learning is better when it's shared.
              </h2>
            </div>

            <p className="max-w-xl leading-8 text-[#64748B]">
              Being part of technology and learning communities has given me
              opportunities to connect with others, exchange ideas, support
              emerging talent and contribute beyond my day-to-day work.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {community.map((item, index) => (
  <motion.article
    key={item.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className="group overflow-hidden rounded-2xl border border-white/70 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#142C38]/10"
  >
    {/* Event photograph */}
    <div className="relative h-56 overflow-hidden bg-[#E7EDF2]">
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    {/* Card information */}
    <div className="p-7">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#285B51]">
        Community & Leadership
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        {item.title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-[#285B51]">
        {item.role}
      </p>

      <p className="mt-4 text-sm leading-7 text-[#64748B]">
        {item.description}
      </p>
    </div>
  </motion.article>
))}

          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="bg-[#142C38] py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A8C9B5]">
              A work in progress
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              There is always something new to discover.
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              My learning journey continues through formal education,
              independent exploration and practical projects.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 sm:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#A8C9B5]">
                <BookOpen size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A8C9B5]">
                  Current academic journey
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  St Paul's University
                </p>
                <p className="mt-5 text-sm leading-7 text-white/65">
                  Alongside my studies, I enjoy building projects that allow
                  me to put concepts into practice, explore new technologies
                  and develop my problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal principles */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            What guides me
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            The principles behind the work.
          </h2>
          <p className="mt-5 leading-7 text-[#64748B]">
            A few simple ideas influence how I approach new challenges,
            collaborate and continue growing.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7EEE8] text-[#285B51]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#64748B]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-[#E7EEE8] px-7 py-16 text-center sm:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            The next chapter
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Still curious. Still creating. Still becoming.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#64748B]">
            I'm always interested in meaningful conversations, fresh ideas,
            collaborations and opportunities to create something worthwhile.
          </p>

          <Link
            href="/#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#142C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#285B51]"
          >
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#64748B] sm:flex-row">
          <p>Cynthia Anyango · All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="transition hover:text-[#285B51]">
              Home
            </Link>
            <Link href="/resume" className="transition hover:text-[#285B51]">
              Resume
            </Link>
            <a
              href="https://www.linkedin.com/in/cynthia-anyango/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#285B51]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
