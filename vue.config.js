// resolve定义一个绝对路径获取函数
const path = require('path')
const bodyParser = require("body-parser");

function resolve(dir) {
  return path.join(__dirname, dir)
}

// commonjs nodejs
const port = 8080;
const title = '重症监护系统';

module.exports = {
    publicPath: '/',
    devServer: {
        port,
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            [process.env.VUE_APP_BASE_API]: {
                target: `http://192.168.13.106:8080/ICU6.1/ `,
                changeOrigin: true, // 要不要变更origin头
                pathRewrite: { // 地址重写：http://127.0.0.1:3000/user/login
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        },
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        // svg规则配置一下，排除icons目录
        config.module.rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        // 新增icons规则，设置svg-sprite-loader
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]'}) // 使用图标名称
            .end()
    }
}