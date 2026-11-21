
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  Megaphone,
  Search,
  MessagesSquare,
  CalendarDays,
} from "lucide-react";

const experience = [
  {
    company: "Victory Farms",
    role: "Junior Social Media & Graphics Designer",
    description:
      "Creating digital content, social media creatives, campaign materials and brand communications for an aquaculture and fish distribution company.",
  },
  {
    company: "Patazone",
    role: "SEO & Digital Strategist",
    description:
      "Worked on SEO, digital strategy, website optimisation and analytics to improve online visibility and website performance.",
  },
  {
    company: "ACT Digital",
    role: "Digital Marketing & Events",
    description:
      "Supported digital communications, event promotion and marketing activities for golf tournaments, expos and other events.",
  },
  {
    company: "HDL Digital",
    role: "Digital Marketing Specialist",
    description:
      "Contributed to digital marketing activities, content creation and online brand visibility.",
  },
  {
    company: "Koch Properties",
    role: "Digital Marketing Specialist",
    description:
      "Supported digital marketing and online communication initiatives within the property sector.",
  },
  {
    company: "Superserve",
    role: "Digital Marketing Executive",
    description:
      "Supported digital marketing execution, content and online engagement.",
  },
];

const skills = [
  "Digital Marketing Strategy",
  "Social Media Management",
  "SEO",
  "Content Strategy",
  "Brand Communication",
  "Campaign Management",
  "Google Analytics",
  "Digital Advertising",
  "Event Communication",
];

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Planning and executing digital campaigns that connect brands with their audiences.",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Improving website visibility and using performance data to inform decisions.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    description:
      "Developing clear, engaging content for digital platforms and brand audiences.",
  },
  {
    icon: CalendarDays,
    title: "Campaigns & Events",
    description:
      "Supporting event promotion, campaign rollouts and audience engagement.",
  },
];

const projects = [
  {
    title: "Digital Campaigns",
    category: "Victory Farms",
    description:
      "Campaign creatives and digital communication supporting brand awareness and customer engagement.",
    image: "/images/marketing/victory-campaign.jpg",
  },
  {
    title: "Event Communications",
    category: "ACT Digital",
    description:
      "Marketing and promotional communication for events, golf tournaments and expos.",
    image: "/images/marketing/event-communications.jpg",
  },
  {
    title: "Brand Identity & Design",
    category: "Creative Work",
    description:
      "Visual communication, brand assets and creative materials developed for different audiences.",
    image: "/images/marketing/brand-identity.jpg",
  },
];

const brands = [
  "Victory Farms",
  "Patazone",
  "ACT Digital",
  "HDL Digital",
  "Koch Properties",
  "Superserve",
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="font-bold tracking-widest text-[var(--color-heading)]"
        >
          CYNTHIA ANYANGO
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-[var(--color-text)] transition hover:text-[var(--color-secondary)]"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-16 pt-10 md:px-12 md:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Digital Marketing & Communication
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[var(--color-heading)] md:text-6xl">
              Building brands through strategy and communication.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-text)]">
              I work across digital marketing, content strategy, SEO,
              social media and brand communication, helping organisations
              strengthen their online presence and connect with their
              audiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#selected-work"
                className="rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-secondary)]"
              >
                View selected work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-secondary)]"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-muted)]">
              <span>Digital Strategy</span>
              <span>SEO & Analytics</span>
              <span>Brand Communication</span>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl md:min-h-[520px]">
            <Image
              src="/images/image1.jpg"
              alt="Digital marketing portfolio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                My approach
              </p>
              <p className="mt-2 max-w-xs text-2xl font-semibold">
                Creative thinking. Purposeful communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              What I do
            </p>
            <h2 className="text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
              Bringing strategy, creativity and communication together.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="border-t-2 border-[var(--color-secondary)] pt-6"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="text-[var(--color-secondary)]"
                  />
                  <h3 className="mt-5 text-lg font-bold text-[var(--color-heading)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section
        id="selected-work"
        className="mx-auto max-w-7xl px-6 py-20 md:px-12"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              Portfolio highlights
            </p>
            <h2 className="text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
              Selected work
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--color-text)]">
            A selection of campaigns, communication materials and creative
            work from my professional journey.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                {project.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-[var(--color-heading)]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-[var(--color-primary)] px-6 py-20 text-white md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-emerald-300">
              <TrendingUp size={22} />
              <p className="text-xs font-bold uppercase tracking-widest">
                Performance & analytics
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              Turning digital activity into measurable performance.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
              During my digital strategy work with Patazone, website
              analytics recorded the following performance figures.
              These numbers demonstrate the scale of website traffic
              monitored during the reporting period.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">
              <div>
                <p className="text-2xl font-bold md:text-4xl">21,372</p>
                <p className="mt-2 text-xs text-slate-300">Users</p>
              </div>

              <div>
                <p className="text-2xl font-bold md:text-4xl">37,156</p>
                <p className="mt-2 text-xs text-slate-300">Sessions</p>
              </div>

              <div>
                <p className="text-2xl font-bold md:text-4xl">152,849</p>
                <p className="mt-2 text-xs text-slate-300">Page views</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/10">
            <Image
              src="/images/marketing/analytics.jpg"
              alt="Website analytics performance screenshot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Organisations */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
            Professional experience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading)]">
            Organisations I've worked with
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex min-h-24 items-center justify-center rounded-xl border border-[var(--color-border)] px-4 text-center text-sm font-bold text-[var(--color-primary)]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
            Career journey
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
            Experience & contributions
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="rounded-xl border border-[var(--color-border)] bg-white p-7 transition hover:shadow-md"
            >
              <p className="text-xs font-bold tracking-widest text-[var(--color-secondary)]">
                0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold text-[var(--color-heading)]">
                {item.company}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[var(--color-accent)]">
                {item.role}
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-[var(--color-heading)]">
            Skills & expertise
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[var(--color-background)] px-5 py-3 text-sm text-[var(--color-primary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[var(--color-secondary)] p-8 text-white md:p-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-100">
            Let's work together
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
            Have a project or opportunity in mind?
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
            Let's connect and explore how digital strategy, creativity
            and communication can help bring your ideas to life.
          </p>

          <a
            href="https://www.linkedin.com/in/cynthia-anyango/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-emerald-100"
          >
            Connect on LinkedIn <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border)] px-6 py-8 text-center text-sm text-[var(--color-muted)]">
        © 2026 Cynthia Anyango. All rights reserved.
      </footer>
    </main>
  );
}
