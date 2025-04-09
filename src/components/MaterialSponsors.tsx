
import React from 'react';

const sponsors = [
  {
    name: "BuildCorp Materials",
    logo: "https://placehold.co/200x80/F9F9F9/333333?text=BuildCorp",
  },
  {
    name: "SteelWorks",
    logo: "https://placehold.co/200x80/F9F9F9/333333?text=SteelWorks",
  },
  {
    name: "ConcretePro",
    logo: "https://placehold.co/200x80/F9F9F9/333333?text=ConcretePro",
  },
  {
    name: "GlassInnovate",
    logo: "https://placehold.co/200x80/F9F9F9/333333?text=GlassInnovate",
  },
  {
    name: "WoodCraft",
    logo: "https://placehold.co/200x80/F9F9F9/333333?text=WoodCraft",
  },
  {
    name: "LightTech",
    logo: "https://placehold.co/200x80/F9F9F9/333333?text=LightTech",
  },
];

const MaterialSponsors = () => {
  return (
    <section className="py-16 bg-buildacre-lightgray">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-buildacre-darkgray mb-2">Our Material Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry-leading material suppliers to ensure the highest quality in every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} logo`} 
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialSponsors;
