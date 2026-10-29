# Oficina Forte — página de vendas

Landing page responsiva para uma oficina mecânica, construída com React, TypeScript, TanStack Start, Vite e Tailwind CSS.

## O que está incluído

- Página inicial com chamada principal e botões de conversão.
- Seção de serviços: diagnóstico, mecânica geral, freios/suspensão e elétrica automotiva.
- Diferenciais da oficina e explicação do processo de atendimento.
- Formulário de agendamento que prepara uma mensagem para o WhatsApp.
- Layout adaptado para desktop, tablet e celular.
- Metadados básicos em português para compartilhamento e mecanismos de busca.

## Personalize antes de divulgar

1. **Nome e identidade:** procure por `Oficina Forte` e altere para o nome real da oficina em `src/components/WorkshopSite.tsx` e `src/routes/__root.tsx`.
2. **WhatsApp:** no início de `src/components/WorkshopSite.tsx`, altere `WHATSAPP_PHONE` para o número comercial com código do país + DDD + número, somente dígitos. Exemplo de formato: `5511999999999`. Não inclua `+`, espaços ou traços. Se deixar vazio, o link abre o WhatsApp para o cliente escolher o contato.
3. **Horários:** ajuste o horário mostrado na faixa superior em `src/components/WorkshopSite.tsx`.
4. **Fotos:** as imagens atuais são exemplos hospedados no Unsplash. Troque as URLs pelas fotos autorizadas da oficina, equipe e serviços.
5. **Endereço e redes sociais:** inclua os dados reais da empresa quando estiverem disponíveis. Não publique informações fictícias.

O nome, horários, imagens e textos atuais são conteúdo demonstrativo e devem ser conferidos antes de colocar o site no ar.

## Rodar localmente

Requer uma versão recente do Node.js.

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura principal

```
src/
├── components/
│   └── WorkshopSite.tsx
├── routes/
│   ├── __root.tsx
│   └── index.tsx
└── styles.css
```
