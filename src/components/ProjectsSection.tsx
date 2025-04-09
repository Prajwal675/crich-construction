import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Calendar, MapPin, Building } from 'lucide-react';

// Project data
const ongoingProjects = [
  {
    id: 1,
    title: "Highrise Apartments Complex",
    location: "Downtown, City",
    completionDate: "Dec 2024",
    description: "Luxury apartment complex with 200+ units featuring modern amenities and sustainable design.",
    videoSrc: "https://player.vimeo.com/external/498677361.sd.mp4?s=dee847c59626346f9b1fe8980e86988fe58d5738&profile_id=165&oauth2_token_id=57447761",
    thumbnailSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Residential"
  },
  {
    id: 2,
    title: "Business Park Development",
    location: "Tech District, City",
    completionDate: "Aug 2025",
    description: "Modern office campus with 5 buildings, green spaces, and integrated smart technology.",
    videoSrc: "https://player.vimeo.com/external/537236166.sd.mp4?s=416bb0f01b8fbbee55675206bb386e7446de75e3&profile_id=165&oauth2_token_id=57447761",
    thumbnailSrc: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Commercial"
  },
  {
    id: 3,
    title: "Transit Hub Renovation",
    location: "Central Station, City",
    completionDate: "Mar 2025",
    description: "Major renovation of historical transit hub with modern facilities while preserving architectural heritage.",
    videoSrc: "https://player.vimeo.com/external/476768078.sd.mp4?s=c3d05c9eea0eeba2c2a9bc99dc24a0afe71fd7b4&profile_id=165&oauth2_token_id=57447761",
    thumbnailSrc: "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Infrastructure"
  }
];

const upcomingProjects = [
  {
    id: 4,
    title: "Eco-Friendly Community",
    location: "Green Valley, City",
    startDate: "Jan 2025",
    description: "Sustainable residential community with net-zero energy homes and shared green spaces.",
    videoSrc: "https://player.vimeo.com/external/330412472.sd.mp4?s=9a12acbe971f49ba4ade99237c338d11399328d9&profile_id=165&oauth2_token_id=57447761",
    thumbnailSrc: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Residential"
  },
  {
    id: 5,
    title: "Medical Center Expansion",
    location: "Health District, City",
    startDate: "Mar 2025",
    description: "Major expansion of existing medical center with new facilities and cutting-edge technology.",
    videoSrc: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47b5e33cd8c592e&profile_id=165&oauth2_token_id=57447761",
    thumbnailSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Commercial"
  },
  {
    id: 6,
    title: "Smart Bridge Construction",
    location: "River District, City",
    startDate: "Apr 2025",
    description: "State-of-the-art bridge construction with smart monitoring systems and pedestrian-friendly design.",
    videoSrc: "https://player.vimeo.com/external/434045526.sd.mp4?s=aeed2066e2be5f28ddf47bb50d554bd1b0a21fa2&profile_id=165&oauth2_token_id=57447761",
    thumbnailSrc: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    projectType: "Infrastructure"
  }
];

const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

  const handlePlayVideo = (id: number, videoSrc: string) => {
    setActiveVideo(videoSrc);
    setIsPlaying({ ...isPlaying, [id]: true });
  };

  const ProjectCard = ({ project, type }: { project: any, type: 'ongoing' | 'upcoming' }) => {
    return (
      <div className="relative overflow-hidden rounded-xl group">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          {activeVideo === project.videoSrc && isPlaying[project.id] ? (
            <video 
              src={project.videoSrc} 
              autoPlay 
              muted 
              controls 
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying({ ...isPlaying, [project.id]: false })}
            />
          ) : (
            <>
              <img 
                src={project.thumbnailSrc} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                <button 
                  onClick={() => handlePlayVideo(project.id, project.videoSrc)}
                  className="w-16 h-16 bg-buildacre-orange rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                >
                  <Play fill="white" className="w-6 h-6 text-white ml-1" />
                </button>
              </div>
            </>
          )}
        </div>
        
        <div className="bg-white p-6 shadow-md">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <span className="bg-buildacre-blue/10 text-buildacre-blue text-xs py-1 px-2 rounded-full">
              {project.projectType}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-buildacre-orange" />
              <span>{project.location}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-buildacre-orange" />
              <span>
                {type === 'ongoing' 
                  ? `Completion: ${project.completionDate}` 
                  : `Starting: ${project.startDate}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-buildacre-bg">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our ongoing and upcoming construction projects, showcasing our expertise and commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="ongoing" className="text-sm md:text-base">
                <Building className="w-4 h-4 mr-2" />
                Ongoing Projects
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="text-sm md:text-base">
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Projects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ongoing" className="outline-none">
            <Carousel className="w-full">
              <CarouselContent>
                {ongoingProjects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <ProjectCard project={project} type="ongoing" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static mx-2 translate-y-0" />
                <CarouselNext className="static mx-2 translate-y-0" />
              </div>
            </Carousel>
          </TabsContent>

          <TabsContent value="upcoming" className="outline-none">
            <Carousel className="w-full">
              <CarouselContent>
                {upcomingProjects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <ProjectCard project={project} type="upcoming" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static mx-2 translate-y-0" />
                <CarouselNext className="static mx-2 translate-y-0" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
