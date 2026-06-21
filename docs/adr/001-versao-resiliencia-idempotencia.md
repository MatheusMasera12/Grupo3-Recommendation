---
title: "Escolha de Versão, Resiliência de Cache e Idempotência no Microsserviço de Recomendação"
date: 2026-06-21
status: Proposto
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 001 — Escolha de Versão, Resiliência de Cache e Idempotência

## Status

Proposto

## Contexto

O microsserviço `recommendation` faz parte do sistema de autoavaliação e é responsável por gerar e expor recomendações de recursos para usuários idosos. Durante a revisão do código e da configuração do projeto foram identificados três pontos críticos que exigem uma decisão arquitetural clara:

- Alinhamento de versão do Spring Boot: o repositório contém referências e expectativas compatíveis com a família Spring Boot 3.4.x, enquanto o `pom.xml` atual referenciava um `parent` potencialmente incompatível (por ex. 4.x). Manter a versão correta é essencial para estabilidade, compatibilidade de dependências e avaliação pedagógica.
- Concorrência ao gerar recomendações (`generateRecommendation`): a operação carrega recursos, filtra já existentes e grava novas entradas com uma constraint única em `tb_recommendations (user_id, resource_id)`. Em cenários concorrentes múltiplas threads podem tentar inserir a mesma combinação e produzir `DataIntegrityViolationException` (violação de chave única).
- Acoplamento com Redis/Cache: o código atual chama a limpeza do cache (`evictUserCache`) dentro da mesma transação de escrita do banco. Se a operação de evicção falhar (Redis indisponível), isso pode propagar uma exceção que resulta em inconsistência entre o estado do banco (já modificado) e o cache — ou faz a transação do banco falhar, dependendo do fluxo.

Decisões explícitas precisam balancear disponibilidade, consistência e simplicidade operacional, além de ser facilmente justificáveis para o contexto acadêmico/profissional do projeto.

## Decisão

Adotamos as seguintes decisões, combinadas, para mitigar os riscos identificados:

1. Versão do Spring Boot
   - Alinhar o `parent` do `pom.xml` para a série **Spring Boot 3.4.x** (por exemplo `3.4.6` ou última patch da série), garantindo compatibilidade com dependências usadas nos testes e no runtime.

2. Tratamento de concorrência / idempotência
   - Manter a `unique constraint` em `tb_recommendations (user_id, resource_id)` como proteção de integridade de dados.
   - Envolver a operação de persistência (ex.: `recommendationRepository.saveAll(...)`) com captura de `DataIntegrityViolationException`. Ao detectar violação de chave única em contexto de concorrência, tratar a exceção como **conflito benigno**: logar o evento (WARN), ignorar as entradas conflitantes e prosseguir normalmente, sem propagar erro para o cliente quando aplicável.
   - Alternativamente, sempre que apropriado, implementar controle de concorrência lógica (optimistic locking, DB upsert ou lock por chave lógica) para fluxos que demandem forte garantia de idempotência.

3. Resiliência do cache (evicção no afterCommit)
   - Alterar o comportamento de limpeza de cache para executar a evicção **apenas após o commit bem-sucedido** da transação do banco de dados. Implementação proposta: usar `TransactionSynchronizationManager.registerSynchronization(...)` e executar a chamada de remoção de chaves no `afterCommit()`.
   - Garantir que falhas na camada de cache (ex.: `RedisConnectionFailureException`) não revertam a transação do banco. Em vez disso, essas falhas devem ser tratadas localmente (retry limitado, log/metric, e eventualmente alerta/erro operativo), preservando a consistência do dado primário no banco.

## Racional / Motivações

- Downgrade/alinhar para Spring Boot 3.4.x: Reduz o risco de incompatibilidades com dependências do projeto (Testcontainers, starters, configurações já testadas) e evita mudanças de comportamento inesperadas introduzidas em grandes saltos de versão.
- Tratar DataIntegrityViolationException como benigno: Apesar de inserir proteção na camada de aplicação ser desejável, a constraint do banco já garante integridade. Em cenários de concorrência alta, capturar e tratar a exceção evita falhas desnecessárias, reduz ruído nos logs e mantém a operação idempotente do ponto de vista do cliente.
- Evicção no afterCommit: Evitar que um problema de infraestrutura (Redis) provoque rollback de uma operação bem-sucedida no banco. A política preferida é que o banco seja a fonte de verdade; o cache é uma camada de otimização que deve ser eventual-consistente.

## Consequências

Positivas:

- Maior disponibilidade: quedas temporárias do Redis não impedem alterações válidas no banco.
- Consistência forte do dado primário (Postgres) e consistência eventual do cache, aceitável para o domínio de recomendações.
- Menor probabilidade de falhas de integração durante testes/in CI (Testcontainers + Redis instável).

Negativas / Trade-offs:

- Complexidade de implementação: registrar synchronizations e capturar exceções específicas introduz código adicional e caminhos de erro que devem ser bem testados.
- Inconsistência temporal: clientes podem ver dados stale até que a evicção/repopulação do cache ocorra; isso é aceitável para o domínio, mas precisa estar documentado.
- Possibilidade de perder sinalizações de erro: ao tratar violations como benignas, pode ocultar problemas lógicos de concorrência se não houver instrumentação adequada.

## Alternativas Consideradas

- Rejeitar writes quando o cache está indisponível (falha-fast): não aceito devido à disponibilidade degradada e impacto no domínio operacional.
- Forçar lock distribuído (Redis lock) para serializar `generateRecommendation`: solução robusta mas adiciona complexidade operacional (deadlock, timeouts), por isso é considerada como opção 2 se o problema de concorrência se agravar.
- Mudar para upserts/merge nativo do DB: técnica válida, pode ser usada onde aplicável, mas depende do suporte do fornecedor SQL e da modelagem dos dados.

## Implementação proposta (exemplos)

- Evicção no afterCommit (pseudocódigo):

```java
TransactionSynchronizationManager.registerSynchronization(
    new TransactionSynchronization() {
        @Override
        public void afterCommit() {
            try {
                cacheService.evictUserCache(userId);
            } catch (Exception e) {
                log.error("Falha ao limpar cache após commit", e);
                // métricas/alerta
            }
        }
    }
);
```

- Tratamento de DataIntegrityViolationException ao salvar:

```java
try {
    recommendationRepository.saveAll(recommendations);
} catch (DataIntegrityViolationException e) {
    // verificar se é violação de unique constraint e então logar/ignorar
    log.warn("Conflito de concorrência ao salvar recomendações: {}", e.getMessage());
}
```

## Plano de rollout

1. Atualizar `pom.xml` para `spring-boot-starter-parent` 3.4.x e fixar versões de Testcontainers/Flyway/Redis client.
2. Adicionar testes unitários e de integração que simulem concorrência (dois threads tentando gerar as mesmas recomendações) e falha do Redis.
3. Implementar `afterCommit()` para evicção de cache e wrapper para captura de `DataIntegrityViolationException` em `RecommendationService.generateRecommendation`.
4. Monitoramento: dashboards e alertas em caso de aumento de `DataIntegrityViolationException` e falhas de evicção do cache.

## Monitoramento e Métricas

- Contar e expor métricas: número de evicções falhadas, contagem de `DataIntegrityViolationException` por endpoint, latência de `generateRecommendation`.
- Configurar alertas para aumento anômalo dessas métricas.

## Data e Autores

- Data: 2026-06-21
- Autores: Equipe de Desenvolvimento - `recommendation`

## Referências

- Spring Transaction API — `TransactionSynchronization` / `TransactionSynchronizationManager`
- Testcontainers — integração em CI
