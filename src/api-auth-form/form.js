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
  this.init(options.strategy);
}

ApiAuthForm.prototype.init = function (strategy) {
  var $form = this.createForm(strategy);
  var $fields = this.createFields(strategy.fields);
  $form.append($fields);
  this.$form = $form;
  this.generateBindings($form, strategy);
  this.options.$el.append($form);
};

ApiAuthForm.prototype.createForm = function (strategy) {
  var $container = $('<div>');
  return $container;
}

ApiAuthForm.prototype.createFields = function (fields) {
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
  var serializedForm = {};
  this.$form.find('[data-js="submit-sso"]').each(function () {
    var $this = $(this);
    serializedForm[$this.attr('name')] = $this.val();
  });
  return serializedForm;
};

ApiAuthForm.prototype.generateBindings = function ($form, strategy) {
  var self = this;
  $form.find('[data-js="submit-sso"]').on('click', function (e) {
    e.preventDefault();
    var method = strategy.active ? 'put' : 'post';
    self.api.config[method](self.serializeForm());
  });
}

module.exports = ApiAuthForm;
