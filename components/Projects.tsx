"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// Projects and Contact sections

const projects = [
  {
    name: "olmax04",
    description:
      "Turning coffee into code and ideas into reality. Personal projects and experiments.",
    tech: ["Various"],
    github: "https://github.com/olmax04",
    live: null,
  },
  {
    name: "todo-vibe-app",
    description:
      "🚀 Modern TODO app | React + Vite | Cursor AI experiment | 🌍 Multilingual (EN/RU) | ✨ Beautiful UI",
    tech: ["React", "Vite", "JavaScript"],
    github: "https://github.com/olmax04/todo-vibe-app",
    live: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-lg border border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/olmax04?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
