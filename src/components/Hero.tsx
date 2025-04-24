import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <img
            src="https://raw.githubusercontent.com/your-username/buildacre-construct-site/main/public/modern-house.jpg"
            alt="Modern luxury house"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image failed to load');
              e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-sans">
            Rise and shine together
            <span className="block text-buildacre-orange">with quality construction</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl font-sans">
            Our path at CRICH BUILDERS is intertwined with a love of building and an uncompromising dedication to our clients, resulting in a legacy of structures that serve as evidence of our proficiency
          </p>
          <a 
            href="#contact" 
            className="btn-primary text-lg inline-block tracking-wide font-sans"
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
