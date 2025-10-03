"use client"; 
import React from 'react';
import { Star, MoveRight } from 'lucide-react';

// Define the custom green highlight color
const HIGHLIGHT_COLOR = '#caf290';

// Mock Review Data
const reviews = [
  {
    id: 1,
    name: "Supresh Mehta",
    company: "Skmei Watches",
    role: "E-commerce Head",
    quote: "The Vashappening team were fantastic to work with. Their passion and skill shines through in each interaction and their dedication to our project ensured that the final product went beyond expectation. They truly understand e-commerce performance.",
    rating: 5,
    project: "Skmei E-commerce Revamp",
  },
  {
    id: 2,
    name: "Vivek Prabhu",
    company: "Portronics",
    role: "Marketing Manager",
    quote: "Vashappening are an absolute pleasure to work with. They are undoubtedly experts in their field and deliver websites that put customers at the centre of online offerings. Our conversion rates saw an immediate uplift.",
    rating: 5,
    project: "Portronics Store Integration",
  },
  {
    id: 3,
    name: "Sachin Singh",
    company: "JK Adventure",
    role: "Founder",
    quote: "Vashappening delivered my travel website in just one month, with every detail and feature I wanted. The team was responsive, professional, and their design eye is truly world-class. Highly recommended for startups!",
    rating: 5,
    project: "Travel Platform Launch",
  },
  {
    id: 4,
    name: "Aisha Sharma",
    company: "Dose Paris",
    role: "Restaurant Owner",
    quote: "The web application they built for our reservation system is flawless. It’s elegant, fast, and has drastically reduced our no-show rate. It’s the perfect blend of design and functionality.",
    rating: 5,
    project: "Bespoke Reservation App",
  },
  {
    id: 5,
    name: "Karan Singh",
    company: "Wevstack Tools",
    role: "CTO",
    quote: "We needed a powerful, scalable platform for our SaaS product. Vashappening provided the technical expertise and strategic guidance to build a robust foundation that can handle our rapid user growth.",
    rating: 5,
    project: "SaaS Platform Development",
  },
  {
    id: 6,
    name: "Priya Varma",
    company: "Acme Enterprises",
    role: "VP Strategy",
    quote: "Beyond the beautiful design, their digital marketing strategies delivered real results. We saw a 40% increase in qualified leads within the first quarter after launch.",
    rating: 5,
    project: "Lead Generation Site",
  },
];

// Component for a single review card
const ReviewCard = ({ review }) => (
  <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col h-full transition-transform duration-300 hover:scale-[1.03] hover:shadow-pink-500/30 border border-gray-800">
    {/* Rating Stars */}
    <div className="flex mb-4">
      {Array(review.rating).fill(0).map((_, i) => (
        <Star key={i} className="h-5 w-5 text-pink-500 fill-pink-500" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-gray-200 text-lg italic flex-grow mb-6">
      &ldquo;{review.quote}&rdquo;
    </p>

    {/* Project */}
    <div className="text-sm font-medium mb-4">
        <span className="text-gray-500 mr-2">Project:</span>
        <span style={{ color: HIGHLIGHT_COLOR }} className="font-semibold">{review.project}</span>
    </div>

    {/* Author Info */}
    <div>
      <p className="text-white font-bold text-xl">{review.name}</p>
      <p className="text-pink-500 text-sm">{review.role} @ {review.company}</p>
    </div>
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Custom Styles for Scrolling Marquee Effect */}
      <style jsx global>{`
        /* Define custom keyframes for smooth scrolling */
        @keyframes scroll-x {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .marquee-content {
          animation: scroll-x 90s linear infinite; /* Adjust speed via time value */
        }
        
        /* Pause on hover for better readability */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        /* Highlight text with custom color */
        .highlight {
            color: ${HIGHLIGHT_COLOR};
        }
      `}</style>
      
      <main className="max-w-7xl mx-auto pt-28 md:pt-30 lg:pt-44 pb-16 px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
            <span style={{ color: HIGHLIGHT_COLOR }}>Client</span> Success.
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto">
            See why <span className="text-pink-500">leading brands</span> trust us to drive their digital growth.
          </h2>
          <div className="mt-8">
            <a 
                href="/contact" 
                className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-xl"
            >
                Start Your Project
                <MoveRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
        
        {/* Marquee/Scroll Effect Section */}
        <div className="overflow-hidden space-y-8 py-10">
            <h3 className="text-xl font-bold uppercase text-gray-600 tracking-widest text-left">
                Trusted by Industry Leaders
            </h3>

            {/* Row 1: Leftward Scroll */}
            <div className="marquee-container flex flex-nowrap w-full">
                {/* Clone the reviews list multiple times to fill the space and ensure smooth looping */}
                <div className="marquee-content flex flex-shrink-0 space-x-8 md:space-x-12">
                    {[...reviews, ...reviews, ...reviews].map((review, index) => (
                        <div key={index} className="w-96 flex-shrink-0">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Rightward Scroll (Reverse Animation) */}
            <div className="marquee-container flex flex-nowrap w-full">
                <div className="marquee-content flex flex-shrink-0 space-x-8 md:space-x-12" style={{ animationDirection: 'reverse' }}>
                    {[...reviews.slice().reverse(), ...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
                        <div key={index} className="w-96 flex-shrink-0">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-24">
            <h3 className="text-4xl font-extrabold mb-4">
                Ready for <span style={{ color: HIGHLIGHT_COLOR }}>Your Success Story?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8">
                Let's turn your vision into a measurable outcome. Contact us today.
            </p>
            <a 
                href="/contact" 
                className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-10 rounded-lg transition-colors duration-300 text-xl shadow-xl shadow-pink-500/40"
            >
                Discuss Your Project
            </a>
        </div>

      </main>
    </div>
  );
}
