---
title: "ADR 003 — Comunicação REST vs Kafka"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 003 — Comunicação REST vs Kafka

## Status

Aprovado

## Contexto

O microsserviço `recommendation` interage com componentes de avaliação e análise de feedback. Há duas abordagens possíveis para essa integração: mensagens assíncronas via Kafka ou comunicação síncrona via REST.

## Problema

Precisamos escolher um padrão de comunicação que permita enviar avaliações e obter processamento sem aumentar desnecessariamente a complexidade operacional ou comprometer a entrega de valor.

## Decisão

Adotar comunicação síncrona via REST com um endpoint `POST /evaluate`. Não implementar Kafka neste momento.

## Justificativa

- A solução atual não demanda processamento massivo ou desacoplamento extremo.
- REST é simples de implementar, operar e depurar em comparação com um ecossistema Kafka completo.
- O endpoint `POST /evaluate` atende aos requisitos funcionais sem aumentar substancialmente a superfície operacional.
- Reduzimos tempo de desenvolvimento e dependências de infraestrutura.

## Benefícios

- Menor complexidade arquitetural.
- Mais fácil de testar e integrar com outros serviços.
- Evita custo e overhead de manter cluster Kafka, tópicos, esquemas e consumidor/producer.
- Comportamento determinístico e menos pontos de falha operacionais.

## Riscos

- Introduz acoplamento temporal entre serviços: o remetente e o receptor devem estar disponíveis ao mesmo tempo.
- Picos de carga podem afetar o tempo de resposta e a resiliência do serviço.
- Limites de escalabilidade para casos de alto volume de eventos.

## Trade-offs

- Aceitamos acoplamento temporal em troca de menor complexidade operacional e menor custo de infraestrutura.
- A eventual necessidade de processamento assíncrono no futuro pode requerer reavaliação ou adoção de filas/eventos.

## Alternativas Consideradas

- Kafka para comunicação assíncrona: rejeitado pela complexidade e pelo volume atual esperado.
- RabbitMQ ou outra fila leve: considerada, mas ainda adiciona complexidade similar e não é justificada pelo cenário atual.
- REST com fila de retry interna ou fallback: adotável no futuro se o serviço crescer, mas não necessário agora.

## Impacto Arquitetural

- O microsserviço expõe um endpoint REST `POST /evaluate` para receber avaliações de forma síncrona.
- A arquitetura permanece centrada em HTTP e em convenções REST.
- Não há necessidade de adicionar brokers de mensagens ou componentes de mensageria ao diagrama de implantação.

## Consequências Futuras

- Caso o volume de requisições aumente ou a latência de processamento se torne crítica, será necessário reavaliar a viabilidade de uma camada de mensageria assíncrona.
- O design do endpoint deve preservar a capacidade de migrar para um padrão de eventos no futuro, se necessário.
- A equipe deve monitorar a latência e o tempo de resposta do endpoint para detectar sinais de saturação.
