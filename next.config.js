// next.config.js
const withCSS = require("@zeit/next-css");
const withStylus = require("@zeit/next-stylus");
const isProd = process.env.NODE_ENV === 'production'

if (typeof require !== "undefined") {
  require.extensions[".css"] = (file) => {};
}

module.exports = withCSS(withStylus({
  devIndicators: {
    autoPrerender: false,
  },
  // assetPrefix: "./",
  exportTrailingSlash: isProd,
  //  打包静态目录时开启，每个页面单独一个包里面生成index.html，为路由
  assetPrefix: isProd ? 'http://188.131.143.196' : './',
  //资源项，设置以免404
}));
