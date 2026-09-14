import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Inner container width. */
  width?: "default" | "narrow" | "wide";
  ariaLabelledBy?: string;
};

/** Standard page section wrapper with consistent vertical rhythm. */
export function Section({
  id,
  children,
  className,
  width = "default",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("px-5 py-20 sm:px-8 sm:py-24 lg:py-32", className)}
    >
      <div
        className={cn(
          "mx-auto w-full",
          width === "narrow" && "max-w-3xl",
          width === "default" && "max-w-5xl",
          width === "wide" && "max-w-6xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}
