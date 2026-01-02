const fears = [
  {
    title: "The Money Trap",
    desc: "Fixed pricing. Zero surprises. Everything in writing.",
  },
  {
    title: "The Endless Wait",
    desc: "Guaranteed timelines with milestone tracking.",
  },
  {
    title: "The Ghost Builder",
    desc: "Dedicated project manager. Transparent payments.",
  },
  {
    title: "The Quality Nightmare",
    desc: "Premium materials and 10-year structural warranty.",
  },
];

const WorstFearsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding max-w-6xl">
        {/* SECTION HEADING */}
        <h2 className="fear-heading">
          We’ve Seen Your{" "}
          <span className="text-buildacre-orange">Worst Fears</span>
        </h2>

        {/* GRID */}
        <div className="fear-grid">
          {fears.map((fear, index) => (
            <div key={index} className="fear-card">
              <h3 className="fear-title">
                <span className="fear-title-accent">{fear.title}</span>
              </h3>
              <p className="fear-desc">{fear.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorstFearsSection;
