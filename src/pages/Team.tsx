
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Koushik Gowda A G",
    position: "Managing Director",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    name: "Vandana Nagesh",
    position: "Director",
    image: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e",
  },
  {
    name: "Puneeth Gowda",
    position: "Technical Head",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Harsha T D",
    position: "General Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },
  {
    name: "Manjunath HM",
    position: "IT Team Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Manish Yadav",
    position: "Procurement Head",
    image: "https://images.unsplash.com/photo-1548449112-96a38a643324",
  }
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="mb-20">
              <h1 className="text-[120px] font-bold leading-tight mb-2">
                our
                <br />
                <span className="italic">Team.</span>
              </h1>
              <div className="max-w-2xl mt-8">
                <h2 className="text-xl font-medium mb-4">
                  "Reliable Building Construction Services
                  <br />
                  Tailored For Our Valued Clients"
                </h2>
                <p className="text-muted-foreground">
                  At CRICH BUILDERS, we believe in the power of collaboration and expertise. 
                  Our team brings together diverse skills and experience to deliver exceptional 
                  construction services that exceed expectations.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-semibold mb-12">
                Meet Our Team Behind Success of CRICH BUILDERS
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
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
