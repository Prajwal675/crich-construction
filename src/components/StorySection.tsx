const StorySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding max-w-6xl">
        <h2 className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl mb-4 text-buildacre-darkgray">
          We Build More Than Just{" "}
          <span className="text-buildacre-orange">Walls!</span>
        </h2>

        <p className="text-muted-foreground mb-6">
          We build the kitchen for big, messy breakfasts. The living room for
          loud laughter and lazy naps.
        </p>

        <p className="text-muted-foreground">
          The porch where it is okay to just sit, do nothing, and watch the
          world go by.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
