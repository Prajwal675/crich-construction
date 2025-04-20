
import React from 'react';
import { UserRound } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Sarah Anderson",
    position: "Chief Architect",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Leading our architectural vision with 15 years of experience."
  },
  {
    name: "Michael Chen",
    position: "Construction Manager",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Overseeing project execution and team coordination."
  },
  {
    name: "Emma Rodriguez",
    position: "Interior Design Lead",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Creating stunning spaces that inspire and delight."
  }
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding bg-buildacre-bg">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-buildacre-darkgray">
                Meet Our Team
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                The passionate professionals behind CRICH BUILDERS' success, dedicated to bringing your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-buildacre-darkgray">
                      {member.name}
                    </h3>
                    <div className="flex items-center text-buildacre-blue mb-3">
                      <UserRound size={16} className="mr-2" />
                      <span className="font-medium">{member.position}</span>
                    </div>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
