import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiKeras,
  SiGooglecolab,
  SiNextdotjs,
  SiBootstrap,
  SiPython,
} from "react-icons/si";
import { FiCheckCircle, FiMapPin, FiLinkedin, FiGithub as FiGithubIcon } from "react-icons/fi";

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16">
      {/* About Me Title with Lines */}
      <div className="flex justify-center items-center mb-12">
        <div className="border-t border-purple-600 flex-grow" />
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500">
          About Me
        </h2>
        <div className="border-t border-purple-600 flex-grow" />
      </div>

      {/* About Me Description */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT: improved content */}
        <div className="flex-1 w-full">
          {/* availability + location */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
            <span className="inline-flex items-center gap-2 text-gray-300/80 text-xs">
              <FiMapPin className="opacity-70" /> Karachi, PK (UTC+5)
            </span>
          </div>

          {/* concise bullets */}
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <Bullet>
              Hello! I’m <b className="text-purple-300">Ghulam Murtaza</b> — CS grad specializing in
              <b className="text-purple-300"> Full-Stack</b>, <b className="text-purple-300"> Data Science</b> &{" "}
              <b className="text-purple-300"> AI</b>.
            </Bullet>
            <Bullet>
              I design <b>scalable</b> web apps and build <b>intelligent automations</b> that help businesses grow.
            </Bullet>
            <Bullet>
              Comfortable with <b>React / Next.js</b>, <b>Node / Express</b>, <b>MongoDB / MySQL</b>, <b>Docker</b>, and cloud.
            </Bullet>
            <Bullet>Obsessed with UX, performance, and clean code.</Bullet>
          </ul>

          {/* compact stat strip */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            <Stat value="15+" label="Projects" />
            <Stat value="5+" label="Clients" />
            <Stat value="2+" label="Years" />
          </div>

          {/* Social Media Links */}
          <div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white shadow hover:bg-purple-700 transition"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Murtaza-Shahani"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 text-white shadow hover:bg-gray-700 transition"
            >
              <FiGithubIcon /> GitHub
            </a>
            <a
              href="https://www.instagram.com/murtaza_shahani1/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-600 text-white shadow hover:bg-pink-700 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563129508235"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* RIGHT: keep as-is */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profile2.jpeg"
            alt="Portrait of Ghulam Murtaza"
            className="rounded-full w-[370px] h-[370px] object-cover border-4 border-purple-500 shadow-xl"
          />
        </div>
      </div>

      {/* Skills Title */}
      <div className="flex justify-center items-center mt-16 mb-8">
        <div className="border-t border-purple-600 flex-grow" />
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500 my-8">
          Technical Skills
        </h2>
        <div className="border-t border-purple-600 flex-grow" />
      </div>

      {/* Skills Wrapper (slimmer + centered) */}
      <div className="space-y-10 max-w-5xl mx-auto px-2">
        {/* Frontend */}
        <SkillGroup title="Frontend">
          <Skill name="HTML5" color="text-orange-500">
            <FaHtml5 />
          </Skill>
          <Skill name="CSS3" color="text-blue-500">
            <FaCss3Alt />
          </Skill>
          <Skill name="JavaScript" color="text-yellow-400">
            <FaJsSquare />
          </Skill>
          <Skill name="React" color="text-cyan-400">
            <FaReact />
          </Skill>
          <Skill name="Tailwind CSS" color="text-sky-400">
            <SiTailwindcss />
          </Skill>
          <Skill name="Next.js" color="text-white">
            <SiNextdotjs />
          </Skill>
          <Skill name="Bootstrap" color="text-purple-400">
            <SiBootstrap />
          </Skill>
        </SkillGroup>

        {/* Backend & Databases */}
        <SkillGroup title="Backend & Databases">
          <Skill name="Node.js" color="text-green-500">
            <FaNodeJs />
          </Skill>
          <Skill name="Express" color="text-gray-300">
            <SiExpress />
          </Skill>
          <Skill name="MongoDB" color="text-green-600">
            <SiMongodb />
          </Skill>
          <Skill name="MySQL" color="text-blue-500">
            <SiMysql />
          </Skill>
          <Skill name="GitHub" color="text-gray-200">
            <FaGithub />
          </Skill>
        </SkillGroup>

        {/* Cloud • DevOps • AI */}
        <SkillGroup title="Cloud • DevOps • AI">
          <Skill name="AWS" color="text-orange-400">
            <FaAws />
          </Skill>
          <Skill name="Docker" color="text-sky-400">
            <FaDocker />
          </Skill>
          <Skill name="TensorFlow" color="text-orange-500">
            <SiTensorflow />
          </Skill>
          <Skill name="Keras" color="text-red-500">
            <SiKeras />
          </Skill>
          <Skill name="Google Colab" color="text-amber-400">
            <SiGooglecolab />
          </Skill>
          <Skill name="Python" color="text-yellow-400">
            <SiPython />
          </Skill>
        </SkillGroup>
      </div>
    </section>
  );
}

/* ----------------- Helpers ----------------- */

function SkillGroup({ title, children }) {
  return (
    <section aria-label={title}>
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-200">{title}</h3>
        <div className="mx-auto mt-2 h-1 w-14 rounded bg-purple-500/80" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
        {children}
      </div>
    </section>
  );
}

function Skill({ name, color, children }) {
  return (
    <div
      className="w-fit select-none group inline-flex flex-col items-center justify-center
                 rounded-lg border border-white/10 bg-gray-800/70
                 px-3 py-2 gap-1
                 transition-[transform,box-shadow,border,background-color] duration-150
                 hover:-translate-y-0.5 hover:border-purple-500/30 hover:bg-gray-800/90 hover:shadow-md"
      aria-label={name}
      tabIndex={0}
    >
      <span
        className={`leading-none text-2xl md:text-[28px] ${color} transition-transform duration-150 group-hover:scale-110`}
      >
        {children}
      </span>
      <span className="text-[11px] md:text-xs text-gray-300">{name}</span>
    </div>
  );
}

/* bullets + stats */
function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <FiCheckCircle className="mt-1 text-purple-400" />
      <span>{children}</span>
    </li>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gray-800/60 px-4 py-3 text-center shadow-sm">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-[11px] tracking-wide text-gray-400 uppercase">{label}</div>
    </div>
  );
}
