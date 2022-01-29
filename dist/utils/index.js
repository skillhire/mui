"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntheticEvent = exports.buildOptions = void 0;

var buildOptions = function buildOptions(items, key, value) {
  if (!items) return null;
  var options = [];
  var list = [];

  if (items.data) {
    list = items.data;
  } else {
    list = items;
  }

  list.forEach(function (item, idx) {
    var label = item[value];

    if (Array.isArray(value)) {
      label = value.map(function (v) {
        return eval("item.".concat(v));
      }).join(' - ');
    }

    return options.push({
      value: item[key],
      label: label
    });
  });
  return options;
};

exports.buildOptions = buildOptions;

var syntheticEvent = function syntheticEvent(value, name) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  var ev = {
    target: {
      value: value,
      name: name,
      type: type
    }
  };
  return ev;
};

exports.syntheticEvent = syntheticEvent;