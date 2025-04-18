import React from "react";
import Image from "next/image";

const logos = [
  { src: "/images/html.svg", alt: "HTML" },
  { src: "/images/css.svg", alt: "CSS" },
  { src: "/images/js.svg", alt: "JavaScript" },
  { src: "/images/java.svg", alt: "Java" },
  { src: "/images/python.svg", alt: "Python" },
  { src: "/images/cpp.svg", alt: "C++" },
  { src: "/images/cs.svg", alt: "C#" },
];

const Carousel = () => {
  return (
    <section>
      <div className="logos">
        <div className="logos-slide">
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="w-[100px] h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
