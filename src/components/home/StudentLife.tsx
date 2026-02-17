"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { Trophy, Mic2, HeartHandshake, PenTool } from "lucide-react";

export function StudentLife() {
  const t = useTranslations("Home.activities");

  const activities = [
    { key: "sports", icon: Trophy, color: "bg-orange-500" },
    { key: "speaking", icon: Mic2, color: "bg-purple-500" },
    { key: "service", icon: HeartHandshake, color: "bg-red-500" },
    { key: "arts", icon: PenTool, color: "bg-blue-500" },
  ];

  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden text-white">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
      />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-200 font-medium text-sm mb-6 border border-white/10">
                    {t("badge")}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-heading">
                    {t("title")}
                </h2>
                
                <p className="text-emerald-100/80 text-lg leading-relaxed mb-12">
                    {t("description")}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                    {activities.map((activity) => (
                        <div key={activity.key} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                            <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center mb-4 text-white shadow-lg`}>
                                <activity.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{t(`${activity.key}.title`)}</h3>
                            <p className="text-sm text-emerald-100/60">{t(`${activity.key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
                 {/* Decorative Circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-900/50 rounded-full blur-3xl -z-10" />
                 
                 <div className="space-y-4 mt-8">
                     <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-emerald-900">
                        <Image 
                            src="/images/student-life-gathering.png" 
                            alt="Students gathering"
                            fill
                            className="object-cover"
                        />
                     </div>
                     <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl bg-emerald-800">
                        <Image 
                            src="/images/student-life-reading.png" 
                            alt="Reading Quran"
                            fill
                            className="object-cover"
                        />
                     </div>
                 </div>
                 
                 <div className="space-y-4">
                     <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl bg-emerald-800">
                        <Image 
                             src="/images/student-life-sports.png" 
                            alt="Sports"
                            fill
                            className="object-cover"
                        />
                     </div>
                     <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 bg-emerald-900">
                        <Image 
                            src="/images/student-life-art.png" 
                            alt="Art class"
                            fill
                            className="object-cover"
                        />
                     </div>
                 </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
