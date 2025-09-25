"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NavItem } from "@/types/nav-types";
import { cn } from "@/lib/utils";

interface DropdownMenuItemProps {
  item: NavItem;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (  
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* The trigger button */}
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isOpen ? "text-orange-600" : "text-slate-800 hover:text-slate-900"
        )}
      >
        {item.label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      {/* The dropdown content with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full mt-2 w-40 origin-top rounded-md border border-slate-200 bg-[#effce3] shadow-lg"
          >
            <div className="p-2">
              {item.sublinks?.map((sublink) => (
                <Link
                  key={sublink.label}
                  href={sublink.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-[#1e3a3a] hover:text-white"
                  onClick={() => setIsOpen(false)} // Close on click
                >
                  {sublink.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default DropdownMenuItem;