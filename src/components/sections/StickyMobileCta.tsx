import { CtaButton } from "@/components/CtaButton";

/** Persistent bottom CTA on mobile only. */
export function StickyMobileCta() {
  return (
    <div className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-50 border-t px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <CtaButton trackingId="sticky_mobile" fullWidth>
        Garantir minha vaga
      </CtaButton>
    </div>
  );
}
