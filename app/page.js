"use client";

import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import ReviewsSection from "@/components/Reviews";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Services />
      <ReviewsSection />
      <AboutSection />
      <ImageGallery />
    </>
  );
}
