// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

const externals = {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
    clipboard: 'ClipboardJS'
}
const cdn = {
    dev: {
        css: [],
        js: []
    },
    build: {
        css: [],
        js: [
            'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
            'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
            'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js',
            'https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js'
        ]
    }
}

module.exports = {
    outputDir: 'liufan',
    productionSourceMap: false,

    // SASS配置
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/style/app.scss";'
            }
        }
    },

    chainWebpack: config => {
        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule.include.add(resolve('src/icons')) // 正则匹配src/icons目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)

        // 别名配置
        config.resolve.alias
            .set('img', resolve('src/assets'))
            .set('design', resolve('src/assets/design'))
            .set('common', resolve('src/assets/common'))
            .set('home', resolve('src/assets/home'))

        // 压缩图片
        // config.module
        //     .rule('images')
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end()

        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
        // 移除 preload 插件
        config.plugins.delete('preload')

        // 注入cdn
        config.plugin('html').tap(args => {
            if (isProduction) args[0].cdn = cdn.build
            else args[0].cdn = cdn.dev
            return args
        })

        // 生产环境配置
        if (isProduction) {
            // 添加分析工具
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(
                        require('webpack-bundle-analyzer').BundleAnalyzerPlugin
                    )
                    .end()
            }
        }
    },

    configureWebpack: config => {
        // 生产环境配置
        if (isProduction) {
            // 用cdn方式引入
            config.externals = externals

            // gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )

            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        //生产环境自动删除console
                        compress: {
                            // warnings: false,
                            drop_debugger: true,
                            drop_console: true
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            )

            // 公共代码抽离
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            chunks: 'all',
                            test: /node_modules/,
                            name: 'vendor',
                            minChunks: 1,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 100
                        },
                        common: {
                            chunks: 'all',
                            test: /[\\/]src[\\/]js[\\/]/,
                            name: 'common',
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 60
                        },
                        styles: {
                            name: 'styles',
                            test: /\.(sa|sc|c)ss$/,
                            chunks: 'all',
                            enforce: true
                        },
                        runtimeChunk: {
                            name: 'manifest'
                        }
                    }
                }
            }
        }
    },

    publicPath: ''
}
