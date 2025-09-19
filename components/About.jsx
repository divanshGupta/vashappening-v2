import { Check } from "lucide-react";
import { contents } from "@/app/utils/data";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-40">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          A <br />
          <span className="relative">
            Dedicated
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-pink-500"></span>
          </span>{" "}
          Team Of <br />
          Professionals
        </h2>
        <p className="text-gray-300 text-lg">
          We believe in getting the details right, keeping our promises, and
          always going the extra mile. It’s how we work and why our clients
          trust us.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {contents.map((content, idx) => (
          <div
            key={idx}
            className="p-6 shadow-lg hover:scale-[1.02] transition-transform flex flex-col items-center"
          >
            {/* icon */}
            <div className="bg-[#FFB3DB] flex items-center justify-center mb-2 w-6 h-6 rounded-lg">
                <Check />
            </div>
            {/* Text */}
            <p className="font-extrabold mb-2 tracking-tighter">{content.text}</p>

            {/* Sub Text */}
            <p className="text-gray-300 text-sm text-center">{content.subtext}</p>
          
            
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-black border-2 border-green-400 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 hover:text-black transition">
          About Us
        </button>
      </div>
    </section>
  );
}
