"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10" />
        {/* Local Generated Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Content Container */}
      <Container className="relative z-30 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-100 text-sm font-medium tracking-wide font-sans">{t("since_badge")}</span>
        </div>

        {/* Main Heading */}
        <div className="mb-6 space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-heading">
            <span className="block text-white drop-shadow-lg">{t("title_line1")}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400 pb-2">
              {t("title_line2")}
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
            asChild
          >
            <Link href="/about">{t("cta_learn")}</Link>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-emerald-900 font-bold px-8 py-6 rounded-xl transition-all hover:scale-105"
            asChild
          >
            <Link href="/contact">{t("cta_contact")}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
