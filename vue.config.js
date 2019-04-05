module.exports={
  baseUrl:'/',//根路径
  outputDir:'dist',//构建输出目录
  assetsDir:'assets',//静态资源目录（js,css,img,fonts）
  lintOnSave:false,//是否开启eslint保存检测，有效值：true || false || 'error'
  devServer: {
    open: true,//是否自动打开浏览器
    host: 'localhost',//默认主机
    port: 9999,//配置端口号
    https: false ,//是否配置https
    hotOnly: false,//webpack已经配置了
    //配置跨域
    proxy: {
      '/api':{
        target:'http//localhost:5000/api/',//跨域的域名
        ws: true,//是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      }
    }
  }
}