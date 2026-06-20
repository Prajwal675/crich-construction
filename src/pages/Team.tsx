import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  { name: "Raju HV", role: "HRM", image: "/team/raju-hv.png" },
  { name: "Chethan K", role: "General Manager", image: "/team/chethan-k.jpg" },
  { name: "Vijay", role: "BDO", image: "/team/vijay-bdo.png" },
  { name: "Sharath", role: "OM", image: "/team/sharath-om.jpg" },
  { name: "Nikhil R", role: "Project Manager", image: "/team/nikhil-r.jpg" },
  { name: "Puvith", role: "Project Head", image: "/team/puvith.png" },
  { name: "Chethan", role: "Digital Marketing Manager", image: "/team/chethan-digital.jpg" },
  { name: "Darshan R", role: "Procurement Head", image: "/team/darshan-r.jpg" },
  { name: "Praneeth", role: "Architect", image: "/team/praneeth.jpg" },
  { name: "Shashank DP", role: "Structural Engineer", image: "/team/shashank-dp.jpg" },
  { name: "Jeevan DG", role: "Senior Engineer", image: "/team/jeevan-dg.jpg" },
  { name: "Raihan", role: "QC Engineer", image: "/team/raihan.jpg" },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pb-16 pt-20 sm:pb-20 md:pt-24 lg:pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-bold leading-[0.95] text-buildacre-darkgray">
              Our <br />
              <span className="italic">Team.</span>
            </h1>

            <div className="mt-6 max-w-2xl sm:mt-8">
              <h2 className="mb-3 text-lg font-medium text-buildacre-darkgray sm:mb-4 sm:text-xl">
                “Building Excellence Through Collaborative Leadership”
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Our strength lies in our people — experienced professionals
                committed to quality, transparency, and execution excellence.
              </p>
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-xl overflow-hidden shadow-lg"
              >
                {/* IMAGE */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="h-full w-full origin-top object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-buildacre-orange font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
