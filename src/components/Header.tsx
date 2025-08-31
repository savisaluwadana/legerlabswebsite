import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
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
                <span className="company-name inline-flex items-center text-[var(--primary-blue)] min-w-0">
                  <span className="flex items-center gap-1 truncate md:whitespace-nowrap whitespace-normal text-base md:text-xl font-semibold">
                    LEDGER<span className="ml-1">LABS</span>
                    <span className="ml-2">&amp; ANALYTICS</span>
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
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[var(--accent-red)] ${
                    location.pathname === item.path 
                      ? 'text-[var(--accent-red)] border-b-2 border-[var(--accent-red)]' 
                      : 'text-[var(--primary-blue)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-accent text-sm px-6 py-2"
            >
              Schedule Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[var(--primary-blue)] hover:text-[var(--accent-red)] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[var(--accent-red)] ${
                location.pathname === item.path 
                  ? 'text-[var(--accent-red)]' 
                  : 'text-[var(--primary-blue)]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <button 
              onClick={() => {
                navigate('/contact');
                setIsMenuOpen(false);
              }}
              className="w-full btn-accent text-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;