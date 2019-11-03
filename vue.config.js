const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before (app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          success: true,
          data: seller
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          success: true,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          success: true,
          data: ratings
        })
      })
      app.post('/api/post', (req, res) => {
        res.json({
          success: true,
          data: { name: '肖齐睿123', age: 2222222222222222 }
        })
      })
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))

    config.plugin('context') // 上下文替换插件
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  },
  publicPath: ''
}
