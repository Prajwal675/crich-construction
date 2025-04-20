import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/crich-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto container-padding">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-16 w-auto">
              <img 
                src={logoImage}
                alt="CRICH BUILDERS" 
                className={`h-full w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}>Services</a>
            <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}>About</a>
            <a href="#projects" className={`font-medium transition-colors ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}>Projects</a>
            <a href="#boq" className={`font-medium transition-colors ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}>BOQ</a>
            <a href="#testimonials" className={`font-medium transition-colors ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}>Testimonials</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </div>

          <button 
            className={`md:hidden ${isScrolled ? 'text-buildacre-darkgray' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <a 
                href="#services" 
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#boq" 
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BOQ
              </a>
              <a 
                href="#testimonials" 
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
