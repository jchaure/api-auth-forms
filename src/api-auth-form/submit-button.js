'use strict';

var $ = require('jquery');

var decoratorHelper = require('./decorator-helper');

var DEFAULT_SUBMIT_BUTTON_CLASS = 'sso-submit';

function SubmitButton (options) {
  this.options = options;
  if (!this.options.submitButton) {
    this.options.submitButton = {};
  }
  this.$button = this.constructButton();
}

SubmitButton.prototype.constructButton = function () {
  return $('<button>')
    .attr('type', 'submit')
    .attr('data-js', 'sso-submit')
    .addClass(this.getSubmitButtonClass())
    .text('Submit');
};

SubmitButton.prototype.getDOM = function () {
  return this.$button;
};

SubmitButton.prototype.getSubmitButtonClass = function () {
  return decoratorHelper.getClass(DEFAULT_SUBMIT_BUTTON_CLASS, this.options.submitButton.submitButtonClass, true);
};

module.exports = SubmitButton;
