import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const workData = [
  {
    company: "Design Solution Inc.,",
    role: "Digitalization Engineer",
    duration: "Nov 2024 - Present ",
    type: "Full-time",
    description:
      "Leading the UI development using React and Tailwind CSS. Built and maintained scalable design systems, optimized performance, and mentored junior devs.",
    skills: ["React", "Tailwind CSS", "TypeScript", "Design Systems"]
  },
  {
    company: "Mel Systems $ Services",
    role: "Software Developer",
    duration: "Feb 2022 - Nov 2024",
    type: "Full-time",
    description:
      "Worked across frontend and backend using React and Django. Built pixel-perfect UIs and managed RESTful APIs for client dashboards.",
    skills: ["React", "Django", "REST APIs", "PostgreSQL"]
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2023 - Present",
    type: "Part-time ",
    description:
      "Worked with global clients to develop custom web applications. Specialized in single-page apps, responsive designs, and quick delivery.",
    skills: ["JavaScript", "Vue.js", "Node.js", "MongoDB"]
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="work"
      className="relative min-h-screen py-20 px-6 text-white flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #000428, #004e92)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-700 to-purple-800 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 text-lg max-w-2xl mx-auto">
            My professional journey building digital experiences
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto" ref={ref}>
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full opacity-30 hidden md:block" />
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full opacity-30 md:hidden" />

          <div className="space-y-12">
            {workData.map((job, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8 gap-4`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-white text-lg" />
                  </div>
                </div>

                {/* Mobile Timeline Node */}
                <div className="absolute left-6 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center z-10 md:hidden">
                  <FaBriefcase className="text-white text-xs" />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  } ml-16 md:ml-0`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl hover:border-purple-300/50 transition-all duration-300 group">
                    {/* Company & Role */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 md:justify-end md:flex-row-reverse">
                        <FaBuilding className="text-purple-400 text-sm" />
                        <span className="text-purple-300 font-semibold text-sm tracking-wide">
                          {job.company}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {job.role}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-white/60 text-sm mb-1">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{job.duration}</span>
                        </div>
                        <span className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs font-medium border border-purple-400/30">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/85 leading-relaxed mb-6 text-base">
                      {job.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 text-xs font-medium rounded-full border border-cyan-400/30 hover:border-cyan-300/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-lg">
            Ready to add your project to this timeline?
          </p>
          <motion.a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-pink-700 to-purple-800 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;