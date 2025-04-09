
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            {/* Logo space */}
            <div className="w-10 h-10 bg-buildacre-orange rounded-md"></div>
            <a href="#" className="text-2xl font-bold text-buildacre-darkgray">
              CRICH CONSTRUCTIONS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium hover:text-buildacre-blue transition-colors">Services</a>
            <a href="#about" className="font-medium hover:text-buildacre-blue transition-colors">About</a>
            <a href="#projects" className="font-medium hover:text-buildacre-blue transition-colors">Projects</a>
            <a href="#testimonials" className="font-medium hover:text-buildacre-blue transition-colors">Testimonials</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-buildacre-darkgray"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
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
