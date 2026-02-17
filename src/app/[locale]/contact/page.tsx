
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className="bg-emerald-950 py-20 text-center text-white relative overflow-hidden">
        <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
        />
        <Container className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">{t("contact")}</h1>
            <p className="text-emerald-100 max-w-2xl mx-auto">
                Get in touch with us for any inquiries or support.
            </p>
        </Container>
      </div>

      <div className="py-20 bg-gray-50">
        <Container>
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                <p className="text-gray-600">01810423231</p>
                                <p className="text-gray-600">01810423232</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                <p className="text-gray-600">info@jamiakafilia.org</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                                <p className="text-gray-600">Vatshala, Sherpur Sadar, Sherpur.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Placeholder */}
                <ContactForm />
            </div>
        </Container>
      </div>
    </>
  );
}
