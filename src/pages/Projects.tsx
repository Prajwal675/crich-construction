import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h1 className="mb-4">Our Projects</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Explore our portfolio of completed and ongoing construction projects, showcasing our expertise in residential and commercial developments.
              </p>
            </div>
          </div>
        </div>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;