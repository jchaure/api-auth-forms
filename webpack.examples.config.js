'use strict';

var path = require('path');
var webpack = require('webpack');

var basePath = path.join(__dirname, 'examples');

module.exports = {
  entry: {
    'plain': path.join(basePath, 'plain', 'index')
  },
  output: {
    path: path.join(__dirname, '/examples'),
    filename: '[name]/bundle.js'
  }
};
