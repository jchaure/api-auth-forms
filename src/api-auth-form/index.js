'use strict'

var ApiAuth = require('./../api-auth');

var ApiAuthForm = function () {

  var apiAuth = new ApiAuth({
    customerId: 'patata'
  });

  var config = apiAuth.config.get();

  console.log('api-auth-form', config);

}

module.exports = ApiAuthForm;
