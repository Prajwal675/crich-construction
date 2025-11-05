
import React from 'react';
import { Building } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-buildacre-bg pt-20 md:pt-32">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl md:text-4xl">Our Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Explore our projects, showcasing our expertise and commitment to excellence.
            </p>
        </div>

        <div className="w-full">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="flex items-center bg-muted rounded-md p-1">
              <div className="flex items-center bg-background text-foreground shadow-sm border border-primary/20 rounded-sm px-3 py-1.5 text-sm font-medium">
                <Building className="w-4 h-4 mr-2" />
                Projects
              </div>
            </div>
          </div>

          <div className="mt-8">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
