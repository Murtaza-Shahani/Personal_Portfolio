import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend submission logic goes here
    toast.success("Message sent successfully!");
    setForm({ firstName: "", lastName: "", email: "", contact: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white py-8 px-2 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
         <div className="flex justify-center items-center mb-12">
        <div className="border-t border-purple-600 flex-grow"></div>
        <h2 className="px-6 text-4xl font-bold text-center text-purple-500 my-2">Get In Touch</h2>
        <div className="border-t border-purple-600 flex-grow"></div>
      </div> <p className="text-gray-400 mt-1">We’d love to hear from you. Fill out the form and we’ll be in touch soon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-blue-400" />
                <span>murtazashahani2023@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-green-400" />
                <span>+92 3083376449</span>
              </div>
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-green-500" />
                <span>+92 3150755174</span>
              </div>
              <div className="pt-6 border-t border-gray-700">
                <h4 className="mb-4 font-semibold">Follow Us</h4>
                <div className="flex gap-4 text-2xl">
                  <a href="https://www.linkedin.com/in/ghulam-murtaza-shahani/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/Murtaza-Shahani" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://www.instagram.com/murtaza_shahani1/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://www.facebook.com/profile.php?id=61563129508235" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="p-3 rounded-md bg-gray-700 placeholder-gray-400 w-full" required />
                <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="p-3 rounded-md bg-gray-700 placeholder-gray-400 w-full" required />
              </div>
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded-md bg-gray-700 placeholder-gray-400 w-full" required />
              <input type="text" name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} className="p-3 rounded-md bg-gray-700 placeholder-gray-400 w-full" required />
              <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows="5" className="p-3 rounded-md bg-gray-700 placeholder-gray-400 w-full" required></textarea>
              <motion.button whileHover={{ scale: 1.05 }} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-md font-semibold">
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
