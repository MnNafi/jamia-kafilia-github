import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  const t = useTranslations("Home.final_cta");

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center fixed-background"
        style={{ backgroundImage: "url('/images/final-cta-bg.png')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-950/90" />
      
      {/* Pattern */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
      />

      <Container className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight">
            {t("title")}
        </h2>
        
        <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-10 py-7 text-lg rounded-xl shadow-xl shadow-gold-500/20 hover:scale-105 transition-transform"
            asChild
          >
            <Link href="/donate">{t("donate_button")}</Link>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-emerald-950 font-bold px-10 py-7 text-lg rounded-xl hover:scale-105 transition-transform"
            asChild
          >
            <Link href="/contact">{t("sponsor_button")}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
