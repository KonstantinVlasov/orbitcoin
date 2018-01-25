module.exports = {
  head: {
    title: 'Orbitcoin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noodp' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      { name: 'description', hid: 'description', content: 'Orbit Credit Network' }
    ]
  },
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
