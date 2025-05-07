const path = require("path");

module.exports = {
  presets: [
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        aliases: {
          "@acme/tokens/*": [path.join(__dirname, "../../packages/tokens/build/*")],
        },
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
