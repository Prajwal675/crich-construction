
import React from 'react';

const services = [
  {
    title: "Residential Construction",
    description: "We create beautiful, functional homes tailored to your lifestyle and preferences. From custom builds to renovations.",
    image: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&q=80"
  },
  {
    title: "Commercial Buildings",
    description: "Office spaces, retail outlets, or industrial facilities built to the highest standards with attention to functionality and aesthetics.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  },
  {
    title: "Infrastructure Projects",
    description: "Roads, bridges, and public facilities constructed with durability and public safety as our primary focus.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
  },
  {
    title: "Renovations",
    description: "Breathe new life into existing structures through our expert renovation and remodeling services.",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb85f?auto=format&fit=crop&q=80"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Expert Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive construction services tailored to meet your specific needs and expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card hover-scale group h-full flex flex-col"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              </div>
              <h3 className="text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground flex-grow">{service.description}</p>
              <div className="mt-4">
                <a 
                  href="#contact" 
                  className="text-buildacre-blue font-medium inline-flex items-center group-hover:underline"
                >
                  Learn More
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
