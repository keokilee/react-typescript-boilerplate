var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  output: {
    filename: 'app.js',
    path: './build'
  },
  entry: './app/index.tsx',
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      loaders: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    root: [path.resolve('./app')],
    extensions: ['', '.jsx', '.js', '.tsx']
  },
  debug: true,
  devtool: 'eval'
};
