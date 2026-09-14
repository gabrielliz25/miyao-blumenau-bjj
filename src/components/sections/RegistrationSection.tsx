import { useEffect, useRef } from "react";
import { CreditCard, Lock, MapPin, QrCode, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { eventConfig, REGISTRATION_SECTION_ID } from "@/config/eventConfig";
import {
  openExternal,
  trackPaymentClick,
  trackViewRegistration,
  type PaymentMethod,
} from "@/lib/analytics";

const TRUST_ITEMS = [
  { icon: MapPin, label: "Evento presencial" },
  { icon: Lock, label: "Pagamento seguro" },
  { icon: ShieldCheck, label: "Vagas limitadas" },
  { icon: Users, label: "Aberto para todas as equipes" },
];

type PaymentOption = {
  method: PaymentMethod;
  label: string;
  helper: string;
  url: string;
  icon: typeof QrCode;
};

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    method: "pix",
    label: "Pagar com PIX",
    helper: "Confirmação rápida",
    url: eventConfig.pixPaymentUrl,
    icon: QrCode,
  },
  {
    method: "card",
    label: "Cartão em até 3x sem juros",
    helper: "Parcelamento sem juros",
    url: eventConfig.cardPaymentUrl,
    icon: CreditCard,
  },
];

/** Main conversion section with the two payment paths. */
export function RegistrationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          trackViewRegistration();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handlePayment = (option: PaymentOption) => {
    trackPaymentClick(option.method);
    openExternal(option.url);
  };

  return (
    <section
      ref={sectionRef}
      id={REGISTRATION_SECTION_ID}
      aria-labelledby="registration-title"
      className="bg-primary/10 border-primary/40 tatami-texture scroll-mt-16 border-y px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <Reveal>
          <h2 id="registration-title" className="text-4xl sm:text-5xl lg:text-6xl">
            Garanta sua vaga
          </h2>
          <div className="belt-line mx-auto mt-6" />
          <p className="text-muted-foreground mt-6 text-base sm:text-lg">
            Escolha como deseja fazer sua inscrição.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PAYMENT_OPTIONS.map((option, index) => (
            <Reveal key={option.method} delay={index * 100}>
              <button
                type="button"
                onClick={() => handlePayment(option)}
                className="bg-primary text-primary-foreground shadow-cta font-display flex min-h-20 w-full flex-col items-center justify-center gap-1 rounded-sm px-5 py-5 text-lg tracking-wide uppercase transition-all duration-200 hover:bg-primary/90 active:scale-[0.99] sm:min-h-24 sm:text-xl"
              >
                <span className="flex items-center gap-3">
                  <option.icon className="h-6 w-6" aria-hidden="true" />
                  {option.label}
                </span>
                <span className="font-sans text-xs font-medium tracking-normal normal-case opacity-85">
                  {option.helper}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="text-muted-foreground mt-8 text-sm">
            Inscrição confirmada após a aprovação do pagamento.
          </p>
          <p className="font-display text-gold mt-1 text-base">Vagas limitadas.</p>

          <ul className="text-muted-foreground mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {TRUST_ITEMS.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <item.icon className="text-primary h-4 w-4" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mt-6 text-xs leading-relaxed">
            Pagamento seguro. Confirmação rápida. Vaga garantida após confirmação do
            pagamento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
