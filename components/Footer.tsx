
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_SLOGAN } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-light-slate">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white">{COMPANY_NAME}</h3>
            <p className="mt-2 text-sm">{COMPANY_SLOGAN}</p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lightest-slate">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/about" className="hover:text-aqua transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-aqua transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-aqua transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lightest-slate">Legal</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/privacy-policy" className="hover:text-aqua transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-aqua transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-light-charcoal pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
