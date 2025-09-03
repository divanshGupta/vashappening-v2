"use client";
import Image from "next/image";

const images = [
  "/img1.jpg",
  "/img2.png",
  "/img3.png",
  "/img4.png",
  "/img5.jpg",
  "/img6.png",
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
