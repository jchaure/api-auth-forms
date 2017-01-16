'use strict';

var $ = require('jquery');

var ApiAuthConfig = function (options) {
  if (!options.customerId) {
    throw new Error('You must provide a customer id to load configs');
  }
  this.options = options;
};

ApiAuthConfig.prototype.get = function () {
  return $.get(this.options.baseURL + '/config', {yip_id: this.options.customerId});
}

ApiAuthConfig.prototype.post = function (options) {
  return $.post(this.options.baseURL + '/config', options);
}

ApiAuthConfig.prototype.put = function () {
  throw new Error('Not implemented');
}

module.exports = ApiAuthConfig;
