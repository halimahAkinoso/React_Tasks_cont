const skills = [
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "TypeScript",
  "TailwindCSS", "Docker", "AWS"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 md:px-20 bg-white">
      <h2 className="text-3xl font-semibold text-slate-900 mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="py-3 px-4 border border-slate-200 rounded-lg text-center text-slate-700 hover:bg-slate-100 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
