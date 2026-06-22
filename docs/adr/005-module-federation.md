---
title: "ADR 005 — Module Federation para Microfrontend de Recomendação"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 005 — Module Federation para Microfrontend de Recomendação

## Status

Aprovado

## Contexto

O projeto inclui um microfrontend `recommendation-mfe` que deve ser integrado a um shell app maior do Grupo 7. A equipe precisa escolher uma estratégia de integração que permita compartilhamento de bibliotecas e implantação independente.

## Problema

Como expor o componente de recomendação e consumi-lo no shell app de forma a preservar o desenvolvimento independente, mas reduza duplicação de dependências e facilite a integração de versões.

## Decisão

Adotar Module Federation com `@originjs/vite-plugin-federation`.

## Justificativa

- O plugin `@originjs/vite-plugin-federation` permite federar módulos no ambiente Vite/React usado pelo microfrontend.
- Ele suporta integração direta com o shell app do Grupo 7 sem exigir bundlers diferentes.
- Compartilhar `react`, `react-dom` e `@mui/material` reduz o tamanho do bundle e evita múltiplas instâncias em runtime.
- Expor o componente `RecommendationView` torna o microfrontend reutilizável e isolado.

## Benefícios

- Implantação independente do microfrontend e do shell app.
- Reutilização de bibliotecas comuns entre aplicações.
- Redução de bundle size e aceleração do carregamento.
- Possibilidade de evoluir o microfrontend separadamente do shell.

## Riscos

- Maior acoplamento entre builds de microfrontend e shell app, especialmente nas versões compartilhadas.
- Problemas de compatibilidade de dependências podem afetar o runtime se as versões compartilhadas divergirem.
- Debugging de integração remota pode ser mais complexo.

## Trade-offs

- Aceitamos maior acoplamento entre builds em troca de melhor reutilização de código e menor payload.
- A dependência de um shell app externo exige coordenação de versões e testes de integração.

## Alternativas Consideradas

- Build independente com iframe ou Web Components: rejeitado por menor integração e maior isolamento do DOM.
- Bibliotecas NPM publicadas para importação: considerado, mas aumentaria o ciclo de implantação e não suportaria carregamento dinâmico tão bem.
- Distribuição estática do bundle do microfrontend: simples, mas não permite compartilhamento eficiente de dependências nem atualização independente tão fácil.

## Impacto Arquitetural

- O `recommendation-mfe` será publicado como um federated module que expõe `RecommendationView`.
- O `vite.config.ts` deve incluir a configuração de federation para os módulos remotos e compartilhados.
- O shell app do Grupo 7 deve consumir o microfrontend federado e garantir as versões combinadas de React, React DOM e Material UI.
- O pipeline de CI/CD precisa incluir testes de integração do microfrontend com o shell app.

## Consequências Futuras

- Atualizações de `react` ou `@mui/material` exigirão coordenação entre o microfrontend e o shell app.
- Se a equipe optar por outro shell ou arquitetura de front-end, pode ser necessário reavaliar a abordagem de Module Federation.
- Será importante documentar as versões compartilhadas e os contratos de exposição do `RecommendationView`.
