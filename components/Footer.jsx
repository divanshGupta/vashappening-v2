import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const links = [
    {title: "Works", path: "/works"},
    {title: "Services", path: "/services"},
    {title: "About", path: "/about"},
    {title: "Reviews", path: "/reviews"},
    {title: "Contact", path: "/works"},
    {title: "Blog", path: "/blogs"},
]

const contacts = [
  { title: "+91 91402 51061", submenu: [] },
  { title: "hello@vashappening.com", submenu: [] },
  { title: "B-Block, Tax Colony, Adi Udupi", submenu: [] },
  { title: "576103, Udupi, Karnataka", submenu: [] },
  {
    title: "Socials",
    submenu: [
      { id: 1, icon: Facebook, path: "https://facebook.com" },
      { id: 2, icon: Instagram, path: "https://instagram.com" },
      { id: 3, icon: Youtube, path: "https://youtube.com" },
    ],
  },
];


const Footer = () => {
  return (
    <footer className='bg-black w-full flex flex-col md:flex-row items-start justify-between gap-4 px-4 py-2 md:px-20 md:py-6'>

        {/* Left Section */}
        <div className='flex flex-col items-start gap-6 md:gap-12'>
            <div className='text-[70px] md:text-[160px] text-white font-extrabold flex flex-col items-start leading-14 md:leading-24'>
                <span>Let's</span>
                <span>Work</span>
                <span>Together</span>
            </div>
            <button className='bg-[#CAF290] px-6 py-1 rounded-4xl text-black font-bold'>Let's Talk</button>
        </div>

        {/* Right Section */}
        <div className='flex flex gap-4 md:gap-6'>

            {/* Explore Links */}
            <div className='flex flex-col items-start gap-2 text-white'>
                <h3 className='font-extrabold'>EXPLORE</h3>
                {links.map((link) => (
                    <Link key={link.title} href={link.path}
                    className=' text-[18px] md:text-[24px] hover:text-[#CAF290] hover:border-none font-light border-b border-gray-400'>
                        {link.title}
                    </Link>
                ))}
            </div>

            {/* Contact Info */}
            <div className='flex flex-col items-start gap-2 text-white '>
                <h3 className='font-extrabold'>CONTACT</h3>
                <div className='flex flex-col items-start gap-2'>
                    {contacts.map((contact) => (
                        contact.submenu.length === 0 ? (
                            <h3 key={contact.title} className="text-[18px] md:text-[24px] hover:text-[#CAF290] hover:border-none  font-light border-b border-gray-400">
                            {contact.title}
                            </h3>
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

    </footer>
  )
}

export default Footer
