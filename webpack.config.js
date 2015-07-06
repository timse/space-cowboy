'use strict';
/* jshint node: true */

let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: {
        "index": path.join(__dirname, "src","index.js")
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: "[name].js",
        library: 'space-cowboy',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        modulesDirectories: [
            'src'
        ]
    },
    plugins: [
    ]
};
