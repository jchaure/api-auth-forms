'use strict';

module.exports.getClass = function (defaultClassValue, classValue) {
  if (!classValue) {
    return defaultClassValue;
  }
  if (typeof classValue === 'object' && classValue.join) {
    return classValue.join(' ');
  }
  return classValue;
};

module.exports.getTag = function (defaultTagValue, tagValue, allowedTags) {
  var tag = defaultTagValue;
  if (allowedTags.indexOf(tag) === -1) {
    tag = defaultTagValue;
  }
  return tag;
};
