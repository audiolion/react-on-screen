/* eslint-disable */
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === "development";

const config = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'dist/ReactOnScreen.js',
    libraryTarget: 'umd',
    library: 'ReactOnScreen'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["env", "react", "stage-0"],
          sourceMap: true
        }
      }
    ]
  },
  externals: ['react', 'prop-types', 'lodash.throttle'],

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: isDev
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
      disable : true,
      sourceMap: true
    })
  ]
};

module.exports = config;
