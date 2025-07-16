import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React, Tailwind, and Framer Motion.',
      link: 'https://yourportfolio.com',
    },
    {
      title: 'Todo App',
      description: 'A task manager built with React, localStorage, and custom hooks.',
      link: 'https://yourtodoapp.com',
    },
    {
      title: 'Weather App',
      description: 'Fetches real-time weather using OpenWeatherMap API.',
      link: 'https://yourweatherapp.com',
    },
  ];

  return (
    <section
  id="projects"
  className="relative min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white"
>
   
     
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-90 hover:bg-opacity-100 hover:shadow-xl transition-all duration-300 rounded-lg p-6 border border-white text-gray-800"
          >

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
            <span className="text-blue-600 mt-3 inline-block">View Project →</span>
          </a>
        ))}

      </div>

<motion.div
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-2xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
>
  <a href="#AboutMe">
    <FaArrowDown />
  </a>
</motion.div>

    </section>
    
    
  );
}

export default Projects;
