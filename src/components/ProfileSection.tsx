import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Profile {
  name: string;
  bio?: string;
  location?: string;
  nationality?: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  skills?: string[];
  languages?: string[];
  referees?: string[];
  expectedSalary?: number;
  ownACar?: boolean;
  haveDrivingLicense?: boolean;
  noticePeriod?: string;
  willingToRelocate?: boolean;
}

export default function ProfileSection() {
  // Example data
  const profile: Profile = {
    name: "abdulrahman Sacid",
    bio: "Frontend  Fullstack Developer passionate about creating interactive and responsive web applications.",
    location: "Mogadishu, Somalia",
    nationality: "Somali",
    email: "example@email.com",
    phone: "+252 612 345 678",
    github: "https://github.com/abderahman856",
    linkedin: "https://www.linkedin.com/in/abderahman-sa-eed-391a0037b/",
    twitter: "https://twitter.com/example",
    skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    languages: ["English", "Somali"],
    referees: [
      "Ahmed kaafi - Ahmed@example.com",
      "Mufti Mohammed - Mufti@example.com",
    ],
    expectedSalary: 1500,
    ownACar: true,
    haveDrivingLicense: true,
    noticePeriod: "2 weeks",
    willingToRelocate: true,
  };

  const socialLinks = [
    { href: profile.github || "#", Icon: FaGithub },
    { href: profile.linkedin || "#", Icon: FaLinkedin },
    { href: profile.twitter || "#", Icon: FaTwitter },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-start px-6 py-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Profile Photo */}
      <motion.div
        className="w-48 h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden mt-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
      >
        <img
          src="https://i.pravatar.cc/300"
          alt={profile.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Name & Bio */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-6xl font-extrabold tracking-wide mb-2"
          animate={{
            color: ["#ff4d4d", "#ffb84d", "#4dff4d", "#4db8ff", "#b84dff"],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
        >
          {profile.name}
        </motion.h1>
        {profile.bio && (
          <motion.p
            className="text-lg max-w-xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {profile.bio}
          </motion.p>
        )}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-6 mb-12 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {socialLinks.map(({ href, Icon }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.4, rotate: [0, 10, -10, 0] }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="hover:text-yellow-400 transition-colors"
          >
            <Icon size={32} />
          </motion.a>
        ))}
      </motion.div>

      {/* Info Cards */}
      <div className="grid gap-8 md:grid-cols-2 w-full max-w-6xl">
        {/* Personal Info */}
        <motion.div
          className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-400 rounded-xl p-6 shadow-2xl space-y-3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-white/20 rounded px-3 py-1 inline-block">
            Personal Information
          </h2>
          <p>
            <strong>Location:</strong> {profile.location}
          </p>
          <p>
            <strong>Nationality:</strong> {profile.nationality}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
        </motion.div>

        {/* Work & Skills */}
        <motion.div
          className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-400 rounded-xl p-6 shadow-2xl space-y-3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-white/20 rounded px-3 py-1 inline-block">
            Work & Skills
          </h2>
          <p>
            <strong>Skills:</strong> {profile.skills?.join(", ")}
          </p>
          <p>
            <strong>Languages:</strong> {profile.languages?.join(", ")}
          </p>
          <p>
            <strong>Expected Salary:</strong> ${profile.expectedSalary}
          </p>
          <p>
            <strong>Own a Car:</strong> {profile.ownACar ? "Yes" : "No"}
          </p>
          <p>
            <strong>Driving License:</strong>{" "}
            {profile.haveDrivingLicense ? "Yes" : "No"}
          </p>
          <p>
            <strong>Notice Period:</strong> {profile.noticePeriod}
          </p>
          <p>
            <strong>Willing to Relocate:</strong>{" "}
            {profile.willingToRelocate ? "Yes" : "No"}
          </p>
        </motion.div>

        {/* Referees */}
        <motion.div
          className="bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-400 rounded-xl p-6 shadow-2xl md:col-span-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-white/20 rounded px-3 py-1 inline-block">
            Referees
          </h2>
          {profile.referees?.map((ref, i) => (
            <p key={i}>{ref}</p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
