import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "bn" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full bg-card hover:bg-card/80 border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-200 group",
        className
      )}
    >
      {/* Globe Icon */}
      <svg className={cn("w-4 h-4 text-primary group-hover:text-primary-dark transition-colors", className?.includes("text-white") && "text-white/80 group-hover:text-white")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
      {/* Language Code with Flag */}
      <span className={cn("text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", className?.includes("text-white") && "text-white group-hover:text-gold-400")}>
        {locale === "en" ? (
          <>
            <span>🇧🇩</span>
            <span>বাং</span>
          </>
        ) : (
          <>
            <span>🇬🇧</span>
            <span>EN</span>
          </>
        )}
      </span>
    </button>
  );
}
