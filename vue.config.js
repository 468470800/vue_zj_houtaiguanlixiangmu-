module.exports = {
    publicPath: "./",//设置路径
    devServer: {
        port: 8989,//设置端口号
        https: false,//不开启https协议
        host: "localhost",
        // open:true,//设置自动打开浏览器
        proxy: {//设置解决跨域问题 http://locahost:8888 /dev-api/test.json
            [process.env.VUE_APP_BASE_URL]:{
                target: "process.env.VUE_APP_SERLVICE_URL",//代理地址
                changeOrigin: true,//设置我们的代理地址
                pathRewrite: {
                   ["^" + process.env.VUE_APP_BASE_API]:""
                }
            }
        }
    },
    lintOnSave: false,//关闭eslint
    productionSourceMap: false//打包时不生成.Map文件
};