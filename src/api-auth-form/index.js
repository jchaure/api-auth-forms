'use strict'

var $ = require('jquery');

var ApiAuth = require('./../api-auth');

var ApiAuthForm = function (options) {

  if (!options.customerId) {
    throw new Error('You must provide a customer Id');
  }

  var self = this;

  this.id = '#api-auth-form';

  this.apiAuth = new ApiAuth({
    customerId: options.customerId
  });

  this.apiAuth.strategies.get().done(function (strategies) {
      strategies.forEach(function (strategy) {
        self.createProviderForm(strategy);
      })
  });

}

ApiAuthForm.prototype.createProviderForm = function (strategy) {
  $(this.id).append('<h2>'+ strategy.provider +'</h2>');

  var form = document.createElement('form');

  form.setAttribute('id', 'api-auth-form-' + strategy.provider);
  form.setAttribute('method', 'POST');

  this.createProviderFields(form, strategy);

  var submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Save');

  $(this.id).append(form);
  $(form).append(submit);

}

ApiAuthForm.prototype.createProviderFields = function (form, strategy) {

  strategy.fields.forEach(function (field) {
    switch (field.type) {
      case 'String':
        var textField = document.createElement('input');

        textField.setAttribute('type', 'text');
        textField.setAttribute('name', field.name);
        textField.setAttribute('value', field.value);

        $(form).append(textField);
      break;
    }
  });

}

module.exports = ApiAuthForm;
