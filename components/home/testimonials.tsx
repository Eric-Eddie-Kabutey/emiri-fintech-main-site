"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import  { EmblaOptionsType } from "embla-carousel";
import { Testimonial } from '@/types/testimonial-types';
import { testimonialsData } from "@/data/testimonial-data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Testimonials = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect) };
  }, [emblaApi]);

  const activeTestimonial = testimonialsData[selectedIndex];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section Text */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="text-fuchsia-500">#1 platform</span> for banks. See why
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-600">
            <p className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-6 before:w-1 before:bg-fuchsia-400">
              More than half of banks offering digital assets run on Taurus infrastructure in Switzerland.
            </p>
            <p className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-6 before:w-1 before:bg-fuchsia-400">
              Entrusted and in production with the full spectrum of financial institutions.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative rounded-xl overflow-hidden bg-slate-800" ref={emblaRef}>
           <div className="flex">
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="relative flex-[0_0_100%] min-w-0 h-[500px]">                  
                   <Image src={testimonial.backgroundImage} alt={testimonial.companyName} width={460} height={100} className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                </div>
              ))}
           </div>

           {/* Content Overlay */}
           <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
             <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <blockquote className="text-xl md:text-2xl font-medium max-w-3xl">
                    <span className="text-fuchsia-400 text-5xl font-serif leading-none mr-2"></span>
                    {activeTestimonial.quote}
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-bold">{activeTestimonial.authorName}</p>
                    <p className="text-sm text-gray-300">{activeTestimonial.authorTitle}</p>
                  </div>
                  <Button asChild className="mt-8 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-lg px-6 py-3">
                     <Link href={activeTestimonial.ctaLink}>FIND OUT MORE</Link>
                  </Button>
                </motion.div>
             </AnimatePresence>
           </div>
          
           {/* Navigation Arrows */}
           <button onClick={scrollPrev} className="hidden md:block lg:hidden absolute left-1 top-1/2 -translate-y-1/2 p-2 bg-fuchsia-500 rounded-full hover:bg-fuchsia-500 transition-colors">
              <ChevronLeft className="h-6 w-6 text-white"/>
           </button>
           <button onClick={scrollNext} className="hidden md:block lg:hidden absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-fuchsia-500 rounded-full hover:bg-fuchsia-500 transition-colors">
              <ChevronRight className="h-6 w-6 text-white"/>
           </button>
           
           {/* Dot Indicators */}
           <div className="absolute bottom-8 right-4 lg:left-1/2 -translate-x-1/2 flex gap-2">
              {testimonialsData.map((_, index) => (
                <button key={index} onClick={() => scrollTo(index)} className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-fuchsia-500' : 'w-4 bg-gray-400'}`}/>
              ))}
           </div>
        </div>

        {/* Logo Navigation */}
        <div className="mt-8 flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => scrollTo(index)}
              className="transition-all duration-300 text-gray-400 hover:text-gray-800"
            >
                  {/* <testimonial.logo className={`h-6 transition-all duration-300 ${selectedIndex === index ? 'grayscale-0' : 'grayscale'}`} /> */}
                  <Image src={testimonial.logo} alt={testimonial.companyName} width={100} height={60} className={`h-4 md:h-8 w-auto transition-all duration-300 cursor-pointer ${selectedIndex === index ? 'grayscale-0' : 'grayscale'}`}  />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;