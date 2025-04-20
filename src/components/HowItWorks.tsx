
import React from 'react';

const steps = [
  {
    number: 1,
    title: "Book an Engineer Appointment",
    description: "Schedule a consultation with our expert engineers"
  },
  {
    number: 2,
    title: "One-to-One Discussion",
    description: "Detailed discussion about your requirements"
  },
  {
    number: 3,
    title: "Get a Quotation as per Your Requirement",
    description: "Transparent pricing and detailed cost breakdown"
  },
  {
    number: 4,
    title: "Visit Our Projects",
    description: "See our quality work firsthand"
  },
  {
    number: 5,
    title: "Talk to Our Existing and Previous Clients",
    description: "Hear from satisfied customers"
  },
  {
    number: 6,
    title: "Finalize the Deal",
    description: "Begin your construction journey"
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our house construction steps are simple and transparent: Plan – Discuss – Quote – Verify – Finalize.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connect dots between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full border-t-2 border-dashed border-buildacre-orange/30 -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-buildacre-orange text-white flex items-center justify-center text-2xl font-bold mb-4 transition-transform group-hover:scale-110">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
