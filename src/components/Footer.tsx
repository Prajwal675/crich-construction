
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [cookieConsent, setCookieConsent] = useState(localStorage.getItem('cookieConsent') === 'true');

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-buildacre-darkgray text-white pt-16 pb-6">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BUILDACRE</h3>
            <p className="text-gray-300 mb-4">
              Building dreams into reality since 2010. Quality construction services for residential and commercial projects.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Residential Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commercial Buildings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Infrastructure Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Renovations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-buildacre-orange" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-buildacre-orange" />
                <span>info@buildacre.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-buildacre-orange" />
                <span>123 Construction Way, Building District, City - 400001</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BuildAcre Construction. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 p-4 z-50 animate-fade-in">
          <div className="container mx-auto container-padding flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
              <a href="#" className="text-buildacre-orange hover:underline ml-1">Learn more</a>
            </p>
            <div className="flex gap-3">
              <button 
                onClick={acceptCookies}
                className="bg-buildacre-orange text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors text-sm font-medium"
              >
                Accept
              </button>
              <button 
                onClick={acceptCookies}
                className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded hover:bg-white/10 transition-colors text-sm font-medium"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
