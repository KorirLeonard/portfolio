export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Contact
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a project, job opportunity or collaboration in mind? I'd be
            happy to hear about it. Send me a message and let's discuss how I
            can help.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-bold text-white">Get in touch</h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              I'm open to freelance projects, junior developer opportunities,
              collaborations and practical web development work.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:leonardkorir330@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5 transition duration-300 hover:border-amber-400/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-lg text-amber-400">
                  ✉
                </span>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 text-slate-200 transition group-hover:text-white">
                    leonardkorir330@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KorirLeonard"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5 transition duration-300 hover:border-amber-400/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 font-semibold text-amber-400">
                  GH
                </span>

                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="mt-1 text-slate-200 transition group-hover:text-white">
                    github.com/KorirLeonard
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/leonard-korir"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5 transition duration-300 hover:border-amber-400/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 font-bold text-amber-400">
                  in
                </span>

                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="mt-1 text-slate-200 transition group-hover:text-white">
                    linkedin.com/in/leonard-korir
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-lg text-amber-400">
                  ⌖
                </span>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 text-slate-200">Eldoret, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form className="rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-amber-400">
                  <option>Freelance Project</option>
                  <option>Job Opportunity</option>
                  <option>Collaboration</option>
                  <option>Just Say Hi 👋</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300">
                Send Message
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Your message will be handled securely.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
