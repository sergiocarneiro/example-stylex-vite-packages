import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";
// @ts-expect-error – untyped module
import stylex from "@stylexjs/postcss-plugin";

const babelConfig = {
  presets: ["@babel/preset-typescript"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
        },
      },
    ],
  ],
};

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
    tsconfigPaths(),
    babel({
			babelConfig,
			filter: /\.[jt]sx?$/u,
			loader: "jsx",
		}),
  ],
  css: {
    postcss: {
      plugins: [
        stylex({
          babelConfig,
          include: [
            "./app/**/*.{js,jsx,ts,tsx}",
            "./node_modules/@acme/*/build/**/*.{js,jsx,ts,tsx}",
          ],
          useCSSLayers: true,
        }),
        autoprefixer(),
      ],
    },
  },
});
