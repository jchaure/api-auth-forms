'use strict';

var $ = require('jquery');

var ApiAuthConfig = function (options) {
  if (!options.customerId) {
    throw new Error('You must provide a customer id');
  }
  this.options = options;
};

ApiAuthConfig.prototype.get = function () {
  return $.get(this.options.baseURL + '/config', {yip_id: this.options.customerId});
}

ApiAuthConfig.prototype.post = function () {
  console.log('config post');
}

ApiAuthConfig.prototype.put = function () {
  console.log('config put');
}

module.exports = ApiAuthConfig;
