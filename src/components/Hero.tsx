import OptimizedImage from "./OptimizedImage";
import modernBrightHouse from "../assets/modern-bright-house.jpg";
import ContactFormCard from "./ContactFormCard";
import { useLeadForm } from "../hooks/useLeadForm";

const Hero = () => {
  const leadForm = useLeadForm("Hero form");

  return (
    <section className="relative flex min-h-screen items-start overflow-hidden pb-12 pt-24 sm:pt-28 md:pb-16 md:pt-28 lg:pt-32">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <OptimizedImage
          src={modernBrightHouse}
          alt="Modern bright house construction by Crich Builders"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-display font-bold leading-tight drop-shadow-lg">
              <span className="text-yellow-400 block">
                You've Seen Enough Flats
              </span>
              <span className="block text-white">
                Now It's Time to Build Something Yours!!
              </span>
            </h1>

            {/* TRUST CARDS */}
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4 max-w-xl">
              {[
                ["500+", "Quality Checks Per Project"],
                ["10-Year", "Structural Warranty"],
                ["1", "Dedicated Project Manager"],
                ["Zero", "Cost Overruns"],
              ].map(([title, sub]) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-xl bg-white/95 p-2 sm:p-3 md:p-4 shadow-sm"
                >
                  <span className="text-orange-500 text-sm">&gt;</span>
                  <div>
                    <p className="text-sm md:text-base lg:text-lg font-bold text-gray-900">
                      {title}
                    </p>
                    <p className="text-[11px] md:text-xs lg:text-sm text-gray-600 leading-tight">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM - MOBILE LIGHT / TABLET BALANCED / DESKTOP FULL */}
          <div className="mt-4 md:mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div
              className="
                w-full max-w-md
                scale-[0.82] sm:scale-[0.88] md:scale-[0.95] lg:scale-100
                -mt-6 sm:-mt-4 md:mt-0
                origin-top
              "
            >
              <ContactFormCard
                {...leadForm}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
