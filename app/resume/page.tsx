
"use client";

import Image from "next/image";
// Keep your other existing imports below

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Printer,
  Download,
} from "lucide-react";


const experience = [
  {
    company: "Victory Farms",
    role: "Junior Social Media & Graphics Designer",
    period: "December 2024 – Present",
    description:
      "Creating visual content and supporting digital communication and brand storytelling for one of East Africa's leading aquaculture businesses.",
    responsibilities: [
      "Designing social media graphics and marketing communication materials.",
      "Developing creative content for campaigns, product promotions and brand initiatives.",
      "Supporting visual consistency across digital communication channels.",
      "Creating internal communication materials and event-related content.",
    ],
  },
  {
    company: "Koch Properties",
    role: "Digital Marketing Specialist",
    period: "October 2024 – November 2024",
    description:
      "Supporting digital marketing, social media communication and brand visibility.",
  },
  {
    company: "HDL Digital",
    role: "Digital Marketing Specialist",
    period: "June 2024 – October 2024",
    description:
      "Working across digital marketing activities, content creation and online brand communication.",
  },
  {
    company: "ACT Digital",
    role: "Digital Marketing & Events",
    period: "November 2023 – October 2024",
    description:
      "Supporting digital marketing, event promotion and brand communication.",
    responsibilities: [
      "Creating digital content and promotional graphics.",
      "Supporting event marketing and communications.",
      "Managing social media content and audience engagement.",
      "Contributing to website traffic growth and online visibility.",
    ],
  },
  {
    company: "Patazone",
    role: "SEO & Digital Strategist",
    period: "December 2021 – July 2022",
    description:
      "Supporting digital growth through search optimisation, website performance analysis and digital strategy.",
    responsibilities: [
      "Developing and implementing SEO strategies.",
      "Monitoring website performance using Google Analytics.",
      "Analysing digital traffic and identifying opportunities for improvement.",
      "Supporting content optimisation and digital visibility.",
    ],
  },
  {
    company: "Superserve",
    role: "Digital Marketing Executive",
    period: "May 2020 – August 2021",
    description:
      "Supporting digital marketing execution and online communication initiatives.",
  },
  {
    company: "iEARN Kenya",
    role: "STEM Trainer",
    period: "August 2019 – October 2019",
    description:
      "Training learners in digital and creative technology, including HTML, CSS, Scratch, Minecraft Education and SketchUp 3D.",
  },
];


const skillGroups = [
  {
    title: "Digital Marketing & Communication",
    skills: [
      "Digital Marketing Strategy",
      "SEO",
      "Social Media Management",
      "Google Analytics",
      "Content Strategy",
      "Campaign Management",
      "Brand Communication",
      "Event Marketing",
    ],
  },
  {
    title: "Graphic Design",
    skills: [
      "Visual Communication",
      "Brand Identity",
      "Social Media Design",
      "Marketing Collateral",
      "Creative Direction",
      "Layout & Typography",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "Python",
      "JavaScript",
      "HTML & CSS",
      "React",
      "Next.js",
      "Django",
      "MySQL",
      "TensorFlow & Keras",
      "Git & GitHub",
    ],
  },
];

