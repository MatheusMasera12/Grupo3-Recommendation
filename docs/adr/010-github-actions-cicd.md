---
title: "ADR 010 — GitHub Actions como Pipeline de CI/CD com Releases no Docker Hub"
date: 2026-06-22
status: Aprovado
authors: ["Equipe de Desenvolvimento - Recommendation"]
---

# ADR 010 — GitHub Actions como Pipeline de CI/CD com Releases no Docker Hub

## Status

Aprovado

## Contexto

O projeto `recommendation` é composto por dois artefatos deployáveis:
1. **Microsserviço Java** (`recommendation`) — imagem Docker
2. **Microfrontend** (`recommendation-mfe`) — imagem Docker + pacote NPM

Para garantir qualidade e entrega contínua, é necessário um pipeline que execute testes automaticamente a cada push e publique imagens versionadas quando o código chega à branch `main`.

## Problema

Como automatizar a execução de testes, build e publicação de releases de forma reproduzível, sem custo adicional e integrada ao fluxo de trabalho do GitHub?

## Decisão

Adotar **GitHub Actions** como plataforma de CI/CD, com publicação de imagens Docker no **Docker Hub** e pacote de componentes no **NPM**, configurado em `.github/workflows/ci.yml`.

## Justificativa

- GitHub Actions está integrado nativamente ao repositório — sem necessidade de serviços externos (Jenkins, CircleCI).
- O tier gratuito oferece 2.000 minutos/mês em runners `ubuntu-latest`, suficiente para o escopo do projeto.
- Docker Hub é o registry padrão e gratuito para imagens públicas, compatível com o Localstack e os demais microsserviços do projeto.
- A configuração em YAML versionada junto ao código garante que o pipeline seja auditável e reproduzível.
- `ubuntu-latest` inclui Docker e Java por padrão, sem necessidade de configuração adicional.

## Estrutura do Pipeline

O pipeline é dividido em 3 jobs independentes:

### Job 1: `ms-test-build` — Microsserviço Java
- Checkout do código
- Configuração do Java 21 (Temurin) com cache Maven
- Execução de `./mvnw verify` (testes unitários + integração com Testcontainers)
- Upload do relatório de testes como artefato
- Build e push da imagem Docker para Docker Hub (apenas no `main`)

### Job 2: `mfe-test-build` — Microfrontend
- Checkout do código
- Configuração do Node.js 20 com cache npm
- `npm ci` + verificação TypeScript + lint + testes Vitest
- Build de produção com Module Federation
- Build e push da imagem Docker para Docker Hub (apenas no `main`)

### Job 3: `mfe-publish-npm` — Pacote de Componentes
- Depende do `mfe-test-build`
- Publicação do pacote `@grupo3/recommendation-mfe` no NPM (apenas no `main`)

## Benefícios

- Testes executados automaticamente em cada push e pull request.
- Releases versionadas no Docker Hub com tags `latest` e `{sha}` a cada merge no `main`.
- Pipeline documentado e versionado no código — auditável e reproduzível.
- Sem custo adicional para o projeto acadêmico.

## Riscos

- Dependência do GitHub Actions e Docker Hub como serviços externos.
- Tempo de execução dos testes de integração (Testcontainers) pode aumentar com o crescimento do projeto.
- Secrets (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`) precisam ser gerenciados com cuidado.

## Trade-offs

- Aceitamos o acoplamento ao GitHub Actions em troca da simplicidade de não precisar de um servidor CI dedicado.
- A publicação automática no Docker Hub a cada merge no `main` requer disciplina no uso de branches e pull requests.

## Alternativas Consideradas

- **Jenkins**: rejeitado por exigir infraestrutura dedicada e configuração complexa.
- **GitLab CI**: rejeitado por exigir migração do repositório do GitHub para GitLab.
- **CircleCI / Travis CI**: rejeitados por custo ou mudança de modelo de pricing.
- **Publicação manual**: rejeitada por ser propensa a erros e não garantir reprodutibilidade.

## Impacto Arquitetural

- Arquivo `.github/workflows/ci.yml` define todo o pipeline de CI/CD.
- Secrets `DOCKERHUB_USERNAME` e `DOCKERHUB_TOKEN` cadastrados nas configurações do repositório GitHub.
- Imagens publicadas como:
  - `{DOCKERHUB_USERNAME}/recommendation-ms:latest` e `:{sha}`
  - `{DOCKERHUB_USERNAME}/recommendation-mfe:latest` e `:{sha}`
- O `docker-compose.yml` do `chave-infra` pode referenciar estas imagens para ambientes de staging.

## Consequências Futuras

- Testes de integração end-to-end entre MFE e MS podem ser adicionados como um job adicional no pipeline.
- A publicação no NPM exigirá um secret `NPM_TOKEN` quando o pacote for publicado publicamente.
- O pipeline pode ser estendido com análise de cobertura de testes e relatórios de qualidade de código (SonarQube, Codecov).
