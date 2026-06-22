---
title: "ADR 008 — Testcontainers para Testes de Integração"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 008 — Testcontainers para Testes de Integração

## Status

Aprovado

## Contexto

O microsserviço `recommendation` depende de dois serviços de infraestrutura: PostgreSQL (banco de dados) e Redis (cache). Os testes de integração precisam validar o comportamento real do serviço com essas dependências — incluindo queries JPA, Flyway migrations, evicção de cache e comportamento transacional.

A alternativa de mockar o banco e o Redis (H2, embedded Redis) não valida o comportamento real do PostgreSQL e não detecta problemas de migração Flyway, consultas específicas do dialeto ou comportamentos de concorrência.

## Problema

Como executar testes de integração que validem o comportamento real do sistema com PostgreSQL e Redis, sem depender de infraestrutura externa instalada na máquina do desenvolvedor ou no CI, de forma reproduzível e isolada?

## Decisão

Adotar **Testcontainers** (`org.testcontainers:postgresql` e `org.testcontainers:junit-jupiter`) para subir containers Docker reais de PostgreSQL 16 e Redis 7 durante a execução dos testes de integração.

## Justificativa

- Testcontainers inicia containers Docker descartáveis que espelham exatamente o ambiente de produção.
- Elimina a necessidade de ter PostgreSQL ou Redis instalados localmente ou no CI — basta ter Docker disponível.
- O Flyway é aplicado ao container temporário, validando as migrations reais antes de cada execução de testes.
- A classe base `AbstractIntegrationTest` centraliza a configuração dos containers e as propriedades dinâmicas de conexão via `@DynamicPropertySource`, evitando duplicação.
- O GitHub Actions tem Docker disponível por padrão em `ubuntu-latest`, tornando a execução no CI transparente.

## Benefícios

- Testes de integração que validam o comportamento real do sistema (PostgreSQL, Redis, Flyway).
- Ambiente 100% reproduzível: mesmo comportamento na máquina do dev e no CI.
- Sem setup manual de infraestrutura — o Docker é suficiente.
- Containers são descartados ao final dos testes, sem deixar dados residuais.

## Riscos

- Requer Docker instalado e disponível no ambiente de execução.
- Testes de integração são mais lentos que testes unitários (warm-up dos containers).
- Em máquinas com recursos limitados, múltiplos containers simultâneos podem impactar a performance.

## Trade-offs

- Aceitamos testes mais lentos em troca de maior fidelidade ao ambiente de produção.
- A dependência de Docker no CI é justificada pela qualidade dos testes — o GitHub Actions oferece isso nativamente.

## Alternativas Consideradas

- H2 (banco em memória): rejeitado por não suportar o dialeto PostgreSQL e não validar migrations Flyway reais.
- Banco PostgreSQL fixo no CI (service container): válido, mas exige configuração de credenciais e não é descartável por teste.
- MockMvc com mocks de repositório: útil para testes unitários de controller, mas não valida a stack completa.
- Embedded Redis (`it.ozimov:embedded-redis`): descontinuado e não confiável; Testcontainers é mais robusto.

## Impacto Arquitetural

- Classe base `AbstractIntegrationTest` define containers PostgreSQL 16 e Redis 7 compartilhados entre testes via `@BeforeAll`/`@AfterAll`.
- `@DynamicPropertySource` sobrescreve as propriedades de conexão (`spring.datasource.url`, `spring.data.redis.host`, etc.) para apontar para os containers.
- Testes de integração estendem `AbstractIntegrationTest` e recebem Spring Boot context completo com banco e cache reais.
- O pipeline CI (`github.com/actions`) executa `mvn verify` que inclui os testes de integração com Docker disponível nativamente.

## Consequências Futuras

- Novos serviços de infraestrutura (ex.: Kafka, Elasticsearch) podem ser adicionados como containers no `AbstractIntegrationTest` conforme necessário.
- O tempo de execução dos testes no CI deve ser monitorado; se crescer demais, pode-se paralelizar com `junit-platform.properties`.
- A versão dos containers (`postgres:16`, `redis:7-alpine`) deve ser mantida alinhada com a versão usada em produção.
