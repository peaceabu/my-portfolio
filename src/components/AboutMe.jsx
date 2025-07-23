import {
  motion,
  useInView
} 
from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import TechStackSection from './TechStackSection'; // Adjust the import path as necessary



function AboutMe() {
  const useCountUp = (target, duration, shouldStart) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;
      const increment = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target, duration, shouldStart]);

    return count;
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experience = useCountUp(3, 1000, isInView);
  const projects = useCountUp(12, 1500, isInView);

  return (
    <section
      id="AboutMe"
      className="relative min-h-screen pt-20 px-6 py-12 text-white flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #004e92, #000428)'
      }}
    >
      <Helmet>
        <title>About | PeaceAbu</title>
        <meta
          name="description"
          content={`Learn more about Peace Abu – a passionate, coffee-fueled web developer with ${experience}+ years of experience. I specialize in React and modern frontend tech, building accessible and blazing-fast web apps with a dash of humor.`}
        />
        <meta name="author" content="Peace Abu" />
        <meta
          name="keywords"
          content="Peace Abu, PeaceAbu, about Peace Abu, React developer, web developer bio, freelance developer, frontend engineer, web artisan, JavaScript expert, funny developer, developer with personality, Peace Abu web developer, developer in Tenkasi"
        />
        <meta property="og:title" content="About | Peace Abu – Web Developer in Tenkasi" />
        <meta
          property="og:description"
          content="Meet Peace Abu – bug hunter, meme-loving developer, and expert in crafting sleek, modern web applications with React."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://peaceabu.site/myself_favicon.png" />
        <meta property="og:url" content="https://peaceabu.site/about" />
        <link rel="canonical" href="https://peaceabu.site/about" />
      </Helmet>

      {/* Static Background Elements - No Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Header - Simple fade in only */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-4xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-700 to-purple-800 mx-auto rounded-full" />
        </motion.div>

        {/* Bio Section - Simple fade in */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Salam! 👋 I'm Abu – part-time code wizard, full-time bug hunter, and a coffee-fueled web developer. With over <span className="font-bold text-yellow-500">{experience}+</span> years of experience, I deliver snappy, sleek, and occasionally bug-free web applications. 😅
            </p>

            <p className="text-lg leading-relaxed">
              I believe clean code is like clean biryani – organized, flavorful, and leaves no regrets. Hit me up if you need a dev who codes like he's making memes – expressive, slightly chaotic, but always on point.
            </p>
          </div>

          {/* Stats Section - Only hover animation */}
          <div ref={ref} className="flex justify-center">
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 w-full max-w-xl transition-all duration-300 hover:border-purple-300/50"
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-0">
                <div className="flex-1">
                  <p className="text-4xl font-black text-yellow-400 mb-1">
                    {experience}+
                  </p>
                  <p className="text-lg font-medium">Years Experience</p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/10 mx-4" />
                <div className="flex-1">
                  <p className="text-4xl font-black text-yellow-400 mb-1">
                    {projects}+
                  </p>
                  <p className="text-lg font-medium">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* TechStack component */}
        <TechStackSection />
        
        {/* CTA Buttons - Only hover animations */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-pink-700 to-purple-800 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 font-bold text-lg hover:from-purple-600 hover:to-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">My Dump</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-pink-700 to-purple-800 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 font-bold text-lg hover:from-purple-600 hover:to-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">Ping Me</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;