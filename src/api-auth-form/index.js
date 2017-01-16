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
  var header = document.createElement('h2');
  header.setAttribute('class', 'provider--header');
  header.textContent = strategy.provider;

  $(this.id).append(header);

  var form = document.createElement('form');
  form.setAttribute('id', 'api-auth-form-' + strategy.provider);
  form.setAttribute('method', 'POST');

  this.createFormFields(form, strategy);

  $(this.id).append(form);
}

ApiAuthForm.prototype.createFormFields = function (form, strategy) {

  strategy.fields.forEach(function (field) {
    var fieldHolder = document.createElement('div');
    fieldHolder.setAttribute('class', 'form-group');

    $(form).append(fieldHolder);

    // @TODO: Create input by type
    // For now we assume all fields are strings (input type text)
    var textField = document.createElement('input');
    textField.setAttribute('type', 'text');
    textField.setAttribute('name', field.name);
    textField.setAttribute('placeholder', field.name);
    textField.setAttribute('value', field.value);

    var label = document.createElement('label');
    label.textContent = field.name;

    $(fieldHolder).append(label);
    $(fieldHolder).append(textField);
  });

  var submit = document.createElement('button');
  var text = document.createTextNode('Save');
  submit.setAttribute('class', 'btn');
  submit.appendChild(text);

  $(form).append(submit);
}

module.exports = ApiAuthForm;
