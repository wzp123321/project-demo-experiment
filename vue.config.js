const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        // module:{
        //     rules:[{
        //         test: /\.less$/,
        //         loader: 'less-loader',
        //         options: {
        //             javascriptEnabled: true
        //         }
        //     }]
        // },
        plugins: [new webpackBundleAnalyzer()]
    }
}