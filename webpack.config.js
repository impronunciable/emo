
var path = require('path');

var sharedConfig = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ },
      { loader: 'json-loader', test: /\.json$/ }
    ]
  },
  resolve: {
    root: [ path.resolve('./src') ]
  }
};

module.exports = [
  sharedConfig,
  Object.assign({}, sharedConfig, {
    target: 'node',
    entry: path.join(__dirname, 'server.js'),
    output: {
      path: __dirname,
      filename: 'server-build.js'
    }
  })
];
