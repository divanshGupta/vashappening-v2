import Image from "next/image";
import { images } from "@/app/utils/data";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white pb-20 md:pb-24 px-6 flex items-center justify-center">
      {/* Floating Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute ${img.className} hidden sm:block`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mt-28 md:mt-28 lg:mt-40">
        <h1 className="text-[60px] md:text-7xl lg:text-9xl font-extrabold leading-18 md:leading-24 lg:leading-28 mb-6 md:mb-12">
          Dedicated <br />
          <span className="text-pink-500 relative inline-block">
            To
            <span className="absolute -right-20 top-0">😊</span>
          </span>{" "}
          <br /> Delivering <br />
          Results For <br />
          Top Brands <br />
        </h1>
        <p className="text-gray-300 text-[16px] md:text-xl max-w-2xl mx-auto">
          Driving growth for leading brands and <br />
          organisations through high-performing websites <br />
          and results-driven digital marketing.
        </p>
      </div>
    </section>
  );
}
