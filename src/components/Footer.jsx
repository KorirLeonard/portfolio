export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white">
              Korir<span className="text-amber-400">dev.</span>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Full Stack Web Developer focused on building practical, responsive
              and user-friendly web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <a
                href="#home"
                className="text-slate-400 transition hover:text-amber-400">
                Home
              </a>

              <a
                href="#about"
                className="text-slate-400 transition hover:text-amber-400">
                About
              </a>

              <a
                href="#services"
                className="text-slate-400 transition hover:text-amber-400">
                Services
              </a>

              <a
                href="#skills"
                className="text-slate-400 transition hover:text-amber-400">
                Skills
              </a>

              <a
                href="#projects"
                className="text-slate-400 transition hover:text-amber-400">
                Projects
              </a>

              <a
                href="#contact"
                className="text-slate-400 transition hover:text-amber-400">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-3 text-sm">
              <p className="text-slate-400">Eldoret, Kenya</p>

              <a
                href="mailto:leonardkorir330@gmail.com"
                className="block text-slate-400 transition hover:text-amber-400">
                leonardkorir330@gmail.com
              </a>

              <a
                href="https://wa.me/254799693844"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 transition hover:text-amber-400">
                WhatsApp
              </a>

              <a
                href="https://github.com/KorirLeonard"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 transition hover:text-amber-400">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/leonard-korir"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 transition hover:text-amber-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">
            © {year} Leonard Korir. All rights reserved.
          </p>

          <p className="text-sm text-slate-600">
            Available for opportunities & collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
}
