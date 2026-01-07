import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ===== TEAM DATA ===== */
const teamMembers = [
  { name: "Raju HV", role: "HRM", image: "/team/raju-hv.jpg" },
  { name: "Chethan K", role: "General Manager", image: "/team/chethan-k.jpg" },
  { name: "Vijay", role: "BDO", image: "/team/vijay-bdo.jpg" },
  { name: "Sharath", role: "OM", image: "/team/sharath-om.jpg" },
  { name: "Nikhil R", role: "Project Manager", image: "/team/nikhil-r.jpg" },
  { name: "Puvith", role: "Project Head", image: "/team/puvith.jpg" },
  { name: "Chethan", role: "Digital Marketing Manager", image: "/team/chethan-digital.jpg" },
  { name: "Darshan R", role: "Procurement Head", image: "/team/darshan-r.jpg" },
  { name: "Praneeth", role: "Architect", image: "/team/praneeth.jpg" },
  { name: "Shashank DP", role: "Structural Engineer", image: "/team/shashank-dp.jpg" },
  { name: "Jeevan DG", role: "Senior Engineer", image: "/team/jeevan-dg.jpg" },
  { name: "Raihan", role: "QC Engineer", image: "/team/raihan.jpg" },
  { name: "Nindini", role: "QS Engineer", image: "/team/nindini.jpg" },
  { name: "Manish", role: "Site Engineer", image: "/team/manish.jpg" },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-bold leading-tight text-buildacre-darkgray">
              our <br />
              <span className="italic">Team.</span>
            </h1>

            <div className="max-w-2xl mt-8">
              <h2 className="text-xl font-medium mb-4 text-buildacre-darkgray">
                “Building Excellence Through Collaborative Leadership”
              </h2>
              <p className="text-muted-foreground">
                Our strength lies in our people — experienced professionals
                committed to quality, transparency, and execution excellence.
              </p>
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-xl overflow-hidden shadow-lg"
              >
                {/* IMAGE */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
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
