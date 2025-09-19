"use client"; // we are using Next.js app router

import { useState } from "react";
import { categories } from "@/app/utils/data";

export default function CategoryFilter({ onSelectCategory }) {
    const[active, setActive] =  useState("All works");

    const handleClick = (category) => {
        setActive(category);
        onSelectCategory(category);
    }

    return (
        <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat, idx) => (
                <button 
                onClick={() => handleClick(cat)}
                className={`px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-4 text-sm md:text-xl rounded-full bg-[#111111]
                    ${active === cat ? "bg-white text-black" : "border-[2px] text-white border-zinc-500 hover:border-[#CAF290]"}`}
                key={idx}>
                    {cat}
                </button>
            ))}
        </div>
    )
}