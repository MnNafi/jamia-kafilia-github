import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";

export function CTA() {
  const t = useTranslations("HomePage.cta");

  return (
    <Section className="bg-accent text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10 text-center">
        <Typography variant="h2" className="mb-6 text-white text-3xl md:text-4xl">
          {t("title")}
        </Typography>
        <Typography variant="lead" className="mb-10 text-white/80 max-w-2xl mx-auto">
          {t("description")}
        </Typography>
        <Button size="lg" variant="secondary" className="font-bold shadow-lg hover:shadow-secondary/20" asChild>
          <Link href="/donate">{t("button")}</Link>
        </Button>
      </Container>
    </Section>
  );
}
