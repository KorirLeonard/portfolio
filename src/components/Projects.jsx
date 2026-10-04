const projects = [
  {
    title: "Car Wash Booking Website",
    description:
      "A full-stack booking platform with service management, customer bookings, authentication, email confirmations, and an admin dashboard.",
    tech: ["Node.js", "Express", "MySQL", "JavaScript"],
    live: "https://korirleonard.github.io/car-wash-booking-website/",
    github: "https://github.com/KorirLeonard/car-wash-booking-website",
    featured: true,
  },

  {
    title: "Glow Beauty Salon",
    description:
      "A modern responsive beauty salon website showcasing services, pricing, appointment information, and contact details.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://korirleonard.github.io/Glow-beaty-salon/",
    github: "https://github.com/KorirLeonard/Glow-beaty-salon",
  },

  {
    title: "ResumeMatch AI",
    description:
      "An AI-powered resume analysis application that compares resumes with job descriptions and identifies relevant skills and ATS keywords.",
    tech: ["Python", "FastAPI", "AI", "JavaScript"],
    live: "https://web-production-9f8a0.up.railway.app",
    github: "https://github.com/KorirLeonard/resume-matcher",
  },

  {
    title: "Java Hello World",
    description:
      "A Java practice project focused on user input, validation, conditional logic, comparison, and clean console-based interaction.",
    tech: ["Java", "OOP", "Git"],
    live: null,
    github: "https://github.com/KorirLeonard/HelloWorld-Java",
  },

  {
    title: "JavaScript Calculator",
    description:
      "A responsive calculator built with vanilla JavaScript supporting basic arithmetic operations through a clean interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://korirleonard.github.io/calculator/",
    github: "https://github.com/KorirLeonard/calculator",
  },

  {
    title: "Contact Form",
    description:
      "A responsive contact form with client-side validation and a clean user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://korirleonard.github.io/Contact-Form/",
    github: "https://github.com/KorirLeonard/Contact-Form",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              My Projects
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A selection of projects that demonstrate my experience building
            responsive interfaces, backend systems, databases and complete web
            applications.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 font-mono text-sm font-bold text-amber-400">
                  {"</>"}
                </div>

                {project.featured && (
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="mt-7 text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-7 flex items-center gap-5 border-t border-slate-800 pt-5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-amber-400 transition hover:text-amber-300">
                    Live Demo ↗
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-300 transition hover:text-white">
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
