import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { eventConfig } from "@/config/eventConfig";

const DETAILS = [
  { icon: CalendarDays, label: "Data", value: "22 de outubro" },
  { icon: Clock, label: "Horário", value: "19h" },
  { icon: MapPin, label: "Local", value: `${eventConfig.venue} — Blumenau, SC` },
  { icon: Users, label: "Formato", value: "Evento presencial" },
];

/** Premium information card with room for a future Google Maps embed. */
export function EventDetailsSection() {
  return (
    <Section id="informacoes" width="default">
      <SectionHeading eyebrow="Detalhes" align="center">
        Informações do evento
      </SectionHeading>

      <Reveal className="mt-12">
        <article className="border-border bg-card shadow-elevated rounded-sm border">
          <header className="border-border tatami-texture border-b px-6 py-8 text-center sm:px-10">
            <h3 className="text-2xl sm:text-3xl">Seminário João Miyao</h3>
            <p className="text-gold mt-3 text-sm tracking-[0.25em] uppercase">
              22 de outubro · 19h
            </p>
          </header>

          <dl className="grid gap-px sm:grid-cols-2">
            {DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4 px-6 py-6 sm:px-10">
                <detail.icon className="text-primary mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                    {detail.label}
                  </dt>
                  <dd className="font-display mt-1 text-lg">{detail.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          {/* Google Maps embed area — add mapsEmbedUrl in eventConfig to activate. */}
          <div className="border-border border-t">
            {eventConfig.mapsEmbedUrl ? (
              <iframe
                title="Mapa do local do seminário"
                src={eventConfig.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-64 w-full border-0 grayscale sm:h-80"
              />
            ) : (
              <div className="text-muted-foreground flex h-40 items-center justify-center px-6 text-center text-sm sm:h-48">
                SESI Blumenau · Blumenau, Santa Catarina
              </div>
            )}
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
