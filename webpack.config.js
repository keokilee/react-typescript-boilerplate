var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './app/index.tsx'],
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      loaders: ['babel', 'ts-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  output: {
    filename: 'app.js',
    path: './build',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('./app')],
    extensions: ['', '.jsx', '.js', '.tsx']
  }
};
