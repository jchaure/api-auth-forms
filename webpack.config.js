var path = require('path');
var webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      warnings: false
    })
  ],
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api-auth-forms.js',
    libraryTarget: 'umd'
  },
  externals: {
    jquery: true
  }
}
