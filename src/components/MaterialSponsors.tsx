
import React from 'react';

const sponsors = [
  {
    name: "Asian Paints",
    logo: "/lovable-uploads/79f6b791-04e3-497a-a069-b428c2ddd05f.png"
  },
  {
    name: "GM",
    logo: "/lovable-uploads/da7e9492-52be-4ff5-8c92-58ae444074e5.png"
  },
  {
    name: "CERA",
    logo: "/lovable-uploads/a8a19457-dd4e-4bd6-b2a4-23c3c38e1087.png"
  },
  {
    name: "Hindware",
    logo: "/lovable-uploads/58c89d71-e88c-45e4-b6a4-c08c4be70efc.png"
  },
  {
    name: "Parryware",
    logo: "/lovable-uploads/d75f06ea-d714-49f8-8e1a-f55d0eb940ef.png"
  },
  {
    name: "Saint-Gobain",
    logo: "/lovable-uploads/7ba4592b-fc5d-41d7-8ba6-75038c1fab9c.png"
  },
  {
    name: "Ashirvad",
    logo: "/lovable-uploads/726bf940-c350-44b9-beef-fe994845ad9b.png"
  },
  {
    name: "Supreme",
    logo: "/lovable-uploads/2d8835e9-0dc4-49b8-9556-2b480fc4d923.png"
  },
  {
    name: "Polycab",
    logo: "/lovable-uploads/24fe56a6-c69b-4ca1-9b89-8ba1538c92d0.png"
  },
  {
    name: "Finolex",
    logo: "/lovable-uploads/33b3becf-905b-4cfd-bd19-cc2aa43e0f81.png"
  },
  {
    name: "TurboSteel",
    logo: "/lovable-uploads/turbosteel.png"
  },
  {
    name: "UltraTech Cement",
    logo: "/lovable-uploads/utech_cement.png"
  },
  {
    name: "Birla Super",
    logo: "/lovable-uploads/birla_super_cement.jpeg"
  },
  {
    name: "JSW",
    logo: "/lovable-uploads/jsw.png"
  }
];

const MaterialSponsors = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="mb-4">Material Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We collaborate with industry-leading material suppliers to ensure the highest quality in every project.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="bg-card border border-border p-3 md:p-4 lg:p-6 aspect-[4/3] flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm rounded-lg"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSponsors;
