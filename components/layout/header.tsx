"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { topBarLinks } from "@/data/nav-data";
import Logo from "../common/logo";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  // We don't need the hide-on-scroll logic anymore based on the new design,
  // but we keep the scroll detection for the background.
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The background is active if the page is scrolled OR the header is hovered.
  const isBgActive = scrolled || isHovered;

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wrapper to handle the background transition */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-300",
          isBgActive ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
        )}
      />
      
      {/* Content layers sit on top of the background */}
      <div className="relative z-10">
        {/* Top Bar */}
        <div className={cn(
          "hidden md:block border-b transition-colors duration-300",
          isBgActive ? "border-gray-200" : "border-white/20"
        )}>
          <div className="container mx-auto px-4 h-10 flex justify-end items-center gap-6 text-xs">
            {topBarLinks.map(link => (
              <Link key={link.label} href={link.href} className={cn("hover:underline", isBgActive ? "text-blue-900" : "text-white")}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Main Header */}
        <div className={cn(
          "border-b transition-colors duration-300",
          isBgActive ? "border-gray-200" : "border-transparent"
        )}>
          <div className="container mx-auto px-4 flex justify-between items-center h-20">
            <Logo isBgActive={isBgActive} /> {/* Pass state to logo if it needs to change color */}
            
            <div className="hidden md:flex">
              <DesktopNav />
            </div>

            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;