
import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { openSignUp, openSignIn } = useClerk();
  const { user } = useUser();
  const { credit } = useContext(AppContext);
  const navigate = useNavigate();

  const openRegister = () => {
    openSignUp({});
    setMenuOpen(false);
  };

  const openLogin = () => {
    openSignIn({});
    setMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/GenerateFromImage', label: 'Image + Prompt' },
    { path: '/GenerateFromText', label: 'Text + Style' },
    { path: '/pricing', label: 'pricing' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* 🔥 Logo Section */}
        <Link to="/" className="flex items-center gap-3 group transform hover:scale-110 transition-transform duration-300 z-10">
          <motion.img
            src={assets.logo}
            alt="Logo"
            className="h-12 w-12 object-contain border-2 border-white bg-white rounded-full p-1 shadow-lg group-hover:shadow-yellow-300 transition-all duration-300"
            whileHover={{ rotate: 15, scale: 1.1 }}
          />
          <h1 className="text-3xl font-bold tracking-wider bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
            Anime.<span className="text-white group-hover:text-yellow-300">Art</span>
          </h1>
        </Link>

        {/* 💻 Desktop Navigation (Signed In Only) */}
        <SignedIn>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 items-center text-lg font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-yellow-300'
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </SignedIn>

        {/* Right action buttons (desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <button
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
              onClick={openLogin}
            >
              Login
            </button>
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-300"
              onClick={openRegister}
            >
              Sign up
            </button>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-2 sm:gap-3">
              <div
                onClick={() => navigate("/pricing")}
                className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <img src={assets.money} alt="credit img" width={24} height={24} />
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Credits: {credit ?? 0}
                </p>
              </div>
              <p className="text-gray-600 max-sm:hidden">
                Hi, {user?.firstName || "User"}
              </p>
            </div>
            <UserButton />
          </SignedIn>
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-yellow-300 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Navigation (Signed In Only) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 py-4 flex flex-col space-y-3 bg-gradient-to-b from-pink-500 to-indigo-600 shadow-inner text-white"
          >
            <SignedIn>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-yellow-200'
                      : 'text-white hover:text-yellow-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </SignedIn>

            <SignedOut>
              <button
                onClick={openLogin}
                className="text-left text-white font-medium hover:text-yellow-300"
              >
                Login
              </button>
              <button
                onClick={openRegister}
                className="text-left text-white font-medium hover:text-yellow-300"
              >
                Sign up
              </button>
            </SignedOut>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Menubar;
