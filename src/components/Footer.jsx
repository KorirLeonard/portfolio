export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white">
              Korir<span className="text-amber-400">dev.</span>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Full Stack Web Developer passionate about building modern,
              responsive, and user-friendly digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <a href="#home" className="text-slate-400 hover:text-amber-400">
                Home
              </a>

              <a href="#about" className="text-slate-400 hover:text-amber-400">
                About
              </a>

              <a
                href="#services"
                className="text-slate-400 hover:text-amber-400">
                Services
              </a>

              <a href="#skills" className="text-slate-400 hover:text-amber-400">
                Skills
              </a>

              <a
                href="#projects"
                className="text-slate-400 hover:text-amber-400">
                Projects
              </a>

              <a
                href="#contact"
                className="text-slate-400 hover:text-amber-400">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <div className="mt-4 space-y-3 text-sm">
              <p className="text-slate-400">Eldoret, Kenya</p>

              <a
                href="mailto:leonardkorir330@gmail.com"
                className="block text-slate-400 hover:text-amber-400">
                leonardkorir330@gmail.com
              </a>

              <a
                href="https://github.com/KorirLeonard"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-400 hover:text-amber-400">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/leonard-korir"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-400 hover:text-amber-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Leonard Korir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
