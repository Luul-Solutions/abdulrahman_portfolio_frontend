import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const links = ["Home", "CV", "Projects", "Achievements", "Hobbies"];

  // Toggle dark/light mode
  // const toggleMode = () => {
  //   setDarkMode(!darkMode);
  //   if (!darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

  return (
    <motion.nav
      className={`fixed w-full text-white px-6 py-4 shadow-xl z-50 ${
        darkMode
          ? "bg-gradient-to-r from-blue-500 to-purple-700"
          : "bg-gray-100 text-gray-900"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className={`font-bold text-xl ${
            darkMode ? "text-teal-300" : "text-blue-600"
          }`}
        >
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.li
              key={link}
              className="cursor-pointer"
              whileHover={{
                scale: 1.1,
                color: darkMode ? "#22d3ee" : "#3b82f6",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </ul>

        {/* Dark/Light Mode Switch */}
        {/* <button
          onClick={toggleMode}
          className={`hidden md:block px-4 py-2 rounded-lg border ${
            darkMode
              ? "border-white text-white hover:bg-white/20"
              : "border-gray-400 text-gray-800 hover:bg-gray-300/20"
          } transition-all`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button> */}

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl ${
            darkMode ? "text-teal-300" : "text-blue-600"
          } focus:outline-none`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          className={`flex flex-col mt-4 gap-4 md:hidden text-center rounded-lg p-4 ${
            darkMode ? "bg-indigo-600/80" : "bg-gray-200"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {links.map((link) => (
            <motion.li
              key={link}
              className="cursor-pointer"
              whileHover={{
                scale: 1.05,
                color: darkMode ? "#22d3ee" : "#3b82f6",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </motion.li>
          ))}

          {/* Mobile Dark/Light Mode Switch */}
          {/* <li>
            <button
              onClick={toggleMode}
              className={`w-full px-4 py-2 rounded-lg border ${
                darkMode
                  ? "border-white text-white hover:bg-white/20"
                  : "border-gray-400 text-gray-800 hover:bg-gray-300/20"
              } transition-all`}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li> */}
        </motion.ul>
      )}
    </motion.nav>
  );
}
