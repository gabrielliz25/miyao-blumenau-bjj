import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

/** Lightweight accessible accordion (single item open at a time). */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-border border-t">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question} className="border-border border-b">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display min-w-0 text-base sm:text-lg">
                  {item.question}
                </span>
                <Plus
                  aria-hidden="true"
                  className={cn(
                    "text-primary h-5 w-5 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="text-muted-foreground pb-6 text-base leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
