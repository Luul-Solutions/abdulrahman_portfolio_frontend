export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white/10"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[1, 2, 3].map((p) => (
          <div
            key={p}
            className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30"
          >
            <h3 className="text-2xl font-bold mb-2">Project {p}</h3>
            <p className="text-sm mb-4">Short description of project {p}.</p>
            <a
              href="#"
              className="text-yellow-300 font-semibold hover:underline"
            >
              See Details →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
