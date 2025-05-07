# Welcome to Remix + Cloudflare Workers!

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

## Development

Run the dev server:

```sh
pnpm run dev
```

## Typegen

Generate types for React Router and your Cloudflare bindings in `wrangler.json`:

```sh
pnpm run typecheck
```

You will need to rerun typegen whenever you make changes to `wrangler.json`.
