const webpack = require('webpack');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'all',               // 모든 호스트 허용
      '222.113.212.88:3141' // 외부 공인 IP 및 포트 추가
    ],
    // webSocketURL 설정 삭제
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false) // 필요시 true로 변경
      })
    ]
  },
  lintOnSave: false  // ESLint 빌드 오류 방지용 추가 (필요시 삭제)
}
