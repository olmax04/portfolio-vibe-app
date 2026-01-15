export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Hi! My name is Max, and I'm a Full-Stack Developer from Belarus,
            currently living in Warsaw, Poland 🇵🇱
          </p>
          <p>
            I'm passionate about creating modern web applications that not only
            look great but also work efficiently. My tech stack includes both
            frontend and backend tools, which allows me to build complete
            solutions from start to finish.
          </p>
          <p>
            When I'm not coding, I'm learning new technologies, experimenting
            with different development approaches, and of course, drinking coffee ☕
          </p>
          <p className="text-blue-400 font-semibold">
            A student who turns ideas into reality through code.
          </p>
        </div>
      </div>
    </section>
  );
}
