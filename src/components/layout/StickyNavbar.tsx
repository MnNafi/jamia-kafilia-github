"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { BurgerIcon } from "./BurgerIcon";
import Image from "next/image";

interface StickyNavbarProps {
  showSticky: boolean;
  onOpenMenu: () => void;
}

/**
 * StickyNavbar - Fixed navbar that appears after BigHeader scrolls out
 * 
 * Desktop: Elegant glassmorphism design with gradient accents
 * Mobile: Logo + burger icon
 * Only visible when showSticky === true
 */
export function StickyNavbar({ showSticky, onOpenMenu }: StickyNavbarProps) {
  const t = useTranslations("HomePage.hero");
  const nav = useTranslations("Navigation");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-background/15 via-background/20 to-background/15 backdrop-blur-xl border-b border-primary/20 shadow-lg transition-all duration-300 ease-out motion-reduce:transition-none ${
          showSticky
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center justify-between py-3">
            {/* Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                <Image
                  src="/images/WhatsApp Image 2026-01-20 at 07.12.55.jpeg"
                  alt="Jamia Kafilia Logo"
                  width={50}
                  height={50}
                  className="relative rounded-full shadow-lg ring-2 ring-primary/10 object-cover group-hover:ring-primary/30 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <Typography variant="h4" className="text-primary font-bold text-lg leading-tight whitespace-nowrap group-hover:text-primary transition-colors">
                  {t("sticky_title")}
                </Typography>
                <Typography variant="small" className="text-muted-foreground font-medium text-xs leading-tight whitespace-nowrap">
                  {t("sticky_subtitle")}
                </Typography>
              </div>
            </Link>

            {/* Navigation Links & Actions */}
            <div className="flex items-center gap-6">
              {/* Nav Links */}
              <Link href="/" className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group">
                {nav("home")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/about" className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group">
                {nav("about")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/services" className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group">
                {nav("services")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link href="/contact" className="relative text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group">
                {nav("contact")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              
              {/* Action Buttons */}
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:scale-105 text-sm font-bold py-2 px-5 rounded-lg shadow-md transition-all duration-300" asChild>
                <Link href="/donate">
                  <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {nav("donate")}
                </Link>
              </Button>
              
              <div className="group relative">
                <Button size="sm" className="bg-gradient-to-r from-accent to-blue-900 text-white hover:shadow-lg hover:scale-105 text-sm font-bold py-2 px-5 rounded-lg shadow-md transition-all duration-300 flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                
                {/* Dropdown */}
                <div className="absolute bg-gradient-to-r from-accent to-blue-900 text-white right-0 top-full mt-2 bg-card/95 backdrop-blur-lg rounded-lg shadow-2xl border border-primary/20 py-2 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                  <a href="tel:01810423231" className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors font-medium">
                    📞 01810423231
                  </a>
                  <a href="tel:01810423232" className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors font-medium">
                    📱 01810423232
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm" />
                <Image
                  src="/images/WhatsApp Image 2026-01-20 at 07.12.55.jpeg"
                  alt="Jamia Kafilia Logo"
                  width={50}
                  height={50}
                  className="relative rounded-full shadow-md object-cover w-12 h-12 ring-2 ring-primary/10"
                />
              </div>
              <div className="flex flex-col">
                <Typography variant="h4" className="text-foreground font-bold text-base leading-tight whitespace-nowrap">
                  {t("sticky_title")}
                </Typography>
                <Typography variant="small" className="text-muted-foreground font-medium text-xs leading-tight whitespace-nowrap">
                  {t("sticky_subtitle")}
                </Typography>
              </div>
            </Link>

            <BurgerIcon
              isOpen={false}
              onClick={onOpenMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
