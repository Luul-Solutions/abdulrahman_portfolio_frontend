import { motion } from "framer-motion";

export default function CVSection() {
  const education = [
    {
      title: "Bachelor in Computer Science",
      place: "New Generation University",
      year: "2024 – Present",
    },
    {
      title: "Internship",
      place: "Luul Solutions",
      year: "2025",
    },
    {
      title: "Courses",
      place: "React, TypeScript, TailwindCSS",
      year: "Ongoing",
    },
  ];

  return (
    <section
      id="cv"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50 text-gray-900"
    >
      <h2 className="text-4xl font-bold mb-12">CV / Education</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {education.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.place}</p>
            <p className="text-sm text-gray-500 mt-2">{item.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
