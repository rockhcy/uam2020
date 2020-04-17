'use strict'
// eslint-disable-next-line no-undef,no-unused-vars
const path = require('path')
// eslint-disable-next-line no-undef
module.exports = {
  devServer: {
    proxy: {
      '/lq': {
        target: 'http://139.217.231.59:8182/',
        changeOrigin: true,
        pathRewrite: { '^/lq': '' }
      },
      '/mock': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewrite: { '^/mock': '/mock' }
      }
    }
  },
  // eslint-disable-next-line no-undef
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}
