var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/components/index.js",
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
            }
        ]
    },

    postcss: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-css-variables'),
        require('postcss-custom-media')
    ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/components/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
}