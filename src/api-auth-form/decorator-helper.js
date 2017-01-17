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
