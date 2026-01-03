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

    // simulate submit (replace with Formspree later if needed)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted from Hero!");
    }, 1200);
  };

  return (
    <section className="relative h-screen flex items-center overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <OptimizedImage
          src={modernBrightHouse}
          alt="Modern bright house"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight drop-shadow-lg">
              <span className="text-yellow-400 block">
                You've Seen Enough Flats
              </span>
    
              <span className="block text-white">
                Now It's Time to Build Something Yours !!
              </span>
            </h1>
            <div className="hero-features mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="hero-feature-card">
                <span className="feature-icon">➤</span>
                
                <div className="feature-content">
                  <p className="feature-title">500+</p>
                  <p className="feature-sub">Quality Checks Per Project</p>
                </div>
              </div>


              <div className="hero-feature-card">
                <span className="feature-icon">➤</span>
                <div className="feature-content">
                  <p className="feature-title">10-Year</p>
                  <p className="feature-sub">Structural Warranty</p>
                </div>
              </div>
              
              <div className="hero-feature-card">
                <span className="feature-icon">➤</span>
                <div className="feature-content">
                  <p className="feature-title">1</p>
                  <p className="feature-sub">Dedicated Project Manager</p>
                </div>
              </div>
              
              <div className="hero-feature-card">
                <span className="feature-icon">➤</span>
                <div className="feature-content">
                  <p className="feature-title">Zero</p>
                  <p className="feature-sub">Cost Overruns</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT – RED BOX AREA (FORM) */}
          <div className="flex justify-center lg:justify-end">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
