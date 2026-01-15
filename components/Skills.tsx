"use client";

import {
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJest,
  SiDocker,
  SiAmazon,
  SiSelenium,
  SiGit,
  SiJira,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPrisma,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const skills = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
  { name: "Express", icon: FaServer, color: "text-gray-400" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Jest", icon: SiJest, color: "text-orange-500" },
  { name: "Mocha", icon: SiJest, color: "text-amber-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
  { name: "Selenium", icon: SiSelenium, color: "text-green-400" },
  { name: "Git", icon: SiGit, color: "text-red-400" },
  { name: "Jira", icon: SiJira, color: "text-blue-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Prisma", icon: SiPrisma, color: "text-teal-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Icon
                  className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
