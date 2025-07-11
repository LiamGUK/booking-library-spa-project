import { ReactNode } from "react";

interface SectionProps {
  title: string;
  image: string;
  altText: string;
  position?: "left" | "right";
  children: ReactNode;
}

function Section({
  title,
  image,
  altText,
  position = "left",
  children,
}: SectionProps) {
  const imagePosition = position === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <section className={`flex ${imagePosition} max-sm:flex-col`}>
      <picture className="max-w-[20rem] flex-[1_0_18rem]">
        <img src={image} alt={altText} />
      </picture>
      <div className="flex-[0_1_35rem] max-sm:flex-1">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </section>
  );
}

export default Section;
