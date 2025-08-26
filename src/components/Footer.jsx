import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' }, // <-- added
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Title and Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold mb-4"
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

        {/* Navigation Links (with Experience) */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleScroll(e, l.href)}
                  className="text-lg hover:text-gray-400 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Murtaza-Shahani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/murtaza_shahani1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61563129508235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-400 transition"
          >
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
