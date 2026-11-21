
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  BrainCircuit,
  Globe2,
  Layers3,
  Terminal,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const tilapiaStages = [
  {
    number: "01",
    title: "Research & Data Collection",
    description:
      "Exploring tilapia egg health characteristics and preparing image data for a binary classification system.",
    image: "/images/software-development/tilapia-cnn/research.jpg",
  },
  {
    number: "02",
    title: "Image Processing",
    description:
      "Preparing and organising egg images through resizing, preprocessing and augmentation for model training.",
    image: "/images/software-development/tilapia-cnn/image-processing.jpg",
  },
  {
    number: "03",
    title: "CNN Model Development",
    description:
      "Developing a Convolutional Neural Network using Python and TensorFlow to distinguish healthy and unhealthy eggs.",
    image: "/images/software-development/tilapia-cnn/model-development.jpg",
  },
  {
    number: "04",
    title: "Testing & Interface",
    description:
      "Evaluating model predictions and developing a Streamlit interface for image-based egg health classification.",
    image: "/images/software-development/tilapia-cnn/testing.jpg",
  },
];

const lpgStages = [
  {
    number: "01",
    title: "Problem Identification",
    description:
      "Exploring how technology can help monitor LPG cylinder levels and make gas usage information easier to access.",
    image: "/images/software-development/lpg-monitoring/problem.jpg",
  },
  {
    number: "02",
    title: "Hardware Assembly",
    description:
      "Combining an Arduino microcontroller with load cells to measure the weight of an LPG cylinder.",
    image: "/images/software-development/lpg-monitoring/hardware.jpg",
  },
  {
    number: "03",
    title: "Programming & Calibration",
    description:
      "Developing the code to interpret weight readings and display the measurements digitally.",
    image: "/images/software-development/lpg-monitoring/programming.jpg",
  },
  {
    number: "04",
    title: "Prototype Presentation",
    description:
      "Presenting the assembled prototype and demonstrating how weight-based monitoring can support better gas management.",
    image: "/images/software-development/lpg-monitoring/prototype.jpg",
  },
];

const webProjects = [
  {
    name: "Jasuba Kende Fish",
    category: "Website Development",
    description:
      "A fish business website designed to establish an online presence and showcase products and services.",
    image: "/images/software-development/web-projects/jasuba.jpg",
    link: "https://jasuba-kende-fish.vercel.app/",
    number: "01",
  },
  {
    name: "Nicy Bakers",
    category: "Website Development",
    description:
      "A bakery website created to present the brand, showcase baked products and provide customers with an online experience.",
    image: "/images/software-development/web-projects/nicy-bakers.jpg",
    link: "https://nicy-bakers.vercel.app/",
    number: "02",
  },
];

const technologies = [
  {
    category: "Programming",
    icon: Code2,
    tools: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    category: "Web Development",
    icon: Globe2,
    tools: ["Next.js", "React", "Django", "Tailwind CSS"],
  },
  {
    category: "Data & Databases",
    icon: Database,
    tools: ["MySQL", "Data Processing", "Image Processing"],
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    tools: ["TensorFlow", "Keras", "CNN", "Streamlit"],
  },
  {
    category: "Hardware & IoT",
    icon: Cpu,
    tools: ["Arduino", "Load Cells", "Microcontrollers"],
  },
  {
    category: "Development Tools",
    icon: Terminal,
    tools: ["Git", "GitHub", "VS Code"],
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
        {label}
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#142C38] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[#64748B]">
        {description}
      </p>
    </div>
  );
}

