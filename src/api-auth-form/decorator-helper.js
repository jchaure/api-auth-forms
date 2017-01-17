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
  if (!tagValue) {
    return tag;
  }
  if (allowedTags.indexOf(tagValue) > -1) {
    tag = tagValue;
  }
  return tag;
};
