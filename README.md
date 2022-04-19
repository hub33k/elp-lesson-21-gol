# monorepo-template

This is a monorepo.

It contains `client` (NextJS), `server` (NestJS) and `common` package.

## Getting started

1. Install `pnpm` (https://pnpm.io/)
2. Run `pnpm i`
3. Build `common` package by running: `pnpm common:build`.
4. In separate terminal tabs run these commands:
   - `pnpm client:start` - starts NextJS app on port 3000
   - `pnpm server:start` - starts NestJS app on port 4000
