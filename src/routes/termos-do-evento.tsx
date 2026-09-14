import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-do-evento")({
  component: EventTermsPage,
  head: () => ({
    meta: [
      { title: "Termos do Evento | Seminário João Miyao" },
      {
        name: "description",
        content:
          "Regras de participação, inscrição e pagamento do seminário de Jiu-Jitsu de João Miyao em Blumenau.",
      },
      { property: "og:title", content: "Termos do Evento | Seminário João Miyao" },
      {
        property: "og:description",
        content: "Regras de participação, inscrição e pagamento do seminário.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/termos-do-evento" }],
  }),
});

function EventTermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="text-3xl sm:text-4xl">Termos do Evento</h1>
      <div className="belt-line mt-6" />
      <div className="text-muted-foreground mt-8 space-y-5 text-base leading-relaxed">
        <p>A inscrição é individual e confirmada somente após a aprovação do pagamento.</p>
        <p>
          As vagas são limitadas à capacidade do local e as inscrições poderão ser
          encerradas a qualquer momento.
        </p>
        <p>
          O evento é aberto a praticantes de qualquer faixa, equipe ou academia. Recomenda-se
          o uso de kimono.
        </p>
        <p>
          Em caso de alteração de data ou local, os inscritos serão comunicados pelos canais
          oficiais do evento.
        </p>
      </div>
      <Link to="/" className="text-primary mt-10 inline-block text-sm">
        Voltar para a página do seminário
      </Link>
    </main>
  );
}
