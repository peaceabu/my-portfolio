import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useEffect, useState } from 'react';
import particlesConfig from '../hooks/particlesConfig';

function Contact() {
  const [init, setInit] = useState(false);

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

  return (
    <section
      id="contact"
      className="min-h-screen pt-20 px-6 py-12 relative text-white flex items-center justify-center"
      style={{
        background: "linear-gradient(to right,  #000428, #004e92)",
      }}
    >
      {/* 🔵 Particles Background */}
      {init && (
        <Particles 
          id="tsparticles-contact" 
          options={particlesConfig}
          particlesLoaded={particlesLoaded}
        />
      )}

      <div className="max-w-3xl w-full text-center space-y-10 z-10">
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h1>

        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you have a project in mind or just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </motion.p>

        <motion.div
          className="space-y-6 text-left sm:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 text-xl">
            <FaEnvelope className="text-pink-300" />
            <a
              href="mailto:peaceabu333@gmail.com"
              className="hover:underline hover:text-pink-200 transition"
            >
              peaceabu333@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl">
            <FaLinkedin className="text-blue-300" />
            <a
              href="https://linkedin.com/in/abupps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-pink-200 transition"
            >
              linkedin.com/in/abupps
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl">
            <FaGithub className="text-gray-300" />
            <a
              href="https://github.com/peaceabu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-pink-200 transition"
            >
              github.com/peaceabu
            </a>
          </div>
        </motion.div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="mailto:peaceabu333@gmail.com"
            className="inline-block bg-black text-indigo-300 px-6 py-3 rounded-lg shadow-md hover:bg-indigo-100 hover:text-black transition text-sm sm:text-base font-semibold"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;