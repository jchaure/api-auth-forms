'use strict';

var decoratorHelper = require('./decorator-helper');

var DEFAULT_FORM_TAG = 'div';
var DEFAULT_FORM_CLASS = 'sso-form';

var ALLOWED_TAGS = ['div', 'form', 'p'];

function FormDecorator (options) {
  this.options = options;
  if (!this.options.form) {
    this.options.form = {};
  }
}

FormDecorator.prototype.getFormTag = function () {
  return decoratorHelper.getTag(DEFAULT_FORM_TAG, this.options.form.formTag, ALLOWED_TAGS);
};

FormDecorator.prototype.getFormClass = function () {
  return decoratorHelper.getClass(DEFAULT_FORM_CLASS, this.options.form.formClass);
};

module.exports = FormDecorator;
