import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <motion.footer
      className="relative z-50 text-white px-6 py-12 border-t border-white/20 overflow-hidden"
    >
      {/* 🔹 Background Image Layer */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 z-0"
        style={{ backgroundImage: "url('/images/grafitti.jpg')" }}
      /> */}

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Peace Abu</h2>
          <p className="text-sm text-white/60">
            Web developer & designer based in Tenkasi, helping local and global clients turn ideas into pixel-perfect digital experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigate</h3>
      <ul className="space-y-2 text-white/50 text-sm">
  {['/', '/about', '/projects', '/timeline', '/contact'].map((path, i) => (
    <li key={path}>
      <Link
        to={path}
        className="hover:text-white cursor-pointer transition-colors duration-200 inline-block"
      >
        {['Home', 'About', 'Projects', 'Timeline', 'Contact'][i]}
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            {[
              { icon: FaGithub, url: 'https://github.com/peaceabu', label: 'GitHub' },
              { icon: FaLinkedin, url: 'https://linkedin.com/in/abupps', label: 'LinkedIn' },
              { icon: FaFacebook, url: 'https://facebook.com/abu.mass10', label: 'Facebook' },
              { icon: FaInstagram, url: 'https://instagram.com/peaceabu_official', label: 'Instagram' }
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/70 hover:text-white transition duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 border-t border-white/20 mt-10 pt-4 text-sm text-white/50 text-center">
  &copy; {new Date().getFullYear()}{' '}
  <a
    href="https://peaceabu.site"
    className="text-white/80 hover:text-white transition-colors duration-200"
    target="_self" // Or "_blank" if you want it to open in new tab
    rel="noopener noreferrer"
  >
    PeaceAbu
  </a>
  . All rights reserved.
</div>

    </motion.footer>
  );
}
