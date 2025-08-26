import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },        // <-- added
    {
      name: 'Projects',
      href: '#projects',
      sub: [
        { name: 'Web Projects', href: '#projects' },
        { name: 'ML / DL Projects', href: '#projects' },
      ],
    },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const id = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          className="text-2xl font-bold"
        >
          GM.dev
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((item, index) =>
            item.sub ? (
              <div key={index} className="group relative">
                <button
                  onClick={(e) => handleScroll(e, item.href)}
                  className="hover:text-purple-500 transition"
                >
                  {item.name} ▾
                </button>
                <div className="absolute top-6 hidden group-hover:block bg-gray-100 dark:bg-gray-800 p-2 rounded shadow min-w-[180px]">
                  {item.sub.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href}
                      onClick={(e) => handleScroll(e, sub.href)}
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="hover:text-purple-500 transition"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 items-center">
          {isDark ? (
            <Sun
              className="cursor-pointer hover:text-purple-500"
              onClick={() => setIsDark(false)}
              aria-label="Switch to light mode"
            />
          ) : (
            <Moon
              className="cursor-pointer hover:text-purple-500"
              onClick={() => setIsDark(true)}
              aria-label="Switch to dark mode"
            />
          )}
          <a
            href="https://github.com/Murtaza-Shahani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="hover:text-purple-500 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="hover:text-purple-500 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/murtaza_shahani1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="hover:text-purple-500 cursor-pointer" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-black dark:text-white"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
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
                <button
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block w-full font-semibold hover:text-purple-500"
                >
                  {item.name}
                </button>
                <div className="space-y-1 mt-1">
                  {item.sub.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href}
                      onClick={(e) => handleScroll(e, sub.href)}
                      className="block hover:text-purple-500"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block hover:text-purple-500"
              >
                {item.name}
              </a>
            )
          )}

          <div className="flex justify-center gap-4 pt-2">
            {isDark ? (
              <Sun
                className="cursor-pointer hover:text-purple-500"
                onClick={() => setIsDark(false)}
                aria-label="Switch to light mode"
              />
            ) : (
              <Moon
                className="cursor-pointer hover:text-purple-500"
                onClick={() => setIsDark(true)}
                aria-label="Switch to dark mode"
              />
            )}
            <a
              href="https://github.com/Murtaza-Shahani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="hover:text-purple-500 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="hover:text-purple-500 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/murtaza_shahani1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="hover:text-purple-500 cursor-pointer" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
