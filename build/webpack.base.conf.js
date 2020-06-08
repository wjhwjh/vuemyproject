'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

//console.log('俺也不知道是啥--', config);

// 返回一个文件
function resolve(dir) {
    //console.log('输出一个值', __dirname);
    // __dirname 是一个内置的参数，指的是当前目录文件
    return path.join(__dirname, '..', dir)
}

// const createLintingRule = () => ({
//     test: /\.(js|vue)$/,
//     loader: 'eslint-loader',
//     enforce: 'pre',
//     include: [resolve('src'), resolve('test')],
//     options: {
//       formatter: require('eslint-friendly-formatter'),
//       emitWarning: !config.dev.showEslintErrorsInOverlay
//     }
// })

module.exports = {
    context: path.resolve(__dirname, '../'),
    // 入口文件，构建内部依赖图的开始
    // 可以配置多个入口文件
    entry: {
        app: './src/main.js'
    },
    // 在哪里输出所创建最后文件，根据依赖图创建的文件
    output: {
        // 在生产环境中最后输出文件的目录路径
        path: config.build.assetsRoot,
        // webpack运行时，整合每个模块时会把chunk id 映射到这里,最后每个模块打包后的文件
        filename: '[name].js',
        //publicPath属性判断是否是生产环境，如果是生产环境就使用生产环境build中的路径,
        //否则就使用开发环境的路径
        // 
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            /*...(config.dev.useEslint ? [createLintingRule()] : []),*/
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}