import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Projects',
      sub: [
        { name: 'Full Stack', href: '/projects/fullstack' },
        { name: 'AI/ML/DL', href: '/projects/ai' },
      ],
    },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          GM.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((item, index) =>
            item.sub ? (
              <div key={index} className="group relative">
                <button className="hover:text-purple-500 transition">Projects ▾</button>
                <div className="absolute top-6 hidden group-hover:block bg-gray-100 dark:bg-gray-800 p-2 rounded shadow">
                  {item.sub.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.href}
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.href}
                className="hover:text-purple-500 transition"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 items-center">
          {isDark ? (
            <Sun
              className="cursor-pointer hover:text-purple-500"
              onClick={() => setIsDark(false)}
            />
          ) : (
            <Moon
              className="cursor-pointer hover:text-purple-500"
              onClick={() => setIsDark(true)}
            />
          )}
          <a
            href="https://github.com/Murtaza-Shahani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-purple-500 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-purple-500 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/murtaza_shahani1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-purple-500 cursor-pointer" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-black dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden bg-white dark:bg-black px-4 py-4 space-y-4 text-center"
        >
          {navLinks.map((item, index) =>
            item.sub ? (
              <div key={index}>
                <p className="font-semibold">Projects</p>
                <div className="space-y-1">
                  {item.sub.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.href}
                      className="block hover:text-purple-500"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.href}
                className="block hover:text-purple-500"
              >
                {item.name}
              </Link>
            )
          )}

          <div className="flex justify-center gap-4 pt-2">
            {isDark ? (
              <Sun
                className="cursor-pointer hover:text-purple-500"
                onClick={() => setIsDark(false)}
              />
            ) : (
              <Moon
                className="cursor-pointer hover:text-purple-500"
                onClick={() => setIsDark(true)}
              />
            )}
            <a
              href="https://github.com/Murtaza-Shahani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="hover:text-purple-500 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-purple-500 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/murtaza_shahani1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-purple-500 cursor-pointer" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
