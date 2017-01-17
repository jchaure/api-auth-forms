'use strict';

var $ = require('jquery');

var FormDecorator = require('./form-decorator');
var SubmitButton = require('./submit-button');
var Field = require('./field');

function ApiAuthForm (options, api) {
  if (!options.$el || !options.$el.length) {
    throw new Error('You must provide a root element');
  }
  if (!options.strategy) {
    throw new Error('You must provide a SSO strategy');
  }
  this.api = api;
  this.options = options;
  this.formDecorator = new FormDecorator(options);
  this.init();
}

ApiAuthForm.prototype.init = function () {
  var $form = this.createForm();
  var $fields = this.createFields();
  $form.append($fields);
  this.$form = $form;
  this.generateBindings();
  this.options.$el.append($form);
};

ApiAuthForm.prototype.createForm = function () {
  var $container = $('<' + this.formDecorator.getFormTag() + '>');
  $container.addClass(this.formDecorator.getFormClass());
  return $container;
}

ApiAuthForm.prototype.createFields = function () {
  var fieldsData = this.options.strategy.fields;
  var $fields = [];
  var submitButton = new SubmitButton(this.options);
  for (var i = 0, l = fieldsData.length; i < l; i++) {
    var field = new Field(this.options, fieldsData[i]);
    $fields.push(field.getDOM());
  }
  $fields.push(submitButton.getDOM());
  return $fields;
};

ApiAuthForm.prototype.serializeForm = function () {
  var serializedForm = {
    strategies: []
  };
  var strategy = {
    provider: this.options.strategy.provider,
    config: {}
  };
  this.$form.find('[data-js="sso-input"]').each(function () {
    var $this = $(this);
    strategy.config[$this.attr('name')] = $this.val();
  });
  serializedForm.strategies.push(strategy);
  return serializedForm;
};

ApiAuthForm.prototype.generateBindings = function () {
  var self = this;
  self.$form.find('[data-js="sso-submit"]').on('click', function (e) {
    e.preventDefault();
    var method = self.options.strategy.active ? 'put' : 'post';
    self.api.config[method](self.serializeForm()).then(function () {
      self.options.strategy.active = true;
    });
  });
}

module.exports = ApiAuthForm;
