import { createFileRoute } from "@tanstack/react-router";
import WorkshopSite from "../components/WorkshopSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oficina Forte | Cuidado que move você" },
      {
        name: "description",
        content:
          "Manutenção automotiva com transparência, atenção aos detalhes e compromisso com a sua segurança. Agende sua avaliação.",
      },
      { property: "og:title", content: "Oficina Forte | Cuidado que move você" },
      {
        property: "og:description",
        content:
          "Mecânica geral, diagnóstico, freios, suspensão e elétrica automotiva com atendimento transparente.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <WorkshopSite />;
}
