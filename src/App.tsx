import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/projects";
import CV from "./components/CV";
import Achievements from "./components/Achievements";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Header />
      <CV />
      <Projects />
      <Achievements />
      <Hobbies />
      <Footer />
    </div>
  );
}
