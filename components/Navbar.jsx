"use client";
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    {title: "Work", path: "/work"},
    {title: "Services", path: "/services"},
    {title: "About", path: "/about"},
    {title: "Contact", path: "/contact"},
]

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50
          flex items-center justify-between
          bg-black text-white
          transition-all duration-500 ease-in-out
          ${scrolled ? "bg-zinc-900 w-[90%] top-2 md:w-[70%] rounded-4xl px-4 py-[12px] md:px-10 md:py-3 shadow-lg overflow-hidden" : "w-[100%] rounded-none px-4 py-[16px] md:px-12 md:py-3"}
          `}>
        <div className='w-full flex items-center justify-between'>
          <Link href="/" className='text-[#CAF290] text-[20px] md:text-[24px] font-semibold italic'>Vashappening</Link>
          
          <div className='hidden md:flex items-center justify-center gap-6'>
              {links.map((link)=> (
                  <Link href={link.path} key={link.title}
                  className='font-bold hover:text-[#CAF290] md:text-[24px] hover:underline'>
                      {link.title}
                  </Link>
                
              ))}
          </div>

          <div className='md:hidden'>
            <button
            onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
        
          <Link 
          href="/contact"
          className='hidden md:block bg-[#CAF290] px-8 py-1 rounded-4xl text-black md:text-[24px] font-bold'>
              Let's Talk
          </Link>
        </div>
      </nav>

      {open && 
        <div className="fixed inset-0 w-full z-99 bg-black text-white">
        {/* Mobile menu overlay */}
        <div
          className={`bg-black flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="w-full top-0 fixed flex items-center justify-between px-4 py-3">
            <h1 className="text-[#CAF290] text-[20px] md:text-[24px] font-semibold italic">
              Vashappening
            </h1>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md focus:outline-none"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className='w-full mt-24 flex flex-col items-center justify-center gap-6'>
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={() => setOpen(false)}
                className="text-4xl font-bold hover:text-[#CAF290] hover:underline transition-colors"
              >
                {link.title}
              </Link>
            ))}

            <Link 
            href="/contact"
            className='mt-4 bg-[#CAF290] px-8 py-1 rounded-4xl text-black md:text-[24px] font-bold'>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Navbar
