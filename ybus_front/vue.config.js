const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  runtimeCompiler: true,
  pages: {
    default: {
      entry: 'src/mainPage/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    busInfo: {
      entry: 'src/busInfoPage/main.js',
      template: 'public/busInfo.html',
      filename: 'busInfo.html'
    }
  },
};