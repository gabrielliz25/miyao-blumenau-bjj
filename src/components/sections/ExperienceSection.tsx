import experienceImage from "@/assets/experience-seminar.jpg";
import { Reveal } from "@/components/Reveal";

const BENEFITS = [
  "Veja os movimentos.",
  "Entenda os detalhes.",
  "Faça perguntas.",
  "Aprenda diretamente com João Miyao.",
];

/** Full-width statement section with large typography over photography. */
export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={experienceImage}
        alt="Instrutor demonstrando uma técnica de Jiu-Jitsu para alunos sentados no tatame"
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="bg-background/85 absolute inset-0" aria-hidden="true" />
      <div className="tatami-texture absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <Reveal>
          <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95]">
            Não é vídeo.
            <br />
            Não é curso gravado.
            <br />
            <span className="text-primary">Você estará no mesmo tatame.</span>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <Reveal as="li" key={benefit} delay={index * 80} className="list-none">
              <div className="border-foreground/15 bg-background/50 rounded-sm border px-5 py-4 backdrop-blur-sm">
                <p className="text-base sm:text-lg">{benefit}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
