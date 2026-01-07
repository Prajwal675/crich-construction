import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../assets/crich-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#") && location.pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    location.pathname !== "/"
      ? navigate("/")
      : window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center"
          >
            <img
              src={logoImage}
              alt="Crich Builders logo"
              className={`h-full w-auto transition-all duration-300 ${
                isScrolled
                  ? "brightness-100"
                  : "brightness-100 md:brightness-0 md:invert"
              }`}
            />
          </button>

          {/* Desktop / Tablet Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {["services", "about", "testimonials"].map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(`#${id}`)}
                className={`font-medium text-sm lg:text-base transition-colors ${
                  isScrolled
                    ? "text-buildacre-darkgray hover:text-buildacre-blue"
                    : "text-white hover:text-buildacre-orange"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <Link
              to="/projects"
              className={`font-medium text-sm lg:text-base transition-colors ${
                isScrolled
                  ? "text-buildacre-darkgray hover:text-buildacre-blue"
                  : "text-white hover:text-buildacre-orange"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/boq"
              className={`font-medium text-sm lg:text-base transition-colors ${
                isScrolled
                  ? "text-buildacre-darkgray hover:text-buildacre-blue"
                  : "text-white hover:text-buildacre-orange"
              }`}
            >
              BOQ
            </Link>

            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary text-sm lg:text-base"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? "text-buildacre-darkgray" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[64px] left-0 w-full bg-white shadow-lg z-40 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {["services", "about", "testimonials", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(`#${id}`)}
                  className="text-left font-medium py-3 text-base hover:text-buildacre-blue"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <Link
                to="/projects"
                className="font-medium py-2 hover:text-buildacre-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/boq"
                className="font-medium py-2 hover:text-buildacre-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                BOQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar
