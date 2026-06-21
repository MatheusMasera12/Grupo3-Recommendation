# Recommendation MFE — Plano de Aprendizagem para Idosos

> Micro Frontend de recomendações personalizadas de aprendizagem do **Grupo 3**.

## Sobre o sistema

Este sistema ajuda **pessoas idosas** a avaliar suas próprias competências e receber planos de desenvolvimento personalizados. O sistema:

- Permite que o usuário avalie suas competências em diferentes áreas
- Gera recomendações de materiais de aprendizagem com base no perfil individual
- Acompanha a evolução do usuário ao longo do tempo
- É projetado com foco em **acessibilidade, clareza e simplicidade**

## Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação

```bash
npm install
```

## Rodando localmente

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

## Build de produção

```bash
npm run build
```

O resultado é gerado em `dist/`.

## Rodando os testes

```bash
# Verificação de tipos TypeScript
npx tsc --noEmit

# Linting
npm run lint

# Gerar declarações de tipo (para o design-sync)
npx tsc -p tsconfig.dts.json
```

## Estrutura do projeto

```
src/
├── components/          # Componentes da biblioteca de design
│   ├── Button/          # Botão com estado de carregamento acessível
│   ├── Card/            # Card genérico com título, subtítulo e ações
│   ├── DesignSystemProvider/  # Provedor de tema MUI
│   ├── Input/           # Campo de texto acessível
│   ├── Navbar/          # Barra de navegação superior
│   ├── RecommendationCard/    # Card de recomendação com score de compatibilidade
│   ├── ResourceForm/    # Formulário para criar/editar materiais
│   ├── ResourceList/    # Lista de materiais com busca e paginação
│   ├── SearchBar/       # Campo de busca com debounce
│   ├── Sidebar/         # Menu lateral com navegação
│   └── UserProfileCard/ # Card de perfil do usuário
├── hooks/               # Hooks customizados
├── pages/               # Páginas da aplicação
├── routes/              # Configuração de rotas
├── services/            # Chamadas à API REST
├── types/               # Tipos TypeScript do domínio
│   ├── resource.ts      # Resource, CreateResourceDto, labels PT-BR
│   └── recommendation.ts  # Recommendation com score de compatibilidade
├── theme.ts             # Configuração do tema Material UI
└── index.ts             # Ponto de exportação da biblioteca de componentes
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
