var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + "/build/",
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin([__dirname + "/build/"], {
            root: __dirname,
            verbose: true,
            exclude: ['index.html']
        }),
        new CopyWebpackPlugin([
            {
                from:'src/css'
            }
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['env', 'stage-0']
                }
            }
        ]
    }
};