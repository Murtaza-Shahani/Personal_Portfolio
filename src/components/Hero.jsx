import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
        <span className="text-xl md:text-2xl font-medium text-purple-400 mb-4 inline-block">
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "AI/Machine Learning Engineer",
              "Data Scientist",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={45}
            delaySpeed={1000}
          />
        </span>

        <p className="text-md md:text-lg text-gray-200 mb-6">
          I design and build scalable web applications and intelligent AI
          solutions that help businesses automate and grow.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:murtazashahani2023@gmail.com?subject=Job%20Application&body=Dear%20Ghulam%20Murtaza,"
            className="px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
          >
            Hire Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://drive.google.com/drive/u/0/folders/1H7y07y5uEiLNIta1W2JjAi506XOFhIrt"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-purple-500 text-purple-300 rounded-full hover:bg-purple-100/10 transition"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image / Orbit */}
      <div className="relative flex-1 flex justify-center items-center">
        {/* --- OUTER ORBIT RING (rotates, carries arrows around) --- */}
        <motion.div
          className="absolute w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {/* three arrows positioned on the orbit */}
          <OrbitArrow angle={0} />
          <OrbitArrow angle={120} />
          <OrbitArrow angle={240} />
        </motion.div>

        {/* subtle glow halo */}
        <div className="pointer-events-none absolute -inset-6 rounded-full bg-[conic-gradient(at_70%_30%,#8b5cf6,transparent_25%,#06b6d4,transparent_50%,#ec4899,transparent_75%)] blur-xl opacity-40" />

        {/* --- IMAGE with gradient ring + floating animation --- */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* gradient ring */}
          <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400">
            <div className="h-full w-full rounded-full bg-gray-900 p-[6px]">
              <motion.img
                src="/profile1.jpeg"
                alt="Murtaza"
                className="h-full w-full rounded-full object-cover shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Local CSS for arrow positioning */}
      <style>{`
        .orbit-center { left: 50%; top: 50%; position: absolute; transform-origin: center; }
      `}</style>
    </section>
  );
}

/** A small chevron that sits on the orbit ring. The parent ring rotates. */
function OrbitArrow({ angle = 0 }) {
  const radius = "calc(50% + 6px)"; // slightly outside image ring
  const transform = `rotate(${angle}deg) translateX(${radius}) rotate(${-angle}deg)`;
  return (
    <div className="orbit-center" style={{ transform }}>
      <svg width="18" height="18" viewBox="0 0 24 24" className="drop-shadow">
        <path d="M7 4l10 8-10 8V4z" fill="#a78bfa" />
      </svg>
    </div>
  );
}
