
import { Container } from "@/components/ui/Container";
import { About } from "@/components/home/About";
import { Quote } from "@/components/home/Quote";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className="bg-emerald-950 py-20 text-center text-white relative overflow-hidden">
        <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
        />
        <Container className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">{t("about")}</h1>
            <p className="text-emerald-100 max-w-2xl mx-auto">
                Dedicated to nurturing hearts and minds with Islamic values and modern education since 1999.
            </p>
        </Container>
      </div>
      <About />
      <Quote />
    </>
  );
}
