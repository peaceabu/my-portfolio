import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiGit
} from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

function AboutMe() {
  // Custom count-up hook simulation
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

  // View tracking
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experience = useCountUp(3, 1000, isInView);
  const projects = useCountUp(12, 1500, isInView);

  const techStack = {
    frontend: [
      { icon: FaReact, title: "React", color: "hover:text-blue-400" },
      { icon: FaJs, title: "JavaScript", color: "hover:text-yellow-300" },
      // { icon: FaHtml5, title: "HTML5", color: "hover:text-orange-400" },
      // { icon: FaCss3Alt, title: "CSS3", color: "hover:text-blue-300" },
      { icon: SiTailwindcss, title: "Tailwind CSS", color: "hover:text-cyan-400" },
    ],
    backend: [
      { icon: FaPython, title: "Python", color: "hover:text-blue-400" },
      { icon: SiDjango, title: "Django", color: "hover:text-green-400" },
      { icon: FaNodeJs, title: "Node.js", color: "hover:text-green-500" },
    ],
    tools: [
      { icon: SiMongodb, title: "MongoDB", color: "hover:text-green-400" },
      { icon: SiGit, title: "Git", color: "hover:text-orange-500" },
    ]
  };

  // Floating animation variants
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="AboutMe"
      className="relative min-h-screen pt-20 px-6 py-12 text-white flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #004e92, #000428)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [10, -10, 10],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-4xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-700 to-purple-800 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Salam! 👋 I'm Abu – part-time code wizard, full-time bug hunter, and a coffee-fueled web developer. With over <span className="font-bold text-yellow-500">{experience}+</span> years of experience, I deliver snappy, sleek, and occasionally bug-free web applications. 😅
            </motion.p>

            {/* <motion.p
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I specialize in turning wild ideas into working code – faster than you can say "npm install". Whether it's React, Django, or just fixing that "one last bug" (that breaks everything), I'm here for it.
            </motion.p> */}

            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              I believe clean code is like clean biryani – organized, flavorful, and leaves no regrets. Hit me up if you need a dev who codes like he's making memes – expressive, slightly chaotic, but always on point.
            </motion.p>
          </div>

          {/* Stats Cards */}
  <motion.div
  ref={ref}
  className="flex justify-center"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <motion.div
    className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 hover:border-purple-300/50 transition-all duration-300 w-full max-w-xl"
    whileHover={{ scale: 1.03, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-0">
      {/* Experience */}
      <div className="flex-1">
        <motion.p
          className="text-4xl font-black text-yellow-400 mb-1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {experience}+
        </motion.p>
        <p className="text-lg font-medium">Years Experience</p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-16 bg-white/10 mx-4" />

      {/* Projects */}
      <div className="flex-1">
        <motion.p
          className="text-4xl font-black text-yellow-400 mb-1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {projects}+
        </motion.p>
        <p className="text-lg font-medium">Projects Completed</p>
      </div>
    </div>
  </motion.div>
</motion.div>

        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Technologies I Use
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 hover:border-purple-300/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center capitalize bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent border-b border-white/20 pb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.title}
                      className="group relative cursor-pointer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="text-5xl text-white transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        animate={{
                          y: [0, -5, 0],
                          transition: {
                            duration: 2 + index * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <tech.icon className={`${tech.color} transition-colors duration-300`} />
                      </motion.div>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        {tech.title}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-pink-700 to-purple-800 text-white px-8 py-4 rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-lg relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">My Dump</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-pink-700 to-purple-800 text-white px-8 py-4 rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-lg relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Ping Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;