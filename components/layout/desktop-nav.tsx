"use client";

import Link from "next/link";
import { NavItem } from "@/types/nav-types";
import Logo from "@/components/common/logo";
import DropdownMenuItem from "./dropdown-menu-item";

interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {
  return (
    <div className="flex w-full items-center justify-between bg-white rounded-full shadow-lg px-6 py-3">
      <Logo />
      <nav>
        <ul className="flex items-center space-x-2">
          {navItems.map((item) =>
            item.sublinks ? (
              // Use our custom dropdown component for items with sublinks
              <DropdownMenuItem key={item.label} item={item} />
            ) : (
              // Use a simple Link for regular menu items
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-slate-800 transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNav;