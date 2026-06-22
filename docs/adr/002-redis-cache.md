---
title: "ADR 002 — Cache Redis para Requisições de Recomendação"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 002 — Cache Redis para Requisições de Recomendação

## Status

Aprovado

## Contexto

O microsserviço `recommendation` expõe recomendações por usuário em `GET /recommendations/user/{id}`. O uso deste endpoint é frequente e as respostas têm padrão ativação de dados que muda lentamente.

Para melhorar a latência e reduzir a carga no banco de dados, foi proposta a adoção de cache de leitura em memória distribuída.

## Problema

As leituras recorrentes de recomendações podem degradar a latência e a capacidade do serviço quando vários usuários simultâneos consultam recomendações. A execução de consultas SQL para cada requisição de leitura adiciona uma latência média de aproximadamente 100ms.

## Decisão

Adotar Redis como cache distribuído para o endpoint `GET /recommendations/user/{id}` com TTL de 10 minutos.

## Justificativa

- Redis é uma solução madura, leve e compatível com a arquitetura atual.
- TTL de 10 minutos equilibra frescor dos dados e redução de leituras no banco.
- O endpoint de recomendação é read-heavy e tolera consistência eventual por um curto período.
- A estimativa de latência cai de cerca de 100ms para aproximadamente 1ms em respostas atendidas pelo cache.

## Benefícios

- Redução de latência para leituras frequentes.
- Menor carga no PostgreSQL, especialmente em picos de tráfego.
- Melhor experiência de usuário para navegação e consulta de recomendações.
- Economia de recursos em ambientes de produção e testes.

## Riscos

- Eventual inconsistência temporária entre o cache e o banco de dados.
- Dependência operacional adicional de Redis.
- Sobrecarga de gerenciamento de chaves de cache e expiração.

## Trade-offs

- Aceitamos inconsistência eventual em troca de desempenho e redução de carga de I/O no banco.
- A complexidade operacional aumenta com a necessidade de monitoração e tratamento de falhas de Redis.

## Alternativas Consideradas

- Cache local em memória do serviço: rejeitado por não suportar múltiplas réplicas e não ser compartilhado entre instâncias.
- Não utilizar cache: rejeitado por não atender ao requisito de latência menor.
- Cache com TTL maior ou invalidação manual: considerado, mas TTL de 10 minutos oferece melhor balanço entre frescor e eficiência.

## Impacto Arquitetural

- Adição de Redis como componente de infraestrutura para o microsserviço.
- Modificação do fluxo de leitura para consultar o cache antes do banco.
- Implementação de políticas de invalidade e tratamento de falhas para garantir que a indisponibilidade do Redis não afete a disponibilidade do serviço.

## Consequências Futuras

- Será necessário monitorar a taxa de acerto do cache e ajustar o TTL se a cardinalidade de consultas mudar.
- A adoção de cache pode exigir tuning de memória em Redis e revisões de shard/cluster caso o uso cresça significativamente.
- A equipe deve manter documentação clara sobre a validade dos dados em cache para evitar confusões na depuração.
