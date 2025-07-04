An example of a StyleX setup using Vite, PostCSS, and shared styles using local packages.

The application uses React Router v7 (framework mode) and Cloudflare, providing a setup where multiple dependencies rely on Vite APIs _(both React Router and Cloudflare are Vite plugins)_.

## Tech Stack

* An application with React Router v7 (framework mode) and Cloudflare.
* A local package with shared StyleX styles.
* StyleX with PostCSS.
* Vite 6
* Pnpm
* TurboRepo

_Setup was kept to a minimum for simplicity. This means tools such as ESLint were excluded._

## Development

Build the app:

```sh
pnpm run build
```

Run the dev server:

```sh
pnpm run dev
```
