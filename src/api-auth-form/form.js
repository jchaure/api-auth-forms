'use strict';

var $ = require('jquery');

function getInputType (field) {
  return 'text';
}

function getInputValue (field) {
  return field.value;
}

function getInputName (field) {
  return field.name;
}

function ApiAuthForm (options, api) {
  if (!options.$el || !options.$el.length) {
    throw new Error('You must provide a root element');
  }
  if (!options.strategy) {
    throw new Error('You must provide a SSO strategy');
  }
  this.api = api;
  this.options = options;
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
  var $container = $('<div>');
  return $container;
}

ApiAuthForm.prototype.createFields = function () {
  var fields = this.options.strategy.fields;
  var $fields = []
  var $button = $('<button>')
    .attr('type', 'submit')
    .attr('data-js', 'submit-sso')
    .text('Submit');
  for (var i = 0, l = fields.length; i < l; i++) {
    var field = fields[i];
    var $field = $('<input>')
      .attr('type', getInputType(field))
      .attr('name', getInputName(field))
      .attr('data-js', 'input-sso')
      .val(getInputValue(field));
    $fields.push($field);
  }
  $fields.push($button);
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
  this.$form.find('[data-js="input-sso"]').each(function () {
    var $this = $(this);
    strategy.config[$this.attr('name')] = $this.val();
  });
  serializedForm.strategies.push(strategy);
  return serializedForm;
};

ApiAuthForm.prototype.generateBindings = function () {
  var self = this;
  self.$form.find('[data-js="submit-sso"]').on('click', function (e) {
    e.preventDefault();
    var method = self.options.strategy.active ? 'put' : 'post';
    self.api.config[method](self.serializeForm()).then(function () {
      self.options.strategy.active = true;
    });
  });
}

module.exports = ApiAuthForm;
