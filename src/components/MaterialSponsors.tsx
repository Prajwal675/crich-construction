
import React from 'react';

const sponsors = [
  {
    name: "Jaquar",
    logo: "https://images.unsplash.com/photo-1581235720704-06d3acfcb85f?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-teal-600"
  },
  {
    name: "ANCHOR by Panasonic",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Hindware",
    logo: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-red-600"
  },
  {
    name: "Birla White",
    logo: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-blue-500"
  },
  {
    name: "Ashirvad",
    logo: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-red-500"
  },
  {
    name: "JSW Paints",
    logo: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Parryware",
    logo: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-gray-100"
  },
  {
    name: "Supreme",
    logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-red-600"
  },
  {
    name: "Astral Pipes",
    logo: "https://images.unsplash.com/photo-1581235720704-06d3acfcb85f?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Havells",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Meenakshi TMT",
    logo: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "CERA",
    logo: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-blue-600"
  },
  {
    name: "Finolex Industries",
    logo: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Asian Paints",
    logo: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "TATA Steel",
    logo: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Zuari Cement",
    logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "TurboSteel",
    logo: "https://images.unsplash.com/photo-1581235720704-06d3acfcb85f?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-blue-800"
  },
  {
    name: "ACC Cement",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-red-600"
  },
  {
    name: "JSW Steel",
    logo: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Finolex Cables",
    logo: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-white"
  },
  {
    name: "Birla A1",
    logo: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-red-600"
  },
  {
    name: "UltraTech Cement",
    logo: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-yellow-400"
  },
  {
    name: "Prince Piping",
    logo: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&q=80&w=200&h=80",
    bgColor: "bg-red-600"
  },
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
          <div className="grid grid-cols-4 gap-2">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className={`${sponsor.bgColor} border border-gray-300 p-4 aspect-[3/2] flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground px-2">
                    {sponsor.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSponsors;
