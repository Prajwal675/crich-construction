
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "John Anderson",
    position: "Managing Director",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Williams",
    position: "Director",
    image: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    position: "Technical Head",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Thompson",
    position: "General Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    position: "IT Team Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    position: "Procurement Head",
    image: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=400&h=400&fit=crop&crop=face",
  }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="mb-20">
              <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold leading-tight mb-2 text-buildacre-darkgray">
                our
                <br />
                <span className="italic">Team.</span>
              </h1>
              <div className="max-w-2xl mt-8">
                <h2 className="text-xl font-medium mb-4 text-buildacre-darkgray">
                  "Building Excellence Through
                  <br />
                  Collaborative Leadership"
                </h2>
                <p className="text-muted-foreground">
                  Our team of dedicated professionals brings together diverse expertise 
                  and experience to deliver exceptional construction services that 
                  consistently exceed expectations.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-semibold mb-12 text-buildacre-darkgray">
                Leadership Team
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.name}
                    className="group"
                  >
                    <div className="aspect-square overflow-hidden mb-4 rounded-lg shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-buildacre-darkgray">{member.name}</h3>
                    <p className="text-sm text-buildacre-blue font-medium">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
