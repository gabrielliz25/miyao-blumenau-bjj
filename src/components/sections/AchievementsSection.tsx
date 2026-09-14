import { Award, Globe, Medal, Trophy } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

const ACHIEVEMENTS = [
  { icon: Trophy, label: "Campeão mundial IBJJF" },
  { icon: Medal, label: "4x campeão mundial No-Gi IBJJF" },
  { icon: Award, label: "Faixa-preta de Cicero Costha" },
  { icon: Globe, label: "Referência mundial em guarda e técnica" },
];

/** Credibility block — achievement cards plus a mid-page CTA. */
export function AchievementsSection() {
  return (
    <Section id="joao-miyao" width="wide">
      <SectionHeading eyebrow="Autoridade" align="center">
        O nome Miyao entrou para a história
      </SectionHeading>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, index) => (
          <Reveal as="li" key={item.label} delay={index * 90} className="list-none">
            <div className="border-border bg-card hover:border-primary/60 shadow-elevated h-full rounded-sm border p-6 transition-colors sm:p-8">
              <item.icon className="text-primary h-7 w-7" aria-hidden="true" />
              <h3 className="mt-5 text-xl leading-tight sm:text-2xl">{item.label}</h3>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mx-auto mt-14 max-w-2xl text-center">
        <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
          Existe uma diferença enorme entre assistir João Miyao lutar...
        </p>
        <p className="mt-3 text-base leading-relaxed sm:text-lg">
          e estar no tatame aprendendo diretamente com ele.
        </p>
        <p className="text-gold mt-3 text-base leading-relaxed sm:text-lg">
          Em 22 de outubro, essa oportunidade estará em Blumenau.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton trackingId="achievements">Eu quero participar</CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
