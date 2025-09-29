"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InfiniteScrollerProps } from "@/types/marquee-types";


const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  speed = 20, // A higher number means a slower scroll
  children,
  className,
}) => {
  // The core of the seamless loop: we duplicate the children.
  // React.Children.toArray ensures we can safely map over the children prop.
  const duplicatedChildren = React.Children.toArray(children);

  return (
    <div className={cn("container mx-auto px-6 lg:px-4 overflow-hidden", className)}>
      <motion.div
        className="flex gap-4" // Use flex and gap for spacing between cards
        animate={{ x: "-50%" }} // This is the key: we animate to half the total width
        transition={{
          duration: speed,
          ease: "linear",   // Ensures a constant, smooth speed
          repeat: Infinity, // The animation loops forever
        }}
      >
        {/* Render the children twice to create the seamless effect */}
        {duplicatedChildren}
        {duplicatedChildren}
      </motion.div>
    </div>
  );
};

export default InfiniteScroller;