"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * PreviousMenuBar - Desktop-only navigation menu (non-sticky)
 * Appears below BigHeader at the top of the page
 * Hidden when showSticky is true (replaced by StickyNavbar)
 * 
 * Design: Elegant menu matching BigHeader aesthetic with gradient background
 */
export function PreviousMenuBar() {
  const nav = useTranslations("Navigation");

  return (
    <div className="hidden lg:block relative bg-gradient-to-r from-[#FFD4A3]/80 via-[#FFE5C4]/80 to-[#A8E6E6]/80 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
      />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <nav className="flex items-center justify-between py-4">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group"
            >
              {nav("home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/about" 
              className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group"
            >
              {nav("about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/services" 
              className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group"
            >
              {nav("services")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="/contact" 
              className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group"
            >
              {nav("contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:scale-105 text-sm font-bold py-2 px-5 rounded-lg shadow-md transition-all duration-300" 
              asChild
            >
              <Link href="/donate">
                <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {nav("donate")}
              </Link>
            </Button>
            
            <div className="group relative">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-accent to-accent/90 text-white hover:shadow-lg hover:scale-105 text-sm font-bold py-2 px-5 rounded-lg shadow-md transition-all duration-300 flex items-center gap-1.5" 
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 bg-card rounded-lg shadow-2xl border border-border py-2 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="tel:01810423231" className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors font-medium">
                  📞 01810423231
                </a>
                <a href="tel:01810423232" className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors font-medium">
                  📱 01810423232
                </a>
              </div>
            </div>
            
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </div>
  );
}
