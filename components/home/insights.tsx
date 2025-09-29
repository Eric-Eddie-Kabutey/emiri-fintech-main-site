"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import  { EmblaOptionsType } from "embla-carousel";
import { insightsData } from "@/data/insights-data";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Insights = () => {
  const options: EmblaOptionsType = {
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(); // Initial call
  }, [emblaApi]);

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Section: Title & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Taurus <span className="text-fuchsia-500">Insights</span>
            </h2>
            <Link href="/blog" className="flex items-center gap-2 mt-4  text-sm font-semibold text-fuchsia-500 hover:underline">
              VISIT OUR BLOG <ArrowRight className="h-4 w-auto" />
            </Link>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Learn about technology, use cases and market insights</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <label htmlFor="email-subscribe" className="sr-only">Email</label>
              <input
                id="email-subscribe"
                type="email"
                placeholder="Email *"
                required
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              />
              <Button type="submit" className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold rounded-md px-6 py-2">
                SUBSCRIBE
              </Button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              This newsletter service is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {insightsData.map((post) => (
              <div key={post.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                <div className="flex flex-col">
                  <Link href={post.href} className="block overflow-hidden rounded-lg mb-4">
                    <Image src={post.imageSrc} alt={post.title} width={350} height={100} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                  </Link>
                  <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  <p className="text-sm text-gray-600 mt-2 flex-grow">{post.summary}</p>
                  <Link href={post.href} className="mt-4 text-sm font-semibold text-fuchsia-500 group">
                    READ MORE {`>`} 
                    <span className="block max-w-0 group-hover:max-w-[85px] transition-all duration-300 h-0.5 bg-fuchsia-500"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation and Indicators */}
        <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
                <button onClick={scrollPrev} disabled={!canScrollPrev} className="p-2 rounded-full disabled:opacity-50 transition-colors bg-fuchsia-500 hover:bg-fuchsia-600 text-white">
                    <ChevronLeft className="h-5 w-5"/>
                </button>
                <button onClick={scrollNext} disabled={!canScrollNext} className=" p-2 rounded-full disabled:opacity-50 transition-colors bg-fuchsia-500 hover:bg-fuchsia-600 text-white">
                    <ChevronRight className="h-5 w-5"/>
                </button>
            </div>
            <div className="flex items-center gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-slate-800' : 'w-4 bg-slate-300'}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;