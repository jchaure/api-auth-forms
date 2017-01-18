'use strict';

var $ = require('jquery');

var decoratorHelper = require('./decorator-helper');

//TODO:: THIS SHOULD BE A FIELD
var DEFAULT_SUBMIT_BUTTON_WRAPPER = null;
var DEFAULT_SUBMIT_BUTTON_WRAPPER_CLASS = '';

var DEFAULT_SUBMIT_BUTTON_CLASS = 'sso-submit';

var ALLOWED_SUBMIT_BUTTON_WRAPPERS = ['div', 'p'];

function SubmitButton (options) {
  this.options = options;
  if (!this.options.submitButton) {
    this.options.submitButton = {};
  }
  this.init();
}

SubmitButton.prototype.init = function () {
  var $button = this.constructButton();
  var $buttonWrapper = this.constructButtonWrapper();
  var $buttonBlock;
  if ($buttonWrapper) {
    $buttonBlock = $buttonWrapper.append($button);
  } else {
    $buttonBlock = $button;
  }
  this.$button = $buttonBlock;
};

SubmitButton.prototype.constructButton = function () {
  return $('<button>')
    .attr('type', 'submit')
    .attr('data-js', 'sso-submit')
    .addClass(this.getButtonClass())
    .text('Submit');
};

SubmitButton.prototype.constructButtonWrapper = function () {
  var buttonWrapper = this.getButtonWrapperClass();
  var $buttonWrapper;
  if (!buttonWrapper) {
    return null;
  }
  $buttonWrapper = $('<' + buttonWrapper + '>')
    .addClass(this.getButtonWrapperClass());
  return $buttonWrapper;
};

SubmitButton.prototype.getDOM = function () {
  return this.$button;
};

SubmitButton.prototype.getButtonClass = function () {
  return decoratorHelper.getClass(DEFAULT_SUBMIT_BUTTON_CLASS, this.options.submitButton.submitButtonClass);
};

SubmitButton.prototype.getButtonWrapper = function () {
  return decoratorHelper.getTag(DEFAULT_SUBMIT_BUTTON_WRAPPER, this.options.submitButton.submitButtonWrapper, ALLOWED_SUBMIT_BUTTON_WRAPPERS);
}

SubmitButton.prototype.getButtonWrapperClass = function () {
  return decoratorHelper.getClass(DEFAULT_SUBMIT_BUTTON_WRAPPER_CLASS, this.options.submitButton.submitButtonWrapperClass);
};

module.exports = SubmitButton;
