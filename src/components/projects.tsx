import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Short description of project 1.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Short description of project 2.",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Short description of project 3.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-center drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, i) => (
          // Outer wrapper: handles entrance only (with delay)
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="rounded-2xl border border-white/30 shadow-2xl backdrop-blur-md transform-gpu will-change-transform"
            style={{
              background: `linear-gradient(135deg, hsl(${
                i * 60
              }, 70%, 50%), hsl(${i * 60 + 60}, 70%, 60%))`,
            }}
          >
            {/* Inner card: handles hover (no delay) so it's instant & smooth */}
            <motion.div
              className="p-6 rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-2xl font-bold mb-2 drop-shadow">
                {project.title}
              </h3>
              <p className="text-sm mb-4 drop-shadow">{project.description}</p>
              <a
                href={project.link}
                className="text-white font-semibold hover:text-yellow-300 hover:underline drop-shadow focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                See Details →
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
