import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function Quote() {
  const t = useTranslations("Home.founder");

  return (
    <section className="bg-white py-20 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
        />
        
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100/50">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Founder Image */}
                <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg relative z-10 overflow-hidden">
                        <Image
                            src="/images/principal-portrait.png"
                            alt="Founder"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Glowing Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-2xl -z-0" />
                    
                    {/* Quote Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 z-20 bg-gold-400 text-white p-3 rounded-full shadow-lg">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 7.55228 5.01697 7V3H10.017C11.6738 3 13.017 4.34315 13.017 6V15C13.017 16.6569 11.6738 18 10.017 18H7.01697V21H5.01697Z" />
                        </svg>
                    </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 rounded-full bg-gold-400/10 text-gold-600 text-xs font-bold uppercase tracking-wider mb-4">
                        {t("badge")}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-6 italic leading-snug font-heading">
                        &quot;{t("quote")}&quot;
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        {t("description")}
                    </p>
                    
                    <div className="border-t border-emerald-100 pt-6">
                        <h4 className="text-lg font-bold text-primary">{t("name")}</h4>
                        <p className="text-sm text-muted-foreground">{t("title")}</p>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
