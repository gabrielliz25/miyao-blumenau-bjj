import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const AUDIENCE = [
  "Para quem está começando no Jiu-Jitsu",
  "Para quem já compete",
  "Para quem quer evoluir tecnicamente",
  "Para professores e instrutores",
  "Para quem quer aprender novos conceitos de guarda",
  "Para quem simplesmente ama Jiu-Jitsu",
];

/** Qualifies the audience with six clean cards. */
export function AudienceSection() {
  return (
    <Section className="bg-graphite" width="wide">
      <SectionHeading eyebrow="Público" align="center">
        Para quem é esse seminário?
      </SectionHeading>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE.map((item, index) => (
          <Reveal as="li" key={item} delay={index * 70} className="list-none">
            <div className="border-border bg-background hover:border-primary/60 h-full rounded-sm border p-6 transition-colors">
              <span className="bg-primary block h-1 w-8" aria-hidden="true" />
              <p className="mt-4 text-base leading-relaxed">{item}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="text-muted-foreground mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed sm:text-lg">
          Independente da sua faixa, o seminário foi pensado para quem quer sair do tatame
          sabendo algo que não sabia antes.
        </p>
      </Reveal>
    </Section>
  );
}
