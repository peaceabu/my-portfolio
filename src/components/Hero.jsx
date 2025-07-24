import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
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
        pt-16 sm:pt-20 w-full min-h-screen
        flex flex-col-reverse md:flex-row
        justify-center items-center
        text-white px-4 sm:px-6 py-8 sm:py-12
        text-center md:text-left
        relative overflow-hidden
      "
      style={{
        background:
          'radial-gradient(circle,rgba(1, 28, 74, 1) 12%, rgba(4, 37, 94, 1) 36%, rgba(0, 18, 74, 1) 76%)',
      }}
    >
      <Helmet>
        <title>Peace Abu | Web Developer</title>
        <meta name="description" content="I'm Peace Abu, a freelance web developer based in Tenkasi. I create fast, accessible, and modern web apps using React for local and remote clients." />
        <meta name="author" content="Peace Abu" />
        <meta name="keywords" content="Peace Abu, PeaceAbu, freelance web developer, React developer, frontend developer, web developer in Tenkasi, accessible web apps, remote React developer" />
        <meta property="og:title" content="Portfolio | Peace Abu – Web Developer in Tenkasi" />
        <meta property="og:description" content="Meet Peace Abu – Web designer and Web Developer in Tenkasi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://peaceabu.site/myself_favicon.png" />
        <meta property="og:url" content="https://peaceabu.site" />
        <link rel="canonical" href="https://peaceabu.site.com" />
      </Helmet>

      {init && <Particles id="tsparticles" options={particlesConfig} />}

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 max-w-md lg:max-w-lg z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-500">
            Peace Abu
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-medium text-pink-400"
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
          />{' '}
          Developer
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl font-sans"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <br />
          Freelance Web designer & Web developer based in <strong>Tenkasi</strong>.<br />
          I build fast, accessible, and beautiful web apps with React, working on local and remote projects.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-black text-indigo-100 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 hover:text-indigo-700 transition text-base sm:text-lg"
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
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center max-w-xs sm:max-w-md md:max-w-full z-10"
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
            className="w-55 sm:w-70 md:w-80 lg:w-96 max-w-full h-auto object-cover shadow-lg"
            style={{
              borderRadius: '30% 50% 70% 30% / 60% 30% 70% 40%',
            }}
          />
        </Tilt>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-xl sm:text-3xl z-10"
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
