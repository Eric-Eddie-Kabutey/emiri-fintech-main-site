"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavItem } from "@/types/nav-types";
import { cn } from "@/lib/utils";

const MegaMenuDropdown: React.FC<{ item: NavItem; isActive: boolean }> = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const columns = item.megaMenuContent || [];
  const numColumns = columns.length;

  const panelWidthClass = {
    1: 'w-[500px]',
    2: 'w-[800px]',
    3: 'w-[1050px]',
  }[numColumns] || 'w-auto';

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }[numColumns] || 'grid-cols-1';

  // --- NEW: Define the background colors for each column index ---
  const columnBackgrounds = [
    'bg-white',      // Column 1 (index 0)
    'bg-slate-50',   // Column 2 (index 1)
    'bg-slate-100',  // Column 3 (index 2)
  ];

  return (
    <li className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={cn(
        "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
        isActive || isOpen ? "text-fuchsia-600" : "text-slate-700 hover:text-slate-900"
      )}>
        {item.label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={cn("absolute top-full left-1/2 -translate-x-1/2 mt-3 origin-top", panelWidthClass)}
            >
              {/* 
                --- MODIFIED: The parent now only handles shape and shadow ---
                We remove `p-8` and `bg-white` from here and add `overflow-hidden`
                to ensure the inner column backgrounds respect the rounded corners.
              */}
              <div className="rounded-lg shadow-2xl overflow-hidden">
                <div className={cn("grid", gridColsClass)}>
                  {columns.map((column, index) => {
                    // Get the background color for the current column
                    const bgColor = columnBackgrounds[index] || 'bg-slate-200'; // Fallback for 4+ columns
                    
                    return (
                      // --- MODIFIED: Each column now has its own padding and background ---
                      <div
                        key={column.title}
                        className={cn(
                          "p-8", // Padding is now applied to each column
                          bgColor, // Dynamic background color
                          index > 0 && "border-l border-slate-200" // Keep the border separator
                        )}
                      >
                        <h3 className="text-lg font-bold text-gray-900">{column.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{column.description}</p>
                        
                        {item.label === "Platform" && index === 0 && (
                          <Link href="/how-it-works" className="mt-4 inline-block text-sm font-semibold text-fuchsia-500 group">
                             Explore how it works
                             <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-fuchsia-500"></span>
                          </Link>
                        )}

                        <div className={cn("mt-6", column.linkLayout === 'grid' ? "grid grid-cols-2 gap-4" : "space-y-4")}>
                          {column.links.map((link) => (
                            <Link key={link.title} href={link.href} className="block group">
                              <div className="flex items-start gap-3">
                                {link.icon && <div>{link.icon}</div>}
                                <div>
                                  <p className="font-semibold text-gray-800 group-hover:text-fuchsia-600 transition-colors">{link.title}</p>
                                  <p className="text-sm text-gray-500">{link.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </li>
  );
};

export default MegaMenuDropdown;