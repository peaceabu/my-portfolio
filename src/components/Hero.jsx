import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt'; // ✅ Add this import
import particlesConfig from '../hooks/particlesConfig';
import { Helmet } from 'react-helmet';

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section
      id="home"
      className="
        pt-20 w-full min-h-screen
        flex flex-col-reverse md:flex-row
        justify-center items-center
        text-white px-6 py-12
        text-center md:text-left
        relative overflow-hidden
      "
      style={{
        background:
          'radial-gradient(circle,rgba(1, 28, 74, 1) 12%, rgba(4, 37, 94, 1) 36%, rgba(0, 18, 74, 1) 76%)',
      }}
    >

           {/* 🔹 Helmet for SEO */}
      <Helmet>
        <title>PeaceAbu | Web Developer</title>
        <meta
        name="description"
        content="I'm Peace Abu, a freelance web developer based in Tenkasi. I create fast, accessible, and modern web apps using React for local and remote clients."/>
        <meta name="author" content="Peace Abu" />
        
        <meta 
  name="keywords" 
  content="Peace Abu, PeaceAbu, peaceabu, freelance web developer, React developer, frontend developer, frontend engineer, web developer in Tenkasi, React developer in Tenkasi, Peace Abu portfolio, modern web apps, JavaScript developer, remote React developer, accessible web apps, fast websites, responsive design, UI developer"
/>

        <meta property="og:title" content="PeaceAbu | Developer Portfolio" />
        <meta property="og:description" content="Web developer building beautiful and fast applications using React." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://peaceabu.site/myself_favicon.png" />
        <meta property="og:url" content="https://peaceabu.site" />
        <link rel="canonical" href="https://peaceabu.site.com" />
      </Helmet>

      {/* 🔵 Particles Background */}
      {init && <Particles id="tsparticles" options={particlesConfig} />}

      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 max-w-lg z-10">
        <motion.h1
          className="text-4xl sm:text-xl md:text-6xl font-extrabold"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-500">
            PeaceAbu
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-lg md:text-4xl lg:text-4xl font-medium text-pink-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter
            words={['Software', 'Web', 'Freelance']}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          /> Developer
          <span className="text-white"></span>
        </motion.h2>

<motion.p
  className="max-w-xl mx-auto md:mx-0 text-md sm:text-base md:text-xl font-sans"
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
   <br />
  Freelance web developer in <strong>Tenkasi</strong>.<br />
  I build fast, accessible, and beautiful web apps with React, working on local and remote projects.
</motion.p>




        <motion.a
          href="#projects"
          className="
            inline-block bg-black text-indigo-100 font-semibold
            px-4 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg
            hover:bg-indigo-100 hover:text-indigo-700 transition
            text-md sm:text-sm md:text-base
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          View Projects
        </motion.a>

        <motion.div
          className="flex justify-center md:justify-start space-x-6 mt-4 text-2xl"
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

      {/* Right Image with Tilt Effect */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center max-w-xs sm:max-w-md md:max-w-full z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          tiltReverse={true}
          scale={1.05}
          transitionSpeed={1500}
          className="w-fit"
        >
          <img
            src="/myself_favicon.png"
            alt="PeaceAbu"
            className="
              rounded-[40%]
              w-65 sm:w-64 md:w-100
              object-cover shadow-lg
            "
            style={{
              borderRadius: '30% 50% 70% 30% / 60% 30% 70% 40%',
            }}
          />
        </Tilt>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="
          absolute bottom-2
          left-1/2 transform -translate-x-1/2
          animate-bounce text-white text-xl sm:text-4xl z-10
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
