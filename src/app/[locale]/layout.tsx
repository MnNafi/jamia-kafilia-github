import { Inter, Outfit, Amiri_Quran, Lateef, Scheherazade_New } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { DynamicHeader } from "@/components/layout/DynamicHeader";
import { Footer } from "@/components/layout/Footer";
import "../globals.output.css"; // Using CLI output due to Next.js 16 build issues



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Beautiful Naskh calligraphy fonts for Arabic text
const amiriQuran = Amiri_Quran({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri-quran",
  display: "swap",
});

const lateef = Lateef({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-lateef",
  display: "swap",
});

// Scheherazade New - Premium font with perfect harakat rendering
const scheherazadeNew = Scheherazade_New({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-scheherazade-new",
  display: "swap",
});

import { JsonLd } from "@/components/JsonLd";

// ... existing imports

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    metadataBase: new URL('https://www.jamiakafilia.org'),
    title: "Jamia Kafilia Sunnia Model Madrasa & Orphanage",
    description:
      "Jamia Kafilia Sunnia Model Madrasa & Orphanage - Sherpur's largest Sunni institution providing excellence in Madrasa education and orphan care.",
    keywords:
      "madrasa, orphanage, Islamic education, Sherpur, Bangladesh, Sunni institution",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'bn': '/bn',
      },
    },
    icons: {
      icon: [
        { url: "/icon.jpg", sizes: "any" },
      ],
      apple: [
        { url: "/icon.jpg", sizes: "180x180", type: "image/jpeg" },
      ],
    },
    openGraph: {
      title: "Jamia Kafilia Sunnia Model Madrasa & Orphanage",
      description:
        "Excellence in Madrasa Education & Orphan Care in Sherpur, Bangladesh",
      url: "https://www.jamiakafilia.org",
      siteName: "Jamia Kafilia",
      locale: locale,
      type: "website",
      images: [
        {
          url: "/icon.jpg",
          width: 400,
          height: 400,
          alt: "Jamia Kafilia Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jamia Kafilia Sunnia Model Madrasa & Orphanage",
      description: "Excellence in Madrasa Education & Orphan Care",
      images: ["/icon.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // ... existing validation
  if (!['en', 'bn'].includes(locale)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${outfit.variable} ${amiriQuran.variable} ${lateef.variable} ${scheherazadeNew.variable} antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          <DynamicHeader />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



