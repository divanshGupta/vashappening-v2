import Image from "next/image";

export default function work() {

    const projects = [
        { title: "Skmei Watches", description: "Ecommerce Store", img: "/skmei-hero.webp", link: "https://skmei.in" },
        { title: "Portronics Store", description: "Ecommerce Store", img: "/portronics-hero.webp", link: "https://portronics.com" },
        { title: "JK Adventure", description: "Travel Agency", img: "/jkadventure-hero.webp", link: "https://jk-adventure.vercel.app" },
        { title: "Wevstack Tools", description: "Tools and Technologies", img: "/wevstack-hero.webp", link: "https://wevstack.vercel.app" },
        { title: "Acme Store Demo", description: "Ecommerce Store Demo", img: "/acme-hero.webp", link: "https://demo.vercel.store/" },
        { title: "Design World", description: "Ecommerce Store", img: "/designworld-hero.webp", link: "https://design-world.vercel.app" },
        {title: "Pandey Tuitions", description: "Educational Website", img: "/pandeytuitions-hero.webp", link: "https://pandeytuitions.vercel.app"},
    ];

    return (
        <section className="bg-black text-white py-16 px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <a
                    target="_blank" rel="noopener noreferrer"
                    href={project.link}
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
                </a>
            ))}
            
            </div>
        </section>
    )
}