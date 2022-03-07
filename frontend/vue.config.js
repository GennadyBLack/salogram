const path = require('path')
const vueSrc = './src'
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        Components: path.resolve(__dirname, './src/сomponents'),
        API: path.resolve(__dirname, './src/api'),
        Mixins: path.resolve(__dirname, './src/mixins'),
        Composable: path.resolve(__dirname, './src/composables'),
      },
    },
  },

  devServer: {
    port: 4200,
  },
}
