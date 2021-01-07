// next.config.js
const withCSS = require("@zeit/next-css");
// const withStylus = require("@zeit/next-stylus");
const isProd = process.env.NODE_ENV === 'production'

// if (typeof require !== "undefined") {
//   require.extensions[".css"] = (file) => {};
// }
module.exports = withCSS({
  devIndicators: {
    autoPrerender: false,
  },
  stats: {
      children: false,
  }
  // exportTrailingSlash: isProd,
  //  打包静态目录时开启，每个页面单独一个包里面生成index.html，为路由
  // assetPrefix: isProd ? 'http://www.goldaner.com' : './',
  // assetPrefix: isProd ? '127.0.0.1' : './',
  //资源项，设置以免404
});
// module.exports = withStylus(withCSS({
//   devIndicators: {
//     autoPrerender: false,
//   },
//   stats: {
//     children: false,
//   },
//   // exportTrailingSlash: isProd,
//   //  打包静态目录时开启，每个页面单独一个包里面生成index.html，为路由
//   assetPrefix: isProd ? 'http://www.goldaner.com' : './',
//   //资源项，设置以免404
// }));


