# Back-Vosso-Cinema

API REST para gestão de cinema (filmes, salas, sessões, ingressos e lanches), desenvolvida com NestJS, Prisma ORM e PostgreSQL.

## Stack

- Node.js 18+ e TypeScript
- NestJS 11 (`ValidationPipe` + Swagger)
- Prisma 7 + PostgreSQL
- Jest

## Estrutura

```text
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
└── src/
    ├── filme/
    ├── ingresso/
    ├── lanche/
    ├── prisma/
    ├── sala/
    └── sessao/
```

## Recursos da API

Todos os módulos expõem rotas CRUD completas (`POST`, `GET`, `GET /:id`, `PATCH /:id`, `DELETE /:id`):

- `/filmes`
- `/salas`
- `/sessoes`
- `/ingressos`
- `/lanches`

A documentação interativa via Swagger fica disponível em `http://localhost:3000/api` (ou na porta definida em `PORT`).

## Como rodar localmente

1. Instale as dependências:

```bash
npm ci
```

2. Configure o `.env` a partir do `.env.example` com sua URL do PostgreSQL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/vosso_cinema"
```

3. Gere o Prisma Client, aplique as migrations e rode o seed:

```bash
npx prisma generate
npx prisma migrate deploy
npm run seed
```

4. Inicie a aplicação:

```bash
npm run start:dev
```
