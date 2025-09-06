import Image from "next/image";

const projects = [
  {
    title: "Skmei Watches",
    description: "Ecommerce Store",
    img: "/skmei-hero.webp",
  },
  {
    title: "JK Adventure",
    description: "Travel Agency",
    img: "/jkadventure-hero.webp",
  },
  {
    title: "Portronics Store",
    description: "Ecommerce Store",
    img: "/portronics-hero.webp",
  },
  {
    title: "Wevstack Tools",
    description: "Tools and Technologies",
    img: "/wevstack-hero.webp",
  },
  {
    title: "Acme Store Demo",
    description: "Ecommerce Store Demo",
    img: "/acme-hero.webp",
  },
  
];

export default function Works() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}

        {/* CTA Card */}
        <div className="bg-zinc-900 rounded-xl flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-2xl font-bold mb-4">LIKE WHAT YOU SEE? 👀</h3>
          <p className="text-gray-300 mb-6">
            Explore more of our work and discover how we can bring your vision to life.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full transition">
            See More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
