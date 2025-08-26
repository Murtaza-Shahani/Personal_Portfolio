import {
  FiCalendar,
  FiMapPin,
  FiExternalLink,
  FiBriefcase,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

export default function EducationExperience() {
  // ------- DATA (edit here) -------
  const education = {
    degree: "Bachelor of Science in Computer Science",
    school: "Sukkur IBA University",
    schoolUrl: "https://www.iba-suk.edu.pk/",
    location: "Sukkur, Pakistan",
    date: "2021 – 2025",
    bullets: [
      "Focus: Full-Stack Development, Data Science & AI",
      "Projects in React/Node, databases, and ML fundamentals",
    ],
  };

  const certificates = [
    { label: "Introduction to Web Development (IBM)" },
    { label: "Introduction to Relational Database & SQL (Coursera)" },
    { label: "Introduction to NoSQL Databases (IBM)" },
    { label: "AI For Everyone (DeepLearning.AI)" },
    { label: "Python for Data Science, AI & Development (IBM)" },
  ];

  const experience = [
    {
      role: "React.js Developer Intern",
      company: "WebPerts",
      companyUrl: "https://webperts.com/",
      location: "Dubai, UAE",
      date: "Present",
      bullets: [
        "Built reusable React components with clean state management.",
        "Integrated REST APIs to deliver dynamic, user-friendly web views.",
      ],
      stack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "State Mgmt",
        "Git & Github",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Web3gle",
      companyUrl: "https://www.linkedin.com/company/web3gle/posts/?feedView=all",
      location: "Lahore, Pakistan",
      date: "06/2024 – 08/2024",
      bullets: [
        "Developed websites using HTML5, CSS3, JavaScript, Bootstrap, React, Node.js, Express, and MongoDB.",
        "Hands-on experience across both front-end and back-end development.",
      ],
      stack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Git & Github",
      ],
    },
  ];
  // --------------------------------

  return (
    <section
      id="experience"
      className="bg-gray-900 text-white px-6 md:px-20 py-16"
    >
      <div className="flex justify-center items-center mb-10">
        <div className="border-t border-purple-600 flex-grow" />
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500">
          Education & Professional Experience
        </h2>
        <div className="border-t border-purple-600 flex-grow" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT: Education + Certificates */}
        <div className="space-y-8">
          <Card>
            <Header
              icon={<FiBookOpen />}
              title="Education"
              sub={education.date}
            />
            <div className="mt-3">
              <a
                href={education.schoolUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-purple-300"
              >
                {education.degree}
                {education.schoolUrl && (
                  <FiExternalLink className="opacity-70" />
                )}
              </a>
              <div className="mt-1 text-gray-300">{education.school}</div>
              <MetaRow
                left={{ icon: <FiMapPin />, text: education.location }}
                right={{ icon: <FiCalendar />, text: education.date }}
              />
              <ul className="mt-4 space-y-2 text-gray-300">
                {education.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card>
            <Header icon={<FiAward />} title="Certificates" />
            <ul className="mt-3 space-y-2 text-gray-300">
              {certificates.map((c, i) => (
                <li key={i} className="leading-relaxed">
                  • {c.label}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* RIGHT: Experience timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[2px] bg-white/10 rounded" />

          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-10">
                {/* node */}
                <span className="absolute left-0 md:left-1 top-3 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {job.role}
                      </div>
                      <a
                        href={job.companyUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-300"
                      >
                        <FiBriefcase className="opacity-70" />
                        {job.company}
                        {job.companyUrl && (
                          <FiExternalLink className="opacity-70" />
                        )}
                      </a>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300 flex items-center gap-2 justify-end">
                        <FiCalendar className="opacity-70" />
                        {job.date}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center gap-2 justify-end">
                        <FiMapPin className="opacity-70" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2 text-gray-300">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        • {b}
                      </li>
                    ))}
                  </ul>

                  {job.stack && job.stack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- Small UI helpers --------- */
function Card({ children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gray-800/60 p-4 md:p-5 shadow-sm">
      {children}
    </div>
  );
}

function Header({ icon, title, sub }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-purple-400">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {sub && <span className="text-sm text-gray-400">{sub}</span>}
    </div>
  );
}

function MetaRow({ left, right }) {
  return (
    <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
      <span className="inline-flex items-center gap-2">
        {left?.icon}
        {left?.text}
      </span>
      <span className="inline-flex items-center gap-2">
        {right?.icon}
        {right?.text}
      </span>
    </div>
  );
}
