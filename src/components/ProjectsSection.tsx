import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Project data updates
const ongoingProjects = [
  {
    id: 1,
    title: "Highrise Apartments Complex",
    location: "Downtown, City",
    completionDate: "Dec 2024",
    description: "Luxury apartment complex with 200+ units featuring modern amenities and sustainable design.",
    thumbnailSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Residential"
  },
  {
    id: 2,
    title: "Business Park Development",
    location: "Tech District, City",
    completionDate: "Aug 2025",
    description: "Modern office campus with 5 buildings, green spaces, and integrated smart technology.",
    thumbnailSrc: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Commercial"
  },
  {
    id: 3,
    title: "Transit Hub Renovation",
    location: "Central Station, City",
    completionDate: "Mar 2025",
    description: "Major renovation of historical transit hub with modern facilities while preserving architectural heritage.",
    thumbnailSrc: "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Infrastructure"
  }
];

const completedProjects = [
  {
    id: 4,
    title: "Eco-Friendly Community",
    location: "Green Valley, City",
    completionDate: "Jan 2024",
    description: "Sustainable residential community with net-zero energy homes and shared green spaces.",
    thumbnailSrc: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Residential"
  },
  {
    id: 5,
    title: "Medical Center Expansion",
    location: "Health District, City",
    completionDate: "Mar 2024",
    description: "Major expansion of existing medical center with new facilities and cutting-edge technology.",
    thumbnailSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Commercial"
  },
  {
    id: 6,
    title: "Smart Bridge Construction",
    location: "River District, City",
    completionDate: "Apr 2024",
    description: "State-of-the-art bridge construction with smart monitoring systems and pedestrian-friendly design.",
    thumbnailSrc: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Infrastructure"
  }
];

const interiorProjects = [
  {
    id: 7,
    title: "Modern Minimalist Home",
    location: "Downtown, City",
    completionDate: "Jan 2025",
    description: "Contemporary interior design with minimalist aesthetics and smart home integration.",
    thumbnailSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    projectType: "Interior"
  },
  {
    id: 8,
    title: "Luxury Villa Interior",
    location: "Suburban Area, City",
    completionDate: "Mar 2025",
    description: "High-end interior renovation with custom furniture and premium finishes.",
    thumbnailSrc: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    projectType: "Interior"
  }
];

const ProjectsSection = () => {
  const ProjectCard = ({ project, type }: { project: any, type: string }) => (
    <div className="relative overflow-hidden rounded-xl group">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
        <img 
          src={project.thumbnailSrc} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="bg-white p-3 md:p-4 shadow-md">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base md:text-lg font-bold leading-tight">{project.title}</h3>
          <span className="bg-buildacre-blue/10 text-buildacre-blue text-xs py-1 px-2 rounded-full ml-2 shrink-0">
            {project.projectType}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3 text-xs md:text-sm line-clamp-2">{project.description}</p>
        
        <div className="flex flex-col gap-1 text-xs">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-buildacre-orange shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1 text-buildacre-orange shrink-0" />
            <span>
              {type === 'ongoing'
                ? `Completion: ${project.completionDate}`
                : `Completed: ${project.completionDate}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-buildacre-bg pt-20 md:pt-32">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-2xl md:text-4xl">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Explore our ongoing and completed projects, showcasing our expertise and commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="w-full">
          <div className="flex justify-center mb-6 md:mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="ongoing" className="text-sm md:text-base">
                <Building className="w-4 h-4 mr-2" />
                Ongoing
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-sm md:text-base">
                <Calendar className="w-4 h-4 mr-2" />
                Completed
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ongoing" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} type="ongoing" />
            ))}
          </TabsContent>

          <TabsContent value="completed" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} type="completed" />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
