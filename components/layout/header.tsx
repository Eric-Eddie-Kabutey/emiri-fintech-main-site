"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navigationItems } from "@/data/nav-data"; 
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav"; 

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const headerVariants = {
    visible: { y: 0 },
    hidden: { y: "-110%" }, // Move it completely out of view
  };

  return (
    <motion.header
      variants={headerVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 p-4"
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full">
          <DesktopNav navItems={navigationItems} />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav navItems={navigationItems} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;