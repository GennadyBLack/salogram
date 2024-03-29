const path = require('path')
const vueSrc = './src'
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
      alias: {
        Composable: path.resolve(__dirname, './src/composables'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./public/style/_vars.scss";`,
      },
    },
  },
  devServer: {
    port: 4200,
  },
}
