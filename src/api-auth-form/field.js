'use strict';

var $ = require('jquery');

var decoratorHelper = require('./decorator-helper');

var DEFAULT_FIELDS_WRAPPER = null;
var DEFAULT_FIELDS_WRAPPER_CLASS = '';

var DEFAULT_FIELDS_CLASS = 'sso-field';

var DEFAULT_LABEL_CLASS = 'sso-label';

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
  var $label = this.constructLabel();
  var $field = this.constructField();
  var $fieldWrapper = this.constructFieldsWrapper();
  var $fieldBlock;
  if ($fieldWrapper) {
    $fieldWrapper.append($label);
    $fieldWrapper.append($field);
    $fieldBlock = $fieldWrapper;
  } else {
    $fieldBlock = $label.add($field);
  }
  this.$field = $fieldBlock;
};

Field.prototype.constructField = function () {
  return $('<' + this.getFieldTag() +'>')
    .attr('type', this.getFieldType())
    .attr('name', this.getFieldName())
    .attr('data-js', 'sso-field')
    .addClass(this.getFieldsClass())
    .val(this.getFieldValue());
};

Field.prototype.constructLabel = function () {
  return $('<label>')
    .addClass(this.getLabelsClass())
    .attr('hidden', !this.options.fields.showLabels)
    .text(this.getFieldName());
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
};

Field.prototype.getFieldName = function () {
  return this.fieldData.name;
};

Field.prototype.getFieldsWrapper = function () {
  return decoratorHelper.getTag(DEFAULT_FIELDS_WRAPPER, this.options.fields.fieldsWrapper, ALLOWED_FIELDS_WRAPPERS);
};

Field.prototype.getFieldsWrapperClass = function () {
  return decoratorHelper.getClass(DEFAULT_FIELDS_WRAPPER_CLASS, this.options.fields.fieldsWrapperClass);
};

Field.prototype.getLabelsClass = function () {
  return decoratorHelper.getClass(DEFAULT_LABEL_CLASS, this.options.fields.labelsClass);
};

Field.prototype.getFieldsClass = function () {
  return decoratorHelper.getClass(DEFAULT_FIELDS_CLASS, this.options.fields.fieldsClass);
};

module.exports = Field;
