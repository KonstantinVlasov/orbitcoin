module.exports = {
  srcDir: 'app',
  plugins: [
    '~plugins/components'
  ],
  css: [
    {src: '~assets/css/public.scss', lang: 'scss'}
  ],
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/
      })
      config.module.rules.push({
        test: /(.*node_modules)(.*svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'imgs/[name].[hash:7].[ext]'
        }
      })
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
    }
  },
  router: {
    middleware: ['auth'],
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active'
  },
  loading: {
    color: '#fbaa51',
    height: '4px'
  }
}
