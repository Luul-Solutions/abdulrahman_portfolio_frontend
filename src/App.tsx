// App.tsx
import React from "react";
import ProfileSection from "./components/ProfileSection";
import CVSection from "./components/CV";
import ProjectsSection from "./components/projects";
import Achievements from "./components/Achievements";
import Hobbies from "./components/Hobbies";
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div>
      <Header />
      <ProfileSection  />
      <CVSection />
      <ProjectsSection />
      <Achievements />
      <Hobbies />
      <Footer />
    </div>
  );
}
