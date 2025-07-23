// components/TechStackSection.jsx
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiGit,
} from 'react-icons/si';


const techStack = {
  frontend: [
    { icon: FaReact, title: "React", color: "hover:text-blue-400" },
    { icon: FaJs, title: "JavaScript", color: "hover:text-yellow-300" },
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

const TechStackSection = () => {
  return (
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
  );
};

export default TechStackSection;
