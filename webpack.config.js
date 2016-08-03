var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/components/index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'components'),
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'components'),
                loader: 'babel',
                query: {
                    'presets': ['es2015', 'stage-0', 'react'],
                    "plugins": [
                        "transform-react-jsx",
                        ["react-transform", {
                            "transforms": [{
                                "transform": "react-transform-hmr",
                                "imports": ["react"],
                                "locals": ["module"]
                            }]
                        }]
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'components'),
                loaders:[
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'
                ]
            },
            {
                test: /\.jpg|\.jpeg|\.png|\.svg$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'assets/'),
                loader: 'url-loader?limit=10000&name=assets/[name].[ext]'
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
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}