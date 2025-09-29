"use client";

import Link from "next/link";
import { navigationItems } from "@/data/nav-data"; // Update import path if needed
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import DropdownNavItem from "./dropdown-nav-item"; 

// For demo purposes. In a real app, use `usePathname()` from `next/navigation`.
const activePath = "";

const DesktopNav = () => {
  return (
    <div className="flex items-center gap-6">
      <nav>
        <ul className="flex items-center">
          {navigationItems.map((item) => {
            const isActive = activePath.startsWith(item.href);

            return item.sublinks ? (
              // Use our custom component for items with sublinks
              <DropdownNavItem key={item.label} item={item} isActive={isActive} />
            ) : (
              // Use a simple Link for items without sublinks
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-base font-medium transition-colors",
                    // isActive ? "text-yellow-400" : "text-blue-900 hover:text-yellow-400"
                  )}
                >
                  {item.label}
                </Link>
                {/* {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400" />
                )} */}
              </li>
            );
          })}
        </ul>
      </nav>

      <span className="text-blue-900 font-bold cursor-pointer hover:text-yellow-400">عربي</span>
      <Search className="h-6 w-6 text-blue-900 cursor-pointer"/>
       <Button className="bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 rounded-md">
        Book a Meeting
      </Button>
    </div>
  );
};

export default DesktopNav;