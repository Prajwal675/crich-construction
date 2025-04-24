
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Slightly reduced steps to fit better in the frame
const steps = [
  {
    label: "Book Consultation",
    caption: "Easy scheduling",
  },
  {
    label: "Detailed Discussion",
    caption: "In-depth project review",
  },
  {
    label: "Custom Quotation",
    caption: "Tailored pricing",
  },
  {
    label: "Project Showcase",
    caption: "Quality demonstration",
  },
  {
    label: "Client Testimonials",
    caption: "Real experiences",
  },
  {
    label: "Partnership Initiation",
    caption: "Start your journey",
  }
];

function BlobBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-16 w-full h-[280px] overflow-hidden z-0"
      style={{ filter: "blur(60px)", opacity: 0.18 }}
    >
      <div className="w-[60vw] h-[180px] mx-auto rounded-full bg-gradient-to-tr from-buildacre-blue via-blue-200 to-buildacre-orange opacity-80 scale-110 animate-fade-in" />
    </div>
  );
}

const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-x-clip">
      <BlobBg />

      <div className="relative z-10 container mx-auto container-padding">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-buildacre-blue via-buildacre-orange to-buildacre-blue inline-block text-transparent bg-clip-text animate-fade-in">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in font-medium text-sm md:text-base">
            A seamless journey from your vision to reality. We empower you every step of the way.
          </p>
        </div>

        {/* Desktop Layout - Enhanced */}
        <div className="hidden md:flex justify-center relative min-h-[340px]">
          {/* Decorative background lines */}
          <div className="absolute left-0 top-1/2 w-full h-1 flex items-center z-0">
            <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-orange-100 to-yellow-100 rounded-full opacity-70" />
          </div>
          <div className="flex w-full gap-8 justify-between items-end relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.label}
                className={`flex-1 flex flex-col items-center relative group transition-all duration-300 ${idx % 2 === 0 ? 'mt-0' : 'mt-12'}`}
                style={{ zIndex: 10 + steps.length - idx }}
              >
                {/* Animated Icon/Number */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20
                  bg-gradient-to-tr from-buildacre-blue via-buildacre-orange to-yellow-300
                  text-white font-extrabold text-2xl transition-transform duration-300 group-hover:scale-110 animate-fade-in`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {idx + 1}
                </div>
                {/* Card */}
                <div
                  className="mt-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-6 py-5 w-48 flex flex-col items-center border border-blue-50 hover:shadow-3xl hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 100 + 120}ms` }}
                >
                  <div className="text-lg font-bold text-buildacre-blue mb-1 text-center tracking-tight drop-shadow-sm">
                    {step.label}
                  </div>
                  <div className="text-sm text-gray-500 text-center font-medium">
                    {step.caption}
                  </div>
                </div>
                {/* Decorative connector dot */}
                {idx < steps.length - 1 && (
                  <div className="absolute right-0 left-0 mx-auto top-1/2 w-4 h-4 bg-gradient-to-tr from-buildacre-orange to-buildacre-blue rounded-full opacity-40 -z-10" style={{ marginTop: '110px' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-8 relative">
          <div className="absolute left-6 top-0 w-2 h-full bg-gradient-to-b from-buildacre-blue via-buildacre-orange to-yellow-300 rounded z-0" />
          <div className="flex flex-col gap-0 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.label} 
                className="flex items-center mb-6 relative animate-fade-in"
                style={{ animationDelay: `${idx * 110}ms` }}
              >
                <div className="flex flex-col items-center mr-4">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20
                    bg-gradient-to-tr from-buildacre-blue via-buildacre-orange to-yellow-300 
                    text-white font-bold text-lg transition-transform duration-300`}
                  >
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-buildacre-orange via-buildacre-blue to-yellow-300 mt-1" />
                  )}
                </div>
                <div className="bg-white rounded-xl shadow-xl px-4 py-3 flex-1">
                  <div className="text-base font-semibold text-buildacre-blue mb-1">{step.label}</div>
                  <div className="text-xs text-gray-500">{step.caption}</div>
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
