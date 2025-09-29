"use client";

import React from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigationItems } from '@/data/nav-data';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '../ui/button';


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2">
            <Menu className="h-8 w-8 text-blue-900" />
            <span className="sr-only">Open Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full bg-[#002266] text-white p-0 border-none flex flex-col">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-4">
                <SheetClose>
                    <X className="h-6 w-6"/>
                </SheetClose>
                <Search className="h-6 w-6"/>
                <span>English</span>
            </div>
            {/* <CBUAELogo className="h-10 text-white" /> */}
        </div>
        
        {/* Scrollable Nav Content */}
        <div className="flex-grow overflow-y-auto">
            <nav className="p-4">
                <Accordion type="multiple" className="w-full">
                    <h3 className="px-4 py-2 text-gray-400 font-semibold">Overview</h3>
                    {navigationItems.map((item) => 
                        item.sublinks ? (
                            <AccordionItem key={item.label} value={item.label} className="border-b border-white/20">
                                <AccordionTrigger className="py-4 text-left text-lg hover:no-underline">
                                    {item.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pl-4">
                                    <div className="flex flex-col gap-4">
                                        {item.sublinks.map(sublink => (
                                            <SheetClose asChild key={sublink.label}>
                                                <Link href={sublink.href} className="hover:text-gray-300">
                                                    {sublink.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ) : (
                            <SheetClose asChild key={item.label}>
                                <Link href={item.href} className="block py-4 border-b border-white/20 text-lg font-semibold">
                                    {item.label}
                                </Link>
                            </SheetClose>
                        )
                    )}
                </Accordion>
            </nav>
        </div>


         {/* --- Sticky Bottom Section --- */}
        <div className="p-4 mt-auto border-t border-white/20">
          <SheetClose asChild>
            <Button asChild className="w-full bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 rounded-md">
              <Link href="/book-meeting">Book a Meeting</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;