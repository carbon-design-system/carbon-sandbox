const express = require('express');
const path = require('path');
const compression = require('compression');

// dev middleware

const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const fs = middleware.fileSystem;

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'public', 'index.html'));
  });
};

// prod

const addProdMiddlewares = (app, options) => {
  const publicPath = options.publicPath || '/';
  const outputPath =
    options.outputPath || path.resolve(process.cwd(), 'public');
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'index.html'))
  );
};

module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../webpack.config.dev');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
