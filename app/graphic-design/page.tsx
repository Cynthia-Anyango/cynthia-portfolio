
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, X } from "lucide-react";

const categories = [
  "All Work",
  "Brand Identity",
  "Social Media",
  "Posters",
  "Campaigns",
];

const projects = [
  {
    title: "Brand Identity",
    category: "Brand Identity",
      image: "/images/graphic-design/branding.jpg",
    description: "Visual identity concepts, brand elements and creative direction.",
    year: "Selected work",
    background: "bg-[#E7EEE8]",
    accent: "text-[#285B51]",
    label: "BRAND / 01",
    headline: "Build a brand that speaks.",
    subline: "Identity · Strategy · Design",
  },
  {
    title: "Social Media Creatives",
    category: "Social Media",
    image: "/images/graphic-design/socials.jpg",

    description: "Digital content designed to communicate, engage and build brand recognition.",
    year: "Selected work",
    background: "bg-[#E8EDF2]",
    accent: "text-[#24516A]",
    label: "SOCIAL / 02",
    headline: "Make every scroll count.",
    subline: "Content that connects.",
  },
  {
    title: "Marketing Posters",
    category: "Posters",
    image: "/images/graphic-design/posters.jpg",
    description: "Promotional posters and marketing materials created for campaigns and events.",
    year: "Selected work",
    background: "bg-[#F2E9DC]",
    accent: "text-[#9A583A]",
    label: "POSTER / 03",
    headline: "Ideas worth noticing.",
    subline: "Creative communication.",
  },
  {
    title: "Campaign Graphics",
    category: "Campaigns",
    image: "/images/graphic-design/campaigns.jpg",
    description: "Visual assets developed to support marketing campaigns and brand initiatives.",
    year: "Selected work",
    background: "bg-[#EAE7F1]",
    accent: "text-[#66558B]",
    label: "CAMPAIGN / 04",
    headline: "Create. Connect. Inspire.",
    subline: "Campaign storytelling.",
  },
];

