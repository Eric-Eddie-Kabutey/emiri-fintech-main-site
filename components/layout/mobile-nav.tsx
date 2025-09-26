"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavItem } from "@/types/nav-types";
import Logo from "../common/logo";

const MobileNav: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  return (
    <div className="md:hidden flex items-center justify-between w-full">
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          {/* A more modern menu button */}
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-slate-800" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white" side="right">
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <div className="mt-8 h-full">
            <nav className="flex flex-col h-full">
              {/* The accordion wraps all dynamic navigation items */}
              <Accordion type="multiple" className="flex-grow">
                {navItems.map((item) =>
                  // If the item has a mega menu, render it as an accordion
                  item.megaMenuContent ? (
                    <AccordionItem key={item.label} value={item.label}>
                      <AccordionTrigger className="text-lg font-semibold text-slate-800 py-4">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 space-y-6">
                        {/* Map over the columns within the mega menu */}
                        {item.megaMenuContent.map((column) => (
                          <div key={column.title} className="pl-4 border-l-2 border-slate-200">
                            <h4 className="text-base font-semibold text-slate-900 mb-2">
                              {column.title}
                            </h4>
                            <div className="space-y-2">
                              {/* Map over the links within each column */}
                              {column.links.map((link) => (
                                <SheetClose asChild key={link.title}>
                                  <Link
                                    href={link.href}
                                    className="block p-2 rounded-md hover:bg-slate-100 transition-colors"
                                  >
                                    <p className="font-medium text-slate-800">{link.title}</p>
                                    <p className="text-sm text-slate-500">{link.description}</p>
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    // Otherwise, render a simple link
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="flex w-full items-center text-lg font-semibold text-slate-800 py-4 border-b"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                )}
              </Accordion>
              
              {/* A static link at the bottom, outside the dynamic list */}
              <div className="mt-auto pt-4 border-t">
                  <SheetClose asChild>
                    <Link
                        href="/contact" 
                        className="flex w-full items-center text-lg font-semibold text-slate-800 py-4"
                    >
                        Book a free Call
                    </Link>
                  </SheetClose>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;