

import { footer } from '../assets/assets';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-6 border-t border-indigo-300 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between relative">

        {/* 🚀 Animated Logo */}
        <motion.div
          className="flex items-center gap-2 z-10"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1], y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <img
            src={assets.logo}
            alt="logo"
            width={42}
            className="bg-white rounded-full p-1 drop-shadow-xl shadow-yellow-300"
          />
        </motion.div>

        {/* 🎯 Centered Copyright */}
        <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm sm:text-base text-white opacity-90 select-none z-0">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-yellow-300 font-semibold">@RC</span> || All rights reserved
        </p>

        {/* 🌐 Animated Social Icons */}
        <div className="flex gap-4 z-10">
          {footer.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              aria-label={`Link to ${item.url.replace(/^https?:\/\//, '')}`}
            >
              <img
                src={item.logo}
                alt={`social icon ${index}`}
                width={28}
                height={28}
                className="drop-shadow-md"
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* 🌈 Floating Blobs Background */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 bg-pink-300 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute -bottom-24 -right-20 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
    </footer>
  );
};

export default Footer;
