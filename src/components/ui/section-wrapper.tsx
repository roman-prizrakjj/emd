import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn("container py-12 md:py-16 lg:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}
