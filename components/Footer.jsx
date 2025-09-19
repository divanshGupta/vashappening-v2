"use client";

import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { useState, useEffect } from 'react';
import { footerLinks, footerContacts } from '@/app/utils/data';

const Footer = () => {
    const[time, setTime] = useState('');
    useEffect(() => {
        function updateTime () {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
            setTime(formatted);
        };
        updateTime();
        const interval = setInterval(updateTime, 6000);
        return () => clearInterval(interval);
    }, []);

    

    const year = new Date().getFullYear();

  return (
    <footer className='bg-[#1A1A1A] text-white w-full flex flex-col'>

        <div className='w-full flex flex-col md:flex-row items-start justify-between gap-6 px-6 py-4 md:px-20 lg:px-40 md:py-12'>
            {/* Left Section */}
            <div className='flex flex-col items-start gap-6 md:gap-12'>
                <div className='text-[70px] md:text-[100px] lg:text-[140px] text-white font-extrabold flex flex-col items-start leading-18 md:leading-32'>
                    <span>Let's</span>
                    <span>Work</span>
                    <span>Together</span>
                </div>
                <Link href="/contact" className='bg-[#CAF290] px-6 py-2 lg:px-8 lg:py-4 text-lg lg:text-xl rounded-4xl text-black font-bold'>Let's Talk</Link>
            </div>

            {/* Right Section */}
            <div className='flex flex gap-4 md:gap-6'>

                {/* Explore Links */}
                <div className='flex flex-col items-start gap-2 text-white'>
                    <h3 className='font-extrabold'>EXPLORE</h3>
                    {footerLinks.map((link) => (
                        <Link key={link.title} href={link.path}
                        className=' text-[18px] md:text-[24px] hover:text-[#CAF290] hover:border-none font-light border-b border-gray-400'>
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Contact Info */}
                <div className='flex flex-col items-start gap-2 text-white'>
                    <h3 className='font-extrabold'>CONTACT</h3>
                    <div className='flex flex-col items-start gap-2'>
                        {footerContacts.map((contact) => (
                            contact.submenu.length === 0 ? (
                                <span key={contact.title} className="text-[18px] md:text-[24px] hover:text-[#CAF290] hover:border-none  font-light border-b border-gray-400">
                                {contact.title}
                                </span>
                            ) : (
                                <div key={contact.title} className="flex gap-6 mt-4">
                                {contact.submenu.map(({ id, icon: Icon, path }) => (
                                    <Link key={id} href={path} aria-label={contact.title}>
                                    <Icon className="w-5 h-5 hover:text-[#CAF290] fill-none stroke-[1]" />
                                    </Link>
                                ))}
                                </div>
                            )
                            ))}
                    </div>
                </div>
            </div>
        </div>

        {/* copyright section */}
        <div className='w-full flex items-center justify-center px-4 py-2 md:px-20 mt-2'>
            <div className='w-full border-t border-dashed border-zinc-600 text-center py-2 md:py-4'>
                <p className='text-white text-[14px] md:text-[20px] lg:text-[24px]'>© {year} Vashappening Media · {time} IST</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
