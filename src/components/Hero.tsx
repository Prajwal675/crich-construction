
import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slow down video for dramatic effect
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/562458436.sd.mp4?s=3bf07a3cb34cc9e6504aa4abe067c55e9e5e00b0&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            <span className="block">Let's</span>
            <span className="block text-buildacre-orange">Build</span>
            <span className="block">Together</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            Transforming visions into reality with expertise, precision, and dedication. CRICH CONSTRUCTIONS delivers excellence in every project.
          </p>
          <a 
            href="#contact" 
            className="btn-primary text-lg inline-block tracking-wide"
          >
            TALK TO OUR EXPERT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
