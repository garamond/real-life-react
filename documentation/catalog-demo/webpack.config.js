var resolveHere = require('path').resolve.bind(null, __dirname);
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: resolveHere('src'),
        loader: 'babel'
      },
      {
        test: /\.md$/,
        include: resolveHere('src'),
        loaders: ['catalog/lib/loader', 'raw']
      }
    ],
    noParse: /\.min\.js$/
  }
};
