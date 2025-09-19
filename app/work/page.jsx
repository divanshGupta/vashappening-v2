"use client";
import Image from "next/image";
import { projects } from "../utils/data";
import CategoryFilter from "@/components/ui/CategoryFilter";
import { useState } from "react";

export default function work() {

    const[selectedCategory,  setSelectedCategory]= useState("All works")
    const filterCategories = selectedCategory === "All works" ? projects : projects.filter((item) => item.category === selectedCategory);

    return (
        <section className="bg-black text-white pt-24 md:pt-36 lg:pt-40  pb-16 px-6 md:px-20 lg:px-40">

            <CategoryFilter onSelectCategory={setSelectedCategory} />
            <div className="grid md:grid-cols-2 gap-8 mt-4 md:mt-8 lg:mt-16">
            {filterCategories.length === 0 ? 
                <div className="col-span-2 w-full flex items-center justify-center h-[300px]">
                    <p className="text-sm md:text-lg lg:text-xl text-white text-center max-w-xl">
                        We hope we will ace this category as well! 😜
                    </p>
                </div> :
            filterCategories.map((project, idx) => (
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
                        className="w-full h-60 md:h-72 lg:h-90 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-lg md:text-xl lg:text-2xl">{project.title}</h3>
                        <p className="text-gray-300 text-sm lg:text-xl">{project.description}</p>
                    </div>
                </a>
            ))}
            
            </div>
        </section>
    )
}