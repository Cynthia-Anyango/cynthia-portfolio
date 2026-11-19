
import Image from "next/image";
import Link from "next/link";

const areas = [
  {
    title: "Digital Marketing & Communication",
    description:
      "Building digital presence through strategy, storytelling, SEO, social media and impactful campaigns.",
    image: "/images/image1.jpg",
    href: "/digital-marketing",
    number: "01",
  },
  {
    title: "Graphic Design",
    description:
      "Creating visual identities, engaging designs and creative communication materials.",
    image: "/images/image2.jpg",
    href: "/graphic-design",
    number: "02",
  },
  {
    title: "Software Development",
    description:
      "Developing practical technology solutions through programming, web development and AI.",
    image: "/images/image3.jpg",
    href: "/software-development",
    number: "03",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="font-bold tracking-widest text-[var(--color-heading)]"
        >
          CYNTHIA ANYANGO
        </Link>

        <Link
          href="/about"
          className="text-sm text-[var(--color-text)] hover:text-[var(--color-secondary)]"
        >
          About me
        </Link>
      </nav>

      <section className="px-6 pb-12 pt-12 text-center md:px-12 md:pt-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
          Welcome to my portfolio
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[var(--color-heading)] md:text-6xl">
          Where creativity meets technology.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-text)] md:text-lg">
          I'm Cynthia, a digital marketing and communications professional,
          graphic designer and software developer passionate about creating
          meaningful experiences through creativity and technology.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 px-6 pb-20 md:grid-cols-3 md:px-12">
        {areas.map((area) => (
          <Link
            key={area.number}
            href={area.href}
            className="group relative isolate min-h-[420px] overflow-hidden rounded-2xl bg-[var(--color-primary)]"
          >
            <Image
              src={area.image}
              alt={area.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="text-sm tracking-widest text-white/70">
                {area.number}
              </span>

              <h2 className="mt-3 text-2xl font-bold leading-tight">
                {area.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                {area.description}
              </p>

              <p className="mt-6 text-sm font-semibold">
                Explore my work <span aria-hidden="true">→</span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
