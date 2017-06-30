const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: [ './index.js'],
  output: {
    filename: 'app.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
  },
  context: resolve(__dirname, 'client', 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['ignore-loader'],
      },
    ],
  },
};
