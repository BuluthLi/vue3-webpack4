const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {

    publicPath: "./", // 默认'/'，部署应用包时的基本 URL

    outputDir: 'dist', // 'dist', 生产环境构建文件的目录

    assetsDir: "static", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    filenameHashing: true,
    /**
     * 优化项目配置
     * 
     * 注意configureWebpack 和chainWebpack  的区别，configureWebpack是复写，chainWebpack是修改，修改一项配置建议使用configureWebpack,多项使用chainWebpack
     * 目前使用configureWebpack
     * 
    */
    configureWebpack: config => {

        if (IS_PROD) {

            //代码分割
            config.optimization = {

                splitChunks: {

                    cacheGroups: {
                        common: {
                            name: "chunk-common",
                            chunks: "initial",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vendors: {
                            name: "chunk-vendors",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "initial",
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },

                        ui: {
                            name: "chunk-ui",
                            test: /[\\/]node_modules[\\/]vant[\\/]/,
                            chunks: "all",
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        echarts: {
                            name: "chunk-echarts",
                            test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
                            chunks: "all",
                            priority: 4,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }

                }

            };
            //gzip
            const plugins = [];
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.js$|\.html$|\.css/,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
            config.plugins = [...config.plugins, ...plugins];

        }
    },

    //多页面配置
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    // },

    devServer: {
        open: false, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理端口
        https: false,
        hotOnly: false, // 热更新
        proxy: {
            '/api': {
                target: 'http://192.168.0.81',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'    //代理的路径
                },
            }
        }
    }
};