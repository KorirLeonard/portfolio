function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-amber-400/10 blur-2xl" />

            <img
              src={`${import.meta.env.BASE_URL}lenny.webp`}
              alt="Leonard Korir, web developer"
              className="relative h-[420px] w-[340px] rounded-3xl object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Turning ideas into useful digital experiences.
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-400">
            I'm Leonard, a web developer passionate about building responsive
            and user-friendly websites and applications.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I work with HTML, CSS, JavaScript, React, Node.js, Express.js and
            SQL databases. I'm also expanding my backend development skills
            through Java and Spring Boot.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My approach is simple: understand the problem, build a practical
            solution, write clean code and keep improving.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-500">Location</p>
              <p className="mt-1 font-semibold text-white">Eldoret, Kenya</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-500">Focus</p>
              <p className="mt-1 font-semibold text-white">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
