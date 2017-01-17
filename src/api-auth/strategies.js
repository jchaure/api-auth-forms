'use strict';

var $ = require('jquery');

var ApiAuthStrategies = function (options) {
  if (!options.baseUrl) {
    throw new Error('You must provide a service endpoint');
  }
  if (!options.customerId) {
    throw new Error('You must provide a customer id to load strategies');
  }
  this.options = options;
};

ApiAuthStrategies.prototype.get = function () {
  return $.get(this.options.baseUrl + '/strategies', {customer: this.options.customerId});
}

module.exports = ApiAuthStrategies;
