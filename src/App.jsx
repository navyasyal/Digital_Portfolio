import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Positions from "./components/Positions.jsx";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Positions/>
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  ); 
}