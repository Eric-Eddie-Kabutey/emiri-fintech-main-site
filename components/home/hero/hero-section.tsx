"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "@/data/hero-data";
import { HeroSlide } from "@/types/hero-type";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// The main, refactored Hero Section component
const HeroSection = () => {
  // Embla setup: This carousel is for logic only (state, autoplay). It won't be visible.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to scroll to a specific slide, passed to indicators
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // Effect to update our component's state when Embla's state changes
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    // Initial sync
    onSelect();
    return () => { emblaApi.off("select", onSelect) };
  }, [emblaApi]);

  const currentSlide = heroSlides[selectedIndex];

  return (
    <section
      className="relative min-h-[80vh] lg:min-h-screen w-full overflow-hidden bg-[#EAE8E1]"
      style={{
        backgroundImage: `url(/background-pattern.svg)`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* 
        This is the invisible Embla instance. It handles the logic.
        We don't need to see it, so we can hide it.
      */}
      <div className="overflow-hidden h-0 w-0" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (<div key={slide.id}></div>))}
        </div>
      </div>

      {/* 
        This is the VISUAL layer for the carousel backgrounds.
        We use Framer Motion to fade between them based on `selectedIndex`.
      */}
      <AnimatePresence>
        {heroSlides.map((slide, index) =>
          selectedIndex === index && (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >              
                    
                    <Image src={slide.imageSrc} alt={slide.title} fill className="object-cover h-full w-full" />
            </motion.div>
          )
        )}
      </AnimatePresence>
      
      {/* 
        This is the CONTENT overlay. It sits on top of the background visuals.
        `pt-*` values are to account for your fixed header.
      */}
      <div className="absolute inset-0 z-10 pt-28 md:pt-32">
        <div className="w-full h-full flex flex-col justify-between p-4 md:p-8">
          <CarouselIndicators
            slides={heroSlides}
            selectedIndex={selectedIndex}
            scrollTo={scrollTo}
          />
          <ContentArea slide={currentSlide} />
        </div>
      </div>
    </section>
  );
};

// Sub-component for Text Content (remains largely the same, but with refined styles)
const ContentArea: React.FC<{ slide: HeroSlide }> = ({ slide }) => {
  return (
    <div className="container lg:max-w-4xl 2xl:max-w-max absolute left-8 inset-x-0 lg:bottom-30 2xl:bottom-48 lg:left-24  md:left-8  w-auto md:w-1/2 lg:w-2/5 text-start md:text-left text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
      <p className="text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8">
        {slide.description}
      </p>
      <Link href={slide.ctaHref}>
        <Button className="bg-[#1E3A8A] hover:bg-[#1c347a] text-white font-bold py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105">
          {slide.ctaText} &rarr;
        </Button>
      </Link>
    </div>
  );
};

// Sub-component for Carousel Indicators (refactored for better responsive positioning)
const CarouselIndicators: React.FC<{
  slides: HeroSlide[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
}> = ({ slides, selectedIndex, scrollTo }) => {
  // New positioning: vertical center, left side
  return (
    <div className="absolute bottom-3.5 left-20 lg:top-1/2 -translate-y-1/2 lg:left-10">
      <div className="relative flex  lg:flex-col gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            className="font-mono text-lg transition-colors duration-300"
          >
            <motion.span
              animate={{ color: selectedIndex === index ? '#F59E0B' : '#fff' }}
            >
              0{slide.id}
            </motion.span>
          </button>
        ))}
        <motion.div
          className="absolute h-[2px] w-10 bg-[#F59E0B] -right-2 top-0"
          // We only need to animate the Y-axis now
          animate={{
            y: `${selectedIndex * 36}px`, // Approx. button height + gap
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;