type SectionHeadingProps = {
  normal: string;
  highlight: string;
  level?: "h1" | "h2";
};

const SectionHeading = ({
  normal,
  highlight,
  level = "h2",
}: SectionHeadingProps) => {
  const Tag = level;

  return (
    <Tag className="font-display font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl text-buildacre-darkgray">
      {normal}{" "}
      <span className="text-buildacre-orange">
        {highlight}
      </span>
    </Tag>
  );
};

export default SectionHeading;
