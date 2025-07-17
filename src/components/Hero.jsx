import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'; // ✅ Import Typewriter
import particlesConfig from '../hooks/particlesConfig';

export default function Hero() {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section id='home'
      className="
        pt-20 w-full min-h-screen
        flex flex-col-reverse md:flex-row
        justify-center items-center
        text-white px-6 py-12
        text-center md:text-left
        relative overflow-hidden
      "
      style={{
        // background: 'linear-gradient(to right, rgba(0, 4, 40, 0.8),rgba(2, 90, 200, 0.9))'
        background: 'radial-gradient(circle,rgba(1, 28, 74, 1) 12%, rgba(4, 37, 94, 1) 36%, rgba(0, 18, 74, 1) 76%)'
      }}
    >
      {/* 🔵 Particles Background */}
      {init && (
        <Particles id="tsparticles" options={particlesConfig} />
      )}

      {/* Left content */}
      <div className="md:w-1/2 space-y-6 max-w-lg z-10">
        <motion.h1
          className="text-xl sm:text-2xl md:text-6xl font-extrabold"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">PeaceAbu</span>
        </motion.h1>

        {/* ✅ Subheading with typing effect */}
        <motion.h2
          className="text-lg sm:text-xl md:text-3xl font-medium text-pink-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter
            words={['Software Developer', 'Web Developer', 'Debugger']}
            loop={0} // or use Infinity for endless loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

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
            inline-block bg-black text-indigo-100 font-semibold
            px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg
            hover:bg-indigo-100 hover:text-indigo-700 transition
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
          max-w-xs sm:max-w-md md:max-w-full z-10
        "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img
          src="/myself_favicon.png"
          alt="PeaceAbu"
          className="
            rounded-[40%] 
            w-65 sm:w-64 md:w-100
            object-cover shadow-lg
          "
          style={{ borderRadius: '30% 50% 70% 30% / 60% 30% 70% 40%' }}
        />
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="
          absolute bottom-6
          left-1/2 transform -translate-x-1/2
          animate-bounce text-white text-3xl sm:text-4xl z-10
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#AboutMe" aria-label="Scroll down to projects">
          <FaArrowDown />
        </a>
      </motion.div>
    </section>
  );
}
