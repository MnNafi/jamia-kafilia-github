
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { About } from "@/components/home/About";
import { Quote } from "@/components/home/Quote";
import { Programs } from "@/components/home/Programs";
import { StudentLife } from "@/components/home/StudentLife";
import { Events } from "@/components/home/Events";
import { Gallery } from "@/components/home/Gallery";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title:
      locale === "bn"
        ? "জামিয়া কাফিলিয়া সুন্নিয়া মডেল মাদরাসা ও এতিমখানা - ভাতশালা, শেরপুর"
        : "Jamia Kafilia Sunnia Model Madrasa and Orphanage - Vatshala, Sherpur",
    description:
      locale === "bn"
        ? "শেরপুর জেলার সর্ববৃহৎ সুন্নি প্রতিষ্ঠান। ইসলামী শিক্ষা, আধুনিক পাঠ্যক্রম, হিফজুল কুরআন, এবং এতিম সেবা প্রদান করছি।"
        : "Sherpur district's largest Sunni institution providing Islamic education, modern curriculum, Hifz-ul-Quran, and orphan care services.",
    openGraph: {
      title:
        locale === "bn"
          ? "জামিয়া কাফিলিয়া সুন্নিয়া - শেরপুর"
          : "Jamia Kafilia Sunnia - Sherpur",
      description:
        locale === "bn"
          ? "ইসলামী শিক্ষা এবং এতিম সেবায় নিবেদিত"
          : "Dedicated to Islamic education and orphan care",
      url: `https://www.jamiakafilia.org/${locale}`,
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "bn"
          ? "জামিয়া কাফিলিয়া সুন্নিয়া"
          : "Jamia Kafilia Sunnia",
      description:
        locale === "bn"
          ? "ইসলামী শিক্ষা এবং এতিম সেবায় নিবেদিত"
          : "Dedicated to Islamic education and orphan care",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Quote />
      <Programs />
      <StudentLife />
      <Events />
      <Gallery />
      <FinalCTA />
    </>
  );
}
