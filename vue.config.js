const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

module.exports = {
  runtimeCompiler: true,

  pages: {
    default: {
      entry: 'src/mainPage/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    businfo: {
      entry: 'src/busInfoPage/main.js',
      template: 'public/businfo.html',
      filename: 'businfo.html'
    },
    admin: {
      entry: 'src/adminPage/main.js',
      template: 'public/admin.html',
      filename: 'admin.html'
    },
    board: {
      entry: 'src/boardPage/main.js',
      template: 'public/board.html',
      filename: 'board.html'
    },
    announcement: {
      entry: 'src/announcementPage/main.js',
      template: 'public/announcement.html',
      filename: 'announcement.html'
    }
  },

  devServer: {
  proxy: 'http://localhost:8081'
},

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    vuetify: {}
  }
};
