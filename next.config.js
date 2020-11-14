// next.config.js
const withCSS = require('@zeit/next-css')
const withStylus = require('@zeit/next-stylus')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withStylus({
      webpack(config, ...args){
        config = withCSS().webpack(config, ...args);
        return config;
      },
      devIndicators: {
          autoPrerender: false,
      },
      assetPrefix: './'
      
})