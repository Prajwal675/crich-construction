
import React from 'react';
import OptimizedImage from './OptimizedImage';
import modernBrightHouse from '../assets/modern-bright-house.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={modernBrightHouse}
          alt="Modern bright house with clean architecture"
          className="w-full h-full object-cover"
          priority={true}
          sizes="100vw"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Rise and shine together
              <span className="block text-buildacre-orange font-display font-semibold">with quality construction</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl font-sans font-light leading-relaxed">
              Our path at CRICH BUILDERS is intertwined with a love of building and an uncompromising dedication to our clients, resulting in a legacy of structures that serve as evidence of our proficiency
            </p>
            <a 
              href="#contact" 
              className="btn-primary text-sm sm:text-base md:text-lg inline-block tracking-wide font-sans"
            >
              TALK TO OUR EXPERT
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-gray-800 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 md:h-3 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
