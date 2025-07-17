import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'AboutMe' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
    { label: 'Resume', path: '/doc/AbuRes_030225.pdf' }
  ];

  const navItemClass = "relative hover:text-pink-400 transition duration-300";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = navItems
        .filter(item => item.target)
        .map(item => {
          const section = document.getElementById(item.target);
          if (!section) return null;
          return {
            id: item.target,
            offsetTop: section.offsetTop
          };
        })
        .filter(Boolean);

      const current = offsets.findLast(sec => scrollY + 100 >= sec.offsetTop);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
          <div className="text-2xl font-bold tracking-wide">PeaceAbu</div>

          {/* Desktop Links */}
          <div className="space-x-6 hidden md:flex">
            {navItems.map((item) =>
              item.label === 'Resume' ? (
                <motion.a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-pink-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.target)}
                  className={`${navItemClass} ${activeSection === item.target ? 'text-pink-400' : ''}`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-pink-400 rounded"
                    />
                  )}
                </button>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-black/80 backdrop-blur-lg text-white z-40 flex flex-col items-center space-y-6 p-6 md:hidden"
          >
            {navItems.map((item) =>
              item.label === 'Resume' ? (
                <motion.a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-pink-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.target)}
                  className={`hover:text-pink-400 transition duration-300 ${
                    activeSection === item.target ? 'text-pink-400' : ''
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;