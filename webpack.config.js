var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api-auth-forms.js',
    libraryTarget: 'umd'
  }
}
