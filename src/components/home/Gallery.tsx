import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function Gallery() {
  const t = useTranslations("Home.gallery");

  const images = [
    { src: "/images/gallery-1.png", span: "md:col-span-2 md:row-span-2", height: "h-96" },
    { src: "/images/gallery-2.png", span: "md:col-span-1 md:row-span-1", height: "h-48" },
    { src: "/images/gallery-3.png", span: "md:col-span-1 md:row-span-1", height: "h-48" },
    { src: "/images/gallery-4.png", span: "md:col-span-1 md:row-span-1", height: "h-48" },
    { src: "/images/gallery-5.png", span: "md:col-span-2 md:row-span-1", height: "h-48" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading mb-4">
                {t("title")}
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img, idx) => (
                <div key={idx} className={`relative rounded-2xl overflow-hidden group ${img.span} ${img.height}`}>
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-primary font-bold text-sm">View Full Image</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
