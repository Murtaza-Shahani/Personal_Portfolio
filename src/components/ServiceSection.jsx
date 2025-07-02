'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaWordpress, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Build scalable and responsive web applications using modern technologies like React, Node.js, and MongoDB.',
    logo: <FaLaptopCode className="text-6xl text-white" />,
  },
  {
    title: 'Data Science & AI',
    description: 'Create powerful Machine Learning and Deep Learning models using Python, TensorFlow, and PyTorch.',
    logo: <FaBrain className="text-6xl text-white" />,
  },
  {
    title: 'WordPress Development',
    description: 'Develop stunning and functional WordPress websites for your business or personal use, fully customizable.',
    logo: <FaWordpress className="text-6xl text-white" />,
  },
  {
    title: 'Mobile Application Development',
    description: 'Create responsive and intuitive mobile apps for iOS and Android using modern frameworks like React Native.',
    logo: <FaMobileAlt className="text-6xl text-white" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-20 py-16">
      <div className="flex justify-center items-center mb-12">
        <div className="border-t border-purple-600 flex-grow"></div>
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500 my-12">What I Offer</h2>
        <div className="border-t border-purple-600 flex-grow"></div>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-black/30 backdrop-blur-md border border-gray-600 rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl hover:border-purple-500 transition-all relative"
          >
            {/* Logo positioned above the border */}
            <div className="absolute top-[-35px] mb-4">
              {service.logo}
            </div>

            {/* Service Title */}
            <h3 className="text-2xl font-bold mb-2 text-gray-100 hover:text-purple-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-4 min-h-[60px]">{service.description}</p>

            {/* Button */}
            <a
              href="#"
              className="px-6 py-2 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Buy Services
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
