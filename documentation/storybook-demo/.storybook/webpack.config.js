const webpack = require('webpack')
const path = require('path')

const includes = [
  path.resolve(__dirname, '../src')
]

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
        includes
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader',
        includes
      }
    ]
  }

}

