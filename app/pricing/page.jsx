import React from 'react';
import { Check, X } from 'lucide-react'; // Assumes you have Heroicons installed
import Link from 'next/link';

// Helper component for features
const FeatureItem = ({ text, included }) => (
  <li className="flex items-center text-sm mb-3">
    {included ? (
      <Check className="h-5 w-5 text-[#CAF290] mr-2 flex-shrink-0" />
    ) : (
      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
    )}
    <span className={included ? 'text-gray-300' : 'text-gray-500'}>{text}</span>
  </li>
);

export default function Pricing() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 pt-28 md:pt-28 xl:pt-44 relative overflow-hidden">
      {/* Background Gradient/Effect - Mimicking your site's subtle glow */}
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-pink-500 opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CAF290] opacity-5 rounded-full filter blur-3xl animate-pulse-slow-reverse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Flexible Pricing Plans
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Choose a plan that scales with your business needs, from essential web presence to advanced digital growth.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">

          {/* Starter Card */}
          <div className="bg-gray-900 rounded-xl p-8 flex flex-col transform hover:scale-[1.02] transition-all duration-300 shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">Perfect for new businesses getting online.</p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold text-white">₹399</span>
              <span className="text-xl font-semibold text-gray-400">/mo</span>
            </div>
            <ul className="flex-grow mb-8 space-y-3">
              <FeatureItem text="3-page Static Website" included={true} />
              <FeatureItem text="Shared Hosting + SSL" included={true} />
              <FeatureItem text="Basic CRM" included={false} />
              <FeatureItem text="Basic WhatsApp Chat" included={true} />
              <FeatureItem text="Payment Gateway" included={true} />
              <FeatureItem text="On-Page SEO: Basic" included={true} />
            </ul>
            <Link href='/contact' className="w-full text-center bg-[#CAF290] hover:bg-pink-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Choose Starter
            </Link>
          </div>

          {/* Growth Card (Most Popular) */}
          <div className="bg-gradient-to-br from-pink-500 to-indigo-700 rounded-xl p-8 flex flex-col transform scale-[1.03] shadow-2xl border-2 border-pink-500 relative z-20">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#caf290] text-gray-900 text-xs font-bold py-1 px-4 rounded-full shadow-md">
              Most Popular
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
            <p className="text-gray-200 text-sm mb-6">Accelerate your online presence and engagement.</p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold text-white">₹699</span>
              <span className="text-xl font-semibold text-gray-200">/mo</span>
            </div>
            <ul className="flex-grow mb-8 space-y-3">
              <FeatureItem text="5-page Static Website" included={true} />
              <FeatureItem text="Shared Hosting + SSL" included={true} />
              <FeatureItem text="1 Business Email ID" included={true} />
              <FeatureItem text="Lead Form WhatsApp Chat" included={true} />
              <FeatureItem text="Payment Gateway" included={true} />
              <FeatureItem text="On-Page SEO: Meta + Sitemap" included={true} />
            </ul>
            <Link href='/contact' className="w-full text-center bg-white hover:bg-[#CAF290] text-pink-500 hover:text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Choose Growth
            </Link>
          </div>

          {/* Pro Card */}
          <div className="bg-gray-900 rounded-xl p-8 flex flex-col transform hover:scale-[1.02] transition-all duration-300 shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Pro</h3>
            <p className="text-gray-400 text-sm mb-6">Unleash full digital marketing power.</p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold text-white">₹999</span>
              <span className="text-xl font-semibold text-gray-400">/mo</span>
            </div>
            <ul className="flex-grow mb-8 space-y-3">
              <FeatureItem text="7-page Dynamic Website" included={true} />
              <FeatureItem text="Premium Hosting + SSL" included={true} />
              <FeatureItem text="2 Business Email IDs" included={true} />
              <FeatureItem text="Auto-reply WhatsApp Chat" included={true} />
              <FeatureItem text="Payment Gateway" included={true} />
              <FeatureItem text="On-Page SEO: Speed + Keywords" included={true} />
            </ul>
            <Link href='/contact' className="w-full text-center bg-[#CAF290] hover:bg-pink-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Choose Pro
            </Link>
          </div>
        </div>

        {/* Optional: Annual Saving / Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-16">
          Save 15% on Annual Plans - Transparent pricing - No hidden fees.
        </p>
      </div>
    </section>
  );
}