const projects = [
  {
    title: "Tilapia Egg Health Detection",
    type: "Machine Learning · Computer Vision",
    description:
      "Developing a CNN-based system to classify healthy and unhealthy tilapia eggs using image processing and deep learning.",
    technologies: "Python · TensorFlow · Keras · Streamlit",
  },
  {
    title: "Jasuba Kende Fish",
    type: "Web Development",
    description:
      "Designed and developed a website to establish an online presence for a fish business.",
    technologies: "Web Development · Vercel",
    url: "https://jasuba-kende-fish.vercel.app/",
  },
  {
    title: "Nicy Bakers",
    type: "Web Development",
    description:
      "Designed and developed a digital website experience for a bakery business.",
    technologies: "Web Development · Vercel",
    url: "https://nicy-bakers.vercel.app/",
  },
  {
    title: "LPG Gas Monitoring System",
    type: "Hardware · Software Development",
    description:
      "Developed an Arduino-based concept using load cells to monitor gas cylinder weight and display readings digitally.",
    technologies: "Arduino · Sensors · IoT concepts",
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#142C38]">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#142C38]/10 bg-[#F5F4EF]/95 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            CA<span className="text-[#285B51]">.</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#52616B] transition hover:text-[#285B51]"
          >
            <ArrowLeft size={17} />
            Back to portfolio
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">

        {/* RESUME INTRO */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#142C38] px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#285B51]/50 blur-[90px]" />

          <div className="relative">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#A9CBB6]">
              Professional profile
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Cynthia
              <span className="block font-serif font-normal italic text-[#A9CBB6]">
                Anyango.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Digital Marketer · Graphic Designer · Software Developer
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
              A multidisciplinary creative professional combining digital
              strategy, visual communication and software development to
              create engaging experiences and practical digital solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 print:hidden">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-full bg-[#B7D9A2] px-6 py-3 text-sm font-bold text-[#142C38] transition hover:bg-white"
              >
                <Printer size={17} />
                Print / Save as PDF
              </button>

              <Link
                href="https://www.linkedin.com/in/cynthia-anyango/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-7 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40">Focus</p>
              <p className="mt-2 text-sm font-semibold">Creative technology</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40">Location</p>
              <p className="mt-2 text-sm font-semibold">Kenya</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-wider text-white/40">Professional interests</p>
              <p className="mt-2 text-sm font-semibold">Design · Digital · Innovation</p>
            </div>
          </div>
        </section>

        {/* PROFILE */}
        <section className="grid gap-10 border-b border-[#142C38]/10 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
              01 / Profile
            </p>
            <h2 className="mt-3 text-3xl font-bold">Professional Summary</h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#52616B]">
              I am a multidisciplinary professional with experience spanning
              digital marketing, graphic design and technology. My work
              combines creative thinking with analytical and technical skills
              to develop brand communication strategies, create visual
              content and build digital solutions.
            </p>
            <p className="mt-5 text-base leading-8 text-[#52616B]">
              I am particularly interested in the intersection of design and
              technology, where thoughtful visual experiences can be
              supported by functional and innovative digital products.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="grid gap-10 border-b border-[#142C38]/10 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
              02 / Career
            </p>
            <h2 className="mt-3 text-3xl font-bold">Experience</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#64748B]">
              Professional experience across marketing, communication,
              creative design and digital strategy.
            </p>
          </div>

          <div className="space-y-10">
            {experience.map((item, index) => (
              <article
                key={item.company}
                className="relative border-l-2 border-[#DCE9DB] pb-2 pl-7"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#285B51] ring-4 ring-[#F5F4EF]" />

                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{item.company}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#285B51]">
                      {item.role}
                    </p>
                  </div>
                  {item.period && (
                    <span className="rounded-full bg-[#E7EEE8] px-3 py-1.5 text-xs font-semibold text-[#285B51]">
                      {item.period}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-7 text-[#64748B]">
                  {item.description}
                </p>

                {item.responsibilities && (
                  <ul className="mt-4 space-y-2">
                    {item.responsibilities.map((task) => (
                      <li key={task} className="flex gap-3 text-sm leading-6 text-[#52616B]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#285B51]" />
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="grid gap-10 border-b border-[#142C38]/10 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
              03 / Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-base font-bold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#142C38]/10 bg-white px-4 py-2.5 text-xs font-medium text-[#52616B] transition hover:border-[#285B51]/40 hover:text-[#285B51]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="grid gap-10 border-b border-[#142C38]/10 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
              04 / Innovation
            </p>
            <h2 className="mt-3 text-3xl font-bold">Selected Projects</h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#64748B]">
              Technical and creative projects demonstrating practical
              problem-solving and development skills.
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[#142C38]/10 bg-white p-6 transition hover:border-[#285B51]/30 hover:shadow-lg hover:shadow-[#142C38]/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#285B51]">
                    {project.type}
                  </span>
                  <span className="text-xs text-[#94A3B8]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#64748B]">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-semibold text-[#285B51]">
                  {project.technologies}
                </p>

                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#142C38] hover:text-[#285B51] print:hidden"
                  >
                    View project <ArrowUpRight size={14} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="grid gap-10 border-b border-[#142C38]/10 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
              05 / Learning
            </p>
            <h2 className="mt-3 text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-7">
            <div>
              <h3 className="text-lg font-bold">St Paul's University</h3>
              <p className="mt-1 text-sm font-semibold text-[#285B51]">
                Bachelor of Science in Computer Science
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                September 2021 intake · Studies ongoing
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">AkiraChix</h3>
              <p className="mt-1 text-sm font-semibold text-[#285B51]">
                Diploma in Information Technology
              </p>
              <p className="mt-2 text-sm text-[#64748B]">2019</p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Digital Divide Data (DDD)
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#285B51]">
                AWS Solutions Architect Training
              </p>
              <p className="mt-2 text-sm text-[#64748B]">
                November – December 2019
              </p>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="grid gap-10 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
              06 / Community
            </p>
            <h2 className="mt-3 text-3xl font-bold">Leadership & Engagement</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Google Developer Student Clubs</h3>
              <p className="mt-1 text-sm text-[#64748B]">
                Lead – St Paul's University
              </p>
            </div>

            <div>
              <h3 className="font-bold">Google Crowdsource</h3>
              <p className="mt-1 text-sm text-[#64748B]">
                Lead / Influencer – St Paul's University, Kenya
              </p>
            </div>

            <div>
              <h3 className="font-bold">Google I/O Extended</h3>
              <p className="mt-1 text-sm text-[#64748B]">
                Panel discussion moderator – Strathmore University
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#142C38]/10 pt-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-black">
                Cynthia<span className="text-[#285B51]">.</span>
              </p>
              <p className="mt-1 text-xs text-[#94A3B8]">
                Digital · Design · Technology
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-xs font-semibold text-[#52616B] print:hidden">
              <Link href="/" className="hover:text-[#285B51]">Portfolio</Link>
              <Link href="https://www.linkedin.com/in/cynthia-anyango/" target="_blank" rel="noopener noreferrer" className="hover:text-[#285B51]">LinkedIn</Link>
              <Link href="https://github.com/Cynthia-Anyango" target="_blank" rel="noopener noreferrer" className="hover:text-[#285B51]">GitHub</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
