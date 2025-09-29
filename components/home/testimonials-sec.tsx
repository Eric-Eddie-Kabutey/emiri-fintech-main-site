"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import  { EmblaOptionsType } from "embla-carousel";
import { testimonialsData } from "@/data/testimonial-data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const TestimonialsSec = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ... (All the carousel hooks: scrollTo, scrollPrev, scrollNext, useEffect remain exactly the same)
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect) };
  }, [emblaApi]);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section Text (No changes here) */}
        <div className="text-start mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                <span className="text-fuchsia-500">#1 platform</span> for banks. See why
            </h2>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-600">
                <p className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-6 before:w-1 before:bg-fuchsia-400">
                    More than half of banks offering digital assets run on Taurus infrastructure in Switzerland.
                </p>
                <p className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-6 before:w-1 before:bg-fuchsia-400">
                    Entrusted and in production with the full spectrum of financial institutions.
                </p>
            </div>
        </div>

        {/* --- CAROUSEL SECTION --- */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* Each slide is now a self-contained responsive layout */}
              {testimonialsData.map((testimonial, index) => (
                <div key={testimonial.id} className="relative flex-[0_0_100%] min-w-0 h-[550px] lg:h-[500px]">
                  {/* This container handles the responsive switch from overlay to grid */}
                  <div className="w-full h-full lg:grid lg:grid-cols-2">
                    
                    {/* 1. Content Area (Left side on desktop) */}
                    <div className="relative z-10 flex flex-col justify-end p-8 md:p-12 lg:bg-slate-800 text-white">
                       <AnimatePresence>
                         {selectedIndex === index && (
                           <motion.div
                             key={testimonial.id}
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -20 }}
                             transition={{ duration: 0.5, ease: "easeInOut" }}
                           >
                             <blockquote className="text-xl md:text-2xl font-medium max-w-3xl">
                               <span className="text-fuchsia-400 text-5xl font-serif leading-none mr-2"></span>
                               {testimonial.quote}
                             </blockquote>
                             <div className="mt-6">
                               <p className="font-bold">{testimonial.authorName}</p>
                               <p className="text-sm text-gray-300">{testimonial.authorTitle}</p>
                             </div>
                             <Button asChild className="mt-8 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-lg px-6 py-3">
                                <Link href={testimonial.ctaLink}>FIND OUT MORE</Link>
                             </Button>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>

                    {/* 2. Image Area (Right side on desktop) */}
                    <div className="absolute inset-0 lg:relative">
                       <Image 
                          src={testimonial.backgroundImage} 
                                  alt={testimonial.companyName} 
                                  fill
                          className="w-full h-full object-fit opacity-30 lg:opacity-100"
                        />
                       {/* Gradient overlay ONLY for mobile/tablet view */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows (Positioned relative to the new outer wrapper) */}
          <button onClick={scrollPrev} className="lg:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full hover:bg-fuchsia-500 transition-colors">
             <ChevronLeft className="h-6 w-6 text-white"/>
          </button>
          <button onClick={scrollNext} className="lg:hidden absolute right-1 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full hover:bg-fuchsia-500 transition-colors">
             <ChevronRight className="h-6 w-6 text-white"/>
          </button>
           
          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
             {testimonialsData.map((_, index) => (
               <button key={index} onClick={() => scrollTo(index)} className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-fuchsia-500' : 'w-4 bg-gray-400'}`}/>
             ))}
          </div>
        </div>

        {/* Logo Navigation (No changes here) */}
        <div className="mt-8 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => scrollTo(index)}
              className="transition-all duration-300 text-gray-400 hover:text-gray-800"
            >
               <Image src={testimonial.logo} alt={testimonial.companyName} width={100} height={60} className={`h-4 md:h-8 w-auto transition-all duration-300 cursor-pointer ${selectedIndex === index ? 'grayscale-0' : 'grayscale'}`}  />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSec;