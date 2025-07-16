import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600
        text-white
        px-6 pt-12 pb-8
        border-t border-white/20
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8 text-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">PeaceAbu</div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-pink-300 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/peaceabu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abupps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-white/20 pt-4 text-sm text-white/70">
          &copy; {new Date().getFullYear()} PeaceAbu. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
