"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  // Get phone numbers array from translations
  const phones = t.raw("phones") as string[];

  return (
    <footer className="relative bg-gradient-to-br from-primary-dark via-[#004d3b] to-[#002b20] text-white border-t border-border/20 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
      />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16">
          
          {/* Column 1: Logo + Description + Social */}
          <div className="space-y-6">
            {/* Logo and Name */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src="/images/WhatsApp Image 2026-01-20 at 07.12.55.jpeg"
                alt={t("institution_name")}
                width={50}
                height={50}
                className="rounded-full shadow-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300 object-cover group-hover:scale-110"
              />
              <Typography variant="h3" className="text-white font-bold text-lg group-hover:text-primary-light transition-colors">
                {t("institution_name")}
              </Typography>
            </Link>

            {/* Description */}
            <Typography className="text-white/80 text-sm leading-relaxed text-justify">
              {t("description")}
            </Typography>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.brainicontech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${t("email")}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${phones[0].replace(/[-\s]/g, "")}`}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <Typography variant="h4" className="text-white font-bold text-lg border-b border-white/20 pb-3">
              {t("quick_links_title")}
            </Typography>
            <nav className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("quick_links.about")}
              </Link>
              <Link
                href="/admissions"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("quick_links.admissions")}
              </Link>
              <Link
                href="/scholars"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("quick_links.scholars")}
              </Link>
              <Link
                href="/donate"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("quick_links.donation_methods")}
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("quick_links.contact")}
              </Link>
            </nav>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-5">
            <Typography variant="h4" className="text-white font-bold text-lg border-b border-white/20 pb-3">
              {t("programs_title")}
            </Typography>
            <nav className="flex flex-col gap-3">
              <Link
                href="/programs/hifz"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("programs.hifz")}
              </Link>
              <Link
                href="/programs/alim"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("programs.alim")}
              </Link>
              <Link
                href="/programs/orphan-care"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("programs.orphan_care")}
              </Link>
              <Link
                href="/programs/primary"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("programs.primary_education")}
              </Link>
              <Link
                href="/programs/ramzan"
                className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                {t("programs.ramzan_drives")}
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-5">
            <Typography variant="h4" className="text-white font-bold text-lg border-b border-white/20 pb-3">
              {t("contact_title")}
            </Typography>
            <div className="space-y-4">
              {/* Address */}
              <address className="flex items-start gap-3 group not-italic">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <Typography className="text-white/80 text-sm leading-relaxed">
                  {t("address")}
                </Typography>
              </address>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="space-y-1.5">
                  {phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/[-\s]/g, "")}`}
                      className="text-white/80 hover:text-white transition-colors text-sm block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${t("email")}`} className="text-white/80 hover:text-white transition-colors text-sm">
                  {t("email")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            {/* Copyright */}
            <Typography className="text-white/60 text-sm">
              © {currentYear} {t("institution_name")}. {t("copyright")}
            </Typography>

            {/* Center: Powered by Brainicon */}
            <Typography className="text-white/60 text-sm">
              {t("powered_by")}{" "}
              <a
                href="https://www.brainicontech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                {t("brainicon")}
              </a>
            </Typography>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                {t("privacy_policy")}
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                {t("terms_of_service")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
