export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a project, job opportunity, or collaboration in mind? Send me a
            message and let's talk about it.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Get in touch</h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm available for freelance projects, junior developer
              opportunities, collaborations, and interesting web development
              work.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:leonardkorir330@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-amber-400/50">
                <span className="text-xl text-amber-400">✉</span>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-200">leonardkorir330@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/KorirLeonard"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-amber-400/50">
                <span className="text-xl text-amber-400">⌘</span>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="text-slate-200">github.com/KorirLeonard</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/leonard-korir"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-amber-400/50">
                <span className="text-xl text-amber-400">in</span>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-200">
                    linkedin.com/in/leonard-korir
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
                <span className="text-xl text-amber-400">⌖</span>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-200">Eldoret, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>

              <select
                id="subject"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-400">
                <option>Freelance Project</option>
                <option>Job Opportunity</option>
                <option>Collaboration</option>
                <option>Just Say Hi 👋</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
              Send Message
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              I usually reply within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
