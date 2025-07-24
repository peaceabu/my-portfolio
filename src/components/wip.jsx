import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
   <motion.footer
  className="
    relative z-50
    text-white
    px-6 py-12
    border-t border-white/20
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: ` url('/images/grafitti.jpg')`
  }}
>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">PeaceAbu</h2>
          <p className="text-sm text-white/60">
            I’m a web developer & designer based in Tenkasi, helping local and global clients turn ideas into pixel-perfect digital experiences. Coffee in one hand, code in the other.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigate</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-white cursor-pointer transition-colors duration-200 inline-block"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            {[
              { icon: FaGithub, url: 'https://github.com/peaceabu', label: 'GitHub' },
              { icon: FaLinkedin, url: 'https://linkedin.com/in/abupps', label: 'LinkedIn' },
              { icon: FaTwitter, url: 'https://twitter.com/peaceabu', label: 'Twitter' },
              { icon: FaInstagram, url: 'https://instagram.com/peaceabu_official', label: 'Instagram' }
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/70 hover:text-white transition-all text-2xl cursor-pointer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-4 text-sm text-white/60 text-center">
        &copy; {new Date().getFullYear()} PeaceAbu. All rights reserved.
      </div>
    </motion.footer>
  );
}
