'use strict';

var $ = require('jquery');

var decoratorHelper = require('./decorator-helper');

var DEFAULT_FIELDS_WRAPPER = null;
var DEFAULT_FIELDS_CLASS = 'sso-field';

var ALLOWED_FIELDS_WRAPPERS = ['div', 'p'];

function Field (options, fieldData) {
  this.options = options;
  if (!this.options.fields) {
    this.options.fields = {};
  }
  this.fieldData = fieldData;
  this.init();
}

Field.prototype.init = function () {
  this.$field = $('<' + this.getFieldTag() +'>')
    .attr('type', this.getFieldType())
    .attr('name', this.getFieldName())
    .attr('data-js', 'sso-input')
    .addClass(this.getFieldClass())
    .val(this.getFieldValue());
};

Field.prototype.getDOM = function () {
  return this.$field;
};

Field.prototype.getFieldTag = function () {
  return 'input';
};

Field.prototype.getFieldType = function () {
  return 'text';
};

Field.prototype.getFieldValue = function () {
  return this.fieldData.value;
}

Field.prototype.getFieldName = function () {
  return this.fieldData.name;
}

Field.prototype.getFieldWrapper = function () {
  return decoratorHelper.getTag(DEFAULT_FIELDS_WRAPPER, this.options.fields.fieldsWrapper, ALLOWED_FIELDS_WRAPPERS);
}

Field.prototype.getFieldClass = function () {
  return decoratorHelper.getClass(DEFAULT_FIELDS_CLASS, this.options.fields.fieldClass);
};

module.exports = Field;
