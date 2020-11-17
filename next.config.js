// next.config.js
const withStylus = require("@zeit/next-stylus");
const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

module.exports = withStylus({
  webpack(config, ...args) {
    config = withCSS().webpack(config, ...args);
    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
  assetPrefix: "./",
});
