import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiMongodb, SiGit } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from '../hooks/particlesConfig'; // or sqParticlesConfig
import useCountUp from '../hooks/useCountUp';

function AboutMe() {
  const [init, setInit] = useState(false);
  const experience = useCountUp(3, 1000);
  const projects = useCountUp(12, 1500);

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

  const techStack = [
    { icon: FaReact, title: "React", color: "hover:text-blue-400" },
    { icon: FaJs, title: "JavaScript", color: "hover:text-yellow-300" },
    { icon: FaHtml5, title: "HTML5", color: "hover:text-orange-400" },
    { icon: FaCss3Alt, title: "CSS3", color: "hover:text-blue-300" },
    { icon: SiTailwindcss, title: "Tailwind CSS", color: "hover:text-cyan-400" },
    { icon: FaPython, title: "Python", color: "hover:text-blue-400" },
    { icon: SiDjango, title: "Django", color: "hover:text-green-400" },
    { icon: FaNodeJs, title: "Node.js", color: "hover:text-green-500" },
    { icon: SiMongodb, title: "MongoDB", color: "hover:text-green-400" },
    { icon: SiGit, title: "Git", color: "hover:text-orange-500" },
  ];

  return (
    <section
      id="AboutMe"
      className="
        relative min-h-screen pt-20 px-6 py-12
        bg-gradient-to-br
        text-white
        flex flex-col justify-center items-center text-center
        overflow-hidden
      "
      style={{
        background: 'linear-gradient(to right, #004e92, #000428)'
      }}
    >
      {/* 🔵 Particles Background */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles 
            id="tsparticles-aboutme" 
            options={particlesConfig}
            particlesLoaded={particlesLoaded}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl space-y-10">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed">
            Salam 👋 I'm Abu – part-time code wizard, full-time debugger, and accidental Stack Overflow contributor. With over <span className="font-bold text-purple-200">{experience}+</span> years of experience, I've been shipping snappy, sleek, and occasionally bug-free web applications.
          </p>

          <p className="text-lg leading-relaxed">
            I specialize in turning wild ideas into working code – faster than you can say "npm install". Whether it's React, Django, or just fixing that "one last bug" (that breaks everything), I'm here for it.
          </p>

          <p className="text-lg leading-relaxed">
            I believe clean code is like clean biryani – organized, flavorful, and leaves no regrets. Hit me up if you need a dev who codes like he's making memes – expressive, slightly chaotic, but always on point.
          </p>
        </motion.div>

        {/* Experience + Projects */}
        <motion.div 
          className="flex justify-center gap-12 mt-8 flex-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="text-5xl font-extrabold text-yellow-400">{experience}+</p>
            <p className="text-lg mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-extrabold text-teal-300">{projects}+</p>
            <p className="text-lg mt-2">Projects Completed</p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Technologies I Use</h2>
          <div className="flex flex-wrap justify-center gap-6 text-4xl text-white">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
              >
                <tech.icon 
                  title={tech.title} 
                  className={`${tech.color} transition-all duration-300`} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optional: Add a call-to-action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;