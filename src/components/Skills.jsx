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
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I build modern web applications using frontend, backend, database,
            and development tools that I continue to strengthen through
            real-world projects.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            Always Learning. Always Building.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            My goal is to keep improving my engineering skills by building
            useful applications, studying new technologies, and solving
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
