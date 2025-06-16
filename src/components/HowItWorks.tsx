
import React from 'react';
import { Home, ShoppingCart, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Home,
    title: "Design & Planning",
    description: "We begin with comprehensive design and planning, ensuring every detail aligns with your vision and requirements."
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Our skilled team executes the construction phase with precision, maintaining the highest quality standards throughout."
  },
  {
    icon: ShoppingCart,
    title: "Interior Material Selection",
    description: "Choose from premium materials and finishes for your interiors, with our expert guidance on quality and aesthetics."
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    description: "We deliver your completed project on time, with thorough quality checks and your complete satisfaction."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="mb-4">Build Your Dreams</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your construction journey is smooth, transparent, and delivers exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-buildacre-blue rounded-full flex items-center justify-center group-hover:bg-buildacre-orange transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-buildacre-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
