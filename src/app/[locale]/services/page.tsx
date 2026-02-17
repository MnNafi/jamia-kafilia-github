
import { Container } from "@/components/ui/Container";
import { Programs } from "@/components/home/Programs";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className="bg-emerald-950 py-20 text-center text-white relative overflow-hidden">
        <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
        />
        <Container className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">{t("services")}</h1>
            <p className="text-emerald-100 max-w-2xl mx-auto">
                Providing comprehensive educational and social services to the community.
            </p>
        </Container>
      </div>
      <Programs />
    </>
  );
}
