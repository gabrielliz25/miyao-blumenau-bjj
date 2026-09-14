import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { REGISTRATION_SECTION_ID } from "@/config/eventConfig";
import { scrollToSection } from "@/lib/scroll";
import { trackEvent } from "@/lib/analytics";

type CtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  /** Label used to identify the CTA position in analytics. */
  trackingId: string;
  fullWidth?: boolean;
};

/** Primary conversion button — always scrolls to the registration section. */
export function CtaButton({
  variant = "primary",
  size = "lg",
  trackingId,
  fullWidth,
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        trackEvent("click_cta", { cta_location: trackingId });
        scrollToSection(REGISTRATION_SECTION_ID);
      }}
      className={cn(
        "font-display inline-flex items-center justify-center rounded-sm tracking-wide uppercase transition-all duration-200 active:scale-[0.98]",
        size === "lg"
          ? "min-h-14 px-7 text-base sm:text-lg"
          : "min-h-12 px-5 text-sm sm:text-base",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-cta hover:bg-primary/90",
        variant === "outline" &&
          "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
