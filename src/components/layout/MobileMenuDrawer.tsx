"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Info, 
  Briefcase, 
  Phone, 
  X, 
  Heart, 
  Facebook, 
  Youtube, 
  Mail,
  MapPin
} from "lucide-react";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const nav = useTranslations("Navigation");
  const pathname = usePathname();

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  const menuItems = [
    { href: "/", label: nav("home"), icon: Home },
    { href: "/about", label: nav("about"), icon: Info },
    { href: "/services", label: nav("services"), icon: Briefcase },
    { href: "/contact", label: nav("contact"), icon: Phone },
  ];

  const sidebarVariants = {
    closed: { 
      x: "100%",
      transition: { 
        stiffness: 300, 
        damping: 30 
      }
    },
    open: { 
      x: 0,
      transition: { 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-emerald-950 text-white shadow-2xl z-[70] flex flex-col overflow-hidden border-l border-white/10"
          >
            {/* Islamic Pattern Background */}
            <div 
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
            />

            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 bg-emerald-900/50">
              <div className="flex items-center gap-3">
                 <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold-400 shadow-md">
                    <Image
                        src="/images/WhatsApp Image 2026-01-20 at 07.12.55.jpeg"
                        alt="Logo"
                        fill
                        className="object-cover"
                    />
                 </div>
                 <div>
                     <h2 className="font-bold text-sm leading-tight text-white">Jamia Kafilia</h2>
                     <p className="text-[10px] text-emerald-200">Sunnia Model Madrasa</p>
                 </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto relative z-10 py-6 px-4">
               {/* Menu Items */}
               <nav>
                 <ul className="space-y-2">
                   {menuItems.map((item, index) => {
                     const isActive = pathname === item.href;
                     const Icon = item.icon;
                     return (
                        <motion.li 
                            key={item.href}
                            variants={itemVariants}
                            transition={{ delay: index * 0.05 + 0.1 }}
                        >
                            <Link 
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                    isActive 
                                    ? "bg-gold-500 text-white shadow-lg font-bold" 
                                    : "text-emerald-100 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-emerald-300 group-hover:text-gold-400"}`} />
                                {item.label}
                            </Link>
                        </motion.li>
                     );
                   })}
                 </ul>
               </nav>

               <div className="mt-8 mb-6 border-t border-white/10" />

               {/* Quick Actions */}
               <div className="space-y-4">
                  <Button 
                    variant="default" 
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold border-none shadow-lg shadow-gold-500/20"
                    asChild
                  >
                      <Link href="/donate" className="flex items-center justify-center gap-2">
                          <Heart className="w-4 h-4 fill-white" />
                          {nav("donate")}
                      </Link>
                  </Button>
                  
                  <div className="flex items-center justify-between gap-2 px-1">
                      <div className="text-sm font-medium text-emerald-200">Language:</div>
                      <div className="bg-white/10 rounded-full p-1">
                         <LanguageSwitcher />
                      </div>
                  </div>
               </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 p-6 bg-emerald-900/30 border-t border-white/10">
                <div className="space-y-3 mb-4">
                    <a href="tel:01810423231" className="flex items-center gap-3 text-sm text-emerald-200 hover:text-white transition-colors">
                        <Phone className="w-4 h-4 text-gold-400" />
                        <span>01810423231</span>
                    </a>
                    <a href="mailto:info@jamiakafilia.org" className="flex items-center gap-3 text-sm text-emerald-200 hover:text-white transition-colors">
                        <Mail className="w-4 h-4 text-gold-400" />
                        <span>info@jamiakafilia.org</span>
                    </a>
                    <div className="flex items-start gap-3 text-sm text-emerald-200">
                         <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                         <span className="text-xs leading-relaxed">Vatshala, Sherpur Sadar,<br/>Sherpur.</span>
                    </div>
                </div>
                
                <div className="flex gap-4 pt-2">
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold-500 hover:text-white text-emerald-200 transition-all">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-red-500 hover:text-white text-emerald-200 transition-all">
                        <Youtube className="w-4 h-4" />
                    </a>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
