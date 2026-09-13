import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import UspsSection from "../components/UspsSection";
import HowItWorks from "../components/HowItWorks";
import ProjectsSection from "../components/ProjectsSection";
import SocialFeed from "../components/SocialFeed";
import TestimonialsSection from "../components/TestimonialsSection";
import MaterialSponsors from "../components/MaterialSponsors";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsAppChat from "../components/WhatsAppChat";
import SEOHeroText from "../components/SEOHeroText";
import TrustSection from "../components/TrustSection";
import StorySection from "../components/StorySection";
import PainPoints from "../components/WorstFearsSection";
import ProcessSection from "../components/ProcessSection";
import FinalCTA from "../components/FinalCTA";

const Index = () => {
  useEffect(() => {
    // Hero background image is already eagerly loaded via OptimizedImage's
    // `priority` prop in Hero.tsx - no need to duplicate that work here.
    // Below-the-fold carousel/gallery images should stay lazy-loaded.
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <SEOHeroText />     {/* H1 for SEO */}
        <TrustSection />
        <StorySection />
        <PainPoints />
        <ProcessSection />
        <ServicesSection />
        <UspsSection />
        <HowItWorks />
        <ProjectsSection />
        <SocialFeed />
        <TestimonialsSection />
        <MaterialSponsors />
        <FinalCTA />

        {/* FULL CONTACT SECTION */}
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
