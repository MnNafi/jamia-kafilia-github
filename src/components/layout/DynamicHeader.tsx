"use client";

import { useState, useEffect, useRef } from "react";
import { BigHeader } from "./BigHeader";
import { StickyNavbar } from "./StickyNavbar";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

/**
 * DynamicHeader - Manages the header visibility and sticky behavior
 * 
 * Desktop:
 * - At top: BigHeader (with integrated navigation menu)
 * - After scrolling: StickyNavbar
 * 
 * Mobile:
 * - At top: BigHeader only
 * - After scrolling: StickyNavbar
 */
export function DynamicHeader() {
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. Big Header - scrolls away, now includes navigation menu */}
      <BigHeader sentinelRef={sentinelRef} />
      
      {/* 2. Sticky Navbar - appears only after BigHeader scrolls out */}
      <StickyNavbar 
        showSticky={showSticky} 
        onOpenMenu={() => setIsMobileMenuOpen(true)} 
      />

      {/* 3. Floating Mobile Burger Icon (Visible when top header is visible, hidden when sticky) */}
      <div 
        className={`absolute top-4 right-4 z-50 lg:hidden transition-opacity duration-300 ${
            !showSticky ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 bg-transparent text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
        >
            <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
      </div>

      {/* Shared Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
