'use strict';

var $ = require('jquery');

var decoratorHelper = require('./decorator-helper');

var DEFAULT_FIELDS_WRAPPER = null;
var DEFAULT_FIELDS_WRAPPER_CLASS = null;

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
  var $field = this.constructField();
  var $fieldWrapper = this.constructFieldsWrapper();
  var $fieldBlock;
  if ($fieldWrapper) {
    $fieldBlock = $fieldWrapper.append($field);
  } else {
    $fieldBlock = $field;
  }
  this.$field = $fieldBlock;
};

Field.prototype.constructField = function () {
  return $('<' + this.getFieldTag() +'>')
    .attr('type', this.getFieldType())
    .attr('name', this.getFieldName())
    .attr('data-js', 'sso-input')
    .addClass(this.getFieldClass())
    .val(this.getFieldValue());
};

Field.prototype.constructFieldsWrapper = function () {
  var fieldsWrapper = this.getFieldsWrapper();
  var $fieldsWrapper;
  if (!fieldsWrapper) {
    return null;
  }
  $fieldsWrapper = $('<' + fieldsWrapper + '>')
    .addClass(this.getFieldsWrapperClass());
  return $fieldsWrapper;
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

Field.prototype.getFieldsWrapper = function () {
  return decoratorHelper.getTag(DEFAULT_FIELDS_WRAPPER, this.options.fields.fieldsWrapper, ALLOWED_FIELDS_WRAPPERS);
}

Field.prototype.getFieldsWrapperClass = function () {
  return decoratorHelper.getClass(DEFAULT_FIELDS_WRAPPER_CLASS, this.options.fields.fieldsWrapperClass);
};

Field.prototype.getFieldClass = function () {
  return decoratorHelper.getClass(DEFAULT_FIELDS_CLASS, this.options.fields.fieldsClass);
};

module.exports = Field;
