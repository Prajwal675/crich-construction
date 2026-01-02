const SEOHeroText = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding max-w-6xl">
        {/* H1 – ONLY ONE ON PAGE */}
        <h1 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-buildacre-darkgray mb-6">
          Best Construction Company in Bangalore for{" "}
          <span className="text-buildacre-orange">
            Residential & Commercial Projects
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
          We don’t just build homes, we build legacies. As reliable builders in
          Bangalore, more than just a house, we build the foundations for your
          family’s future memories.
        </p>
      </div>
    </section>
  );
};

export default SEOHeroText;
