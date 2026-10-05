import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Content: staggered entrance */}
        <motion.div
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <motion.span
              className="h-px w-10 origin-left bg-amber-400"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Full Stack Web Developer
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-amber-400">Korir Leonard.</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl">
            I build modern web applications that solve real problems.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I'm a Computer Science student and Full Stack Web Developer focused
            on building responsive, practical and user-friendly applications
            with React, Node.js, Express, Java and SQL.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-400/10 transition-colors hover:bg-amber-300 hover:shadow-amber-400/30">
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-white transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950">
              Hire Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
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
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
          <div className="relative">
            {/* Glow: slow pulse */}
            <motion.div
              className="pointer-events-none absolute -inset-6 rounded-full bg-amber-400/10 blur-3xl"
              animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-slate-900 p-3 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/leonard-korir.webp`}
                alt="Korir Leonard - Full Stack Web Developer"
                className="h-[420px] w-[320px] rounded-2xl object-cover object-top sm:h-[500px] sm:w-[380px]"
              />
            </div>

            {/* Location card: pops in, then floats gently */}
            <motion.div
              className="absolute -bottom-6 -left-6"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}>
              <motion.div
                className="rounded-2xl border border-white/10 bg-slate-900 px-6 py-4 shadow-xl"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                }}>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Based in
                </p>

                <p className="mt-1 font-semibold text-white">Eldoret, Kenya</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
