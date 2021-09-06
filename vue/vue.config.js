module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          ChangeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      },
    }
  
  
  }