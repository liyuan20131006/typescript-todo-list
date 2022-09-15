
'use strict'

const name = 'Vue3+TypeScript TodoList' // page title
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const postSrc = 'http://39.99.208.52:8087/'
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: name,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  productionSourceMap: false,
  // devServer: {
  //   port: port,
  //   open: false,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       target: postSrc,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         ['^' + process.env.VUE_APP_BASE_API]: ''
  //       }
  //     }
  //   }
  //   // before: require('./mock/mock-server.js')
  // }
}