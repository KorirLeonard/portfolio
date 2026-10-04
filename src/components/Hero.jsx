function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-amber-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Full Stack Web Developer
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-amber-400">Korir Leonard.</span>
          </h1>

          <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl">
            I build modern web applications that solve real problems.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I'm a Computer Science student and Full Stack Web Developer focused
            on building responsive, practical and user-friendly applications
            with React, Node.js, Express, Java and SQL.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-400/10 transition hover:bg-amber-300 hover:shadow-amber-400/20">
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-amber-400 hover:text-amber-400">
              Hire Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/KorirLeonard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-white">
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/leonard-korir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-amber-400">
              LinkedIn ↗
            </a>

            <a
              href="https://wa.me/254799693844"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-amber-400">
              WhatsApp ↗
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-amber-400/10 blur-3xl" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-slate-900 p-3 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}lenny.webp`}
                alt="Korir Leonard - Full Stack Web Developer"
                className="h-[420px] w-[320px] rounded-2xl object-cover object-top sm:h-[500px] sm:w-[380px]"
              />
            </div>

            {/* Location card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900 px-6 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Based in
              </p>

              <p className="mt-1 font-semibold text-white">Eldoret, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
