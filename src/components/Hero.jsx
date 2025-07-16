import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
  className="pt-20 
    w-full min-h-screen
    flex flex-col md:flex-row
    justify-center items-center
    text-white px-6 py-12
    text-center md:text-left
    relative
  "
  style={{
    // background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)'
    background: 'linear-gradient(to right, #004e92, #000428)'
  }}
>



      {/* Left content */}
      <div className="md:w-1/2 space-y-6 max-w-lg">
        <motion.h1
        
          className="text-xl sm:text-2xl md:text-6xl font-extrabold"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm PeaceAbu
        </motion.h1>

        <motion.p
          className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I build beautiful, fastest, and accessible web applications using React and modern technologies.
        </motion.p>

        <motion.a
          href="#projects"
          className="
            inline-block bg-black text-indigo-700 font-semibold
            px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg
            hover:bg-indigo-100 transition
            text-xs sm:text-sm md:text-base
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          View Projects
        </motion.a>

        <motion.div
          className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="https://github.com/peaceabu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a href="https://linkedin.com/in/abupps" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-300 transition" />
          </a>
        </motion.div>
      </div>

      {/* Right image */}
      <motion.div
        className="
          md:w-1/2 mt-10 md:mt-0
          flex justify-center
          max-w-xs sm:max-w-md md:max-w-full
        "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img
          src="/myself_favicon1.png" // your image path here
          alt="PeaceAbu"
          className="
            rounded-[40%] 
            w-48 sm:w-64 md:w-80
            object-cover shadow-lg
          "
          style={{ borderRadius: '40% 60% 70% 30% / 60% 30% 70% 40%' }}
        />
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="
          absolute bottom-6
          left-1/2 transform -translate-x-1/2
          animate-bounce text-white text-3xl sm:text-4xl
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#projects" aria-label="Scroll down to projects">
          <FaArrowDown />
        </a>
      </motion.div>
    </section>
  );
}
