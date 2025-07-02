import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';  // Use this for typing animation

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 gap-12 bg-gray-900 text-white">
      {/* Left Text Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-3xl md:text-5xl font-medium mb-2">
          Hi, I’m <span className="text-purple-500">Ghulam Murtaza</span>
        </h1>

        {/* Typing Animation for roles */}
        <span className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400 mb-4 inline-block">
          <Typewriter
            words={['Full Stack Web Developer', 'AI/Machine Learning Engineer', 'Data Scientist']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        {/* Static description */}
        <p className="text-md md:text-lg text-gray-200 dark:text-gray-300 mb-6">
          I design and build scalable web applications and intelligent AI solutions
          that help businesses automate and grow.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
          >
            Hire Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <div className="relative flex-1 flex justify-center items-center">
        {/* Outer Circle */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-500 z-[-1]" />

        {/* Profile Image Circle */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
          <img
            src="/profile1.jpeg"
            alt="Murtaza"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
