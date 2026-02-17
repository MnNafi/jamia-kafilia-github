"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface BigHeaderProps {
  sentinelRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * BigHeader - The large non-sticky header section
 * Contains: Logo, Arabic calligraphy, institution titles, bismillah, slogans, and navigation menu
 * This scrolls away naturally with the page (NOT sticky)
 * Accepts a sentinelRef prop that places a sentinel at the bottom for detection
 */
export function BigHeader({ sentinelRef }: BigHeaderProps) {
  const t = useTranslations("HomePage.hero");
  const nav = useTranslations("Navigation");

  return (
    <div className="relative bg-gradient-to-r from-[#FFD4A3]/90 via-[#FFE5C4]/90 to-[#A8E6E6]/90 backdrop-blur-md border-b border-primary/10">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
      />
      
      {/* Custom Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-2 md:pt-3 pb-4">
          {/* Top Bar - Bismillah & Slogans (Desktop) */}
          <div className="hidden md:grid grid-cols-3 gap-2 md:gap-4 items-center mb-2 md:mb-3 text-xs md:text-sm font-semibold text-primary">
            {/* Left: Naraye Takbir */}
            <div className="text-left truncate">
              {t("naraye_takbir")}
            </div>

            {/* Center: Bismillah */}
            <div className="text-center">
              <Typography
                variant="h3"
                className="font-arabic text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed"
                style={{
                  fontFamily: "var(--font-scheherazade-new), var(--font-amiri-quran), var(--font-lateef), serif",
                  background: "linear-gradient(135deg, #006A4E 0%, #008F6B 30%, #b8860b 70%, #d4af37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.05em",
                  fontWeight: 700,
                }}
              >
                {t("bismillah")}
              </Typography>
            </div>

            {/* Right: Naraye Risalat */}
            <div className="text-right truncate">
              {t("naraye_risalat")}
            </div>
          </div>

          {/* Mobile Top Bar */}
          <div className="md:hidden flex flex-col items-center gap-2 mb-2 text-xs font-semibold text-primary">
            <div className="text-center w-full">
              <Typography
                variant="h4"
                className="font-arabic text-lg font-bold leading-relaxed"
                style={{
                  fontFamily: "var(--font-scheherazade-new), var(--font-amiri-quran), serif",
                  background: "linear-gradient(135deg, #006A4E 0%, #008F6B 30%, #b8860b 70%, #d4af37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                {t("bismillah")}
              </Typography>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full text-center text-[10px]">
              <div className="truncate">{t("naraye_takbir")}</div>
              <div className="truncate">{t("naraye_risalat")}</div>
            </div>
          </div>

          {/* Main Header: Logo + Center Text */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-10 lg:mb-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 07.12.55.jpeg"
                alt="Jamia Kafilia Logo"
                width={140}
                height={140}
                className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full shadow-xl ring-2 ring-white/30 object-cover"
                priority
              />
            </div>

            {/* Center Text Block */}
            <div className="text-center space-y-1 md:space-y-2 flex-1 max-w-4xl">
              {/* Institution Name */}
              <Typography
                variant="h1"
                className="text-foreground font-extrabold leading-tight px-2"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
                }}
              >
                {t("headline_bn")}
              </Typography>

              {/* Arabic Name */}
              <Typography
                variant="h2"
                className="font-arabic text-lg md:text-2xl lg:text-3xl font-semibold"
                style={{
                  fontFamily: "var(--font-scheherazade-new), var(--font-lateef), var(--font-amiri-quran), serif",
                  background: "linear-gradient(135deg, #006A4E 0%, #008F6B 40%, #b8860b 80%, #d4af37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                {t("arabic_title")}
              </Typography>

              {/* Address */}
              <Typography
                variant="p"
                className="text-foreground/70 text-xs md:text-sm lg:text-base font-semibold"
                style={{ margin: 0 }}
              >
                {t("address")}
              </Typography>
            </div>

            {/* Right: Language & Phone (Desktop) */}
            <div className="hidden lg:flex flex-col items-end gap-3 flex-shrink-0 relative">
              <LanguageSwitcher />
              
              {/* Phone Button with Dropdown */}
              <div className="group relative z-50">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 bg-card rounded-lg shadow-2xl border border-border py-2 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
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

          {/* Navigation Menu - Desktop Only */}
          <nav className="hidden lg:flex items-center justify-center gap-8 pt-3 pb-2 border-t border-primary/10">
            <Link 
              href="/" 
              className="text-sm font-bold text-foreground/90 hover:text-primary transition-colors duration-200"
            >
              {nav("home")}
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-bold text-foreground/90 hover:text-primary transition-colors duration-200"
            >
              {nav("about")}
            </Link>
            <Link 
              href="/services" 
              className="text-sm font-bold text-foreground/90 hover:text-primary transition-colors duration-200"
            >
              {nav("services")}
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-bold text-foreground/90 hover:text-primary transition-colors duration-200"
            >
              {nav("contact")}
            </Link>
            <Link 
              href="/donate" 
              className="text-sm font-bold text-accent hover:text-accent/80 transition-colors duration-200"
            >
              {nav("donate")}
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Sentinel for detecting when BigHeader is out of view */}
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
    </div>
  );
}
