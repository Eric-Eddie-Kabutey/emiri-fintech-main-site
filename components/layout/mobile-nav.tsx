"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/nav-types";
import Logo from "../common/logo";

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  // Flatten the navigation items for the mobile menu
  const allLinks = navItems.reduce((acc, item) => {
    acc.push({ label: item.label, href: item.href });
    if (item.sublinks) {
      item.sublinks.forEach(sub => {
        // We'll rename "Case studies" to "Case Studies" for consistency if needed, but keeping as per image
        acc.push({ label: sub.label, href: sub.href });
      });
    }
    return acc;
  }, [] as { label: string; href: string }[]);
  
  // Custom order as seen in the mobile screenshot
  const mobileLinkOrder = ["Services", "About Us", "Enterprise", "Case studies", "Insights", "Tool"];
  const sortedLinks = allLinks.sort((a, b) => {
      const indexA = mobileLinkOrder.indexOf(a.label);
      const indexB = mobileLinkOrder.indexOf(b.label);
      return indexA - indexB;
  });


  return (
    <div className="md:hidden flex items-center justify-between w-full">
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#10754A] hover:bg-[#0c5c3a] text-white rounded-full h-12 w-28 text-base font-semibold"
          >
            MENU
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#effce3] border-none" side="right">
          <SheetHeader className="flex flex-row justify-end items-center">
             <SheetClose asChild>
                <Button className="bg-black text-white rounded-full hover:bg-gray-800 w-24 h-10">
                  CLOSE
                </Button>
              </SheetClose>
          </SheetHeader>
          <div className="mt-8">
            <nav className="flex flex-col space-y-4">
              {sortedLinks.map((link) => (
                link.href !== "#" && ( // Exclude non-navigable parent links
                    <SheetClose asChild key={link.label}>
                         <Link
                           href={link.href}
                           className="text-2xl text-gray-800 hover:text-black py-2"
                         >
                           {link.label}
                         </Link>
                    </SheetClose>
                )
              ))}
              <SheetClose asChild>
                <Link
                    href="/contact" // Assuming a contact or booking link
                    className="text-2xl text-gray-800 hover:text-black py-2 font-medium"
                >
                    Book a free Call
                </Link>
              </SheetClose>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;