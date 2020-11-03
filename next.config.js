// next.config.js
const withStylus = require('@zeit/next-stylus')
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
      webpack(config, ...args){
        config = withStylus().webpack(config, ...args);
        return config;
      },
      devIndicators: {
          autoPrerender: false,
      },
      exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // '/about': { page: '/about' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
})