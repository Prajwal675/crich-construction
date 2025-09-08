import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/crich-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // If it's a hash link and we're on the home page
    if (href.startsWith('#') && location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If it's a hash link but we're not on home page, navigate to home first then scroll
    else if (href.startsWith('#')) {
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto container-padding">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button onClick={handleLogoClick} className="h-12 md:h-16 w-auto">
              <img 
                src={logoImage}
                alt="CRICH BUILDERS" 
                className={`h-full w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => handleNavClick('#services')}
              className={`font-medium transition-colors text-sm lg:text-base ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('#about')}
              className={`font-medium transition-colors text-sm lg:text-base ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}
            >
              About
            </button>
            <Link
              to="/projects"
              className={`font-medium transition-colors text-sm lg:text-base ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}
            >
              Projects
            </Link>
            <Link 
              to="/boq" 
              className={`font-medium transition-colors text-sm lg:text-base ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}
            >
              BOQ
            </Link>
            <button 
              onClick={() => handleNavClick('#testimonials')}
              className={`font-medium transition-colors text-sm lg:text-base ${isScrolled ? 'text-buildacre-darkgray hover:text-buildacre-blue' : 'text-white hover:text-buildacre-orange'}`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm lg:text-base"
            >
              Contact Us
            </button>
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
              <button 
                onClick={() => handleNavClick('#services')}
                className="font-medium py-2 hover:text-buildacre-blue transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('#about')}
                className="font-medium py-2 hover:text-buildacre-blue transition-colors text-left"
              >
                About
              </button>
              <Link
                to="/projects"
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/boq" 
                className="font-medium py-2 hover:text-buildacre-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BOQ
              </Link>
              <button 
                onClick={() => handleNavClick('#testimonials')}
                className="font-medium py-2 hover:text-buildacre-blue transition-colors text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
