var webpack = require('webpack');

module.exports = {
    entry: './appindex.js',
    output: {
        filename: './app.js'
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            }
        ]
    }
};
