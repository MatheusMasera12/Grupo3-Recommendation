# Grupo3-Recommendation

Para ver os contratos da API, copie o conteúdo do arquivo openapi.json e cole no site: [editor.swagger.io](https://editor.swagger.io)

## 🚀 Como rodar o ambiente completo (Ministack + MS Auth)

Para que o Docker Compose consiga orquestrar todos os microsserviços juntos, você precisa ter todos os repositórios clonados lado a lado na mesma pasta do seu computador.

**1. Clone todos os repositórios necessários:**

Rode os comandos abaixo para baixar a infraestrutura, o nosso microsserviço e os serviços do Grupo 7:

```bash
git clone https://github.com/MatheusMasera12/Grupo3-Recommendation.git
git clone https://github.com/pucrs-sweii-2026-1-31/chave-ms-auth-g7.git chave-ms-auth
git clone https://github.com/pucrs-sweii-2026-1-31/chave-mfe-auth-g7.git chave-mfe-auth
```

**2. Suba a Orquestra:**

Navegue até a pasta da infraestrutura e rode o Docker:

```bash
cd chave-infra  
docker compose up -d --build
```

> 💡 **Nota:** Não é necessário abrir as pastas dos frontends/backends ou rodar comandos locais na sua máquina. O Docker Compose compila e executa todos os microsserviços e microfrontends de forma 100% automatizada.

---

## 🔗 Serviços e Portas Locais

Após subir a stack, os seguintes serviços estarão disponíveis:

| Serviço | URL / Porta | Observações / Documentação |
| :--- | :--- | :--- |
| 🖥️ **Shell Host** | [http://localhost:3010](http://localhost:3010) | Interface unificada principal (Host de MFEs) |
| 📦 **Recommendation MFE** | [http://localhost:5173/resources](http://localhost:5173/resources) | Tela de catálogo e recomendação |
| 🔑 **Auth MFE** | [http://localhost:4010](http://localhost:4010) | Tela de Autenticação |
| ☕ **Recommendation API** | [http://localhost:8090/api/resources](http://localhost:8090/api/resources) | Microsserviço de Recomendação. Documentação Swagger em [http://localhost:8090/swagger-ui/index.html](http://localhost:8090/swagger-ui/index.html) *(acessar `/` direto no navegador retornará erro 500 pois a rota raiz não é mapeada).* |
| 🟢 **Auth API** | [http://localhost:3001/api](http://localhost:3001/api) | Microsserviço de Autenticação. Documentação Swagger em [http://localhost:3001/api-docs](http://localhost:3001/api-docs) *(acessar `/` direto no navegador retornará "Não foi possível obter /" pois não há rota mapeada).* |

---

## 🔑 Login como Administrador (Admin)

Como a base de dados do serviço de autenticação inicializa vazia, siga os passos abaixo para criar e acessar a conta de administrador:

1. **Cadastre-se na aplicação:**
   Acesse a página de cadastro do MFE de Autenticação ou vá diretamente em [http://localhost:3010/login](http://localhost:3010/login) e clique em **Criar conta**.
   * Cadastre um usuário (ex: `admin@email.com` com senha `Senha@12345`).
   * *A senha deve conter no mínimo 10 caracteres, ao menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial.*

2. **Promova o usuário a Administrador no banco de dados:**
   Rode o comando abaixo no terminal da sua máquina para associar o usuário recém-criado à role `admin` (ID 2):
   
   ```bash
   docker exec -it ministack-rds-chave-auth-db psql -U chave -d chave_auth -c "INSERT INTO users_roles (id_user, id_role) VALUES (1, 2);"
   ```
   *(Nota: Substitua o valor `1` pelo ID correspondente do seu usuário caso não seja o primeiro usuário cadastrado no banco).*

3. **Pronto!**
   Agora você pode efetuar login com o e-mail e senha cadastrados no passo 1 e terá acesso completo às permissões administrativas de cadastro de recursos.
