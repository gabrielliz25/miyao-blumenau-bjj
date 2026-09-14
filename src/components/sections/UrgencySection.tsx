import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";

/** Real scarcity banner — no fake timers, no fake numbers. */
export function UrgencySection() {
  return (
    <section className="bg-background px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="border-primary bg-graphite mx-auto max-w-4xl rounded-sm border-l-4 px-6 py-10 text-center sm:px-12 sm:py-14">
        <h2 className="text-2xl leading-tight sm:text-4xl">
          Quando as vagas acabarem, as inscrições serão encerradas.
        </h2>
        <p className="text-muted-foreground mt-5 text-base sm:text-lg">
          Se você quer estar nesse tatame, não deixe para decidir depois.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton trackingId="urgency">Garantir minha vaga</CtaButton>
        </div>
      </Reveal>
    </section>
  );
}
