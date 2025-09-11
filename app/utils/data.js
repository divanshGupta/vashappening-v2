import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const categories = [
    "All works",
    "Ecommerce",
    "Tech",
    "Corporate",
    "Manufacturing",
    "Education",
    "Restaurant",
    "Travel",
    "Sport",
];

export const projects = [
    { title: "Skmei Watches", description: "Ecommerce Store", img: "/skmei-hero.webp", link: "https://skmei.in", category: "Ecommerce", featured: true },
    { title: "Portronics Store", description: "Ecommerce Store", img: "/portronics-hero.webp", link: "https://portronics.com", category: "Ecommerce", featured: true },
    { title: "JK Adventure", description: "Travel Agency", img: "/jkadventure-hero.webp", link: "https://jk-adventure.vercel.app", category: "Travel", featured: true },
    { title: "Wevstack Tools", description: "Tools and Technologies", img: "/wevstack-hero.webp", link: "https://wevstack.vercel.app", category: "Tech", featured: true },
    { title: "Acme Store Demo", description: "Ecommerce Store Demo", img: "/acme-hero.webp", link: "https://demo.vercel.store/", category: "Ecommerce", featured: true },
    { title: "Design World", description: "Ecommerce Store", img: "/designworld-hero.webp", link: "https://design-world.vercel.app", category: "Ecommerce", featured: false },
    {title: "Pandey Tuitions", description: "Educational Website", img: "/pandeytuitions-hero.webp", link: "https://pandeytuitions.vercel.app", category: "Education", featured: false },
];

export const images = [
  { src: "/skmei-hero.webp", alt: "Work Example 1", className: "top-24 left-4 w-24 md:w-32" },
  { src: "/portronics-hero.webp", alt: "Work Example 2", className: "top-20 right-12 w-28 md:w-36" },
  { src: "/wevstack-hero.webp", alt: "Work Example 3", className: "bottom-16 left-8 w-24 md:w-32" },
  { src: "/jkadventure-hero.webp", alt: "Work Example 4", className: "bottom-20 right-16 w-28 md:w-36" },
  { src: "/acme-hero.webp", alt: "Work Example 5", className: "top-1/2 left-1 md:left-20 w-24 md:w-32" },
  { src: "/pandeytuitions-hero.webp", alt: "Work Example 6", className: "top-1/2 right-2 md:right-12 w-24 md:w-32" },
];

export const navLinks = [
    {title: "Work", path: "/work"},
    {title: "Services", path: "/services"},
    {title: "About", path: "/about"},
    {title: "Contact", path: "/contact"},
]

export const contents = [
  {
    text: "We're about results",
    subtext: "We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.",
  },
  {
    text: "Experienced Team",
    subtext: "In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)",
  },
  {
    text: "Quality Assurance",
    subtext: "We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.",
  },
  {
    text: "Support & Aftercare",
    subtext: "We pride ourselves on delivering highly responsive support long after your website has been launched.",
  },
];

export const footerLinks = [
    {title: "Works", path: "/work"},
    {title: "Services", path: "/services"},
    {title: "About", path: "/about"},
    {title: "Reviews", path: "/reviews"},
    {title: "Contact", path: "/contact"},
    {title: "Blog", path: "/blogs"},
]

export const footerContacts = [
  { title: "+91 91402 51061", submenu: [] },
  { title: "hello@vashappening.com", submenu: [] },
  { title: "B-Block, Tax Colony, Adi Udupi", submenu: [] },
  { title: "576103, Udupi, Karnataka", submenu: [] },
  {
    title: "Socials",
    submenu: [
      { id: 1, icon: Facebook, path: "https://facebook.com" },
      { id: 2, icon: Instagram, path: "https://instagram.com/vashappening.in" },
      { id: 3, icon: Youtube, path: "https://youtube.com" },
    ],
  },
];

export const services = [
  {
    title: "DESIGN",
    color: "bg-pink-500",
    description:
      "We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action.",
    items: [
      "Product Design",
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
      "Shopify Development",
      "Technical SEO",
      "School ERP Software"
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