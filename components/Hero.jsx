import Image from "next/image";

const images = [
  { src: "/img1.jpg", alt: "Work Example 1", className: "top-8 left-4 w-24 md:w-32" },
  { src: "/img2.png", alt: "Work Example 2", className: "top-0 right-12 w-28 md:w-36" },
  { src: "/img3.png", alt: "Work Example 3", className: "bottom-12 left-8 w-24 md:w-32" },
  { src: "/img4.png", alt: "Work Example 4", className: "bottom-20 right-6 w-28 md:w-36" },
  { src: "/img5.jpg", alt: "Work Example 5", className: "top-1/2 left-1 md:left-12 w-24 md:w-32" },
  { src: "/img6.png", alt: "Work Example 6", className: "top-1/2 right-2 md:right-12 w-24 md:w-32" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-20 md:pt-20 pb-20 md:pt-24 px-6 flex items-center justify-center">
      {/* Floating Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute ${img.className} hidden sm:block`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-10 md:leading-12 mb-6">
          Dedicated <br />
          <span className="text-pink-500 relative inline-block">
            To
            <span className="absolute -right-16 top-0">😊</span>
          </span>{" "}
          <br /> Delivering <br />
          Results For <br />
          Top Brands <br />
        </h1>
        <p className="text-gray-300 text-[15px] md:text-sm max-w-2xl mx-auto">
          Driving growth for leading brands and <br />
          organisations through high-performing websites <br />
          and results-driven digital marketing.
        </p>
      </div>
    </section>
  );
}
