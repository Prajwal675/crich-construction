import React, { useState } from "react";
import OptimizedImage from "./OptimizedImage";
import modernBrightHouse from "../assets/modern-bright-house.jpg";
import ContactFormCard from "./ContactFormCard";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    urgency: "Immediately",
    message: "",
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.acceptPolicy)
      newErrors.acceptPolicy = "Accept the privacy policy";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted from Hero!");
    }, 1200);
  };

  return (
    <section className="relative min-h-screen md:min-h-[85vh] lg:h-screen pt-24 lg:pt-0 flex items-start lg:items-center overflow-hidden">
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
                  <span className="text-orange-500 text-sm">➤</span>
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

          {/* FORM – MOBILE LIGHT / TABLET BALANCED / DESKTOP FULL */}
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
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleSubmit={handleSubmit}
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
