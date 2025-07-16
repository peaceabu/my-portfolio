import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
<section
      id="contact"
      className="
        min-h-screen pt-20 px-6 py-12
        bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600
        text-white flex items-center justify-center
      "
    >


      <div className="max-w-3xl w-full text-center space-y-10">
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
