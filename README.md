# Grupo3-Recommendation

Para ver os contratos da API, copie o conteúdo do arquivo openapi.json e cole no site: editor.swagger.io

## 🚀 Como rodar o ambiente completo (Ministack + MS Auth)

Para que o Docker Compose consiga orquestrar todos os microsserviços juntos, você precisa ter todos os repositórios clonados lado a lado na mesma pasta do seu computador.


**1. Clone todos os repositórios necessários:**
Rode os comandos abaixo para baixar a infraestrutura, o nosso microsserviço e os serviços do Grupo 7:

git clone https://github.com/MatheusMasera12/Grupo3-Recommendation.git
git clone https://github.com/pucrs-sweii-2026-1-31/chave-ms-auth-g7.git
git clone https://github.com/pucrs-sweii-2026-1-31/chave-mfe-auth-g7.git

**2. Suba a Orquestra:**
Navegue até a pasta da infraestrutura e rode o Docker:
cd chave-infra
docker-compose up -d --build