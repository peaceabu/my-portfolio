import Particles from "react-tsparticles";
import particlesConfig from "../hooks/particlesConfig";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: 'TurfKart',
      description: 'Book your favorite turfs with ease using TurfKart – a modern React app with a sleek UI and smooth experience.',
      link: 'https://turfkart.netlify.app',
      img: '/images/turfkart.png', // Add this to your public folder
    },
    {
      title: 'AkhiDawah',
      description: 'Islamic learning platform with resources, community interaction, and beautiful UX built with React and Tailwind.',
      link: 'https://akhidawah.netlify.app',
      img: '/images/akhidawah.png', // Add this to your public folder
    },
    {
      title: 'TicketTimer',
      description: 'A minimalist ticket management and timer app, perfect for task tracking and support queues.',
      link: 'https://tickettimer.netlify.app',
      img: '/images/tickettimer.png', // Add this to your public folder
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen pt-20 px-6 py-12 bg-gradient-to-br text-white overflow-hidden"
      style={{
        background: "linear-gradient(to right, #004e92, #000428)",
      }}
    >
      {/* Particles background */}
      <Particles
        id="tsparticles"
        options={particlesConfig}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Your header */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
        Featured Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between text-gray-800">
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll to AboutMe Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-3xl sm:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#AboutMe" aria-label="Scroll to About Me">
          <FaArrowDown />
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
