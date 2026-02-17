import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export function Section({ className, children, container = true, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-16 lg:py-24", className)}
      {...props}
    >
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
