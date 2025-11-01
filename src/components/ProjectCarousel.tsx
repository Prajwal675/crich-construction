
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import OptimizedImage from './OptimizedImage';


const projectImages = [
  {
    id: 1,
    src: "/lovable-uploads/a3ea3364-9d5b-47e5-92e1-5312fb2f5ea8.png",
    alt: "Traditional wooden interior craftsmanship"
  },
  {
    id: 2,
    src: "/lovable-uploads/4843a59d-d71e-43a8-88b0-8d15f5d11ab1.png",
    alt: "Modern interior partition design"
  },
  {
    id: 3,
    src: "/lovable-uploads/20dbb1ee-69cb-47d9-8a26-9cd7954df824.png",
    alt: "Luxury bedroom interior"
  },
  {
    id: 4,
    src: "/lovable-uploads/22bde2a4-f639-4a2c-9863-880581c925b6.png",
    alt: "Modern kitchen design"
  },
  {
    id: 5,
    src: "/lovable-uploads/22fee6be-ad3f-492b-a923-695750e82599.png",
    alt: "Elegant dining room"
  },
  {
    id: 6,
    src: "/lovable-uploads/664b0960-5cec-4a78-bf32-762788ec0ca7.png",
    alt: "Modern wardrobe design"
  },
  {
    id: 7,
    src: "/lovable-uploads/c91ac009-2885-428e-89c0-974d99068ecd.png",
    alt: "Construction progress"
  },
  {
    id: 8,
    src: "/lovable-uploads/project-i1.jpg",
    alt: "Modern residential building with contemporary design"
  },
  {
    id: 9,
    src: "/lovable-uploads/project-i2.jpg",
    alt: "Stylish multi-story residential construction"
  },
  {
    id: 10,
    src: "/lovable-uploads/project-i3.jpg",
    alt: "Contemporary commercial building with festive decorations"
  },
  {
    id: 11,
    src: "/lovable-uploads/project-i4.jpg",
    alt: "Modern architectural design with unique facade"
  },
  {
    id: 12,
    src: "/lovable-uploads/project-i5.png",
    alt: "Elegant residential building with traditional elements"
  },
  {
    id: 13,
    src: "/lovable-uploads/project-i6.png",
    alt: "Contemporary house with modern balcony design"
  },
  {
    id: 14,
    src: "/lovable-uploads/project-i7.png",
    alt: "Luxury multi-story building with sophisticated architecture"
  }
];

const ProjectCarousel = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  );

  return (
    <div className="w-full">
      <Carousel
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {projectImages.map((project) => (
            <CarouselItem key={project.id} className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="aspect-video sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] w-full flex items-center justify-center bg-muted rounded-lg sm:rounded-xl shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden">
                <OptimizedImage
                  src={project.src}
                  alt={project.alt}
                  className="max-w-full max-h-full object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-2 sm:gap-4">
          <CarouselPrevious className="relative translate-y-0 left-0 bg-buildacre-blue hover:bg-buildacre-blue/90 text-white border-buildacre-blue h-8 w-8 sm:h-10 sm:w-10" />
          <CarouselNext className="relative translate-y-0 right-0 bg-buildacre-blue hover:bg-buildacre-blue/90 text-white border-buildacre-blue h-8 w-8 sm:h-10 sm:w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
