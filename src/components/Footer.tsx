import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ledgerlabsanalytics', label: 'Facebook', placeholder: false },
    { icon: Instagram, href: 'https://instagram.com/ledgerlabsanalytics', label: 'Instagram', placeholder: false },
    { icon: Linkedin, href: 'https://linkedin.com/company/ledgerlabsanalytics', label: 'LinkedIn', placeholder: false },
    { icon: Twitter, href: 'https://twitter.com/ledgerlabsanalytics', label: 'Twitter', placeholder: false }
  ];

  const handlePhoneClick = () => {
    // Try WhatsApp first, fallback to tel
    if (window.navigator.userAgent.includes('Mobile')) {
      window.open('https://wa.me/94767724668', '_blank');
    } else {
      window.location.href = 'tel:+94767724668';
    }
  };

  return (
    <footer className="bg-[var(--primary-blue)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold">
                LEDGERLABS <span className="text-[var(--accent-red)]">&</span> ANALYTICS
              </h3>
              <p className="text-blue-200 mt-4 leading-relaxed">
                Empowering SMEs through cutting-edge <span className="text-[var(--accent-red)] font-semibold">financial intelligence</span>, 
                transforming data into prosperity with innovative bookkeeping and analytics solutions.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--accent-red)] flex-shrink-0" />
                <button 
                  onClick={handlePhoneClick}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  Pranesh: 076 772 4668
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--accent-red)] flex-shrink-0" />
                <button 
                  onClick={() => window.open('https://wa.me/94766781838', '_blank')}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  Thomas: 0766 78 18 38
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--accent-red)] flex-shrink-0" />
                <a 
                  href="mailto:ledgerlabsanalytics@gmail.com" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  ledgerlabsanalytics@gmail.com
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={`${social.label}${social.placeholder ? ' (Coming Soon)' : ''}`}
                  className={`w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-[var(--accent-red)] transition-colors duration-300 ${
                    social.placeholder ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={social.placeholder ? (e) => e.preventDefault() : undefined}
                  title={social.placeholder ? 'Coming Soon' : social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-[var(--accent-red)] transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-xl font-bold mb-6">Stay Connected</h4>
            <p className="text-blue-200 mb-6">
              Subscribe to our newsletter for the latest insights on financial intelligence and business growth.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-600 text-white placeholder-blue-300 focus:ring-2 focus:ring-[var(--accent-red)] focus:border-transparent transition-all duration-300"
              />
              <button className="w-full bg-[var(--accent-red)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0">
              <p>&copy; {currentYear} Ledgerlabs. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-blue-200 text-sm">
              <a href="#" className="hover:text-[var(--accent-red)] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--accent-red)] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[var(--accent-red)] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;