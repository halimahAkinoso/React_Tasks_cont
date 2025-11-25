import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black flex items-center">
                  <FaGithub className="mr-1" /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <FaExternalLinkAlt className="mr-1" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}