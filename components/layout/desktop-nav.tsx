"use client";

import Link from "next/link";
import { NavItem } from "@/types/nav-types"; // Ensure path is correct
import Logo from "@/components/common/logo"; // Ensure path is correct
import MegaMenuDropdown from "./mega-menu-dropdown"; // We use the new mega menu
import { cn } from "@/lib/utils";

// In a real app, you'd get this from usePathname()
const activePath = "/solutions"; 

const DesktopNav: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-full shadow-lg px-2 py-3 w-full">
      <Logo />
      <nav>
        <ul className="flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activePath.startsWith(item.href) && item.href !== "/";
            
            // This is the updated logic: check for megaMenuContent
            return item.megaMenuContent ? (
              <MegaMenuDropdown key={item.label} item={item} isActive={isActive} />
            ) : (
              // This is the standard link for items without a dropdown
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "text-fuchsia-600"
                      : "text-slate-700 hover:text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNav;