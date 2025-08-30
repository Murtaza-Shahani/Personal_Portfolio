'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fullStackProjects = [
  {
    title: 'Synthetic Voice Detection',
    desc: 'Deep learning project to detect AI-generated voices using CNN/LSTM models, and classify voice as Real, Fake or Partially fake and , user interfce used with Mern Stack.',
    code: 'https://github.com/Murtaza-Shahani/Fyp_Synthetic_voice_detection',
    live: '#',
    img: '/Voice.png',
  },

  {
    title: 'AI Job_Ready_Tutor',
    desc: 'Built A full-stack AI Job_Ready_Tutor website using Gemini API where user can learn any topic based on its level ,give quiz , find jobs and get cover letter written.',
    code: 'https://github.com/Murtaza-Shahani/Job_Ready_AiTutor',
    live: '#',
    img: '/JobR.png',
  },
  {
    title: 'Job Board Platform',
    desc: 'A full-stack job board platform with user authentication and job listings management.',
    code: 'https://github.com/Murtaza-Shahani/IBA_Job_plateform',
    live: '#',
    img: '/Job1.png',
  },
  {
    title: 'Airbnb-like Website',
    desc: 'Airbnb-style user-authenticated platform with review and listing management.',
    code: 'https://github.com/Murtaza-Shahani/Mern',
    live: '#',
    img: '/WanderLust.png',
  },
  {
    title: 'Personal Finance Tracker',
    desc: 'Track and visualize expenses with charts, using local input with graphs.',
    code: 'https://github.com/Murtaza-Shahani/P_Finance_Tracker_Web3_Prj3',
    live: '#',
    img: '/FinanceT.png',
  },
  {
    title: 'Book Management System',
    desc: ' built with MERN to Add and manage Books and users, with Authentication and Authorization.',
    code: 'https://github.com/Murtaza-Shahani/Book-Management',
    live: '#',
    img: '/Book.png',
  },

  {
    title: 'Event Management Website',
    desc: ' built an Event management website using HTML, CSS and Bootstrap to show case a landing page of event management website',
    code: 'https://github.com/Murtaza-Shahani/Web3_task1',
    live: '#',
    img: '/Event.png',
  },

  {
    title: 'Tour Website Landing page',
    desc: ' built an Tour Website using HTML, CSS and Bootstrap to show case a landing page of tour website and services it includes',
    code: 'https://github.com/Murtaza-Shahani/Travel_Website',
    live: '#',
    img: '/Travel.png',
  },
  
  

  
  
  {
    title: 'Personal Portfolio',
    desc: 'Personal portfolio built with React and Material UI to showcase work and contact.',
    code: 'https://github.com/Murtaza-Shahani/Personal_Portfolio',
    live: '#',
    img: '/Personal1.png',
  },
];

const mlProjects = [
  {
    title: 'Synthetic Voice Detection',
    desc: 'Deep learning project to detect AI-generated voices using CNN/LSTM models.',
    code: '#',
    live: '#',
    img: '/Voice.png',
  },
  {
    title: 'Intrusion Detection System',
    desc: 'AI-based intrusion detection for network security using classification models.',
    code: '#',
    live: '#',
    img: '/images/intrusion-detection.png',
  },
  {
    title: 'Movie Recommendation System',
    desc: 'Collaborative filtering + NLP to suggest movies based on user ratings and plot.',
    code: '#',
    live: '#',
    img: '/images/movie-rec.png',
  },
  {
    title: 'House Price Prediction',
    desc: 'Regression-based ML model to estimate house prices using real-world datasets.',
    code: '#',
    live: '#',
    img: '/images/house-price.png',
  },
];

export default function ProjectsSection() {
  const [category, setCategory] = useState('fullstack');
  const projects = category === 'fullstack' ? fullStackProjects : mlProjects;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 md:px-20 py-16 text-white">
      
<div className="flex justify-center items-center mb-12">
        <div className="border-t border-purple-600 flex-grow"></div>
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500 my-12">Recent Projects</h2>
        <div className="border-t border-purple-600 flex-grow"></div>
      </div>
      {/* Category Buttons */}
      <div className="text-center mb-10">
        <button
          onClick={() => setCategory('fullstack')}
          className={`px-6 py-2 m-2 rounded-full text-sm font-medium transition duration-300 border ${
            category === 'fullstack' ? 'bg-purple-600 text-white' : 'border-purple-600 text-purple-400'
          }`}
        >
          Web Projects
        </button>
        <button
          onClick={() => setCategory('ml')}
          className={`px-6 py-2 m-2 rounded-full text-sm font-medium transition duration-300 border ${
            category === 'ml' ? 'bg-purple-600 text-white' : 'border-purple-600 text-purple-400'
          }`}
        >
          ML / DL Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-md border border-purple-600 transform hover:scale-105 hover:shadow-2xl hover:border-pink-500 transition-all"
          >
            {/* Project Image */}
           {/* Project Image */}
<div className="w-full bg-gray-800/40">
  <div className="aspect-[16/9] overflow-hidden rounded-t-xl flex items-center justify-center">
    <img
      src={project.img}
      alt={project.title}
      className="h-full w-full object-contain"  // show whole image
      loading="lazy"
    />
  </div>
</div>


            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 min-h-[60px]">{project.desc}</p>
              <div className="flex gap-4">
                {/* <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold hover:bg-purple-700 transition"
                >
                  Live Preview
                </a> */}
                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm font-semibold hover:bg-purple-900 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
