
import React, { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { navLinks, COMPANY_NAME } from '../constants';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "block py-2 px-3 text-light-slate rounded hover:bg-light-charcoal md:hover:bg-transparent md:border-0 md:hover:text-aqua md:p-0 transition-colors duration-300";
  const activeLinkClasses = "text-aqua";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-aqua transition-colors duration-300">{COMPANY_NAME}</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <Link to="/contact" className="hidden sm:inline-block text-aqua bg-transparent border border-aqua hover:bg-aqua hover:text-navy focus:ring-4 focus:outline-none focus:ring-aqua/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 shadow-aqua-glow hover:shadow-none">
              Get Consultation
            </Link>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate rounded-lg md:hidden hover:bg-light-charcoal focus:outline-none focus:ring-2 focus:ring-slate"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-light-charcoal rounded-lg bg-charcoal/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <RouterNavLink
                    to={link.path}
                    className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </RouterNavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
