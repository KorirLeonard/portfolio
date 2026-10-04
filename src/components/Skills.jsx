const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              My Skills
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I use these technologies to build responsive interfaces, backend
            services, databases and complete web applications. I continue
            strengthening my skills through practical projects and study.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/30">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>

                <span className="text-sm text-slate-600 transition group-hover:text-amber-400">
                  ↗
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-amber-400/40 hover:text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 border-l-2 border-amber-400/60 bg-slate-950/60 px-6 py-6 sm:px-8">
          <h3 className="text-xl font-semibold text-white">
            Always Learning. Always Building.
          </h3>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            My goal is to keep improving my engineering skills by building
            useful applications, studying new technologies, and solving
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
