
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight } from "lucide-react";

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
  const isMobile = useIsMobile();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-buildacre-blue via-buildacre-orange to-buildacre-blue inline-block text-transparent bg-clip-text animate-fade-in">How it Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in">A modern, transparent journey from your first call to completion.</p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:block relative">
          {/* Background decorative elements */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-buildacre-blue/20 via-buildacre-orange/30 to-buildacre-blue/10"></div>
          
          <div className="grid grid-cols-2 gap-12">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`${idx % 2 === 0 ? "mr-auto text-right" : "ml-auto text-left"} 
                           max-w-sm relative p-6 rounded-lg animate-fade-in bg-white shadow-md hover:shadow-lg transition-shadow duration-300
                           ${idx % 2 === 0 ? "pr-12" : "pl-12"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step connector */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg 
                                 bg-gradient-to-tr from-buildacre-orange via-buildacre-blue to-buildacre-orange text-white border-4 border-white
                                 transition-transform duration-300 hover:scale-110`}>
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 text-buildacre-blue ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                  {step.title}
                </h3>
                <p className={`text-muted-foreground ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile view */}
        <div className="md:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-buildacre-blue/20 via-buildacre-orange/30 to-buildacre-blue/10"></div>
          
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="flex items-start ml-8 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step number */}
                <div className="absolute left-4 -translate-x-1/2 mt-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-tr from-buildacre-orange via-buildacre-blue to-buildacre-orange shadow-md border-2 border-white transition-transform duration-300 hover:scale-110">
                    {idx + 1}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-buildacre-blue">{step.title}</h3>
                    <ChevronRight size={18} className="ml-2 text-buildacre-orange" />
                  </div>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
