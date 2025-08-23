import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "CV", "Projects", "Achievements", "Hobbies"];

  return (
    <motion.nav
      className="fixed w-full bg-black/50 backdrop-blur-md text-white px-6 py-4 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">Baashe</div>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link} className="hover:text-yellow-400 cursor-pointer">
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          className="flex flex-col mt-4 gap-4 md:hidden text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {links.map((link) => (
            <li key={link} className="hover:text-yellow-400">
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
