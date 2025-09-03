export default function Services() {
  const services = [
    {
      title: "DESIGN",
      color: "bg-pink-500",
      description:
        "We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action.",
      items: [
        "Discovery",
        "Web Design",
        "User Experience Design",
        "Accessible Design",
      ],
    },
    {
      title: "BUILD",
      color: "bg-yellow-400",
      description:
        "We develop high-performing, scalable solutions that work seamlessly for your goals and your customers.",
      items: [
        "Website Development",
        "Craft CMS",
        "Spektrix Integration",
        "Shopify Development",
        "Technical SEO",
      ],
    },
    {
      title: "GROW",
      color: "bg-sky-400",
      description:
        "We help you attract, engage, and convert customers with data-driven marketing that delivers results.",
      items: [
        "Paid Advertising (PPC)",
        "Search Engine Optimisation",
        "Digital Marketing",
        "Content Strategy",
        "Social Media",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Helping You <br />
          <span className="relative">
            Transform
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-pink-500"></span>
          </span>{" "}
          Your Business
        </h2>
        <p className="text-gray-300 text-lg">
          Bold ideas. Smarter strategies. Game-changing results. Let’s elevate
          your brand and unlock its full potential.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-2xl p-8 hover:scale-[1.02] transition-transform"
          >
            {/* Title Tag */}
            <span
              className={`${service.color} inline-block px-4 py-1 font-bold text-black rounded rotate-[-3deg] mb-4`}
            >
              {service.title}
            </span>

            <p className="text-gray-300 mb-6 text-sm">{service.description}</p>

            <ul className="space-y-3">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className="font-semibold text-white hover:text-pink-400 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
