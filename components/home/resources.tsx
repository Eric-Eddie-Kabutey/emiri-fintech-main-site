"use client";

import React, { useState } from "react";
import { resourcesData } from "@/data/resources-data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Resource = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const numItems = resourcesData.length;
  const angleStep = 360 / numItems;
  const radius = 280; // The radius of the circle in pixels (adjust for desired size)

  const rotationAngle = -(activeIndex * angleStep);
  const activeItem = resourcesData[activeIndex];
  const IconComponent = activeItem.icon;

  return (
    // The main section now just provides the background and ensures vertical centering
    <section className="bg-[#002266] text-white min-h-screen flex items-center p-4 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Responsive grid for the main layout */}
        <div className="flex flex-col gap-10 lg:gap-16">
          
          {/* Column 1: Title (Always on the left for lg screens) */}
          <div className="self-start text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold">Information</h2>
            <h2 className="text-4xl sm:text-5xl font-bold">Resources</h2>
          </div>

          {/* Column 2: Interactive Circle (Centered within its column) */}
          <div className="self-center flex justify-center items-center">
            <div className="relative" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
              <div className="absolute inset-0 border border-yellow-400/20 rounded-full" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: rotationAngle }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {resourcesData.map((item, index) => {
                  // Angle is calculated with -90 offset to place the first item at the top
                  const itemAngle = (index * angleStep) - 90;
                  const isActive = index === activeIndex;
                  
                  // Determine if the item is on the left or right side of the circle
                  const isLeftSide = itemAngle > 90 && itemAngle < 270;

                  return (
                    <div
                      key={item.id}
                      className="absolute top-1/2 left-1/2"
                      style={{ transform: `rotate(${itemAngle}deg) translateX(${radius}px) rotate(-${itemAngle}deg)` }}
                    >
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "flex items-center gap-4 group w-max", // w-max prevents wrapping
                          isLeftSide ? "flex-row-reverse" : "" // Reverse layout for left-side items
                        )}
                      >
                        <motion.div
                          className={cn("w-4 h-4 rounded-full transition-colors", isActive ? item.activeColor : 'bg-yellow-400')}
                          animate={{ scale: isActive ? 1.8 : 1 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                        <span className={cn(
                          "transition-opacity duration-300 whitespace-nowrap", // whitespace-nowrap is key
                          isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100',
                          isLeftSide ? "text-right" : "text-left" // Align text away from the circle
                        )}>
                          {item.title}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
              
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resource;