import { ChevronDown } from "lucide-react";
import heroPhoto from "@/assets/joao-miyao-medal.jpg.asset.json";
import { CtaButton } from "@/components/CtaButton";
import { eventConfig } from "@/config/eventConfig";
import { scrollToSection } from "@/lib/scroll";

const HERO_FACTS = ["22 de outubro", "19h", eventConfig.venue, "Seminário presencial"];

/** Full-width hero: the first 3 seconds must answer who, what, when, where. */
export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-end overflow-hidden pt-16"
    >
      <img
        src={heroPhoto.url}
        alt="João Miyao com medalha e faixa-preta após competição de Jiu-Jitsu"
        width={720}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[60%_20%] grayscale sm:object-[65%_25%]"
      />
      <div className="overlay-hero absolute inset-0" aria-hidden="true" />
      <div className="overlay-fade-bottom absolute inset-0" aria-hidden="true" />
      <div className="tatami-texture absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 sm:pb-28">
        <p className="text-primary mb-4 text-xs font-semibold tracking-[0.3em] uppercase">
          Seminário presencial
        </p>

        <h1 className="max-w-3xl text-[clamp(2.5rem,11vw,5.5rem)] leading-[0.9]">
          João Miyao
          <br />
          em Blumenau
        </h1>

        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          Uma noite de Jiu-Jitsu com um dos nomes mais técnicos da sua geração.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {HERO_FACTS.map((fact) => (
            <li
              key={fact}
              className="border-foreground/20 bg-background/40 font-display rounded-sm border px-3 py-2 text-xs tracking-wider backdrop-blur-sm sm:text-sm"
            >
              {fact}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col gap-3 sm:max-w-sm">
          <CtaButton trackingId="hero" fullWidth>
            Garantir minha vaga
          </CtaButton>
          <p className="text-muted-foreground text-center text-sm">Vagas limitadas.</p>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("seminario")}
          className="text-muted-foreground hover:text-foreground mt-12 hidden items-center gap-2 text-xs tracking-[0.25em] uppercase transition-colors sm:inline-flex"
        >
          Conheça a história
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
