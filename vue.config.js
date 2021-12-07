const isDev = process.env.VUE_APP_BUILD === 'development'

module.exports = {
  css: {
    sourceMap: isDev,
    // sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/_function.scss";@import "~@/assets/scss/_mixin.scss";',
      },
    },
  },
}
