import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Use loadSlim instead of loadFull
import { useCallback, useEffect, useState } from 'react';

export default function Hero() {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Use loadSlim for better performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section
  className="
    pt-20 w-full min-h-screen
    flex flex-col-reverse md:flex-row
    justify-center items-center
    text-white px-6 py-12
    text-center md:text-left
    relative overflow-hidden
  "
  style={{
  background: 'linear-gradient(to right, rgba(0, 78, 146, 0.8), rgba(0, 4, 40, 0.8))'
}}

>

      {/* 🔵 Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="absolute top-0 left-0 w-full h-full -z-10"
          options={{
            background: {
              color: 'transparent'
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: { value: '#ffffff' },
              links: {
                color: '#fffffff',
                distance: 150,
                enable: true,
                opacity: 0.6,
                width: 1.5
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                outModes: {
                  default: 'bounce'
                }
              },
              number: {
                value: 70,
                density: {
                  enable: true,
                  area: 800
                }
              },
              opacity: {
                value: 0.7
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 3 }
              }
            },
            detectRetina: true
          }}
        />
      )}

      {/* Left content */}
      <div className="md:w-1/2 space-y-6 max-w-lg z-10">
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
          animate-bounce text-white text-3xl sm:text-4xl z-10
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