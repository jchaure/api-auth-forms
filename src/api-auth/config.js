'use strict';

var $ = require('jquery');

var ApiAuthConfig = function (options) {
  if (!options.baseUrl) {
    throw new Error('You must provide a service endpoint');
  }
  if (!options.customerId) {
    throw new Error('You must provide a customer id to load configs');
  }
  this.options = options;
};

ApiAuthConfig.prototype.get = function () {
  return $.get(this.options.baseUrl + '/config', {customer: this.options.customerId});
}

ApiAuthConfig.prototype.post = function (data) {
  return $.ajax({
    type: 'POST',
    method: 'POST',
    url: this.options.baseUrl + '/config',
    data: data,
    headers: {
      customer: this.options.customerId,
    }
  });
}

ApiAuthConfig.prototype.put = function (data) {
  return $.ajax({
    type: 'PUT',
    method: 'PUT',
    url: this.options.baseUrl + '/config',
    data: data,
    headers: {
      customer: this.options.customerId,
    }
  });
}

module.exports = ApiAuthConfig;
