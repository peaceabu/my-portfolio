import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
    { label: 'Resume', path: '/doc/AbuRes_030225.pdf'}
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

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
    <a
      key={item.path}
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 transition duration-300"
    >
      {item.label}
    </a>
  ) : (
    <Link
      key={item.path}
      to={item.path}
      className={`relative hover:text-pink-400 transition duration-300 ${
        pathname === item.path ? 'text-pink-400' : ''
      }`}
    >
      {item.label}
      {pathname === item.path && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 -bottom-1 h-[2px] w-full bg-pink-400 rounded"
        />
      )}
    </Link>
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
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-400 transition duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-pink-400 transition duration-300 ${
                    pathname === item.path ? 'text-pink-400' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
