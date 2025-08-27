import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    "Reached 5,000 followers on TikTok",
    "Completed multiple web development projects",
    "Member of a successful student startup team",
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-green-200 via-green-300 to-green-100 text-gray-900"
    >
      <h2 className="text-4xl font-bold mb-12">Achievements</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-800">
              Achievement {i + 1}
            </h3>
            <p className="text-gray-700">{ach}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
