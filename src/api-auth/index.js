'use strict';

var ApiConfig = require('./config');
var ApiStrategies = require('./strategies');

var ApiAuth = function (options) {
  if (!options.baseUrl) {
    throw new Error('You must provide a service endpoint');
  }
  if (!options.customerId) {
    throw new Error('You must provide a customer id to load configs');
  }

  this.config = new ApiConfig(options);
  this.strategies = new ApiStrategies(options);
}

module.exports = ApiAuth;
