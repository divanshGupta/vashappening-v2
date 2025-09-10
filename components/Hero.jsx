import Image from "next/image";
import { images } from "@/app/utils/data";

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
        <h1 className="text-[70px] md:text-7xl font-extrabold leading-10 md:leading-14 mb-6">
          Dedicated <br />
          <span className="text-pink-500 relative inline-block">
            To
            <span className="absolute -right-20 top-0">😊</span>
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
