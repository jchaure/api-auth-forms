'use strict';

var $ = require('jquery');

var decoratorHelper = require('./decorator-helper');

var DEFAULT_FORM_TAG = 'div';
var DEFAULT_FORM_CLASS = 'sso-form';

var DEFAULT_TITLE_TAG = 'h3';
var DEFAULT_TITLE_CLASS = 'sso-form__title';

var ALLOWED_TITLE_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'p'];
var ALLOWED_TAGS = ['div', 'form', 'p'];

function FormDecorator (options) {
  this.options = options;
  if (!this.options.form) {
    this.options.form = {};
  }
}

FormDecorator.prototype.getTitle = function (title) {
  return $('<' +this.getFormTitleTag() + '>')
    .addClass(this.getFormTitleClass())
    .attr('hidden', !this.options.form.showTitle)
    .text(title);
};

FormDecorator.prototype.getFormTitleTag = function () {
  return decoratorHelper.getTag(DEFAULT_TITLE_TAG, this.options.form.titleTag, ALLOWED_TITLE_TAGS);
};

FormDecorator.prototype.getFormTitleClass = function () {
  return decoratorHelper.getClass(DEFAULT_TITLE_CLASS, this.options.form.titleClass);
};

FormDecorator.prototype.getFormTag = function () {
  return decoratorHelper.getTag(DEFAULT_FORM_TAG, this.options.form.formTag, ALLOWED_TAGS);
};

FormDecorator.prototype.getFormClass = function () {
  return decoratorHelper.getClass(DEFAULT_FORM_CLASS, this.options.form.formClass);
};

module.exports = FormDecorator;
