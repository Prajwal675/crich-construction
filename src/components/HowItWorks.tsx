
import React from "react";

const steps = [
  {
    title: "Book an Engineer",
    description: "Schedule a consultation with our expert engineers."
  },
  {
    title: "One-to-One Discussion",
    description: "Discuss your requirements personally for tailored solutions."
  },
  {
    title: "Transparent Quotation",
    description: "Get clear pricing and a detailed cost estimate."
  },
  {
    title: "Project Visits",
    description: "Experience our past/impressive work up close."
  },
  {
    title: "Client References",
    description: "Connect with our happy clients for genuine feedback."
  },
  {
    title: "Finalize & Build",
    description: "Begin your construction journey with us."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-buildacre-blue via-buildacre-orange to-buildacre-blue inline-block text-transparent bg-clip-text animate-fade-in">How it Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in">A modern, transparent journey from your first call to completion.</p>
        </div>
        {/* Timeline */}
        <div className="relative">
          {/* Timeline bar (vertical on mobile, horizontal on desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-buildacre-blue/20 via-buildacre-orange/30 to-buildacre-blue/10 pointer-events-none z-0" />
          <div className="md:hidden absolute left-6 top-16 bottom-10 w-1 bg-gradient-to-b from-buildacre-blue/20 via-buildacre-orange/30 to-buildacre-blue/10 pointer-events-none z-0" />
          <ul className="flex flex-col md:flex-row md:justify-between gap-8 relative z-10">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`flex md:block items-center relative animate-fade-in`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                {/* Step circle & connector */}
                <div className="flex flex-col items-center md:items-center md:mb-6 relative z-20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg bg-gradient-to-tr from-buildacre-orange via-buildacre-blue to-buildacre-orange text-white border-4 border-white transition-transform duration-300 hover:scale-110`}>
                    {idx + 1}
                  </div>
                  {/* Desktop connector */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-full w-1 h-14 bg-gradient-to-b from-buildacre-blue via-buildacre-orange to-buildacre-blue z-0" />
                  )}
                  {/* Mobile connector */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden w-1 h-8 bg-gradient-to-b from-buildacre-orange via-buildacre-blue to-buildacre-orange mt-2 z-0" />
                  )}
                </div>
                {/* Content */}
                <div className="ml-4 md:ml-0 md:text-center mt-0 md:mt-0 max-w-xs">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-buildacre-blue">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

