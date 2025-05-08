import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";

// @ts-expect-error – Importing the StyleX PostCSS plugin requires CommonJS syntax
import stylex from "@stylexjs/postcss-plugin";

// This is an alternative configuration that combines the Babel and PostCSS configurations into a single file.
// It does not currently work though.

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
    tsconfigPaths(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: [
          "@babel/preset-typescript",
        ],
        plugins: [
          [
            "@stylexjs/babel-plugin",
            {
              dev: import.meta.env.MODE === "development",
              test: import.meta.env.MODE === "test",
              runtimeInjection: false,
              genConditionalClasses: true,
              treeshakeCompensation: true,
              unstable_moduleResolution: {
                type: "commonJS",
              },
            },
          ],
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        stylex({
          include: [
            "./app/**/*.{ts,tsx}",
          ],
          useCSSLayers: true,
        }),
        autoprefixer(),
      ],
    },
  },
});
