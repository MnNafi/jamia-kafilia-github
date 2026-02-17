import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { BookOpen, Users, HeartHandshake } from "lucide-react";

export function Services() {
  const t = useTranslations("HomePage.services");

  const services = [
    {
      id: "education",
      icon: BookOpen,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
    },
    {
      id: "orphanage",
      icon: Users,
      color: "text-secondary",
      bg: "bg-secondary/10",
      border: "border-secondary/20",
    },
    {
      id: "hifz",
      icon: HeartHandshake,
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20",
    },
  ];

  return (
    <Section className="bg-muted/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Typography variant="h2" className="mb-4 text-primary-dark">
            {t("title")}
          </Typography>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group p-8 rounded-2xl bg-card border ${service.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-3 text-xl font-bold">
                  {t(`${service.id}.title`)}
                </Typography>
                <Typography className="text-muted-foreground">
                  {t(`${service.id}.description`)}
                </Typography>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