function ProjectTimeline({
  stages,
}: {
  stages: typeof tilapiaStages;
}) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {stages.map((stage, index) => (
        <motion.article
          key={stage.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#E7EDF2]">
            <Image
              src={stage.image}
              alt={stage.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#142C38] backdrop-blur">
              STEP {stage.number}
            </span>
          </div>

          <div className="p-6">
            <h4 className="text-lg font-semibold text-[#142C38]">
              {stage.title}
            </h4>
            <p className="mt-3 text-sm leading-6 text-[#64748B]">
              {stage.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#142C38]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-[#142C38]"
        >
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
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            <span className="h-2 w-2 rounded-full bg-[#285B51]" />
            Software Development
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Building ideas into{" "}
            <span className="text-[#285B51]">practical</span> digital solutions.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            Exploring the intersection of software, technology and
            problem-solving — from intelligent systems and hardware
            prototypes to functional web experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#featured-projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#142C38] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#285B51]"
            >
              Explore projects <ArrowRight size={16} />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#CBD5D1] px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
            >
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#DCE2DD] pt-7">
            <div>
              <p className="text-2xl font-semibold">AI & ML</p>
              <p className="mt-1 text-xs text-[#64748B]">Intelligent systems</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Web</p>
              <p className="mt-1 text-xs text-[#64748B]">Digital experiences</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">IoT</p>
              <p className="mt-1 text-xs text-[#64748B]">Connected technology</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#DCE8DF]" />
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-[#E7EDF2]">
            <Image
              src="/images/software-development/hero.jpg"
              alt="Software development workspace"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-5 max-w-[230px] rounded-2xl bg-white p-5 shadow-xl shadow-[#142C38]/10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7EEE8] text-[#285B51]">
              <Zap size={21} />
            </div>
            <p className="font-semibold">Technology with purpose.</p>
            <p className="mt-1 text-xs leading-5 text-[#64748B]">
              Learning, building and solving real-world problems.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="border-y border-[#E2E8F0] bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            My approach
          </p>
          <p className="max-w-3xl text-xl leading-9 text-[#475569] sm:text-2xl">
            I enjoy turning ideas into working solutions. My development
            interests span web applications, machine learning and
            hardware-based systems, with a focus on understanding the
            problem before building the solution.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="featured-projects"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-10"
      >
        <SectionHeading
          label="Selected technical work"
          title="Exploring technology through real-world projects."
          description="A look at selected projects, from the initial idea and development process to the working prototype."
        />

        {/* Tilapia CNN */}
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#E7EDF2]">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
                Project 01 · Artificial Intelligence
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tilapia Egg Health Detection
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-[#64748B]">
                A Convolutional Neural Network-based system exploring the
                classification of tilapia eggs into healthy and unhealthy
                categories using image data.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Python", "TensorFlow", "Keras", "CNN", "Streamlit"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#CAD7DF] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#475569]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#285B51]">
                Research & development project <BrainCircuit size={17} />
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
              <Image
                src="/images/software-development/tilapia-cnn/model-development.jpg"
                alt="Tilapia egg classification project"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <ProjectTimeline stages={tilapiaStages} />

        {/* LPG Project */}
        <div className="mt-24 overflow-hidden rounded-[2rem] bg-[#E7EEE8]">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:p-14">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl bg-white lg:order-1">
              <Image
                src="/images/software-development/lpg-monitoring/hardware.jpg"
                alt="Arduino LPG gas monitoring prototype"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
                Project 02 · Hardware & IoT
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Smart LPG Gas Monitoring
              </h3>
              <p className="mt-5 leading-7 text-[#64748B]">
                An Arduino-based project using load cells to measure LPG
                cylinder weight and translate the readings into digital
                information for easier gas level monitoring.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Arduino", "C++", "Load Cells", "Microcontrollers"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#CAD8CE] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#475569]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#285B51]">
                Hardware & software project <Cpu size={17} />
              </div>
            </div>
          </div>
        </div>

        <ProjectTimeline stages={lpgStages} />

        <p className="mt-6 text-xs leading-5 text-[#94A3B8]">
          Project descriptions and process images are currently being
          organised for this portfolio. Additional project documentation
          and photographs will be added.
        </p>
      </section>

      {/* Web Development */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            label="Web development"
            title="Building experiences for the web."
            description="Selected website projects, combining visual presentation, functionality and user experience."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {webProjects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#E7EDF2]">
                    <Image
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#142C38] shadow-lg transition group-hover:bg-[#285B51] group-hover:text-white">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </a>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#285B51]">
                      {project.category} · {project.number}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#64748B]">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    className="mt-6 shrink-0 text-[#285B51] transition hover:translate-x-1"
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Development Work */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-[#E7EDF2]">
            <Image
              src="/images/software-development/ecommerce.jpg"
              alt="E-commerce application project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
              Other development work
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              Learning by building functional applications.
            </h2>
            <p className="mt-5 leading-7 text-[#64748B]">
              Alongside my featured projects, I explore application
              development through practical exercises and personal
              projects.
            </p>

            <div className="mt-7 rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7EDF2] text-[#285B51]">
                  <Layers3 size={21} />
                </div>
                <div>
                  <h3 className="font-semibold">E-commerce Application</h3>
                  <p className="mt-1 text-xs text-[#64748B]">
                    Django & MySQL
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                A database-driven application exploring product
                management and CRUD functionality, including creating,
                viewing, updating and deleting product records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[#142C38] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A8C9B5]">
              Tools & technologies
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              The tools behind the work.
            </h2>
            <p className="mt-5 leading-7 text-white/60">
              Technologies I have worked with across software development,
              web projects, data and hardware-based experimentation.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.category}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.09]"
                >
                  <Icon className="mb-5 text-[#A8C9B5]" size={25} />
                  <h3 className="font-semibold">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-[#E7EEE8] px-7 py-14 text-center sm:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#285B51]">
            Have an idea?
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Let's create something meaningful.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#64748B]">
            Interested in collaborating, discussing a project or exploring
            an idea? I'd love to hear from you.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#142C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#285B51]"
          >
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#64748B] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Cynthia Anyango. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#285B51]">
              Home
            </Link>
            <Link href="/resume" className="hover:text-[#285B51]">
              Resume
            </Link>
            <a
              href="https://github.com/Cynthia-Anyango"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#285B51]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cynthia-anyango/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#285B51]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
