const webpack = require('webpack');
const { resolve } = require('path');

const replaceTable = {
  breakingChangesX: true,
  componentsX: true,
  grid: true,
};

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
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
      {
        test: /(\/|\\)FeatureFlags\.js$/,
        loader: 'string-replace-loader',
        options: {
          multiple: Object.keys(replaceTable).map(key => ({
            search: `export\\s*var\\s*${key}\\s*=\\s*false`,
            replace: `export var ${key} = ${replaceTable[key]}`,
            flags: 'i',
          })),
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
