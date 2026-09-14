import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

/** Section title with a belt-inspired accent line. */
export function SectionHeading({
  children,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-primary mb-3 text-xs font-semibold tracking-[0.28em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-[0.95] sm:text-4xl lg:text-5xl">{children}</h2>
      <div className={cn("belt-line mt-6", align === "center" && "mx-auto")} />
    </Reveal>
  );
}
