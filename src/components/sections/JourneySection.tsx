import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const PROGRESSION = [
  "Treino após treino.",
  "Campeonato após campeonato.",
  "Anos dedicados aos detalhes.",
];

/** The decision to leave home — progression, sacrifice, technical obsession. */
export function JourneySection() {
  return (
    <Section className="bg-graphite tatami-texture" width="default">
      <SectionHeading eyebrow="A virada">Eles decidiram arriscar</SectionHeading>

      <div className="text-muted-foreground mt-8 max-w-2xl space-y-5 text-base leading-relaxed sm:text-lg">
        <Reveal delay={80}>
          <p>
            Quando perceberam que queriam viver do Jiu-Jitsu, João e Paulo tomaram uma
            decisão difícil.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p>
            Saíram do interior e foram para São Paulo atrás de um sonho que ainda não tinha
            nenhuma garantia de dar certo.
          </p>
        </Reveal>
      </div>

      <ol className="mt-12 space-y-0">
        {PROGRESSION.map((line, index) => (
          <Reveal as="li" key={line} delay={index * 110} className="list-none">
            <div className="border-border/70 flex items-baseline gap-5 border-t py-6">
              <span className="text-primary font-display w-10 shrink-0 text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-2xl leading-none sm:text-4xl">{line}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="text-muted-foreground mt-10 max-w-2xl text-base leading-relaxed sm:text-lg">
          Foi nesse caminho que os irmãos Miyao começaram a construir um estilo que marcaria
          uma geração do Jiu-Jitsu.
        </p>
      </Reveal>
    </Section>
  );
}
