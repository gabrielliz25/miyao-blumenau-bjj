import storyImage from "@/assets/story-mat.jpg";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const HIGHLIGHT_LINES = [
  "Dois irmãos.",
  "Um sonho.",
  "Uma decisão que mudaria tudo.",
];

/** Origin story — split layout on desktop, stacked on mobile. */
export function StorySection() {
  return (
    <Section id="seminario" width="wide">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="border-border/70 relative overflow-hidden rounded-sm border">
            <img
              src={storyImage}
              alt="Faixa-preta sobre o tatami em uma academia de Jiu-Jitsu"
              width={1408}
              height={1600}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              className="from-background/70 absolute inset-0 bg-gradient-to-t to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="A origem">
            De uma cidade pequena para o topo do Jiu-Jitsu mundial
          </SectionHeading>

          <div className="text-muted-foreground mt-8 space-y-5 text-base leading-relaxed sm:text-lg">
            <Reveal delay={80}>
              <p>João Miyao nasceu em Andirá, no interior do Paraná.</p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Filho de agricultor e dona de casa, começou nas artes marciais pelo judô e
                conheceu o Jiu-Jitsu aos 16 anos, ao lado do seu irmão gêmeo, Paulo Miyao.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                O que parecia apenas o começo de uma nova paixão se transformaria em uma
                história conhecida no mundo inteiro.
              </p>
            </Reveal>
          </div>

          <Reveal delay={260} className="border-primary mt-10 border-l-2 pl-5">
            {HIGHLIGHT_LINES.map((line) => (
              <p key={line} className="font-display text-2xl sm:text-3xl">
                {line}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
