import emotionalImage from "@/assets/emotional-belt.jpg";
import { Reveal } from "@/components/Reveal";

/** Emotional close before the event details. */
export function EmotionalSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={emotionalImage}
        alt="Detalhe de uma faixa-preta amarrada sobre o kimono"
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="bg-background/88 absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-3xl leading-[0.98] sm:text-4xl lg:text-5xl">
            Uma noite que pode mudar a forma como você enxerga o Jiu-Jitsu
          </h2>
          <div className="belt-line mt-6" />
        </Reveal>

        <div className="text-muted-foreground mt-10 space-y-5 text-base leading-relaxed sm:text-lg">
          <Reveal delay={80}>
            <p>Algumas técnicas você encontra na internet.</p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Alguns detalhes você só entende quando alguém que viveu aquilo mostra na sua
              frente.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>E algumas oportunidades simplesmente não aparecem toda semana.</p>
          </Reveal>
        </div>

        <Reveal delay={260} className="border-primary mt-10 border-l-2 pl-5">
          <p className="text-foreground text-lg leading-relaxed sm:text-xl">
            Você não está pagando apenas para aprender uma técnica.
          </p>
          <p className="text-foreground mt-3 text-lg leading-relaxed sm:text-xl">
            Você está investindo na oportunidade de dividir o tatame com um atleta que
            chegou ao mais alto nível do esporte.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
