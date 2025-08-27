import { motion } from "framer-motion";

export default function Hobbies() {
  const hobbies = [
    "Football",
    "Video Editing",
    "Traveling",
    "Learning New Skills",
  ];

  return (
    <section
      id="hobbies"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-gray-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Hobbies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-center"
            >
              <p className="text-xl font-semibold text-yellow-800">{hobby}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
