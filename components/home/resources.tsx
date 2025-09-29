"use client";

import React, { useState } from "react";
import { resourcesData } from "@/data/resources-data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Resources = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const numItems = resourcesData.length;
  const angleStep = 360 / numItems;
  const radius = 280; // The radius of the circle in pixels

  // Calculate the rotation needed to bring the active item to the top
  // -90 degrees correction to position the first item at the top (12 o'clock)
  const rotationAngle = -(activeIndex * angleStep) - 90;
  const activeItem = resourcesData[activeIndex];
  const IconComponent = activeItem.icon;

  return (
    <section className=" bg-[#002266] text-white min-h-screen flex flex-col justify-center items-center overflow-hidden p-4">
      {/* Top Left Title */}
      <div className="text-start">
        <h2 className="text-start text-3xl sm:text-4xl font-bold">Information</h2>
        <h2 className="text-start text-3xl sm:text-4xl font-bold">Resources</h2>
      </div>

      {/* Main container for the circular layout */}
      <div className="container mx-auto px-4 relative" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
        {/* Faint outer decorative circle */}
        <div className="absolute inset-0 border border-yellow-400/20 rounded-full" />

        {/* The rotating wheel that holds the satellite nodes */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: rotationAngle }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {resourcesData.map((item, index) => {
            const itemAngle = index * angleStep;
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${itemAngle}deg) translateX(${radius}px) rotate(-${itemAngle}deg)`,
                }}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    className={cn("w-4 h-4 rounded-full transition-colors", isActive ? item.activeColor : 'bg-yellow-400')}
                    animate={{ scale: isActive ? 1.8 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                  <span className={cn("transition-opacity duration-300", isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100')}>
                    {item.title}
                  </span>
                </button>
              </div>
            );
          })}
        </motion.div>
        
        {/* Central Content Display */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#001d57] border border-yellow-400/40 rounded-full flex flex-col items-center justify-center text-center p-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col items-center justify-center"
                >
                    <IconComponent className="w-12 h-12 mb-4 text-teal-300"/>
                    
                    <h3 className="text-xl font-bold mb-2">{activeItem.title}</h3>
                    <p className="text-sm text-gray-300 mb-4 max-w-xs">{activeItem.description}</p>
                    <Link href={activeItem.href} className="text-sm font-semibold flex items-center gap-2 group">
                        Discover More
                        <span className="w-3 h-3 border-2 border-white rounded-full transition-transform group-hover:translate-x-1"/>
                    </Link>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resources;