const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const baseURl = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  // lintOnSave: false,
 configureWebpack: {
  resolve: {
   alias: {
    '@': resolve('src')
   }
  }
 },
}