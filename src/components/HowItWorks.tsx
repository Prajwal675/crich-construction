import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and project scope to understand your needs perfectly.",
    icon: "📋"
  },
  {
    number: "02", 
    title: "Design & Planning",
    description: "Our experts create detailed plans and designs tailored to your specifications and budget.",
    icon: "🏗️"
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Choose from premium quality materials with our guidance to ensure durability and aesthetics.",
    icon: "🧱"
  },
  {
    number: "04",
    title: "Construction",
    description: "Professional execution with regular updates and quality checks throughout the building process.",
    icon: "🔨"
  },
  {
    number: "05",
    title: "Quality Assurance",
    description: "Thorough inspection and testing to ensure everything meets our high standards.",
    icon: "✅"
  },
  {
    number: "06",
    title: "Project Handover",
    description: "Final walkthrough and documentation handover with ongoing support and warranty.",
    icon: "🏠"
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-buildacre-bg to-white">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-buildacre-darkgray mb-6">
            How We <span className="text-buildacre-orange">Build Your Dreams</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            From concept to completion, our streamlined process ensures quality, transparency, and your complete satisfaction at every step.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-buildacre-orange/20"
            >
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-buildacre-blue text-white rounded-full flex items-center justify-center font-display font-bold text-lg">
                  {step.number}
                </div>
                <div className="text-4xl">{step.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-buildacre-darkgray mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Arrow for flow indication */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-buildacre-orange opacity-60">
                  <ArrowRight size={24} />
                </div>
              )}

              {/* Check mark on hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="w-6 h-6 text-buildacre-orange" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-display font-bold text-buildacre-darkgray mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's turn your vision into reality. Contact us today for a free consultation and detailed project estimate.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Get Started Today
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;