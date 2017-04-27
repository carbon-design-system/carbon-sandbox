const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './index.js',
  ],
  output: {
    filename: 'app.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
  },
  context: resolve(__dirname, 'client', 'src'),
  devtool: 'cheap-module-eval-source-map',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
