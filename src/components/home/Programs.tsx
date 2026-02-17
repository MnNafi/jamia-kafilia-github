"use client";


import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing"; 
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart } from "lucide-react";

export function Programs() {
  const t = useTranslations("Home.programs");

  const programs = [
    {
      key: "hifz",
      image: "/images/program-hifz.png",
      link: "/programs/hifz"
    },
    {
      key: "alim",
      image: "/images/program-alim.png",
      link: "/programs/alim"
    },
    {
      key: "primary",
      image: "/images/program-primary.png",
      link: "/programs/general"
    },
    {
      key: "orphanage",
      image: "/images/program-orphanage.png",
      link: "/orphanage",
      highlight: true
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-heading">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div 
              key={program.key}
              className={`group relative rounded-2xl overflow-hidden shadow-lg h-[450px] flex flex-col justify-end ${
                program.highlight ? 'ring-4 ring-gold-400 ring-offset-2' : ''
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity group-hover:via-black/60" />

              {/* Special Badge for Orphanage */}
              {program.highlight && (
                <div className="absolute top-4 right-4 bg-gold-400 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 animate-pulse">
                  <Heart className="w-3 h-3 fill-current" />
                  {t(`${program.key}.badge`)}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading leading-tight">
                  {t(`${program.key}.title`)}
                </h3>
                
                <p className="text-gray-300 text-sm mb-6 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {t(`${program.key}.description`)}
                </p>
                
                <Button 
                    variant={program.highlight ? "default" : "outline"}
                    className={`w-full group/btn text-green-800 ${
                        program.highlight 
                        ? "bg-gold-500 hover:bg-gold-600 font-bold border-none" 
                        : "border-white text-green-800 hover:bg-white hover:text-black"
                    }`}
                    asChild
                >
                  <Link href={program.link} className="flex items-center justify-center gap-2">
                    {program.highlight ? t(`${program.key}.cta`) : t("view_details")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-green-800" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
