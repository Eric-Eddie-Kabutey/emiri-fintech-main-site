"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavItem } from "@/types/nav-types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface DropdownNavItemProps {
  item: NavItem;
  isActive: boolean;
}

const DropdownNavItem: React.FC<DropdownNavItemProps> = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* The main navigation link/trigger */}
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors relative",
          isOpen || isActive ? "text-yellow-400" : "text-blue-900 hover:text-yellow-400"
        )}
      >
        {item.label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
        {/* Active Underline */}
        {isActive && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />
        )}
      </button>

      {/* The Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full pt-4 -left-4" // Positioned below the parent
          >
            {/* Yellow Pointer Bar */}
            <div className="absolute top-1 left-4 w-20 h-1.5 bg-yellow-400" />
            
            <div className="bg-white rounded-md shadow-lg overflow-hidden">
              <ul className={cn(
                "grid gap-x-6 gap-y-3 p-6",
                item.dropdownCols === 2 ? "grid-cols-2 w-[600px]" : "grid-cols-1 w-[250px]"
              )}>
                {item.sublinks?.map((sublink) => (
                  <li key={sublink.label}>
                    <Link
                      href={sublink.href}
                      className="relative block text-blue-900 hover:underline group"
                    >
                      {sublink.label}
                      {/* Tooltip on Hover */}
                      <span className="absolute -top-6 left-0 w-max bg-slate-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {sublink.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DropdownNavItem;