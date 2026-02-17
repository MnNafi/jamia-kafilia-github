

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Users, Heart, Award, Calendar } from "lucide-react";

export function About() {
  const t = useTranslations("Home.about");

  const stats = [
    { label: t("stats.students_label"), value: t("stats.students_count"), icon: Users, color: "text-primary" },
    { label: t("stats.orphans_label"), value: t("stats.orphans_count"), icon: Heart, color: "text-red-500" },
    { label: t("stats.teachers_label"), value: t("stats.teachers_count"), icon: Award, color: "text-gold-500" },
    { label: t("stats.years_label"), value: t("stats.years_count"), icon: Calendar, color: "text-emerald-600" },
  ];

  return (
    <Section className="py-20 lg:py-24 bg-background-light relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary fill-current">
                <path transform="translate(100 100)" d="M42.7,-62.9C50.9,-52.8,49.8,-34.4,52.3,-18.2C54.9,-2,61.1,12,58.7,25.8C56.3,39.6,45.3,53.2,31.9,61.8C18.5,70.4,2.7,74,-11.3,71.2C-25.3,68.4,-37.5,59.2,-48.3,48.5C-59.1,37.8,-68.5,25.6,-70.8,11.8C-73.1,-2,-68.3,-17.4,-59.4,-29.6C-50.5,-41.8,-37.5,-50.8,-24.5,-58.1C-11.5,-65.4,1.5,-71,13.8,-69.6C26.1,-68.2,34.5,-65.4,42.7,-62.9Z" />
            </svg>
        </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with Badge */}
            <div className="relative group">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                     {/* Placeholder Image */}
                     <div className="aspect-[4/5] bg-gray-200 relative">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/about-main.png')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Govt Approved Badge */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg flex items-center justify-between">
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t("badge_registered")}</p>
                                <p className="text-primary font-bold text-lg">{t("badge_govt")}</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                     </div>
                </div>
                
                {/* Decorative Frames */}
                <div className="absolute -inset-4 border-2 border-gold-400/30 rounded-3xl z-0 transform rotate-3 transition-transform duration-500 group-hover:rotate-6" />
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl z-0 transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6" />
            </div>

            {/* Right: Content */}
            <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                    {t("badge")}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6 leading-tight font-heading">
                    {t("title")}
                </h2>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>{t("description1")}</p>
                    <p>{t("description2")}</p>
                </div>
                
                <div className="mt-8 space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                            <span className="font-medium text-foreground">{t(`bullets.${item}`)}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10">
                    <Button size="lg" className="bg-emerald-900 hover:bg-emerald-800 text-white rounded-xl px-8 shadow-lg shadow-emerald-900/20" asChild>
                        <Link href="/about">{t("cta")}</Link>
                    </Button>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className={`w-7 h-7 ${stat.color}`} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
            ))}
        </div>

      </Container>
    </Section>
  );
}
