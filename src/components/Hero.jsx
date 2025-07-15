import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white px-6 text-center relative">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm PeaceAbu
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="max-w-xl text-lg md:text-xl mb-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I build beautiful, fast, and accessible web applications using React and modern technologies.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#projects"
        className="inline-block bg-black text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        View Projects
      </motion.a>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 mt-10 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-300 transition" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-300 transition" />
        </a>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-6 animate-bounce text-white text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="projects">
          <FaArrowDown />
        </a>
      </motion.div>

      
    </section>
    

  );
}
