import { Instagram, MessageCircle } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";
import { trackWhatsappClick } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="border-border bg-background border-t px-5 pt-14 pb-28 sm:px-8 sm:pb-14">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
        <div>
          <p className="font-display text-xl">Seminário João Miyao</p>
          <p className="text-muted-foreground mt-2 text-sm tracking-[0.2em] uppercase">
            {eventConfig.city}, {eventConfig.state} · 22 de outubro
          </p>
        </div>

        <nav aria-label="Links do rodapé" className="sm:text-right">
          <ul className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-3 text-sm sm:justify-end">
            <li>
              <a
                href={eventConfig.instagramUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-2 py-1 transition-colors"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={eventConfig.whatsappUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick()}
                className="hover:text-foreground inline-flex items-center gap-2 py-1 transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href="/politica-de-privacidade" className="hover:text-foreground py-1 transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/termos-do-evento" className="hover:text-foreground py-1 transition-colors">
                Termos do Evento
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="text-muted-foreground/70 mx-auto mt-12 max-w-5xl text-xs">
        © {new Date().getFullYear()} Seminário João Miyao · Blumenau, SC
      </p>
    </footer>
  );
}
