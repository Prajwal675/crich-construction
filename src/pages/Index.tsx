
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import UspsSection from '../components/UspsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import MaterialSponsors from '../components/MaterialSponsors';
import ProjectsSection from '../components/ProjectsSection';
import WhatsAppChat from '../components/WhatsAppChat';

const Index = () => {
  useEffect(() => {
    // Preload critical images
    const images = [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80'
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <UspsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <MaterialSponsors />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
