import React from 'react';
import house1 from '../assets/house1.jpg';
import h2 from '../assets/h2.jpg';
import interiorImg from '../assets/services/interior.jpg';
import commercialImg from '../assets/services/commercial.jpg';
import infrastructureImg from '../assets/services/infrastructure.jpg';
import renovationImg from '../assets/services/renovation.jpg';

const services = [
  {
    title: "Residential Construction",
    description: "Expert construction of homes and residential complexes with meticulous attention to detail and quality craftsmanship.",
    image: house1
  },
  {
    title: "Interior Designs",
    description: "Innovative interior design solutions that blend aesthetics with functionality to create stunning living and working spaces.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    title: "Commercial Construction",
    description: "Professional construction of commercial spaces, from office buildings to retail complexes, built to the highest industry standards.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    title: "Infrastructure Projects",
    description: "Development of robust infrastructure projects with a focus on durability, safety, and long-term value.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=800"
  },
  {
    title: "Renovations",
    description: "Expert renovation services to transform and modernize existing structures while preserving their core character.",
    image: h2
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Expert Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive construction and design services tailored to meet your specific needs and expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800";
                  }}
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
