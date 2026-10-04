import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "f23a688d-232c-433c-a0d7-ca1830eca605");
    formData.append("subject", "New Portfolio Contact Message");
    formData.append("from_name", formData.get("name"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-slate-950 px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
          <div>
            <h3 className="text-2xl font-bold text-white">Get in touch</h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              I'm open to freelance projects, junior developer opportunities,
              collaborations and practical web development work.
            </p>

            <div className="mt-8 space-y-4">
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

          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
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
                    placeholder="leonardkorir330@gmail.com"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600"
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
                  name="message_subject"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-amber-400">
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
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 text-center text-sm text-emerald-400">
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-4 text-center text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
