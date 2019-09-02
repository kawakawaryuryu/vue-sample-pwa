module.exports = {
  outputDir: 'docs',
  publicPath: '/vue-sample-pwa/',
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /https:\/\/qiita.com\/api\/.*/,
          handler: 'networkFirst',
          options: {
            cacheName: 'qiita-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
}