function Artwork({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-xl p-6 sm:p-8 ${project.background}`}>
      <div className="flex items-center justify-between">
        <span className={`text-[10px] font-black tracking-[0.2em] ${project.accent}`}>
          {project.label}
        </span>
        <Sparkles size={17} className={project.accent} />
      </div>

      <div className="relative">
        <div className="absolute -right-2 -top-16 h-36 w-36 rounded-full bg-white/30" />
        <h3 className={`relative max-w-[280px] text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl ${project.accent}`}>
          {project.headline}
        </h3>
        <p className="relative mt-4 text-xs text-[#52616B]">
          {project.subline}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[#142C38]/10 pt-3">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#52616B]">
          Creative portfolio
        </span>
        <span className={`text-xs font-bold ${project.accent}`}>CA.</span>
      </div>
    </div>
  );
}

export default function GraphicDesignPage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const [selectedProject, setSelectedProject] =
  useState<(typeof projects)[number] | null>(null);

  const filteredProjects =
    activeCategory === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#142C38]">
      <header className="sticky top-0 z-40 border-b border-[#142C38]/10 bg-[#F5F4EF]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            CA<span className="text-[#285B51]">.</span>
          </Link>

          <nav className="flex items-center gap-5">
            <Link href="/" className="hidden text-sm font-semibold text-[#52616B] hover:text-[#285B51] sm:block">
              Home
            </Link>
            <Link href="/resume" className="text-sm font-semibold text-[#52616B] hover:text-[#285B51]">
              Resume
            </Link>
            <Link href="/contact" className="rounded-full bg-[#142C38] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#285B51]">
              Let's talk
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6">
        <section className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-28">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#285B51]">
              Creative portfolio / 01
            </p>
            <h1 className="max-w-3xl text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              Design that
              <span className="block font-serif font-normal italic text-[#285B51]">
                communicates.
              </span>
            </h1>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-8 text-[#52616B]">
              Exploring the intersection of creativity, visual storytelling
              and purposeful communication. A collection of design work
              created to make ideas visible and brands memorable.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#285B51]">
              Branding · Digital · Campaigns · Visuals
            </p>
          </div>
        </section>

        <section className="border-t border-[#142C38]/10 py-14">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                The design collection
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#64748B]">
              A selection of creative directions and visual communication concepts.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#285B51] text-white"
                    : "border border-[#142C38]/10 bg-white text-[#52616B] hover:border-[#285B51]/40 hover:text-[#285B51]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <button
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="group w-full text-left"
            >
            <div className="overflow-hidden rounded-xl bg-white transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#142C38]/10">
                <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
                />

                <div className="p-3">
                <Artwork project={project} />
                </div>
            </div>

            <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#285B51]">
                    {project.category}
                </p>

                <h3 className="mt-2 text-lg font-bold">
                    {project.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                    {project.description}
                </p>
                </div>

                <span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#142C38]/10 transition group-hover:border-[#285B51] group-hover:bg-[#285B51] group-hover:text-white">
                <ArrowUpRight size={17} />
                </span>
            </div>
            </button>
            ))}
          </div>
        </section>
      </div>
          {/* Project Preview Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#142C38]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#F5F4EF] p-5 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#142C38] shadow-sm transition hover:bg-[#E7EEE8]"
            >
              <X size={20} />
            </button>

            {/* Project Details */}
            <div className="mb-6 pr-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
                {selectedProject.category}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#142C38] sm:text-4xl">
                {selectedProject.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#64748B]">
                {selectedProject.description}
              </p>
            </div>

            {/* Large Project Image */}
            <div className="overflow-hidden rounded-2xl bg-white">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#142C38]/10 pt-5">
              <p className="text-xs font-semibold text-[#285B51]">
                {selectedProject.year}
              </p>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full bg-[#142C38] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#285B51]"
              >
                Close preview
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}




















// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowLeft, ArrowUpRight, X, Sparkles } from "lucide-react";

// const categories = [
//   "All Work",
//   "Brand Identity",
//   "Social Media",
//   "Posters",
//   "Campaigns",
// ];

// const projects = [
//   {
//     title: "Brand Identity",
//     category: "Brand Identity",
//     description:
//       "Visual identity concepts, brand elements and creative direction.",
//     year: "Selected work",
//     background: "bg-[#E7EEE8]",
//     accent: "text-[#285B51]",
//     label: "BRAND / 01",
//     headline: "Build a brand that speaks.",
//     subline: "Identity · Strategy · Design",
//     layout: "identity",
//   },
//   {
//     title: "Social Media Creatives",
//     category: "Social Media",
//     description:
//       "Digital content designed to communicate, engage and build brand recognition.",
//     year: "Selected work",
//     background: "bg-[#E8EDF2]",
//     accent: "text-[#24516A]",
//     label: "SOCIAL / 02",
//     headline: "Make every scroll count.",
//     subline: "Content that connects.",
//     layout: "social",
//   },
//   {
//     title: "Marketing Posters",
//     category: "Posters",
//     description:
//       "Promotional posters and marketing materials created for campaigns and events.",
//     year: "Selected work",
//     background: "bg-[#F2E9DC]",
//     accent: "text-[#9A583A]",
//     label: "POSTER / 03",
//     headline: "Ideas worth noticing.",
//     subline: "Creative communication.",
//     layout: "poster",
//   },
//   {
//     title: "Campaign Graphics",
//     category: "Campaigns",
//     description:
//       "Visual assets developed to support marketing campaigns and brand initiatives.",
//     year: "Selected work",
//     background: "bg-[#EAE7F1]",
//     accent: "text-[#66558B]",
//     label: "CAMPAIGN / 04",
//     headline: "Create. Connect. Inspire.",
//     subline: "Campaign storytelling.",
//     layout: "campaign",
//   },
// ];

// function Artwork({ project }: { project: (typeof projects)[number] }) {
//   return (
//     <div
//       className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-xl p-6 sm:p-8 ${project.background}`}
//     >
//       <div className="flex items-center justify-between">
//         <span className={`text-[10px] font-black tracking-[0.2em] ${project.accent}`}>
//           {project.label}
//         </span>
//         <Sparkles size={17} className={project.accent} />
//       </div>

//       {project.layout === "identity" && (
//         <div className="relative">
//           <div className="absolute -right-2 -top-20 h-36 w-36 rounded-full border-[18px] border-[#285B51]/15" />
//           <p className={`text-5xl font-black tracking-tighter sm:text-6xl ${project.accent}`}>
//             A.
//           </p>
//           <h3 className="mt-3 max-w-[240px] text-2xl font-bold leading-tight text-[#142C38]">
//             {project.headline}
//           </h3>
//           <p className="mt-2 text-xs tracking-wide text-[#52616B]">
//             {project.subline}
//           </p>
//         </div>
//       )}

//       {project.layout === "social" && (
//         <div className="relative">
//           <div className="absolute -right-2 -top-16 h-40 w-40 rotate-12 rounded-[2rem] bg-[#24516A]/10" />
//           <p className="text-xs font-bold uppercase tracking-widest text-[#24516A]">
//             Think digital.
//           </p>
//           <h3 className="relative mt-3 max-w-[260px] text-4xl font-black leading-[0.95] tracking-tight text-[#142C38] sm:text-5xl">
//             {project.headline}
//           </h3>
//           <p className="mt-4 text-xs text-[#52616B]">{project.subline}</p>
//         </div>
//       )}

//       {project.layout === "poster" && (
//         <div className="relative">
//           <div className="absolute -right-5 -top-12 h-36 w-28 rotate-12 rounded-full bg-[#9A583A]/15" />
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A583A]">
//             Creative studio
//           </p>
//           <h3 className="relative mt-4 max-w-[260px] text-4xl font-black leading-[0.95] tracking-tight text-[#142C38] sm:text-5xl">
//             {project.headline}
//           </h3>
//           <p className="mt-4 text-xs text-[#52616B]">{project.subline}</p>
//         </div>
//       )}

