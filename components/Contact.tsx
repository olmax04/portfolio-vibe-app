"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Want to discuss a project or just say hello? I'd love to hear from you!
        </p>

        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://github.com/olmax04"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 min-w-[120px]"
          >
            <FaGithub
              size={32}
              className="text-gray-400 group-hover:text-white mb-3 transition-colors"
            />
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/olmax04/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 min-w-[120px]"
          >
            <FaLinkedin
              size={32}
              className="text-gray-400 group-hover:text-blue-400 mb-3 transition-colors"
            />
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Maksim Alesiayuk. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
