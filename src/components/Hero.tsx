
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern luxury house"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load');
              e.currentTarget.src = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Rise and shine together
            <span className="block text-buildacre-orange font-display font-semibold">with quality construction</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl font-sans font-light leading-relaxed">
            Our path at CRICH BUILDERS is intertwined with a love of building and an uncompromising dedication to our clients, resulting in a legacy of structures that serve as evidence of our proficiency
          </p>
          <a 
            href="#contact" 
            className="btn-primary text-base md:text-lg inline-block tracking-wide font-sans"
          >
            TALK TO OUR EXPERT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
