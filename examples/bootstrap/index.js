'use strict';

var $ = require('jquery');

var ApiAuthFormView = require('../../dist/api-auth-forms');

new ApiAuthFormView({
  $el: $('#api-auth-form'),
  baseUrl: 'http://192.168.99.100:3000',
  customerId: 'patata',
  form: {
    formClass: 'form',
    formTag: 'form'
  },
  fields: {
    fieldsClass: 'form-control',
    fieldsWrapper: 'div',
    fieldsWrapperClass: 'form-row',
  },
  submitButton: {
    submitButtonClass: 'btn btn-primary'
  }
});
