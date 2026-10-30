import { createFileRoute } from "@tanstack/react-router";
import WorkshopSite from "../components/WorkshopSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonni Car Service | Mecânica Automotiva em Uberaba" },
      {
        name: "description",
        content: "Manutenção preventiva, troca de óleo, diagnóstico eletrônico e reparos automotivos em Uberaba, Minas Gerais. Fale com a Bonni Car Service.",
      },
      { property: "og:title", content: "Bonni Car Service | Uberaba - MG" },
      {
        property: "og:description",
        content: "Serviços de mecânica automotiva para diferentes marcas e modelos. Solicite um orçamento pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <WorkshopSite />;
}
