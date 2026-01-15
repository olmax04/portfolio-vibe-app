"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
// Hero section with animated background

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maksim Alesiayuk
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Turning coffee into code and ideas into reality ☕
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/olmax04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/olmax04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <FaArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
