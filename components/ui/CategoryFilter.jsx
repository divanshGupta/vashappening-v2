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
                className={`px-4 py-2 rounded-full text-zinc-500 bg-[#111111] border border-zinc-500
                    ${active === cat ? "bg-white text-black" : "border-gray-500"}`}
                key={idx}>
                    {cat}
                </button>
            ))}
        </div>
    )
}