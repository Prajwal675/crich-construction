
import React from 'react';
import { Check } from 'lucide-react';

const usps = [
  {
    title: "Quality Craftsmanship",
    description: "Superior materials and attention to detail in every project."
  },
  {
    title: "On-Time Delivery",
    description: "We honor our commitments and respect your timelines."
  },
  {
    title: "Transparent Pricing",
    description: "Clear, detailed quotes with no hidden costs or surprises."
  },
  {
    title: "Experienced Team",
    description: "Our experts bring 20+ years of industry knowledge to your project."
  },
  {
    title: "Sustainable Practices",
    description: "Eco-friendly construction methods and materials wherever possible."
  },
  {
    title: "Customer Satisfaction",
    description: "Your happiness is our priority, with 98% client satisfaction."
  }
];

const UspsSection = () => {
  return (
    <section id="about" className="section-padding bg-buildacre-bg">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Sets Us Apart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At BuildAcre, we deliver more than just construction – we deliver excellence through these core values.
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
      </div>
    </section>
  );
};

export default UspsSection;
