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
      assetPrefix: './'
      
})