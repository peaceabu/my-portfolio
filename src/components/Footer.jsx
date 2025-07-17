import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        bg-gradient-to-br
        from-[#004e92] to-[#000428]
        text-white
        px-6 pt-8 pb-8
        border-t border-white/20
      "
    >
      {/* Main Footer Content */}
   

      {/* Divider */}
      <div className="border-t border-white/20 mt-8 pt-4 text-sm text-white/60 text-center">
        &copy; {new Date().getFullYear()} PeaceAbu. All rights reserved.
      </div>
    </motion.footer>
  );
}
