import React, { JSX } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Mock profile data
const mockProfile = {
  name: "Abdulrahman",
  bio: "Professional footballer and software enthusiast.",
  location: "Madrid, Spain",
  nationality: "Portuguese",
  email: "ronaldo@example.com",
  phone: "+123456789",
  github: "https://github.com/ronaldo",
  linkedin: "https://linkedin.com/in/ronaldo",
  twitter: "https://twitter.com/ronaldo",
  skills: "Football, Leadership, Coding",
  languages: "Portuguese, English, Spanish",
  expectedSalary: 5000000,
  ownACar: true,
  haveDrivingLicense: true,
  noticePeriod: "2 weeks",
  willingToRelocate: true,
  referees: "Agent: +987654321",
};

export default function ProfileSection(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white px- py-20 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-400">
      {/* Profile Photo */}
      <img
        src="data:image/jpeg;base64,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"
        alt={mockProfile.name}
        className="w-40 h-40 rounded-full border-4 border-white shadow-xl mb-6"
      />

      {/* Name and Bio */}
      <h1 className="text-5xl font-extrabold">{mockProfile.name}</h1>
      <p className="mt-4 text-lg max-w-2xl text-center">{mockProfile.bio}</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6 text-3xl">
        <a href={mockProfile.github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href={mockProfile.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href={mockProfile.twitter} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Profile Details */}
      <div className="mt-10 bg-white/20 p-6 rounded-xl max-w-3xl text-left space-y-2">
        <p>
          <strong>Location:</strong> {mockProfile.location}
        </p>
        <p>
          <strong>Nationality:</strong> {mockProfile.nationality}
        </p>
        <p>
          <strong>Email:</strong> {mockProfile.email}
        </p>
        <p>
          <strong>Phone:</strong> {mockProfile.phone}
        </p>
        <p>
          <strong>Expected Salary:</strong> ${mockProfile.expectedSalary}
        </p>
        <p>
          <strong>Own a Car:</strong> {mockProfile.ownACar ? "Yes" : "No"}
        </p>
        <p>
          <strong>Driving License:</strong>{" "}
          {mockProfile.haveDrivingLicense ? "Yes" : "No"}
        </p>
        <p>
          <strong>Notice Period:</strong> {mockProfile.noticePeriod}
        </p>
        <p>
          <strong>Willing to Relocate:</strong>{" "}
          {mockProfile.willingToRelocate ? "Yes" : "No"}
        </p>
        <p>
          <strong>Referees:</strong> {mockProfile.referees}
        </p>
        <p>
          <strong>Languages:</strong> {mockProfile.languages}
        </p>
        <p>
          <strong>Skills:</strong> {mockProfile.skills}
        </p>
      </div>
    </section>
  );
}
