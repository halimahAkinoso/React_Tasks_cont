import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 md:px-20 bg-white">
      <h2 className="text-3xl font-semibold text-slate-900 mb-10">Projects</h2>

      <div className="space-y-12">
        {projects.map((p, i) => (
          <div key={i} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
            <p className="text-slate-600 mt-3">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, idx) => (
                <span key={idx} className="text-xs py-1 px-3 bg-slate-100 rounded-full text-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 space-x-4">
              <a href={p.link} className="text-sm text-black hover:underline">Live Demo</a>
              <a href={p.github} className="text-sm text-slate-700 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