//       {project.layout === "campaign" && (
//         <div className="relative">
//           <div className="absolute -right-3 -top-14 h-36 w-36 rounded-full bg-[#66558B]/10" />
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66558B]">
//             Creative campaign
//           </p>
//           <h3 className="relative mt-4 max-w-[260px] text-4xl font-black leading-[0.95] tracking-tight text-[#142C38] sm:text-5xl">
//             {project.headline}
//           </h3>
//           <p className="mt-4 text-xs text-[#52616B]">{project.subline}</p>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t border-[#142C38]/10 pt-3">
//         <span className="text-[10px] font-semibold uppercase tracking-widest text-[#52616B]">
//           Creative portfolio
//         </span>
//         <span className={`text-xs font-bold ${project.accent}`}>CA.</span>
//       </div>
//     </div>
//   );
// }

// export default function GraphicDesignPage() {
//   const [activeCategory, setActiveCategory] = useState("All Work");
//   const [selectedProject, setSelectedProject] =
//     useState<(typeof projects)[number] | null>(null);

//   const filteredProjects =
//     activeCategory === "All Work"
//       ? projects
//       : projects.filter((project) => project.category === activeCategory);

//   return (
//     <main className="min-h-screen bg-[#F5F4EF] text-[#142C38]">
//       {/* Navigation */}
//       <header className="sticky top-0 z-40 border-b border-[#142C38]/10 bg-[#F5F4EF]/95 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
//           <Link href="/" className="text-2xl font-black tracking-tight">
//             CA<span className="text-[#285B51]">.</span>
//           </Link>

//           <div className="flex items-center gap-5">
//             <Link
//               href="/"
//               className="hidden text-sm font-semibold text-[#52616B] transition hover:text-[#285B51] sm:block"
//             >
//               Home
//             </Link>
//             <Link
//               href="/resume"
//               className="text-sm font-semibold text-[#52616B] transition hover:text-[#285B51]"
//             >
//               Resume
//             </Link>
//             <Link
//               href="/contact"
//               className="rounded-full bg-[#142C38] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#285B51]"
//             >
//               Let's talk
//             </Link>
//           </div>
//         </div>
//       </header>

//       <div className="mx-auto max-w-7xl px-6">
//         {/* Hero */}
//         <section className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-28">
//           <div>
//             <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#285B51]">
//               Creative portfolio / 01
//             </p>

//             <h1 className="max-w-3xl text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
//               Design that
//               <span className="block font-serif font-normal italic text-[#285B51]">
//                 communicates.
//               </span>
//             </h1>
//           </div>

//           <div className="max-w-md md:justify-self-end">
//             <p className="text-base leading-8 text-[#52616B]">
//               Exploring the intersection of creativity, visual storytelling
//               and purposeful communication. A collection of design work
//               created to make ideas visible and brands memorable.
//             </p>
//             <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#285B51]">
//               Branding · Digital · Campaigns · Visuals
//             </p>
//           </div>
//         </section>

