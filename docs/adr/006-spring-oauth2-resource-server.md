---
title: "ADR 006 — Spring OAuth2 Resource Server para Validação JWT"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 006 — Spring OAuth2 Resource Server para Validação JWT

## Status

Aprovado

## Contexto

O microsserviço `recommendation` precisa proteger seus endpoints e consumir tokens JWT emitidos por um serviço de autenticação centralizado. A aplicação usa Spring Boot e precisa de integração simples com segurança OAuth2.

## Problema

Como validar tokens JWT de forma segura, automatizada e integrada ao stack do Spring, evitando lógica de autenticação customizada e manutenção manual de chaves.

## Decisão

Usar `spring-boot-starter-oauth2-resource-server` com validação JWT via JWKS.

## Justificativa

- O starter Spring Security já oferece suporte nativo a recursos OAuth2 e ao formato JWT.
- JWKS permite rotação automática de chaves públicas sem intervenção manual.
- A integração simplifica a configuração de filtros de segurança e autorização de escopos/roles.
- Reduz o risco de implementar validação de token incorreta ou insegura.

## Benefícios

- Validação segura e padronizada de JWT.
- Atualização automática das chaves por meio do JWKS URI.
- Menor código customizado e menor superfície de bugs de autenticação.
- Melhora na compatibilidade com provedores de identidade padrão.

## Riscos

- Dependência do serviço de autenticação e do JWKS URI para validar tokens.
- Latência adicional na primeira resolução das chaves JWKS.
- Potenciais falhas de disponibilidade do JWKS URI se o serviço de autenticação ficar indisponível.

## Trade-offs

- Aceitamos dependência externa do JWKS URI em troca de segurança e rotação automática de chaves.
- A curva de aprendizado do Spring Security é compensada pela robustez e compatibilidade com o ecossistema.

## Alternativas Consideradas

- Implementar validação JWT manual: rejeitada por maior risco de erro e maior manutenção.
- Usar introspecção de token com o servidor OAuth2: considerada, mas adiciona mais chamadas de rede e menor desempenho.
- Autenticação baseada em API key simples: rejeitada por não atender aos requisitos de segurança e conformidade.

## Impacto Arquitetural

- O microsserviço passará a depender de um servidor de autorização que exponha JWKS.
- Configurações de segurança do Spring Security serão centralizadas no resource server.
- Endpoints serão protegidos por filtros de autenticação JWT e por regras de autorização baseadas em escopos ou roles.
- O pipeline de deploy deve garantir que as configurações de URI do JWKS sejam corretas nos ambientes.

## Consequências Futuras

- Caso o serviço de autenticação altere o JWKS URI ou o formato do token, será necessário atualizar a configuração do resource server.
- A equipe deverá monitorar erros de validação JWT e disponibilidade do JWKS para prevenir falhas de autenticação.
- A adoção de OAuth2 facilita futuras integrações com outros serviços e sistemas de identidade.
