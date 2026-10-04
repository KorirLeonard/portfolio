function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-amber-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-2 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}lenny.webp`}
                alt="Korir Leonard - Full Stack Web Developer"
                className="h-[420px] w-[340px] rounded-2xl object-cover object-top sm:h-[500px] sm:w-[390px]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Building practical software while growing as a developer.
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-400">
            I'm Korir Leonard, a Computer Science student and Full Stack Web
            Developer based in Eldoret, Kenya. I enjoy turning ideas and
            real-world problems into practical digital solutions.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I'm currently pursuing a Diploma in Computer Science while
            strengthening my development skills through hands-on projects. My
            main focus is modern web development, particularly building
            responsive frontends and reliable backend systems.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My current stack includes React, JavaScript, Tailwind CSS, Node.js,
            Express and SQL databases. I'm also developing my Java skills with
            Spring Boot to strengthen my backend and application development
            knowledge.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I believe the best way to learn software development is to build.
            Each project I work on helps me understand real development
            challenges, improve my problem-solving skills and write better
            software.
          </p>

          {/* Information cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-amber-400/30">
              <p className="text-sm text-slate-500">Education</p>
              <p className="mt-1 font-semibold text-white">
                Diploma in Computer Science
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-amber-400/30">
              <p className="text-sm text-slate-500">Specialization</p>
              <p className="mt-1 font-semibold text-white">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-amber-400/30">
              <p className="text-sm text-slate-500">Frontend</p>
              <p className="mt-1 font-semibold text-white">
                React & Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-amber-400/30">
              <p className="text-sm text-slate-500">Backend</p>
              <p className="mt-1 font-semibold text-white">
                Node.js, Express & Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
