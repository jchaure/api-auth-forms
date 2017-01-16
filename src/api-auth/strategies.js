'use strict';

var $ = require('jquery');

var ApiAuthStrategies = function (options) {
  if (!options.customerId) {
    throw new Error('You must provide a customer Id to load strategies');
  }
  this.options = options;
};

ApiAuthStrategies.prototype.get = function () {
  return $.get(this.options.baseURL + '/strategies', {yip_id: this.options.customerId});
}

module.exports = ApiAuthStrategies;
