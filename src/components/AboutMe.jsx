import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiTensorflow, SiKeras, SiGooglecolab, SiNextdotjs, SiBootstrap, SiPython } from "react-icons/si";

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16">
      {/* About Me Title with Lines */}
      <div className="flex justify-center items-center mb-12">
        <div className="border-t border-purple-600 flex-grow"></div>
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500">About Me</h2>
        <div className="border-t border-purple-600 flex-grow"></div>
      </div>

      {/* About Me Description */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 w-full">
          <p className="text-lg text-gray-300 mb-6 break-words">
            Hello! I'm <span className="text-purple-500">Ghulam Murtaza</span>, a recent Computer Science graduate with specialization in Full Stack Web Development, Data Science, and AI. I am passionate about creating scalable and efficient web applications and intelligent solutions that help businesses grow.
          </p>
          <p className="text-lg text-gray-300 mb-6 break-words">
            My goal is to build web solutions that are not only functional but also provide excellent user experiences. I have hands-on experience in a variety of modern technologies and frameworks, and I am always looking for new challenges that help me learn and grow.
          </p>

          {/* Social Media Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
              target="_blank"
              className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Murtaza-Shahani"
              target="_blank"
              className="px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/murtaza_shahani1/"
              target="_blank"
              className="px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563129508235"
              target="_blank"
              className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/profile2.jpeg" // Your profile image
            alt="Ghulam Murtaza"
            className="rounded-full w-64 h-64 object-cover border-4 border-purple-500 shadow-xl"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex justify-center items-center mb-8">
        <div className="border-t border-purple-600 flex-grow"></div>
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500 my-12">Technical Skills</h2>
        <div className="border-t border-purple-600 flex-grow"></div>
      </div>

      {/* Skills Card with Transitioning Border */}
      <div className="w-full p-1 md:p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all group">
        <div className="absolute inset-0 border-2 border-purple-500 rounded-lg transition-all group-hover:border-pink-500"></div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
          {/* HTML */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaHtml5 size={32} className="text-orange-500" />
          </div>

          {/* CSS */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaCss3Alt size={32} className="text-blue-500" />
          </div>

          {/* JavaScript */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaJsSquare size={32} className="text-yellow-500" />
          </div>

          {/* Tailwind CSS */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiTailwindcss size={32} className="text-blue-400" />
          </div>

          {/* React */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaReact size={32} className="text-cyan-400" />
          </div>

          {/* Node.js */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaNodeJs size={32} className="text-green-500" />
          </div>

          {/* MongoDB */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiMongodb size={32} className="text-green-600" />
          </div>

          {/* Express */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiExpress size={32} className="text-gray-500" />
          </div>

          {/* AWS */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaAws size={32} className="text-orange-500" />
          </div>

          {/* Docker */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaDocker size={32} className="text-blue-400" />
          </div>

          {/* GitHub */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <FaGithub size={32} className="text-gray-300" />
          </div>

          {/* TensorFlow */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiTensorflow size={32} className="text-orange-500" />
          </div>

          {/* Keras */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiKeras size={32} className="text-red-500" />
          </div>

          {/* Google Colab */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiGooglecolab size={32} className="text-yellow-600" />
          </div>

          {/* Next.js */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiNextdotjs size={32} className="text-white" />
          </div>

          {/* Bootstrap */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiBootstrap size={32} className="text-purple-500" />
          </div>

          {/* Python */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiPython size={32} className="text-yellow-500" />
          </div>

          {/* MySQL */}
          <div className="flex justify-center items-center p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors">
            <SiMysql size={32} className="text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
