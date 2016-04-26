module.exports = {
  entry: './src/index',
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]
  }
};
