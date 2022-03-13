const path = require('path')
const vueSrc = './src'
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        Composable: path.resolve(__dirname, './src/composables'),
      },
    },
  },

  devServer: {
    port: 4200,
  },
}
