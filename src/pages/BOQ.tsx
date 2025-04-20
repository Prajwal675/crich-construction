
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BOQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center overflow-hidden bg-buildacre-darkgray">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Modern construction"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="container mx-auto container-padding relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Explore
              <span className="block italic">Our BOQ.</span>
            </h1>
          </div>
        </section>

        {/* BOQ Content Section */}
        <section className="section-padding bg-buildacre-bg">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="designs" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Designs & Drawings</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Complete architectural and structural drawings provided
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="structure" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Structure</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Steel: Vykas TMT or equivalent</li>
                      <li>• Foundation: 20 mm & 40 mm</li>
                      <li>• Cement: JSW, Zuari (Ramco, Ultratech, Birla G4 & 53 Grade)</li>
                      <li>• Blocks: Standard Solid Concrete Blocks of 6 inches & 4 inches (Upto 3ft.)</li>
                      <li>• RCC Design Mix: M25 Ready Mix Ultratech Concrete (RMC)</li>
                      <li>• Ceiling Heights: 10 ft (Finished Floor Level to Finished Floor Level)</li>
                      <li>• Underground Sump: 8000 Litres (Blockwork with Water Proofing & Plastering)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kitchen" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Kitchen</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Standard modular kitchen with high-quality materials and fittings
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="washrooms" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Washrooms</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Premium sanitary ware and fixtures with modern design
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="doors" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Doors & Windows</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    High-quality wooden doors and UPVC windows
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="painting" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Painting</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Premium quality interior and exterior painting
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flooring" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Flooring</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Premium vitrified tiles and anti-skid tiles for bathrooms
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="electricals" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Electricals</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Complete electrical setup with quality wiring and fixtures
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="misc" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Miscellaneous</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    Additional features and specifications as per requirement
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BOQPage;
