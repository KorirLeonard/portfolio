const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, modern and user-friendly interfaces using HTML, CSS, JavaScript, React and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side applications, REST APIs and backend services using Node.js, Express.js and Java/Spring Boot.",
  },
  {
    number: "03",
    title: "Database Development",
    description:
      "Designing and working with relational databases including MySQL, PostgreSQL and SQL Server.",
  },
  {
    number: "04",
    title: "Responsive Web Design",
    description:
      "Building websites that provide a consistent experience across mobile phones, tablets and desktop devices.",
  },
  {
    number: "05",
    title: "Website Maintenance",
    description:
      "Improving, updating and maintaining websites to keep them reliable, secure and easy to use.",
  },
  {
    number: "06",
    title: "Graphic Design",
    description:
      "Creating professional visual materials including posters, flyers, social media graphics and branding materials.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-950 px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            What I Do
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Services built around your goals.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I provide practical digital solutions that help individuals and
            businesses establish and improve their online presence.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40">
              <span className="text-sm font-bold text-amber-400">
                {service.number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-7 h-px w-12 bg-amber-400 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
