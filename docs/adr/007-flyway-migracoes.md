---
title: "ADR 007 — Flyway para Versionamento e Migração do Banco de Dados"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 007 — Flyway para Versionamento e Migração do Banco de Dados

## Status

Aprovado

## Contexto

O microsserviço `recommendation` usa PostgreSQL como banco de dados relacional. Durante o desenvolvimento, o schema evolui com frequência: novas tabelas, colunas, constraints e índices precisam ser aplicados de forma controlada, reproduzível e auditável em todos os ambientes (local, CI, produção via Localstack/Docker).

Sem uma ferramenta de migração, o DDL fica espalhado, difícil de versionar e propenso a divergências entre ambientes — o que quebra testes de integração e deploys.

## Problema

Como garantir que o schema do banco de dados seja sempre consistente entre os ambientes de desenvolvimento, CI (Testcontainers) e produção, sem precisar rodar scripts SQL manualmente ou depender do `ddl-auto=create`?

## Decisão

Adotar **Flyway** (`org.flywaydb:flyway-core`) integrado ao Spring Boot para gerenciamento de migrações versionadas.

## Justificativa

- O Spring Boot possui integração nativa com Flyway: basta declarar a dependência e as migrações em `src/main/resources/db/migration/` com o padrão `V{n}__{descricao}.sql`.
- Flyway aplica as migrações na ordem correta e registra o histórico na tabela `flyway_schema_history`, garantindo idempotência.
- Em ambiente de testes com Testcontainers, o Flyway sobe automaticamente e aplica o schema real — eliminando a necessidade de `ddl-auto=create-drop` ou mocks de banco.
- É a ferramenta padrão de mercado para projetos Spring Boot + PostgreSQL.

## Benefícios

- Reprodutibilidade do schema em todos os ambientes de forma automática.
- Histórico de alterações auditável junto ao código-fonte (versionado no Git).
- Compatibilidade total com Testcontainers nos testes de integração.
- Segurança: impede que migrações sejam aplicadas fora de ordem ou duas vezes.

## Riscos

- Migrações já aplicadas não podem ser alteradas (Flyway valida o checksum); erros exigem uma nova migration.
- Em ambientes com múltiplas réplicas, é necessário garantir que apenas uma instância execute as migrações na inicialização (Spring Boot garante isso com lock de banco).

## Trade-offs

- Aceitamos a rigidez de não poder editar migrações já aplicadas em troca de auditabilidade e reprodutibilidade.
- A necessidade de criar um novo arquivo de migration para cada alteração de schema aumenta a disciplina do time, o que é positivo.

## Alternativas Consideradas

- `spring.jpa.hibernate.ddl-auto=update`: rejeitado por ser não-determinístico e não versionado — perigoso em produção.
- `ddl-auto=create-drop` (apenas para testes): rejeitado por não testar o schema real de produção.
- Liquibase: alternativa válida e igualmente madura, mas o Flyway possui sintaxe mais simples e integração mais direta com Spring Boot 3.x.

## Impacto Arquitetural

- Scripts de migração versionados em `src/main/resources/db/migration/` com nomenclatura `V{n}__{descricao}.sql`.
- Configuração em `application.properties`: `spring.flyway.enabled=true` e `spring.jpa.hibernate.ddl-auto=validate`.
- O `ddl-auto=validate` garante que o schema do banco bate com as entidades JPA ao subir, sem alterar nada automaticamente.
- Testcontainers nos testes de integração sobe um PostgreSQL real e o Flyway aplica o schema completo — os testes validam o comportamento real de produção.

## Consequências Futuras

- Toda nova alteração de schema exige um novo arquivo `V{n}__...sql` no diretório de migrações.
- Em caso de rollback, será necessário criar uma migration reversa explícita (Flyway não oferece rollback automático na versão gratuita).
- O time deve manter os scripts de migration revisados em pull requests para evitar conflitos de número de versão.
