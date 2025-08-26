// src/App.js
import './App.css';
import AboutMe from './components/AboutMe';
import ContactSection from './components/ContactSection';
import EducationExperience from './components/EducationExperience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServiceSection';

function App() {
  return (
    <div>
      <Navbar />

      {/* scroll-mt-24 (96px) keeps content from hiding under a fixed navbar */}
      <section id="home" className="scroll-mt-24"><Hero /></section>
      <section id="about" className="scroll-mt-24"><AboutMe /></section>
      <section id="experience" className="scroll-mt-24"><EducationExperience /></section>
      <section id="projects" className="scroll-mt-24"><ProjectsSection /></section>
      <section id="services" className="scroll-mt-24"><ServicesSection /></section>
      <section id="contact" className="scroll-mt-24"><ContactSection /></section>

      <Footer />
    </div>
  );
}

export default App;
