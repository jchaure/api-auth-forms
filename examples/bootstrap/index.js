'use strict';

var $ = require('jquery');

var ApiAuthFormView = require('../../dist/api-auth-forms');

new ApiAuthFormView({
  $el: $('#api-auth-form'),
  baseUrl: 'http://192.168.99.100:3000',
  customerId: 'patata',
  form: {
    formClass: 'form',
    formTag: 'form',
    showTitle: true,
    titleClass: 'h2',
    titleTag: 'h2'
  },
  fields: {
    fieldsClass: 'form-control',
    fieldsWrapper: 'div',
    fieldsWrapperClass: 'form-group',
    showLabels: true,
    labelsClass: ''
  },
  submitButton: {
    submitButtonClass: 'btn btn-primary pull-right',
    submitButtonWrapper: 'div',
    submitButtonWrapperClass: 'form-group clearfix',
  }
});
