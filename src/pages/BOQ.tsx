
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
              {/* Important Note */}
              <div className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-semibold text-amber-800">
                      Note: BOQ will be modified according to your requirement
                    </p>
                  </div>
                </div>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="designs" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Designs & Drawings</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Architectural Layout | 2D</li>
                      <li>• <span className="text-amber-600">Soil Test.</span></li>
                      <li>• <span className="text-amber-600">Site Cleaning.</span></li>
                      <li>• Structural Drawings</li>
                      <li>• Site Survey</li>
                      <li>• <span className="text-amber-600">Electrical and Plumbing Drawings is included in the package.</span></li>
                      <li>• 3D Elevation (Only External 3D views as visible from the adjacent roads will be provided).</li>
                      <li>• 3D Inside</li>
                      <li>• All the designs will be provided in non-editable PDF format.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="earthwork" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Earth Work</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    The Foundation has been assumed as Isolated footings in regular Soil of Bearing Capacity 180kN/m*2 and above and up to a depth of 5 feet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="structure" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">RCC and Masonry Works</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• RCC Framed Structure in M-25 grade Concrete in 20mm & 40mm Aggregates or as advised in the RCC Design Mix as per the Structural designer.</li>
                      <li>• The Plinth level will be provided at a height of 1 foot and 6 inches above the existing Ground Level. PCC of 100mm shall be Provided at the Plinth Level before Ground Floor Flooring.</li>
                      <li>• <span className="text-amber-600">Size Stone Masonry (SSM) is included.</span></li>
                      <li>• Blockwork Masonry with Plaster as per the design 4" for internal Partitions and 6" for External Walls of Jyothi Brand.</li>
                      <li>• Internal plastering (1.5 Cement mortar) and Ceiling Plastering (1.4 Cement mortar) shall be done by 15 mm thickness.</li>
                      <li>• <span className="text-amber-600">Chicken mesh shall be used near beam, column and masonry wall junction and at the Chasing for mechanical conduits.</span></li>
                      <li>• External plastering (1.5 Cement mortar) 1st Coat and (1.3 Cement mortar) in second coat shall be done by total 20 mm thickness.</li>
                      <li>• Waterproofing compound of Sika Antisol/Fosroc equivalent brand shall be used in the external plastering.</li>
                      <li>• Water proofing compound of Fosroc/equivalent brand shall be used in the external plastering and mortar mix (epoxy) used in Tiling washroom Tiles.</li>
                      <li>• Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)</li>
                      <li>• <span className="text-amber-600">Steel in the package is assumed at 1.5kg per sq ft</span></li>
                      <li>• <span className="text-amber-600">Steel - SUNVIK 550D</span></li>
                      <li>• <span className="text-amber-600">Cement - Ultratech, Zuari or equivalent 43 or 53 grade.</span></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kitchen" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Kitchen</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ceramic wall tiles will be provided up to 3 ft. above the Kitchen Counter top of – up to INR 100 per sq ft.</li>
                      <li>• Kitchen Counter – 2 ft. 10mm Granite of is included. Double layer nosing at the edge in the front has been included along with polishing.</li>
                      <li>• Single door Stainless Steel Kitchen Sink of – up to Rs 10000/- shall be provided. Kitchen faucet of up to INR 5000/- along with accessories of PonyWare/Hindware/Jaquar/Waterport or equivalent make shall be provided.</li>
                      <li>• Provision shall be made for One inlet near Kitchen Sink for the Water Purifier or as per Design.</li>
                      <li>• Provision shall be made for One inlet and One Outlet for Washing Machine in the Utility/Dry Balcony or as per Design.</li>
                      <li>• Total 8 Kitchen are included.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="washrooms" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Bathroom</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ceramic wall tiles will be provided up to 7 ft above the Finished Floor Level of – up to INR 80 per Sq. Ft.</li>
                      <li>• Bathroom Flooring - Anti-skid tiles of value up to Rs. 80/- per sq.ft.</li>
                      <li>• Provision of Exhaust Fan is included.</li>
                      <li>• <span className="text-amber-600">Sensor joints will be provided in the floor tiles and the wall dado tiles. Grouting shall be of polymer cement grout of Kerl, Weber/equivalent brand.</span></li>
                      <li>• One number EWC, Health Faucet, Wash Basin, Basin Mixer, Overhead Shower with 2 in 1 Shower wall Mixer of Jaquar make is included.</li>
                      <li>• Sewer line connection to the main drain line shall be included in the package up to 10 feet from the building.</li>
                      <li>• External pipes shall be Fixed on raised clamps.</li>
                      <li>• <span className="text-amber-600">Sanitary ware & CP Fittings – up to Rs 25000 per washroom.</span></li>
                      <li>• CPVC Pipe - Ashirvad,Supreme.</li>
                      <li>• Bathroom doors - Waterproof flush doors.</li>
                      <li>• <span className="text-amber-600">Plumbing Drawings Will be given free and will be executed according to the clients requirement.</span></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="doors" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Doors & Windows</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <p className="font-medium mb-2">Windows:</p>
                        <ul className="space-y-1 pl-4">
                          <li>• The timber used for windows or doors/door frames shall be well seasoned and free from knots, warps, sap, cracks, and other defects. All WPC works shall be provided with two coats of paint. Timber used in main Door Frames is either Neem, Hercules, Honne.</li>
                          <li>• <span className="text-amber-600">UPVC Windows of worth 500 /- per sqft Along with grill.</span></li>
                          <li>• <span className="text-amber-600">Main Door will be of Honne.</span></li>
                          <li>• Chajjas shall be provided for all Windows with 1 feet outward projection and 6-inch bearing on each side of the window.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Doors:</p>
                        <ul className="space-y-1 pl-4">
                          <li>• <span className="text-amber-600">Main Door – Henne Wood Door worth 20000/- which is inclusive of basic fittings along with Goal/Karapan Lock for main house.</span></li>
                          <li>• Internal Doors – flush door worth 10,000/- which is inclusive of basic fittings.</li>
                          <li>• Washroom Doors – Waterproof Flush Doors worth 8,000/- which is inclusive of basic fittings.</li>
                          <li>• Basic Fittings includes – Hinges, Tower Bolts, Locks, Magnetic Stopper</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="painting" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Painting</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• The Interiors will be painted with one coat Asian Prime/ and two coats of Ace Exterior Emulsion paint or equivalent.</li>
                      <li>• The Interior ceiling shall be painted with 3 coats JK Putty, 1 Coat of Primer and 2 coats Tractor emulsion paint.</li>
                      <li>• All MS Steel grills and railings shall be painted with an anti-corrosion coat with a final coat of Enamel Paint.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="flooring" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Flooring</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Living and Dining room flooring shall be in tiles/Granite of – up to INR 90Rs/Sqft for other</li>
                      <li>• Other Rooms and Kitchen flooring shall be in tiles/ Granite of – up to INR 80 per sq ft</li>
                      <li>• Staircase flooring shall be in Anti-Skid Granite of up to INR 100- per sq.ft.</li>
                      <li>• Parking and area flooring shall be in Anti-skid tiles of up to INR 50 per sq.ft.</li>
                      <li>• Balconies and open area shall be in Anti-skid Granite of up to INR 50 per sq.ft.</li>
                      <li>• Skirting shall be of matching Granite /tiles.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="electricals" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Electrical</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Wires - Fireproof wires by Finolex, orbit</li>
                      <li>• Switches & Sockets – GM</li>
                      <li>• <span className="text-amber-600">The electrical points shall be provided as per the electrical drawings which is approved by the client.</span></li>
                      <li>• One MCB board of Anchor/Finolex or equivalent make shall be provided.</li>
                      <li>• Two earthing pit shall be provided.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="misc" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Miscellaneous</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Overhead Tank – Sintex 4000 litres capacity.</li>
                        <li>• <span className="text-amber-600">2 Underground sump of – 10,000 litres Shall be provided with concret with internal plastering along with chicken mesh, stairs and water proofing.</span></li>
                        <li>• Staircase Railing - A simple pattern Staircase Railing shall be in MS material, painting, welding, fixing, and finishing.</li>
                        <li>• Weather proof course shall be provided at terrace with one coat of waterproofing agent of Dr. Fixit brand or equivalent.</li>
                        <li>• <span className="text-amber-600">Anti-termite treatment is included in the package during Footing and Plinth.</span></li>
                        <li>• <span className="text-amber-600">Parapet wall 5ft. is included in the package.</span></li>
                        <li>• <span className="text-amber-600">Gas Pipeline is included in the package.</span></li>
                        <li>• <span className="text-amber-600">Main Gate of Value 1,50,000/- is included in the package.</span></li>
                        <li>• <span className="text-amber-600">Rain Water Harvesting is included in the package.</span></li>
                        <li>• <span className="text-amber-600">Compound wall is included in the package.</span></li>
                        <li>• <span className="text-amber-600">Drain Cover is included in the package.</span></li>
                        <li>• <span className="text-amber-600">Lift loading capacity of 5 members is included.</span></li>
                        <li>• <span className="text-amber-600">AC And CCTV Wirings are included in the package.</span></li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Technical Information</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <span className="font-medium">Depth of the footing depends upon soil test.</span></li>
                      <li>• <span className="text-amber-600">Footing concreting will be of M25 RMC.</span></li>
                      <li>• <span className="font-medium">Width of the footing depends upon structural drawings and site condition respectively.</span></li>
                      <li>• <span className="font-medium">Plinth height will be minimum of 1.5 feet above ground level and depending upon site condition during execution.</span></li>
                      <li>• <span className="text-amber-600">Plinth width will be of 8 inches.</span></li>
                      <li>• <span className="text-amber-600">M25 grade of concrete will be used.</span></li>
                      <li>• RMC will be used for footing concreting and all roof concreting (Ultratech cement will be used in RMC).</li>
                      <li>• 16mm and 20 mm TMT bars will be used for beams and bottoms and combination of 8mm, 10mm, 12mm and 16mm will be used for roof bar bending according to structural drawings issued by structural expert.</li>
                      <li>• <span className="text-amber-600">Anti-termite chemical will be sprayed once during footing concreting and soil refilling and after plinth concreting.</span></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scope" className="bg-white rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-xl font-semibold">Client Scope</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <p className="font-medium mb-2 text-amber-600">NOTE: All the above mentioned points will be mentioned in the Agreement Also.</p>
                        <ol className="space-y-1 pl-4 list-decimal">
                          <li><span className="text-amber-600">Total Suites are considered.</span></li>
                          <li><span className="text-amber-600">1st washrooms are considered.</span></li>
                          <li><span className="text-amber-600">8 Main Door is considered.</span></li>
                          <li><span className="text-amber-600">32 Internal Door is considered.</span></li>
                          <li><span className="text-amber-600">8 Kitchen is considered.</span></li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Client Scope includes:</p>
                        <ul className="space-y-1 pl-4">
                          <li>• Borewell and motor/pump.</li>
                          <li>• Temporary Electrical Meter Board.</li>
                          <li>• Any kind of approvals (BWSSB/BBMP etc.)</li>
                          <li>• Water supply for smooth execution of work.</li>
                          <li>• Road Cutting, Tree Cutting etc.</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                        <p className="font-medium text-amber-800">NOTE: Assistance for the above things which are client scope will be provided by the company.</p>
                      </div>
                    </div>
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
