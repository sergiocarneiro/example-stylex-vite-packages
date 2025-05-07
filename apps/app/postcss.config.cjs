module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        "./app/**/*.{ts,tsx}",
        "./node_modules/@acme/tokens/**/*.{js,jsx,ts,tsx}",
        "!./node_modules/@acme/tokens/node_modules/**/*.{js,jsx,ts,tsx}",
      ],
      useCSSLayers: true,
    },
    "autoprefixer": {},
  },
};
