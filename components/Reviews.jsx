import { Star } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    text: "The Vashappening team were fantastic to work with. Their passion and skill shines through in each interaction and their dedication to our project ensured that the final product went beyond expectation.",
    author: "Supresh Mehta",
    company: "Skmei Watches",
  },
  {
    text: "Vashappening delivered my website in just one month, with every details and features I was ever wanted, thank to the team.",
    author: "Sachin Singh",
    company: "JK Adventure",
  },
  {
    text: "Vashappening are an absolute pleasure to work with. They are undoubtedly experts in their field and deliver websites that put customers at the centre of online offerings.",
    author: "Vivek Prabhu",
    company: "Portronics",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-40">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          SEE WHY OUR <br />
          <span className="relative">
            CLIENTS
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-pink-500"></span>
          </span>{" "}
          US
        </h2>
        <p className="text-gray-300 text-lg">
          We believe in getting the details right, keeping our promises, and
          always going the extra mile. It’s how we work and why our clients
          trust us.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform"
          >
            {/* Stars */}
            <div className="flex text-[#caf290] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            {/* Text */}
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              “{review.text}”
            </p>
            {/* Author */}
            <div className="mt-auto">
              <p className="font-semibold">{review.author}</p>
              <p className="text-gray-400 text-sm">{review.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link href='/reviews' className="bg-black border-2 border-[#caf290] text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 hover:text-black transition">
          READ CUSTOMER REVIEWS
        </Link>
      </div>
    </section>
  );
}
