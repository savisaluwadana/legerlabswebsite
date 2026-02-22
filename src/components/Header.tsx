import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="brand">
              <div className="flex items-center">
                <img
                  src="/assets/logo.jpg"
                  alt="Ledgerlabs logo"
                  className="h-10 w-10 mr-3"
                />
                <span className={`company-name inline-flex items-center min-w-0 transition-colors duration-500 ${isScrolled ? 'text-[var(--primary-blue)]' : 'text-white'}`}>
                  <span className="flex items-center gap-1 truncate md:whitespace-nowrap whitespace-normal text-base md:text-xl font-bold tracking-tight">
                    LEDGER<span className="text-[var(--accent-red)]">LABS</span>
                  </span>
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-red)] ${location.pathname === item.path
                    ? 'text-[var(--accent-red)]'
                    : isScrolled ? 'text-[var(--primary-blue)]' : 'text-slate-200'
                    }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-red)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[var(--accent-red)] text-white hover:bg-red-600 transition-colors duration-300 font-semibold rounded-lg shadow-[0_0_15px_rgba(255,49,49,0.3)] hover:shadow-[0_0_25px_rgba(255,49,49,0.5)] text-sm px-6 py-2"
            >
              Schedule Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-300 ${isScrolled ? 'text-[var(--primary-blue)]' : 'text-white'} hover:text-[var(--accent-red)]`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-gray-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[var(--accent-red)] ${location.pathname === item.path
                    ? 'text-[var(--accent-red)]'
                    : 'text-slate-800'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <button
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[var(--accent-red)] text-white hover:bg-red-600 transition-colors duration-300 font-semibold rounded-lg shadow-[0_0_15px_rgba(255,49,49,0.3)] hover:shadow-[0_0_25px_rgba(255,49,49,0.5)] text-sm px-4 py-3"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;