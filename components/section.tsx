import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

export function Section({ children, className, title, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 px-4", className)}>
      {title && (
        <h2 className="text-center text-3xl md:text-4xl font-display text-accent mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

