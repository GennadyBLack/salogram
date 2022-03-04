module.exports = {
  devServer: {
    port: 4200,
  },

  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true,
        },
      },
    },
  },
}
