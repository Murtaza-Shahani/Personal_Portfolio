// src/App.js
import './App.css';
import AboutMe from './components/AboutMe';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServiceSection';

function App() {
  return (
    <div>
      
       <Navbar /> 
       <Hero/>
       <AboutMe/>
       <ProjectsSection/>
       <ServicesSection/>
       <ContactSection/>
       <Footer/>
      {/* Add other components/sections of your portfolio here */}
    </div>
  );
}

export default App;
