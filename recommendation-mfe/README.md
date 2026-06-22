# Recommendation MFE — Plano de Aprendizagem para Idosos

> Micro Frontend de recomendações personalizadas de aprendizagem do **Grupo 3**.

## Sobre o sistema

Este sistema ajuda **pessoas idosas** a avaliar suas próprias competências e receber planos de desenvolvimento personalizados. O sistema:

- Permite que o usuário avalie suas competências em diferentes áreas
- Gera recomendações de materiais de aprendizagem com base no perfil individual
- Acompanha a evolução do usuário ao longo do tempo
- É projetado com foco em **acessibilidade, clareza e simplicidade**

---

## Rodando o projeto completo

O sistema é composto por vários serviços. Para rodar tudo junto:

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e Docker Compose
- Node.js 18+ e npm 9+ (apenas para o MFE em modo dev)

### 1. Subir toda a infraestrutura com Docker

```bash
cd chave-infra
docker compose up -d --build
```

Isso inicia os seguintes serviços:

| Serviço | URL | Descrição |
|---------|-----|-----------|
| `ministack` | `localhost:4566` | LocalStack (AWS local: S3, RDS, API Gateway) |
| `chave-ms-auth` | `localhost:3001` | Microsserviço de autenticação (Node.js) |
| `chave-mfe-auth` | `localhost:4001` | MFE de login/autenticação |
| `chave-shell` | `localhost:3000` | Shell principal — **ponto de entrada da aplicação** |
| `chave-ms-recommendation` | `localhost:8080` | Backend de recomendações (Spring Boot + PostgreSQL) |

> O `infra-provisioner` roda automaticamente e pode levar ~1 min para provisionar o banco e os recursos AWS locais. Aguarde o status `Exited (0)` antes de acessar a aplicação.

### 2. Verificar se os serviços subiram

```bash
cd chave-infra
docker compose ps
```

Todos os containers devem estar com status `running` (exceto `infra-provisioner` que deve mostrar `Exited (0)`).

### 3. Rodar o MFE de recomendações em modo dev

Abra um novo terminal:

```bash
cd recommendation-mfe
npm install
npm run dev
```

Acesse em: **`http://localhost:5173`**

O MFE conecta automaticamente ao backend em `http://localhost:8080`.

### 4. Acessar a aplicação completa

Após tudo subir, acesse o **shell principal** em:

**`http://localhost:3000`**

### 5. Parar tudo

```bash
cd chave-infra
docker compose down
```

---

## Rodando apenas o Recommendation MFE + backend (modo simplificado)

Se quiser rodar só o domínio de recomendações sem a infraestrutura completa:

```bash
# Terminal 1 — banco de dados PostgreSQL
cd recommendation
docker compose up -d

# Terminal 2 — backend Spring Boot
cd recommendation
./mvnw spring-boot:run

# Terminal 3 — frontend MFE
cd recommendation-mfe
npm install
npm run dev
```

| Serviço | URL |
|---------|-----|
| Backend | `http://localhost:8080` |
| MFE | `http://localhost:5173` |

---

## Build de produção

```bash
cd recommendation-mfe
npm run build
```

O resultado é gerado em `dist/`.

## Verificação de tipos e lint

```bash
# Verificação de tipos TypeScript
npx tsc --noEmit

# Linting
npm run lint
```

---

## Estrutura do projeto

```
Grupo3-Recommendation/
├── chave-infra/             # Docker Compose + Terraform (infraestrutura completa)
├── chave-shell/             # Shell MFE — ponto de entrada (porta 3000)
├── chave-mfe-auth/          # MFE de autenticação (porta 4001)
├── chave-ms-auth/           # Microsserviço de autenticação Node.js (porta 3001)
├── recommendation/          # Backend Spring Boot — domínio de recomendações (porta 8080)
└── recommendation-mfe/      # Este projeto — MFE de recomendações (porta 5173 dev)
    └── src/
        ├── components/      # Componentes da biblioteca de design
        │   ├── Button/
        │   ├── Card/
        │   ├── DesignSystemProvider/
        │   ├── Input/
        │   ├── Navbar/
        │   ├── RecommendationCard/
        │   ├── ResourceForm/
        │   ├── ResourceList/
        │   ├── SearchBar/
        │   ├── Sidebar/
        │   └── UserProfileCard/
        ├── hooks/           # Hooks customizados (useRecommendations, useResources)
        ├── pages/           # Páginas (RecommendationView, ResourcePage)
        ├── routes/          # Configuração de rotas
        ├── services/        # Chamadas à API REST (axios)
        ├── types/           # Tipos TypeScript do domínio
        ├── theme.ts         # Tema Material UI (WCAG AA)
        └── index.ts         # Exportações da biblioteca de componentes
```

## Componentes principais

| Componente | Descrição |
|-----------|-----------|
| `RecommendationCard` | Exibe uma recomendação com score colorido (verde/amarelo/vermelho) |
| `ResourceList` | Lista com busca, confirmação de exclusão e feedback visual |
| `ResourceForm` | Formulário com validação clara e linguagem acessível |
| `Navbar` | Barra de navegação fixa com título da aplicação |
| `Sidebar` | Menu lateral com indicação de página ativa |

## Tecnologias

- **React 19** + **TypeScript** — UI e tipagem
- **Material UI v6** — componentes acessíveis
- **Vite** — bundler
- **Module Federation** — integração com shell MFE
- **Axios** — chamadas HTTP

## Design System

O projeto está sincronizado com o Claude Design:  
`https://claude.ai/design/p/e10b4bad-1cea-4f53-85b4-edf91ecfe8dc`

Para re-sincronizar após mudanças nos componentes, siga os passos em `.design-sync/NOTES.md`.

## Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 AA**:

- Tamanho mínimo de fonte: 16px
- Alvos de toque mínimos: 48×48px
- Contraste mínimo: 4.5:1 (texto normal)
- Labels ARIA em todos os controles interativos
- Navegação por teclado completa
- Estados de foco visíveis
- Mensagens de erro claras e descritivas
