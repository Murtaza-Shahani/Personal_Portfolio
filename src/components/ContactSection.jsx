import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend will be wired later
    toast.success('Message sent successfully!');
    setForm({ firstName: '', lastName: '', email: '', contact: '', message: '' });
  };

  return (
    <section className="bg-gray-900 text-white py-10 px-4">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex justify-center items-center mb-6">
          <div className="border-t border-purple-600 flex-grow" />
          <h2 className="px-4 text-3xl font-bold text-purple-500">Get In Touch</h2>
          <div className="border-t border-purple-600 flex-grow" />
        </div>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Tell me about your project — I typically reply within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-white/10 bg-gray-800/70 p-4 shadow-sm"
          >
            <div className="space-y-4 text-sm">
              <a
                href="mailto:murtazashahani2023@gmail.com"
                className="flex items-center gap-3 hover:text-purple-300"
              >
                <FaEnvelope className="text-lg text-blue-400" />
                murtazashahani2023@gmail.com
              </a>
              <a href="tel:+923083376449" className="flex items-center gap-3 hover:text-purple-300">
                <FaPhone className="text-lg text-green-400" />
                +92 308 3376449
              </a>
              <a
                href="https://wa.me/923150755174?text=Hi%20Ghulam%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-300"
              >
                <FaWhatsapp className="text-lg text-green-500" />
                WhatsApp: +92 315 0755174
              </a>

              <hr className="border-gray-700/70 my-3" />

              <div>
                <h4 className="mb-2 font-semibold text-sm">Follow</h4>
                <div className="flex gap-3 text-xl">
                  <a
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/ghulam-murtaza-shahani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    aria-label="GitHub"
                    href="https://github.com/Murtaza-Shahani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    aria-label="Instagram"
                    href="https://www.instagram.com/murtaza_shahani1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    aria-label="Facebook"
                    href="https://www.facebook.com/profile.php?id=61563129508235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-white/10 bg-gray-800/70 p-4 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <Field
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>

              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
              <Field
                label="Contact Number"
                name="contact"
                type="tel"
                value={form.contact}
                onChange={handleChange}
              />
              <TextArea
                label="Your Message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />

              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-md bg-purple-600 hover:bg-purple-500 transition p-2.5 text-sm font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-gray-300">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full h-10 px-3 rounded-md bg-gray-700/80 placeholder-gray-400 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none text-sm transition"
        placeholder={label}
        required
      />
    </label>
  );
}

function TextArea({ label, name, rows = 5, value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-gray-300">{label}</span>
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full min-h-[140px] px-3 py-2 rounded-md bg-gray-700/80 placeholder-gray-400 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none text-sm transition"
        placeholder={label}
        required
      />
    </label>
  );
}
