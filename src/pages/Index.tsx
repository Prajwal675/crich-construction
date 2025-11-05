
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import UspsSection from '../components/UspsSection';
import HowItWorks from '../components/HowItWorks';
import ProjectsSection from '../components/ProjectsSection';
import SocialFeed from '../components/SocialFeed';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import MaterialSponsors from '../components/MaterialSponsors';
import WhatsAppChat from '../components/WhatsAppChat';

const Index = () => {
  useEffect(() => {
    // Preload critical images for faster loading
    const preloadImages = [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      '/lovable-uploads/a3ea3364-9d5b-47e5-92e1-5312fb2f5ea8.png',
      '/lovable-uploads/4843a59d-d71e-43a8-88b0-8d15f5d11ab1.png',
      '/lovable-uploads/project-i1.jpg',
      '/lovable-uploads/project-i2.jpg'
    ];
    
    const preloadPromises = preloadImages.map(src => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't fail the whole process
        img.src = src;
        
        // Also add as resource hint
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    });

    // Implement progressive loading
    Promise.allSettled(preloadPromises).then(() => {
      // Remove preload links after images are loaded to clean up DOM
      setTimeout(() => {
        preloadImages.forEach(src => {
          const links = document.querySelectorAll(`link[href="${src}"]`);
          links.forEach(link => link.remove());
        });
      }, 2000);
    });

    // Scroll to top for better UX
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <UspsSection />
        <HowItWorks />
        <ProjectsSection />
        <SocialFeed />
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