//         {/* Gallery */}
//         <section className="border-t border-[#142C38]/10 py-14">
//           <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
//                 Selected work
//               </p>
//               <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
//                 The design collection
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-6 text-[#64748B]">
//               A selection of creative directions and visual communication
//               concepts.
//             </p>
//           </div>

//           {/* Category filters */}
//           <div className="mb-10 flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
//                   activeCategory === category
//                     ? "bg-[#285B51] text-white"
//                     : "border border-[#142C38]/10 bg-white text-[#52616B] hover:border-[#285B51]/40 hover:text-[#285B51]"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Project grid */}
//           <div className="grid gap-7 sm:grid-cols-2">
//             {filteredProjects.map((project, index) => (
//               <button
//                 key={project.title}
//                 onClick={() => setSelectedProject(project)}
//                 className="group text-left"
//               >
//                 <div className="overflow-hidden rounded-xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#142C38]/10">
//                   <Artwork project={project} />
//                 </div>

//                 <div className="flex items-start justify-between gap-4 pt-5">
//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#285B51]">
//                       {project.category}
//                     </p>
//                     <h3 className="mt-2 text-lg font-bold">
//                       {project.title}
//                     </h3>
//                     <p className="mt-2 max-w-md text-sm leading-6 text-[#64748B]">
//                       {project.description}
//                     </p>
//                   </div>

//                   <span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#142C38]/10 transition group-hover:border-[#285B51] group-hover:bg-[#285B51] group-hover:text-white">
//                     <ArrowUpRight size={17} />
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Contact panel */}
//         <section className="mb-20 mt-10 overflow-hidden rounded-[2rem] bg-[#142C38] px-8 py-14 text-white md:px-14 md:py-16">
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A9CBB6]">
//             Have a project in mind?
//           </p>

//           <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
//             <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
//               Let's create something
//               <span className="font-serif font-normal italic text-[#A9CBB6]">
//                 {" "}meaningful.
//               </span>
//             </h2>

//             <Link
//               href="/contact"
//               className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#B7D9A2] px-6 py-3.5 text-sm font-bold text-[#142C38] transition hover:bg-white md:self-auto"
//             >
//               Get in touch <ArrowUpRight size={17} />
//             </Link>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="flex flex-col justify-between gap-4 border-t border-[#142C38]/10 py-8 sm:flex-row sm:items-center">
//           <p className="text-sm font-black">
//             Cynthia<span className="text-[#285B51]">.</span>
//           </p>
//           <p className="text-xs text-[#94A3B8]">
//             Digital · Design · Technology
//           </p>
//           <Link
//             href="/"
//             className="text-xs font-semibold text-[#52616B] hover:text-[#285B51]"
//           >
//             Back to portfolio
//           </Link>
//         </footer>
//       </div>

//       {/* Project detail modal */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-[#142C38]/80 p-5 backdrop-blur-sm"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="relative w-full max-w-2xl rounded-3xl bg-[#F5F4EF] p-6 sm:p-9"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#142C38] transition hover:bg-[#E7EEE8]"
//               aria-label="Close project preview"
//             >
//               <X size={18} />
//             </button>

//             <div className="mb-7 pr-10">
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#285B51]">
//                 {selectedProject.category}
//               </p>
//               <h2 className="mt-3 text-3xl font-bold">
//                 {selectedProject.title}
//               </h2>
//             </div>

//             <Artwork project={selectedProject} />

//             <p className="mt-6 text-sm leading-7 text-[#52616B]">
//               {selectedProject.description}
//             </p>

//             <p className="mt-5 text-xs font-semibold text-[#285B51]">
//               {selectedProject.year}
//             </p>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
// export default function GraphicDesignPage() {
//   return (
//     <main className="min-h-screen bg-[#F5F4EF] p-10">
//       <h1 className="text-4xl font-bold text-[#142C38]">
//         Design that communicates.
//       </h1>
//       <p className="mt-4">Graphic Design Portfolio</p>
//     </main>
//   );
// }






// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowUpRight, X, Sparkles } from "lucide-react";

// export default function GraphicDesignPage() {
//   const [active, setActive] = useState("All Work");

//   return (
//     <main className="min-h-screen bg-[#F5F4EF] p-10 text-[#142C38]">
//       <Link href="/">Back home</Link>

//       <h1 className="mt-10 text-6xl font-bold">
//         Design that communicates.
//       </h1>

//       <button onClick={() => setActive("Brand Identity")}>
//         Test category filter
//       </button>

//       <p className="mt-4">{active}</p>

//       <ArrowUpRight />
//       <Sparkles />
//       <X />
//     </main>
//   );
// }