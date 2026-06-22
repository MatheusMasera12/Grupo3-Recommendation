---
title: "ADR 004 — PostgreSQL vs Elasticsearch"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 004 — PostgreSQL vs Elasticsearch

## Status

Aprovado

## Contexto

O serviço precisa oferecer pesquisa de recursos e recomendações. Há duas opções principais para armazenamento e busca: usar PostgreSQL com índices e consultas `ILIKE`, ou adotar Elasticsearch para buscas mais sofisticadas.

## Problema

Selecionar a solução de persistência e busca que equilibra simplicidade, custo, operacionalidade e qualidade de pesquisa para o volume de dados esperado.

## Decisão

Utilizar PostgreSQL com índices apropriados e consultas baseadas em `ILIKE`. Não utilizar Elasticsearch.

## Justificativa

- O volume esperado é inferior a 1000 registros, o que torna o PostgreSQL adequado e eficiente.
- PostgreSQL já é o armazenamento primário do serviço, evitando a complexidade de manter dois sistemas de persistência.
- Consultas `ILIKE` com índices bem configurados entregam desempenho aceitável para o caso de uso atual.
- Elasticsearch adicionaria sobrecarga de sincronização, custo operacional e necessidade de gerenciamento de cluster.

## Benefícios

- Simplicidade operacional com uma única base de dados.
- Menor superfície de falha e menos componentes na infraestrutura.
- Fácil manutenção e backup do banco de dados.
- Redução de custo e tempo de desenvolvimento.

## Riscos

- A busca textual será menos sofisticada do que a oferecida por Elasticsearch.
- Funcionalidades avançadas de relevância, fuzziness e análise de linguagem não estarão disponíveis imediatamente.
- Consultas `ILIKE` podem ser menos eficientes em casos de padrões complexos ou muitas colunas pesquisadas.

## Trade-offs

- Optamos por simplicidade e manutenção reduzida em vez de funcionalidades avançadas de busca.
- A equipe assume limites de pesquisa simples como suficiente para o domínio atual.

## Alternativas Consideradas

- Elasticsearch: rejeitado devido ao volume reduzido e à complexidade operacional.
- Solução híbrida (PostgreSQL como origem e Elasticsearch como camada de busca): considerada, mas não justificada para menos de 1000 registros.
- Busca full-text nativa do PostgreSQL (`tsvector`): opção futura, mas o uso atual de `ILIKE` é mais simples para este estágio inicial.

## Impacto Arquitetural

- A arquitetura mantém PostgreSQL como única fonte de verdade para dados de recursos e recomendações.
- Consultas de pesquisa são implementadas no backend com índices e filtros SQL.
- Não há necessidade de um cluster separado de busca ou de pipelines de sincronização de dados.

## Consequências Futuras

- Se a base de dados ou os requisitos de busca crescerem significativamente, será necessária nova avaliação de Elasticsearch ou de mecanismos de busca full-text.
- A equipe deve documentar o comportamento das consultas `ILIKE` e seus limites para que ajustes futuros possam ser feitos de maneira segura.
- Um eventual upgrade para `tsvector` ou outra solução de busca dentro do PostgreSQL pode ser considerado para ganhos de relevância sem adicionar um novo sistema.
