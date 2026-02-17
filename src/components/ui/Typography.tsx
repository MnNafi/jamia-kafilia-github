import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight font-heading",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight font-heading",
      p: "leading-7 font-sans",
      lead: "text-xl text-muted-foreground font-sans",
      large: "text-lg font-semibold font-sans",
      small: "text-sm font-medium leading-none font-sans",
      muted: "text-sm text-muted-foreground font-sans",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.ComponentProps<"div"> {
  component?: React.ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "small" | "muted" | null;
}

export function Typography({
  className,
  variant,
  component,
  ...props
}: TypographyProps) {
  const Component = component || (variant === "p" || variant === "lead" || variant === "large" || variant === "small" || variant === "muted" ? "p" : variant || "p");
  
  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
}
