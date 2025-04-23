
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Custom steps with subtitles for increased polish
const steps = [
  {
    label: "Book Engineer Appointment",
    caption: "Schedule a meeting with ease",
  },
  {
    label: "One-to-One Discussion",
    caption: "Talk to our expert in detail",
  },
  {
    label: "Get Tailored Quotation",
    caption: "Flexible offers for your needs",
  },
  {
    label: "Visit Our Projects",
    caption: "See our work quality firsthand",
  },
  {
    label: "Talk to Clients",
    caption: "Hear directly from our customers",
  },
  {
    label: "Finalize the Deal",
    caption: "Start your trusted partnership",
  },
];

// Fun background gradient blob for polish
function BlobBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-16 w-full h-[320px] overflow-hidden z-0"
      style={{ filter: "blur(60px)", opacity: 0.18 }}
    >
      <div className="w-[70vw] h-[200px] mx-auto rounded-full bg-gradient-to-tr from-buildacre-blue via-blue-200 to-buildacre-orange opacity-80 scale-110 animate-fade-in" />
    </div>
  );
}

const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-x-clip">
      <BlobBg />

      <div className="relative z-10 container mx-auto container-padding">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-buildacre-blue via-buildacre-orange to-buildacre-blue inline-block text-transparent bg-clip-text animate-fade-in">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in font-medium">
            A seamless journey from your vision to reality. We empower you every step of the way.
          </p>
        </div>

        {/* Timeline + Cards: Desktop/Tablet */}
        <div className="hidden md:flex justify-center relative">
          {/* Horizontal colored line */}
          <div className="absolute left-0 top-1/2 w-full h-2 flex items-center z-0">
            <div className="w-full h-2 bg-gradient-to-r from-buildacre-blue via-buildacre-orange to-buildacre-blue rounded animate-fade-in" />
          </div>
          {/* Cards */}
          <div className="flex w-full gap-0 justify-between items-center relative z-10">
            {steps.map((step, idx) => (
              <div key={step.label} className="flex-1 flex flex-col items-center relative group">
                {/* Badge */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20 bg-gradient-to-tr from-buildacre-blue via-buildacre-orange to-yellow-300
                  text-white font-bold text-2xl md:text-3xl 
                  transition-transform duration-300 group-hover:scale-110 animate-fade-in`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  {idx + 1}
                </div>
                {/* Card */}
                <div className="mt-4 bg-white rounded-xl shadow-xl px-5 py-4 w-44 md:w-52 flex flex-col items-center relative animate-fade-in"
                  style={{ animationDelay: `${idx * 100 + 120}ms` }}
                >
                  <div className="text-lg font-semibold text-buildacre-blue mb-1 text-center">{step.label}</div>
                  <div className="text-sm text-gray-500 text-center">{step.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline + Cards: Mobile */}
        <div className="md:hidden flex flex-col gap-12 relative">
          {/* Vertical colored line */}
          <div className="absolute left-6 top-0 w-2 h-full bg-gradient-to-b from-buildacre-blue via-buildacre-orange to-yellow-300 rounded z-0" />
          {/* Cards */}
          <div className="flex flex-col gap-0 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.label} className="flex items-center mb-7 relative animate-fade-in"
                style={{ animationDelay: `${idx * 110}ms` }}
              >
                {/* Dot + vertical connector */}
                <div className="flex flex-col items-center mr-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20
                    bg-gradient-to-tr from-buildacre-blue via-buildacre-orange to-yellow-300 text-white font-bold text-lg transition-transform duration-300`}
                  >
                    {idx + 1}
                  </div>
                  {/* Connector below, except for last item */}
                  {idx < steps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-buildacre-orange via-buildacre-blue to-yellow-300 mt-0" />
                  )}
                </div>
                {/* Card */}
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
