import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "CV", href: "#cv" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Hobbies", href: "#hobbies" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Name */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          MyPortfolio
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-200 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-purple-500"
        >
          <ul className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white font-medium text-lg hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
