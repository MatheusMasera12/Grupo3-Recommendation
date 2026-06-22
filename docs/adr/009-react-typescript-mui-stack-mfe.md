---
title: "ADR 009 — React + TypeScript + Material UI v6 como Stack do Microfrontend"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 009 — React + TypeScript + Material UI v6 como Stack do Microfrontend

## Status

Aprovado

## Contexto

O microfrontend `recommendation-mfe` precisa de uma stack frontend que:
- Seja compatível com o Shell App e o MFE de autenticação (`chave-mfe-auth`) do projeto maior.
- Permita tipagem estática para reduzir erros em runtime.
- Ofereça componentes acessíveis prontos, já que o público-alvo são **usuários idosos** — acessibilidade é requisito crítico.
- Seja compatível com Module Federation (ADR 005).
- Seja a mesma stack definida como padrão na disciplina.

## Problema

Qual stack frontend usar para implementar o MFE de recomendações de forma que seja compatível com o shell, acessível para o público idoso e mantenha tipagem forte?

## Decisão

Adotar **React 19 + TypeScript 5.x + Material UI v6** como stack do `recommendation-mfe`, com Vite como bundler.

## Justificativa

- **React 19** é a versão mais recente e estável, com melhorias de performance e suporte a Server Components para futuras evoluções.
- **TypeScript** previne erros de runtime, documenta interfaces de componentes e facilita manutenção — especialmente importante em um projeto com múltiplos colaboradores.
- **Material UI v6** oferece componentes acessíveis por padrão (ARIA, navegação por teclado, contraste WCAG), reduzindo o esforço de implementação de acessibilidade para o público idoso.
- **Vite** garante HMR rápido no desenvolvimento e build otimizado para produção.
- A stack é **idêntica** à do Shell App e MFE Auth, permitindo compartilhar React, MUI e Emotion como singletons no Module Federation — sem duplicação.

## Benefícios

- Tipagem estática com TypeScript reduz erros e melhora a manutenibilidade.
- Componentes MUI acessíveis por padrão (WCAG 2.1 AA): tamanho mínimo de toque 48×48px, contraste 4.5:1, labels ARIA.
- Desenvolvimento rápido com HMR do Vite.
- Compatibilidade nativa com Module Federation via `@originjs/vite-plugin-federation`.
- Compartilhamento eficiente de dependências com o Shell App (React, MUI, Emotion como singletons).

## Riscos

- React 19 é recente: algumas bibliotecas de terceiros podem ter compatibilidade incompleta.
- MUI v6 introduziu breaking changes em relação ao v5 — é necessário garantir que o Shell App também use v6.
- TypeScript mais rígido pode aumentar o tempo de desenvolvimento inicial.

## Trade-offs

- Aceitamos a curva de aprendizado do TypeScript estrito em troca de maior qualidade e menor taxa de bugs em runtime.
- A dependência de versões específicas do React e MUI exige coordenação com o time do Shell App para evitar conflitos no Module Federation.

## Alternativas Consideradas

- **Vue.js + Vuetify**: rejeitado por incompatibilidade com o Shell App React.
- **Svelte**: rejeitado por não ter suporte maduro a Module Federation e por ser diferente do restante do projeto.
- **React sem TypeScript**: rejeitado por aumentar o risco de erros em runtime em um domínio com regras de negócio complexas.
- **Chakra UI** ou **Ant Design**: considerados, mas MUI é o padrão definido na disciplina e já está no Shell App.

## Impacto Arquitetural

- O `recommendation-mfe` expõe `RecommendationView` como remote entry via Module Federation.
- O tema MUI é customizado em `src/theme.ts` para seguir as diretrizes de acessibilidade WCAG 2.1 AA (fonte mínima 16px, alvos de toque 48×48px).
- Todos os componentes são tipados com interfaces TypeScript em `src/types/`.
- O Shell App deve consumir o remote entry e garantir que as versões de React e MUI coincidam.

## Acessibilidade (WCAG 2.1 AA)

Dado o público-alvo (usuários idosos), as seguintes diretrizes foram adotadas:
- Tamanho mínimo de fonte: **16px**
- Alvos de toque mínimos: **48×48px**
- Contraste mínimo de texto: **4.5:1**
- Labels ARIA em todos os controles interativos
- Navegação por teclado completa (Tab, Enter, Space)
- Estados de foco visíveis com outline de 3px
- Mensagens de erro claras e descritivas

## Consequências Futuras

- Atualizações de React ou MUI exigem coordenação com o Shell App para não quebrar o Module Federation.
- Novos componentes devem seguir o Design System documentado e manter as diretrizes de acessibilidade.
- Testes de acessibilidade automatizados (ex.: `axe-core`) podem ser adicionados ao pipeline de CI no futuro.
