function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">
      {/* Background effects */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Full Stack Web Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-amber-400">Korir Leonard.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            I build modern web applications.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I create responsive, user-friendly websites and web applications
            using modern web technologies. I'm continuously improving my skills
            through hands-on projects, real-world development and consistent
            learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300">
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-amber-400 hover:text-amber-400">
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/KorirLeonard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-white"
              aria-label="GitHub">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/leonard-korir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-amber-400"
              aria-label="LinkedIn">
              LinkedIn
            </a>

            <a
              href="https://wa.me/254799693844"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-amber-400"
              aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-slate-900 p-3 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}lenny.webp`}
                alt="Korir Leonard - Full Stack Web Developer"
                className="h-[420px] w-[320px] rounded-2xl object-cover object-top sm:h-[500px] sm:w-[380px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-4 shadow-xl backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Based in
              </p>
              <p className="mt-1 font-semibold text-white">Eldoret, Kenya 🇰🇪</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
