const webpack = require('webpack');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all', // 모든 호스트를 허용
    client: {
      webSocketURL: 'ws://175.206.28.35:8080/ws' // 실제 외부 IP 주소로 대체
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false) // 필요한 경우 true로 설정
      })
    ]
  }
}
