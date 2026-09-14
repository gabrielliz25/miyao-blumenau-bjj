import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Seminário João Miyao" },
      {
        name: "description",
        content:
          "Como tratamos os dados dos participantes do seminário de Jiu-Jitsu de João Miyao em Blumenau.",
      },
      { property: "og:title", content: "Política de Privacidade | Seminário João Miyao" },
      {
        property: "og:description",
        content: "Informações sobre o tratamento de dados dos participantes do seminário.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="text-3xl sm:text-4xl">Política de Privacidade</h1>
      <div className="belt-line mt-6" />
      <div className="text-muted-foreground mt-8 space-y-5 text-base leading-relaxed">
        <p>
          Os dados informados durante a inscrição são utilizados exclusivamente para
          confirmar a participação no seminário e para comunicações sobre o evento.
        </p>
        <p>
          Os pagamentos são processados por plataformas externas de pagamento, que possuem
          suas próprias políticas de privacidade e segurança.
        </p>
        <p>
          Utilizamos ferramentas de medição de audiência para entender o desempenho desta
          página. Nenhum dado é vendido a terceiros.
        </p>
        <p>
          Para solicitar a exclusão dos seus dados, entre em contato pelos canais oficiais
          do evento.
        </p>
      </div>
      <Link to="/" className="text-primary mt-10 inline-block text-sm">
        Voltar para a página do seminário
      </Link>
    </main>
  );
}
