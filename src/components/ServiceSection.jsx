'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaWordpress, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Web Development',
    description:
      'Build scalable, responsive web apps with React, Node.js, and modern databases.',
    Icon: FaLaptopCode,
  },
  {
    title: 'Data Science & AI',
    description:
      'Design ML/DL pipelines with Python, TensorFlow and practical MLOps tooling.',
    Icon: FaBrain,
  },
  {
    title: 'WordPress Development',
    description:
      'Pixel-perfect, fast, and easily editable WordPress sites tailored to your brand.',
    Icon: FaWordpress,
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform, intuitive apps for iOS & Android using React Native.',
    Icon: FaMobileAlt,
  },
];

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-20 py-16">
      {/* Title */}
      <div className="flex justify-center items-center mb-12">
        <div className="border-t border-purple-600 flex-grow" />
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500 my-12">
          What I Offer
        </h2>
        <div className="border-t border-purple-600 flex-grow" />
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        {services.map(({ title, description, Icon }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur
                       p-5 pt-12 hover:border-purple-500/40 hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)]
                       transition-all"
            aria-label={title}
          >
            {/* top gradient accent */}
            {/* <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-60" />
 */}
            {/* floating icon (no layout shift thanks to pt-12 above) */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/10 backdrop-blur flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="text-3xl text-white" />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
            <p className="mt-2 text-sm text-gray-300 text-center min-h-[72px]">
              {description}
            </p>

            <div className="mt-4 flex justify-center">
              <a
                href="mailto:murtazashahani2023@gmail.com?subject=Service%20Inquiry:%20Portfolio&body=Hi%20Ghulam%2C%20I%27m%20interested%20in%20your%20service..."
                className="inline-flex items-center rounded-full bg-purple-600 px-5 py-2 text-sm font-medium hover:bg-purple-500 transition"
              >
                Get a Quote
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
