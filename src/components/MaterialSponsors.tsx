
import React from 'react';

const sponsors = [
  {
    name: "BuildCorp Materials",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=200&h=80",
  },
  {
    name: "SteelWorks",
    logo: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=200&h=80",
  },
  {
    name: "ConcretePro",
    logo: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=200&h=80",
  },
  {
    name: "GlassInnovate",
    logo: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=200&h=80",
  },
  {
    name: "WoodCraft",
    logo: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=200&h=80",
  },
  {
    name: "LightTech",
    logo: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&q=80&w=200&h=80",
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
