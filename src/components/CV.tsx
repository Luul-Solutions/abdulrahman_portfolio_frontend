import React from "react";

export default function CVSection() {
  return (
    <section className="min-h-screen p-12 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-6">CV / Education</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Bachelor in Computer Science - New Generation University</li>
        <li>Internship at Luul Solutions</li>
        <li>Courses: React, TypeScript, TailwindCSS</li>
      </ul>
    </section>
  );
}
