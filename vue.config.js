// let proxyObj = {};
//
// proxyObj['/']={
//   //websocket
//   ws: false,
//   target: 'http://localhost:8084',
//   changeOrigin: true,
//   //不重写请求地址
//   pathRewrite: {
//     '^/': ''
//   }
// };
//
// module.exports={
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     proxy: proxyObj
//   }
// };