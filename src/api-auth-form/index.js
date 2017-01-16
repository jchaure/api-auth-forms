'use strict'

var ApiAuth = require('./../api-auth');

var ApiAuthForm = function (options) {

  if (!options.customerId) {
    throw new Error('You must provide a customer Id');
  }

  this.apiAuth = new ApiAuth({
    customerId: options.customerId
  });

  this.config = this.apiAuth.config.get();

}

module.exports = ApiAuthForm;
