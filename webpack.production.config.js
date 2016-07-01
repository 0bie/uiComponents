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
                exclude: /node_modules/,
                include: path.join(__dirname, 'components'),
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'components'),
                loader: 'babel'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'components'),
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
            }
        ]
    },

    postcss: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-css-variables'),
        require('postcss-color-function'),
        require('postcss-custom-media')
    ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/components/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comporessor: {
              warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': "'production'"
            }
        }),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
}