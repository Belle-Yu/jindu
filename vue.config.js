module.exports = {
    devServer: {
        open: true, // 自动打开页面到浏览器的配置
        proxy: {    // 配置代理
            '/api': {
                target: 'http://1.116.64.64:5004/api2/', // 后端接口目标地址--根路径
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': '' // 路径重写
                }
            }
        }
    }
}