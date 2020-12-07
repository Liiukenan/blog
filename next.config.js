// next.config.js
const withCSS = require("@zeit/next-css");
const withStylus = require("@zeit/next-stylus");

if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

module.exports = withCSS(withStylus({
  devIndicators: {
    autoPrerender: false,
  },
  assetPrefix: "./",
}));
