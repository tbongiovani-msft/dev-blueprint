# Dev Blueprints







## Como Utilizar

### Dependencias

* NodeJS >=18.19.0


### Passo 1: Setup de Authenticação do GitHub

#### 1.1 Criando um Personal Access Token (PAT) com read:packages

Para acessar os pacotes privados da organização tbongiovani-msft, você precisa criar um Personal Access Token com as permissões adequadas:

1. Acesse o [GitHub.com](https://github.com), clique na sua foto de perfil no canto superior direito e selecione **Settings** no menu dropdown

2. No menu lateral esquerdo, role até o final e clique em **Developer settings**

3. Clique em **Personal access tokens** e selecione **Tokens (classic)**

4. Clique em **Generate new token (classic)**

5. Configure o token:
   - **Note/Name:** Dê um nome descritivo (ex: "Dev Blueprint")
   - **Expiration:** Escolha um período apropriado
   - **Scopes/Permissions:**
     - ✅ **read:packages** - Para ler pacotes do GitHub Packages

6. Clique em **Generate token**
   - **⚠️ IMPORTANTE:** Copie o token imediatamente e salve em local seguro, o token não será mostrado novamente após sair da página

#### 1.2 Autorizando SSO na Organização tbongiovani-msft

Após criar o PAT token, você precisa autorizar o Single Sign-On (SSO) para a organização tbongiovani-msft:

1. Acesse **Settings > Developer settings > Personal access tokens** e encontre o token que você acabou de criar.

2. Ao lado do token, você verá um botão **Configure SSO**, clique neste botão.

3. Na lista de organizações, encontre **tbongiovani-msft** e clique em **Authorize** ao lado da organização.

4. Você pode ser redirecionado para fazer login novamente, siga as instruções de autenticação  (LDAP/AD) e confirme a autorização quando solicitado.

5. Volte para a lista de tokens, o token deve mostrar que está autorizado para a organização tbongiovani-msft, você verá um ícone verde ou indicação de "SSO authorized"

#### Passo 2: Configurando o Token no Ambiente

Após criar e autorizar o token, configure-o no seu ambiente local:

```bash
npm config set @tbongiovani-msft:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken "TokenGeradoNoPassoAnterior"
```

