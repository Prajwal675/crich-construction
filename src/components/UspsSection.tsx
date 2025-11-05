import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const usps = [
  {
    title: "Well Defined BOQ",
    description: "Detailed and transparent Bill of Quantities ensuring clarity in project scope and costs."
  },
  {
    title: "Precise Quotation",
    description: "Accurate and comprehensive cost estimates with no hidden charges or surprises."
  },
  {
    title: "Quality Craftsmanship",
    description: "Exceptional workmanship delivered by skilled professionals who take pride in their craft."
  },
  {
    title: "Experienced Team",
    description: "Seasoned professionals with extensive industry knowledge and proven expertise."
  },
  {
    title: "Client-Centric Approach",
    description: "Tailored solutions driven by your unique needs and preferences, ensuring complete satisfaction."
  },
  {
    title: "Client Empowerment",
    description: "Keeping you informed and involved throughout the project, enabling confident decision-making."
  }
];

const UspsSection = () => {
  return (
    <section id="about" className="section-padding bg-buildacre-bg">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Sets Us Apart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At CRICH BUILDERS, we deliver excellence through these core values and commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {usps.map((usp, index) => (
            <div 
              key={index} 
              className="flex items-start animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="shrink-0 mr-4 mt-1 bg-buildacre-blue rounded-full p-1 text-white">
                <Check size={20} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold text-buildacre-darkgray mb-8 animate-fade-in">
            The collective strength behind our team's success
          </p>
          <Link to="/team">
            <Button
              variant="default"
              size="lg"
              className="bg-buildacre-blue hover:bg-buildacre-blue/90 text-white animate-fade-in"
            >
              Meet Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UspsSection;
