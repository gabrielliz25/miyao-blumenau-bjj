import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { scrollToSection } from "@/lib/scroll";

const NAV_LINKS = [
  { label: "O Seminário", id: "seminario" },
  { label: "João Miyao", id: "joao-miyao" },
  { label: "Informações", id: "informacoes" },
  { label: "Inscrição", id: "inscricao" },
];

/** Minimal fixed navigation with a mobile hamburger menu. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="border-border/60 bg-background/85 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <button
          type="button"
          onClick={() => go("topo")}
          className="font-display min-w-0 truncate text-base tracking-wide sm:text-lg"
        >
          MIYAO <span className="text-primary">BLUMENAU</span>
        </button>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <CtaButton trackingId="header" size="md">
            Garantir minha vaga
          </CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-foreground -mr-2 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-border/60 bg-background border-t px-5 py-4 lg:hidden"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className="border-border/40 text-foreground border-b py-4 text-left text-sm font-semibold tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <CtaButton trackingId="header_mobile" fullWidth className="mt-5">
            Garantir minha vaga
          </CtaButton>
        </div>
      ) : null}
    </header>
  );
}
