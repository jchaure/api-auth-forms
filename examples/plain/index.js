'use strict';

var $ = require('jquery');

var ApiAuthView = require('../../dist/api-auth-forms');

new ApiAuthView({
  $el: $('#api-auth-form'),
  baseUrl: 'http://192.168.99.100:3000',
  customerId: 'patata',
  form: {
    formClass: ['sso', 'cool-cool-cool'],
    formTag: 'form'
  }
});
