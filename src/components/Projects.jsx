import particlesConfig from "../hooks/sqParticlesConfig";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Helmet } from "react-helmet";


function Projects() {
  const [init, setInit] = useState(false);
  const experience = 3;
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

const projects = [
  {
    title: 'KalviZone',
    description: 'Find the perfect college based on your Cut-Off. Smart, sleek, and regional-wise search made easy!',
    link: 'https://kalvizone.site',
    img: '/images/kalvizone.webp',
    tech: ['ReactJS', 'Python']
  },
   {
    title: 'Nalan',
    description: 'Test Blood with ease in your Home - Tenkasi!',
    link: 'https://nalantsi.netlify.app ',
    img: '/images/nalan.webp',
    tech: ['ReactJS']
  },
  {
    title: 'TurfKart',
    description: 'Book your favorite turf in just a few clicks. Sporty, smooth, and super chill to use!',
    link: 'https://turfkart.netlify.app',
    img: '/images/turfkart.webp',
    tech: ['ReactJS']
  },
  {
    title: 'AkhiDawah',
    description: 'Learn Islam the modern way. Clean UI, rich content, and a strong community vibe!',
    link: 'https://akhidawah.netlify.app',
    img: '/images/akhidawah.webp',
    tech: ['ReactJS', 'Firebase']
  },
  // {
  //   title: 'TicketTimer',
  //   description: 'Track tasks like a boss with this minimal ticket timer. Stay sharp, stay on time!',
  //   link: 'https://tickettimer.netlify.app',
  //   img: '/images/tickettimer.png',
  //   tech: ['ReactJS', 'Python']
  // },
  {
    title: 'IwayShopper',
    description: 'Full-blown e-commerce site, built from scratch. Shop smart with pro-level polish!',
    link: 'https://iwayshopper.in',
    img: '/images/iwayshopper_png.webp',
    tech: ['Wordpress','Payment']
  },
];


  return (
    <section
      id="projects"
      className="relative min-h-screen pt-20 px-6 pb-28 bg-gradient-to-br text-white overflow-hidden"
      style={{
        background: "linear-gradient(to right,  #004e92, #000428)",
      }}
    >

            <Helmet>
              <title>Peace Abu | Projects</title>
              <meta
                name="description"
                content={`Learn more about Peace Abu – a passionate, coffee-fueled web developer with ${experience}+ years of experience. I specialize in React and modern frontend tech, building accessible and blazing-fast web apps with a dash of humor.`}
              />
              <meta name="author" content="Peace Abu" />
              <meta
                name="keywords"
                content="Peace Abu, PeaceAbu, about Peace Abu, React developer, web developer bio, freelance developer, frontend engineer, web artisan, JavaScript expert, funny developer, developer with personality, Peace Abu web developer, developer in Tenkasi"
              />
              <meta property="og:title" content="Projects | Peace Abu – Web Developer in Tenkasi" />
              <meta
                property="og:description"
                content="Meet Peace Abu – Web designer and Web Developer in Tenkasi"
              />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="https://peaceabu.site/myself_favicon.webp" />
              <meta property="og:url" content="https://peaceabu.site/projects" />
              <link rel="canonical" href="https://peaceabu.site/projects" />
            </Helmet>

      {/* 🔵 Particles Background - Lower z-index */}
      {init && (
        <div className="absolute inset-0 z-0">
          <Particles 
            id="tsparticles-projects" 
            options={particlesConfig}
            particlesLoaded={particlesLoaded}
          />
        </div>
      )}

      {/* Content Container with higher z-index */}
      <div className="relative z-10 text-center mb-16">
        
        <motion.h1
            className="text-4xl md:text-4xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Works
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-700 to-purple-800 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10">
          {projects.map((project, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  className="bg-white/90 hover:bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col relative group"
>
  <div className="relative">
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
  
  <div className="p-6 flex flex-col flex-1 justify-between text-gray-900">
    <div>
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-sm text-gray-700 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((techItem, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold"
          >
            {techItem}
          </span>
        ))}
      </div>
    </div>
    
    <div className="mt-5 flex justify-end">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        View Project
      </a>
    </div>
  </div>
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

      {/* Scroll to AboutMe Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-3xl sm:text-4xl z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#contact" aria-label="Scroll to About Me">
          <FaArrowDown />
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
