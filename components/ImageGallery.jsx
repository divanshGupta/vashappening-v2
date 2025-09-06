"use client";
import Image from "next/image";

const images = [
  "/skmei-hero.webp",
  "/portronics-hero.webp",
  "/jkadventure-hero.webp",
  "/wevstack-hero.webp",
  "/designworld-hero.webp",
  "/acme-hero.webp",
  "/pandeytuitions-hero.webp",
  "/girjamasala-hero.webp"
];

const ImageGallery = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-10 space-y-6">
      {/* Row 1 - Right */}
      <div className="flex space-x-6 animate-scroll-right">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Left */}
      <div className="flex space-x-6 animate-scroll-left">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
