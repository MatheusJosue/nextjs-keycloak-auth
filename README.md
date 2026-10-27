# 🔐 Next.js + Keycloak Auth

> Exemplo de autenticação e autorização em Next.js usando Keycloak como provedor de identidade (OpenID Connect) via NextAuth.

## ✨ Funcionalidades

- **Login com Keycloak** pelo provider do NextAuth
- **Rotas protegidas:** o dashboard só aparece para usuários autenticados
- **Sessão tipada** com TypeScript, estendendo os tipos do NextAuth
- **Cliente HTTP (Axios)** que envia o token de acesso para APIs
- **Logout** da sessão da aplicação

## 🛠️ Tecnologias

Next.js · React · TypeScript · NextAuth · Keycloak · Axios · Tailwind CSS

## 🧠 Decisões técnicas

- **Keycloak** centraliza usuários, papéis e SSO fora da aplicação. É o mesmo padrão que uso em sistemas do setor financeiro.
- **NextAuth** cuida do fluxo OAuth/OIDC e da renovação da sessão, mantendo a aplicação desacoplada do provedor.
- **Cliente HTTP centralizado** para não repetir a lógica de token em cada chamada.

## ▶️ Como rodar

```bash
npm install
npm run dev
```

Crie um `.env.local` com:

```
KEYCLOAK_CLIENT_ID=
KEYCLOAK_CLIENT_SECRET=
KEYCLOAK_ISSUER=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

---

Desenvolvido por [Matheus Cerqueira](https://www.linkedin.com/in/matheusxaviercerqueira/)
