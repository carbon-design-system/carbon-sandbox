const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './index.js'],
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
      {
        test: /(\/|\\)feature-flags\.js$/,
        loader: 'string-replace-loader',
        options: {
          multiple: Object.keys(replaceTable).map(key => ({
            search: `exports\.${key}\\s*=\\s*false`,
            replace: `exports.${key} = ${replaceTable[key]}`,
            flags: 'i',
          })),
        },
      },
    ],
  },
};
