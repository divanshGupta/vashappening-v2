import { Star } from "lucide-react";

const reviews = [
  {
    text: "The Vashappening team were fantastic to work with. Their passion and skill shines through in each interaction and their dedication to our project ensured that the final product went beyond expectation.",
    author: "Liane Goldring",
    company: "Mahlatini",
  },
  {
    text: "Vashappening deliver visionary design, technical competence, SEO expertise and excellent project management to create best-of-breed websites. A dedicated team of professionals that we would wholeheartedly recommend.",
    author: "John Doe",
    company: "Tech Solutions",
  },
  {
    text: "Vashappening are an absolute pleasure to work with. They are undoubtedly experts in their field and deliver websites that put customers at the centre of online offerings.",
    author: "Sarah Lee",
    company: "Creative Labs",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
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
            <div className="flex text-green-400 mb-4">
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
        <button className="bg-black border-2 border-green-400 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 hover:text-black transition">
          READ CUSTOMER REVIEWS
        </button>
      </div>
    </section>
  );
}
