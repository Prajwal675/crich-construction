
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectImages = [
  {
    id: 1,
    src: "/lovable-uploads/a3ea3364-9d5b-47e5-92e1-5312fb2f5ea8.png",
    alt: "Traditional wooden interior craftsmanship",
    title: "Premium Interior Woodwork",
    description: "Exquisite traditional wooden interior design with intricate craftsmanship"
  },
  {
    id: 2,
    src: "/lovable-uploads/4843a59d-d71e-43a8-88b0-8d15f5d11ab1.png",
    alt: "Modern interior partition design",
    title: "Contemporary Interior Partitions",
    description: "Elegant modern partition design with decorative elements"
  },
  {
    id: 3,
    src: "/lovable-uploads/20dbb1ee-69cb-47d9-8a26-9cd7954df824.png",
    alt: "Luxury bedroom interior",
    title: "Luxury Bedroom Design",
    description: "Premium bedroom interior with custom textured wall and elegant lighting"
  },
  {
    id: 4,
    src: "/lovable-uploads/22bde2a4-f639-4a2c-9863-880581c925b6.png",
    alt: "Modern kitchen design",
    title: "Contemporary Kitchen",
    description: "Sleek modern kitchen with marble countertops and premium fixtures"
  },
  {
    id: 5,
    src: "/lovable-uploads/22fee6be-ad3f-492b-a923-695750e82599.png",
    alt: "Elegant dining room",
    title: "Luxury Dining Space",
    description: "Sophisticated dining room with custom lighting and premium finishes"
  },
  {
    id: 6,
    src: "/lovable-uploads/664b0960-5cec-4a78-bf32-762788ec0ca7.png",
    alt: "Modern wardrobe design",
    title: "Custom Wardrobe Solutions",
    description: "Contemporary wardrobe design with geometric patterns and premium materials"
  },
  {
    id: 7,
    src: "/lovable-uploads/c91ac009-2885-428e-89c0-974d99068ecd.png",
    alt: "Construction progress",
    title: "Construction Excellence",
    description: "Quality construction work showcasing structural precision and craftsmanship"
  }
];

const ProjectCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projectImages.map((project) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                  <img 
                    src={project.src} 
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-buildacre-darkgray mb-2 group-hover:text-buildacre-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="relative translate-y-0 left-0 bg-buildacre-blue hover:bg-buildacre-blue/90 text-white border-buildacre-blue" />
          <CarouselNext className="relative translate-y-0 right-0 bg-buildacre-blue hover:bg-buildacre-blue/90 text-white border-buildacre-blue" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
