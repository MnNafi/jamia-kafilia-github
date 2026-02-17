"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Events() {
  const t = useTranslations("Home.events");

  const events = [
    { id: 1, image: "/images/event-seminar.png" },
    { id: 2, image: "/images/event-community.png" },
    { id: 3, image: "/images/event-awards.png" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                    {t("title")}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading">
                    {t("title")}
                </h2>
            </div>
            
            <Button variant="outline" className="hidden md:flex gap-2 group border-primary/20 hover:border-primary text-primary" asChild>
                <Link href="/events">
                    {t("view_all")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={t(`${item.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                   {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-3 text-center min-w-[70px]">
                      <span className="block text-2xl font-bold text-primary font-heading leading-none">
                          {t(`${item.id}.day`)}
                      </span>
                      <span className="block text-xs font-bold text-gray-500 uppercase mt-1">
                          {t(`${item.id}.month`)}
                      </span>
                  </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {t(`${item.id}.title`)}
                </h3>
                
                <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>09:00 AM - 01:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>Jamia Auditorium</span>
                    </div>
                </div>
                
                <Button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-900 border-none transition-colors group/btn justify-between px-6" asChild>
                    <Link href="/events">
                        <span>{t("join_us")}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity -translate-x-2 group-hover/btn:translate-x-0" />
                    </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <Button variant="outline" className="gap-2 group border-primary/20 hover:border-primary text-primary" asChild>
                <Link href="/events">
                    {t("view_all")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
