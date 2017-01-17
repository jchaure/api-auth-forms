'use strict';

var decoratorHelper = require('./decorator-helper');

var DEFAULT_FIELD_WRAPPER = null;
var DEFAULT_FIELD_CLASS = 'sso-field';

function FieldsDecorator (options) {
  this.options = options;
  if (!this.options.fields) {
    this.options.fields = {};
  }
};

FieldsDecorator.prototype.getFieldWrapper = function () {

};

FieldsDecorator.prototype.getFieldClass = function () {
  return decoratorHelper.getClass(DEFAULT_FIELD_CLASS, this.options.fields.fieldClass);
};

module.exports = FieldsDecorator;
