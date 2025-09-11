import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="bg-black text-white pt-20 pb-10 px-6 md:px-12">
              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                  Passion Fuels <br />
                  <span className="relative">
                    Everything
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-pink-500"></span>
                  </span>{" "}
                  We Build
                </h2>
                <p className="text-gray-300 text-sm md:text-lg">
                  Bold strategies. Proven expertise. Real results. We combine creativity, strategy, and execution to drive measurable growth and lasting impact.
                </p>
              </div>

              {/* Content */}

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#caf290] text-xl md:text-2xl font-bold md:font-extrabold underline">The Journey So Far</h1>
                    <p className="text-sm md:text-xl text-gray-300">With a diverse portfolio and experience across many sectors, our locally based in-house team brings strategic thinking, creativity and technical excellence to every project. We work closely with ambitious organisations to help them grow, engage their audiences and stand out online. As digital evolves, we stay focused on creating work that delivers lasting value.</p>
                </div>

                <div className="relative w-full h-[800px] md:h-[500px] bg-black flex items-center justify-center overflow-hidden">
                    {/* Top-left image */}
                    <div className="absolute top-0 left-0 z-30 rounded-xl overflow-hidden shadow-lg w-[300px] h-[200px]">
                        <Image
                        src="/divyansh.webp"
                        alt="Person 1"
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Top-right image */}
                    <div className="absolute top-40 md:top-12 right-0 z-20 rounded-xl overflow-hidden shadow-lg w-[300px] h-[200px]">
                        <Image
                        src="/ashish.webp"
                        alt="Person 2"
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Bottom-left image */}
                    <div className="absolute top-80 md:top-30 md:bottom-0 md:left-20 z-10 rounded-xl overflow-hidden shadow-lg w-[300px] h-[200px] bg-zinc-800">
                        {/* <Image
                        src="/divyansh.webp"
                        alt="Person 3"
                        width={300}
                        height={200}
                        className="object-cover w-full h-full"
                        /> */}
                        
                    </div>

                    {/* Optional icon */}
                    <div className="absolute top-120 md:top-60 md:bottom-4 md:right-4 z-40">
                        <div className="bg-lime-500 rounded-full p-2">
                        <span className="text-white text-xl">😊</span>
                        </div>
                    </div>
                    </div>
              </div>
            </section>
    )
}