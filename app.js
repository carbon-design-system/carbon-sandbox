const express = require('express');
const compression = require('compression');
const session = require('express-session');
const resolve = require('path').resolve;
const setup = require('./middlewares/frontendMiddleware');
const bodyParser = require('body-parser');
const apiRoutes = require('./api');

const port = process.env.PORT || 8080;
const app = express();

// gzip
app.use(compression());

app.use(
  session({
    secret: 'carbon',
    cookie: { maxAge: 60000 },
  })
);

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API
app.use('/api', apiRoutes);

// static
app.use(express.static('./public'));

// front-end
setup(app, {
  outputPath: resolve(process.cwd(), 'public'),
  publicPath: '/',
});

// start the server
app.listen(port, () => {
  console.log(`live at http://localhost:${port}`);
});
