
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    label: "Book an Engineer Appointment",
  },
  {
    label: "One-to-One Discussion",
  },
  {
    label: "Get a Quotation as per Your Requirement",
  },
  {
    label: "Visit Our Projects",
  },
  {
    label: "Talk to Our Existing and Previous Clients",
  },
  {
    label: "Finalize the Deal",
  },
];

const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-buildacre-blue via-buildacre-orange to-buildacre-blue inline-block text-transparent bg-clip-text animate-fade-in">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in font-medium">
            Our house construction steps are simple and transparent: <span className="font-bold text-buildacre-blue">Plan – Discuss – Quote – Verify – Finalize.</span>
          </p>
        </div>
        {/* Desktop & Tablet Horizontal Timeline */}
        <div className="hidden md:flex md:flex-col md:items-center w-full relative">
          <div className="w-full flex flex-row justify-between items-start relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 min-w-[110px]">
                <div className="relative flex flex-col items-center z-10">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-buildacre-blue text-3xl font-bold text-buildacre-blue transition-all duration-200"
                  >
                    {idx + 1}
                  </div>
                  {/* Connector - hide for last item */}
                  {idx < steps.length - 1 && (
                    <div
                      className="absolute right-0 top-1/2 w-full h-2"
                      style={{
                        left: "100%",
                        width: "calc(100% + 32px)",
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    >
                      <svg height="20" width="100%" className="mx-2 md:block" style={{ minWidth: 80 }}>
                        <line x1="0" y1="10" x2="100%" y2="10" stroke="#b3c6e0" strokeDasharray="7,8" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </div>
                {/* Step Text */}
                <div className="mt-5 text-center max-w-xs">
                  <div className="text-base md:text-lg font-semibold mb-2 text-buildacre-darkgray">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-5 w-full mt-3">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow border border-buildacre-blue text-buildacre-blue flex items-center justify-center text-2xl font-bold shrink-0">
                {idx + 1}
              </div>
              <span className="text-base font-semibold text-buildacre-darkgray">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
