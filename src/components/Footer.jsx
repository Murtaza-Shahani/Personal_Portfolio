import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Title and Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Ghulam Murtaza
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-xl italic text-gray-400 mb-8"
        >
          Full Stack Web Developer & AI & Data Scientist
        </motion.p>

        {/* Navigation Links */}
        <div className="mb-8">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#home" className="text-lg text-white hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg text-white hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-lg text-white hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg text-white hover:text-gray-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg text-white hover:text-gray-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/ghulam-murtaza-shahani/" className="text-3xl text-white hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Murtaza-Shahani" className="text-3xl text-white hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/murtaza_shahani1/" className="text-3xl text-white hover:text-gray-400 transition">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61563129508235" className="text-3xl text-white hover:text-gray-400 transition">
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Ghulam Murtaza. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
